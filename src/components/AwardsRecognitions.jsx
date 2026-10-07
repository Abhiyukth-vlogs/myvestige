import React, { useState, useEffect } from 'react';

export const AwardsRecognitions = () => {
  // 100% Real Scraped Data from live https://cms.myvestige.com/api/awards-recognition?populate[award_recognition][populate]=*
  const allAwards = [
    {
      id: 2,
      title: 'Vestige ET now award',
      imageUrl: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_01_9f3831e0ad.png',
      alt: 'Vestige ET now award'
    },
    {
      id: 3,
      title: 'Global 100 awards',
      imageUrl: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_03_9492423bd8.png',
      alt: 'Global 100 awards'
    },
    {
      id: 4,
      title: "India's most trusted direct selling brand",
      imageUrl: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_04_254e738307.png',
      alt: "India's most trusted direct selling brand"
    },
    {
      id: 1,
      title: 'National Best Employer Brand 2021',
      imageUrl: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_02_75a724239c.png',
      alt: 'National Best Employer Brand 2021'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allAwards.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= allAwards.length - 3 ? 0 : prev + 1));
  };

  // 3 visible awards at a time
  const visibleAwards = [
    allAwards[currentIndex % allAwards.length],
    allAwards[(currentIndex + 1) % allAwards.length],
    allAwards[(currentIndex + 2) % allAwards.length]
  ];

  return (
    <>
      {/* ====================================================================
          1. Awards & Recognition Main Section
          - Background: Dark with vertical glowing golden lines/bars (award-bg.png)
          - Title: Exact "Awards & Recognition" centered
          - Carousel: Exact 3 awards with golden laurels
          - Controls: Circular golden navigation arrows (#ddb96b)
          ==================================================================== */}
      <section 
        className="award-section relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
        id="awards-section"
        style={{
          backgroundImage: 'url("https://www.myvestige.com/images/theme/award-bg.png")',
          backgroundColor: '#0a0d18',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Title */}
          <h3 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide font-['Oswald'] mb-12 drop-shadow-md">
            Awards &amp; Recognition
          </h3>

          {/* Carousel Container */}
          <div className="relative flex items-center justify-center">
            
            {/* Left Circular Navigation Arrow (#ddb96b) */}
            <button
              onClick={handlePrev}
              className="absolute -left-2 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#ddb96b] hover:bg-[#e6c77d] active:scale-95 text-black shadow-lg flex items-center justify-center transition-all cursor-pointer"
              title="Previous Award"
              aria-label="Previous Award"
            >
              <span className="text-xl font-black leading-none">&#10094;</span>
            </button>

            {/* Awards Track (3 Items) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-5xl px-8">
              {visibleAwards.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="award flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-105"
                >
                  {/* Golden Laurel Wreath Logo */}
                  <div className="w-full flex items-center justify-center h-48 md:h-56 p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_10px_20px_rgba(255,213,123,0.15)]"
                      loading="lazy"
                    />
                  </div>

                  {/* Golden Award Title Under Logo */}
                  <h5 className="award-name text-[#ffd57b] font-bold text-base md:text-lg mt-4 max-w-xs leading-snug drop-shadow-sm font-sans">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>

            {/* Right Circular Navigation Arrow (#ddb96b) */}
            <button
              onClick={handleNext}
              className="absolute -right-2 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#ddb96b] hover:bg-[#e6c77d] active:scale-95 text-black shadow-lg flex items-center justify-center transition-all cursor-pointer"
              title="Next Award"
              aria-label="Next Award"
            >
              <span className="text-xl font-black leading-none">&#10095;</span>
            </button>

          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Floating Element 1: Right Side "Visit Vestige Old Website"
          ==================================================================== */}
      <a
        href="https://global.myvestige.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="visitweb fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#28a745] hover:bg-[#218838] text-white text-xs font-bold px-3 py-2.5 rounded-l-xl shadow-2xl leading-tight text-center transition-transform hover:-translate-x-1"
        style={{
          boxShadow: '-3px 4px 15px rgba(0, 0, 0, 0.35)',
          lineHeight: '1.25'
        }}
        title="Open Legacy myvestige.com Portal"
      >
        Visit Vestige <br /> Old Website
      </a>

      {/* ====================================================================
          3. Floating Element 2: Bottom-Left "Scroll to Top" Blue Circular Button
          ==================================================================== */}
      <button
        onClick={scrollToTop}
        className={`fixed left-6 bottom-6 z-50 w-11 h-11 rounded-full bg-[#005baa] hover:bg-[#004785] active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 4px 16px rgba(0, 91, 170, 0.45)'
        }}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <span className="text-sm font-extrabold">&#9650;</span>
      </button>

      {/* ====================================================================
          4. Floating Element 3: Bottom-Right Victor Chatbot Launcher
          - Notification Badge: "1" in red circle
          - Speech Pill: "Need Help? Ask VICTOR"
          - Circular Avatar Button
          ==================================================================== */}
      <div className="fixed right-6 bottom-6 z-50 flex items-center gap-3 select-none">
        {/* Speech Bubble Pill */}
        <div 
          onClick={() => {
            const el = document.getElementById('victor-dialog');
            if (el) el.classList.toggle('active');
          }}
          className="bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full shadow-xl border border-slate-200 cursor-pointer hover:shadow-2xl transition-all flex items-center gap-1.5"
        >
          <span>Need Help? Ask VICTOR</span>
          <span className="text-[10px] text-slate-400 hover:text-slate-600">&times;</span>
        </div>

        {/* Circular Victor Avatar Button with Badge (1) */}
        <div className="relative">
          <button
            id="ask-victor-trigger-btn-react"
            onClick={() => {
              const el = document.getElementById('victor-dialog');
              if (el) el.classList.toggle('active');
            }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 p-0.5 shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer overflow-visible flex items-center justify-center"
            title="Chat with Victor - Vestige Digital Assistant"
            aria-label="Ask Victor Digital Assistant"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsapqs_JCwH0tK5WO4ACNnjcBWN58rEG0-sREHFr3CGw3knHliAw"
              alt="Victor Assistant"
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </button>

          {/* Red Notification Badge with Number 1 */}
          <span 
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-md border-2 border-white pointer-events-none animate-pulse"
          >
            1
          </span>
        </div>
      </div>
    </>
  );
};
