import React from 'react';

export const VMCSuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'S. P. Bharill',
      rank: 'Double Universal Crown Director',
      badge: 'VMC Hall of Fame',
      car: 'Luxury Car Achiever',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      quote: 'Vestige transformed my understanding of network marketing. Spreading wellth through authentic wellness products empowered me to build an empire of financially independent leaders across India.',
      pv: '15,000,000+ PV Network'
    },
    {
      id: 2,
      name: 'Siddharth Singh',
      rank: 'Double Universal Crown Director',
      badge: 'Global Top Earner',
      car: 'Multi-Vehicle Dream Achiever',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      quote: 'Starting with simple aspirations, the Vestige marketing plan provided the consistency and leverage to achieve the highest honors in Asian direct selling history. Trust the system and empower your team.',
      pv: '25,000,000+ PV Network'
    },
    {
      id: 3,
      name: 'Vivek Kumar Saxena',
      rank: 'Universal Crown Director',
      badge: 'Car Club Icon',
      car: 'Mercedes-Benz Achiever',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      quote: 'The Vestige system offers true economic freedom. With relentless discipline and team empowerment, our dreams of multi-generational security became a living reality for thousands of families.',
      pv: '8,500,000+ PV Network'
    },
    {
      id: 4,
      name: 'Santosh Yadav',
      rank: 'Crown Director',
      badge: 'Youth Leadership Pioneer',
      car: 'Luxury SUV Achiever',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      quote: 'From humble regional roots to leading a nationwide distributor network. Vestige proves that anyone with belief and dedication can conquer heights and achieve lifelong prosperity.',
      pv: '6,200,000+ PV Network'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200" id="vmc-stories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Vestige Millionaire Club (VMC)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-slate-900 font-['Oswald'] mt-3">
            Inspiring Journeys to Wealth &amp; Wellness
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm mt-2">
            Meet the direct selling pioneers who transformed their lives through the Vestige 10-fold marketing plan, earning financial independence and dream cars.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Leader Avatar Header */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900 to-slate-900 overflow-hidden flex items-center justify-center">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-amber-400 shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                  {leader.badge}
                </span>
              </div>

              {/* Leader Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Oswald'] uppercase tracking-wide">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 mt-0.5">
                    {leader.rank}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-2 border border-emerald-200">
                    <span>🚗</span> {leader.car}
                  </div>
                  
                  <p className="text-xs text-slate-600 italic mt-4 leading-relaxed line-clamp-4">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {leader.pv}
                  </span>
                  <a 
                    href="#car-achievers" 
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 font-['Oswald'] uppercase tracking-wider"
                  >
                    View Story <span>➔</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-['Oswald'] uppercase tracking-wide">
              Ready to write your own success story?
            </h4>
            <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl">
              Vestige offers a proven 10-fold income plan with zero joining fees under direct selling guidelines.
            </p>
          </div>
          <a 
            href="#leadership-series" 
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg uppercase tracking-wider font-['Oswald'] text-sm shadow transition-colors whitespace-nowrap"
          >
            Explore Business Plan
          </a>
        </div>
      </div>
    </section>
  );
};
