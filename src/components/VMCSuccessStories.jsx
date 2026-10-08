import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUCCESS_STORIES } from '../data/successStories.js';

// Interactive 3D Anti-Gravity Card with Physics Tilt
const AntiGravityStoryCard = ({ leader, index, onOpenModal }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'translateZ(12px) scale(1.02)' : 'translateZ(0px) scale(1)'}`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className="relative flex flex-col h-full bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
    >
      {/* Top Banner Accent with Glare Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-amber-500/5 pointer-events-none" />

      {/* Real Live Photo from Vestige S3 */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 aspect-[4/3] flex items-center justify-center p-3">
        <img
          src={leader.photoUrl}
          alt={leader.name}
          className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://www.myvestige.com/VMVCM-unit.png';
          }}
        />
        
        {/* Floating ID Badge */}
        <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-sm text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-md">
          ID: {leader.directorId}
        </div>

        {/* Club Tag */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
          <span>👑</span> VMC Member
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-slate-50/50">
        <div>
          {/* Member Name */}
          <h4 className="font-['Oswald'] text-lg font-bold text-slate-900 uppercase tracking-wide line-clamp-1 group-hover:text-blue-700 transition-colors">
            {leader.name}
          </h4>
          
          <div className="flex items-center gap-2 mt-1 mb-3">
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Ambassador / Leader
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              #{leader.id}
            </span>
          </div>

          {/* Testimonial Quote */}
          <p className="text-xs text-slate-600 italic line-clamp-3 leading-relaxed mb-4 text-left border-l-2 border-amber-400/70 pl-2.5">
            "{leader.message}"
          </p>
        </div>

        {/* Card Footer with Read More CTA */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Vestige Achiever
          </span>
          <button
            type="button"
            onClick={() => onOpenModal(leader)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
          >
            <span>Read Story</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const VMCSuccessStories = () => {
  const [stories] = useState(SUCCESS_STORIES);
  const [activeStory, setActiveStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const CARDS_PER_PAGE = 4;

  // Filtered stories based on real names or ID
  const filteredStories = useMemo(() => {
    if (!searchQuery.trim()) return stories;
    const q = searchQuery.toLowerCase();
    return stories.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.directorId.includes(q) ||
        s.message.toLowerCase().includes(q)
    );
  }, [stories, searchQuery]);

  const maxIndex = Math.max(0, filteredStories.length - CARDS_PER_PAGE);

  // Auto-play interval for carousel
  useEffect(() => {
    if (!isAutoPlay || viewMode !== 'carousel' || filteredStories.length <= CARDS_PER_PAGE) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, viewMode, maxIndex, filteredStories.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : Math.min(prev + 1, maxIndex)));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : Math.max(0, prev - 1)));
  };

  const openStoryModal = (story) => {
    setActiveStory(story);
    setIsModalOpen(true);
  };

  const closeStoryModal = () => {
    setIsModalOpen(false);
    setActiveStory(null);
  };

  const displayedStories =
    viewMode === 'carousel'
      ? filteredStories.slice(currentIndex, currentIndex + CARDS_PER_PAGE)
      : filteredStories;

  return (
    <section
      className="suces success-stories py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 border-t border-slate-200 relative overflow-hidden"
      id="vmc-stories-section"
    >
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================================
             1. VMC Official Brand Header & Title
             ==================================================================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 pb-6 border-b border-slate-200/80 gap-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2 flex-wrap">
              <img
                src="https://www.myvestige.com/VMVCM-unit.png"
                alt="Vestige Millionaire Club"
                className="vmcm-logo h-12 md:h-14 object-contain inline-block"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/logo.png';
                }}
              />
              <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {stories.length} Official VMC Leaders
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
              Meet the direct selling pioneers of the <strong>Vestige Millionaire Club</strong> who achieved lifelong financial freedom and inspired millions worldwide.
            </p>
          </div>

          {/* Controls: Search, View Mode Toggle & Carousel Controls */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Real-Time Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search leader by name or ID..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 sm:w-56"
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                🔍
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'carousel' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Carousel Mode"
              >
                Carousel
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Grid Hall of Fame"
              >
                All 47 Leaders
              </button>
            </div>

            {/* Carousel Navigation Buttons */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
                  title="Previous Leaders"
                >
                  &#10094;
                </button>
                <button
                  type="button"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer ${
                    isAutoPlay ? 'bg-amber-100 border-amber-400 text-amber-800' : 'bg-white text-slate-400'
                  }`}
                  title={isAutoPlay ? 'Pause Auto-Scroll' : 'Play Auto-Scroll'}
                >
                  {isAutoPlay ? '⏸' : '▶'}
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
                  title="Next Leaders"
                >
                  &#10095;
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Pagination Status Indicator */}
        {viewMode === 'carousel' && filteredStories.length > 0 && (
          <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
            <span>
              Showing Leaders <strong>{currentIndex + 1}</strong> - <strong>{Math.min(currentIndex + CARDS_PER_PAGE, filteredStories.length)}</strong> of <strong>{filteredStories.length}</strong>
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.ceil(filteredStories.length / CARDS_PER_PAGE) }).map((_, pageIdx) => {
                const isActive = Math.floor(currentIndex / CARDS_PER_PAGE) === pageIdx;
                return (
                  <button
                    key={pageIdx}
                    onClick={() => setCurrentIndex(pageIdx * CARDS_PER_PAGE)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Page ${pageIdx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================================
             2. 3D Floating Anti-Gravity Cards Grid / Carousel
             ==================================================================== */}
        {filteredStories.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No VMC leaders found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === 'carousel'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {displayedStories.map((leader, idx) => (
                <AntiGravityStoryCard
                  key={leader.id}
                  leader={leader}
                  index={idx}
                  onOpenModal={openStoryModal}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Footer Statistics Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-2xl">
              🏆
            </div>
            <div>
              <h5 className="font-['Oswald'] text-base md:text-lg font-bold uppercase tracking-wider text-amber-400">
                Vestige Millionaire Club (VMC)
              </h5>
              <p className="text-xs text-slate-300 max-w-xl">
                The most prestigious milestone in direct selling. Every member above has transformed their lives and built sustainable generational wealth.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="font-['Oswald'] text-2xl font-bold text-emerald-400">47+</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Top Achievers</div>
            </div>
            <div className="h-8 w-[1px] bg-slate-700" />
            <div>
              <div className="font-['Oswald'] text-2xl font-bold text-amber-400">100%</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Authentic Data</div>
            </div>
            <div className="h-8 w-[1px] bg-slate-700" />
            <div>
              <div className="font-['Oswald'] text-2xl font-bold text-blue-400">18+ Yrs</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Legacy of Wellth</div>
            </div>
          </div>
        </div>

      </div>

      {/* ====================================================================
           3. Modal for Full Testimonial (Zero Truncation)
           ==================================================================== */}
      <AnimatePresence>
        {isModalOpen && activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={closeStoryModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeStoryModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer shadow-sm z-10"
              >
                &times;
              </button>

              {/* Leader Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-slate-100">
                <div className="relative">
                  <img
                    src={activeStory.photoUrl}
                    alt={activeStory.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-amber-400 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/logo.png';
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full shadow">
                    👑 VMC
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-['Oswald'] text-2xl font-bold text-slate-900 uppercase tracking-wide">
                    {activeStory.name}
                  </h3>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 mb-2 flex-wrap">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Distributor ID: {activeStory.directorId}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      VMC Achiever
                    </span>
                  </div>

                  <p className="text-xs text-slate-500">
                    Official testimonial on record at <strong>myvestige.com</strong>
                  </p>
                </div>
              </div>

              {/* Complete, Verbatim Testimonial Body */}
              <div className="text-slate-700 leading-relaxed max-h-72 overflow-y-auto pr-3 space-y-3 text-sm border-l-4 border-amber-400 pl-4 py-1 bg-slate-50/60 rounded-r-xl">
                <p className="italic font-normal text-slate-800">
                  "{activeStory.message}"
                </p>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs text-slate-500">
                  Wish You Wellth™ • Vestige Marketing
                </span>
                <button
                  type="button"
                  onClick={closeStoryModal}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VMCSuccessStories;
