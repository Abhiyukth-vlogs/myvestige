import React, { useState, useEffect } from 'react';
import { SUCCESS_STORIES } from '../data/successStories.js';

export const VMCSuccessStories = () => {
  const [stories, setStories] = useState(SUCCESS_STORIES);
  const [activeStory, setActiveStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Attempt live API fetch with fallback to 100% authentic scraped data
  useEffect(() => {
    const fetchLiveStories = async () => {
      try {
        const response = await fetch('https://apiv2.veston.in/api/shopApi/vestige/api/getdistsuccessstorylist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ CountryId: 1, LevelCode: 'L' })
        });
        if (response.ok) {
          const json = await response.json();
          if (json && json.data && json.data.length > 0) {
            // Priority ordering to include KANCHAN DEVI and RAMESH PUNHANI
            const kanchan = json.data.find(d => d.DirectorName?.includes('KANCHAN'));
            const ramesh = json.data.find(d => d.DirectorName?.includes('RAMESH'));
            const others = json.data.filter(d => !d.DirectorName?.includes('KANCHAN') && !d.DirectorName?.includes('RAMESH')).slice(0, 10);
            const combined = [kanchan, ramesh, ...others].filter(Boolean);

            const formatted = combined.map(s => ({
              id: s.ID,
              directorId: s.DirectorID,
              name: s.DirectorName,
              photoUrl: `https://vestdata.s3.ap-southeast-1.amazonaws.com/images/successstorydistributorphoto/${s.DirectorPhoto}`,
              message: s.DirectorMessage,
              messageExcerpt: s.DirectorMessage2 || (s.DirectorMessage ? s.DirectorMessage.slice(0, 90) + '...' : '')
            }));
            setStories(formatted);
          }
        }
      } catch (err) {
        console.warn('Using bundled authentic success stories:', err.message);
      }
    };

    fetchLiveStories();
  }, []);

  const openStoryModal = (story) => {
    setActiveStory(story);
    setIsModalOpen(true);
  };

  const closeStoryModal = () => {
    setIsModalOpen(false);
    setActiveStory(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 4 >= stories.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, stories.length - 4) : prev - 1));
  };

  return (
    <section className="suces success-stories py-14 bg-slate-50 border-t border-slate-200" id="vmc-stories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VMC Official Brand Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="mb-2">
              <img 
                src="https://www.myvestige.com/VMVCM-unit.png" 
                alt="Vestige Millionaire Club" 
                className="vmcm-logo h-12 md:h-14 object-contain inline-block"
              />
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl">
              Meet the inspiring direct selling pioneers of the Vestige Millionaire Club who turned dedication into lifelong wealth and freedom.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-sm transition-all"
              title="Previous Stories"
            >
              &#10094;
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-sm transition-all"
              title="Next Stories"
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Stories Grid / Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.slice(currentIndex, currentIndex + 4).map((leader) => (
            <div 
              key={leader.id} 
              className="text-decoration-none text-inherit group"
            >
              <div className="card card-product bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                
                {/* Real Live Photo from Vestige S3 */}
                <div className="relative overflow-hidden bg-slate-100 aspect-square flex items-center justify-center p-3">
                  <img 
                    src={leader.photoUrl} 
                    alt={leader.name} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-sm"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://www.myvestige.com/VMVCM-unit.png';
                    }}
                  />
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    ID: {leader.directorId}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body text-center p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="successinner-name mb-2">
                      <p className="font-['Oswald'] text-base md:text-lg font-bold text-slate-900 uppercase tracking-wide">
                        {leader.name}
                      </p>
                    </div>

                    <div className="text-xs text-slate-600 line-clamp-3 italic leading-relaxed text-left mb-4">
                      "{leader.message}"
                    </div>
                  </div>

                  <div className="read-more pt-3 border-t border-slate-100">
                    <button 
                      onClick={() => openStoryModal(leader)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider inline-flex items-center gap-1 group-hover:underline cursor-pointer"
                    >
                      Read More &rarr;
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Official Modal for Full Testimonial */}
      {isModalOpen && activeStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={closeStoryModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeStoryModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
              <img 
                src={activeStory.photoUrl} 
                alt={activeStory.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow"
              />
              <div>
                <h4 className="font-['Oswald'] text-xl font-bold text-slate-900 uppercase tracking-wide">
                  {activeStory.name}
                </h4>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Distributor ID: {activeStory.directorId}
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-700 leading-relaxed max-h-72 overflow-y-auto pr-2 space-y-3">
              <p className="italic">
                "{activeStory.message}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button 
                onClick={closeStoryModal}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
