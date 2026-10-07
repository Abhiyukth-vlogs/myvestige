import React from 'react';

export const AwardsRecognitions = () => {
  const awards = [
    {
      id: 1,
      title: 'DSN Global 100 Ranking',
      authority: 'Direct Selling News (USA)',
      badge: 'World Top Direct Selling',
      icon: '🏆',
      description: 'Ranked consistently among the world’s Top 40 Direct Selling Companies, reflecting extraordinary growth, trust, and distributor satisfaction across international borders.'
    },
    {
      id: 2,
      title: 'Great Place to Work®',
      authority: 'Great Place to Work Institute',
      badge: 'Certified Workplace Culture',
      icon: '⭐',
      description: 'Certified for five consecutive years for fostering high trust, gender equity, employee well-being, and meritocratic corporate leadership.'
    },
    {
      id: 3,
      title: 'Best Employer Brand Award',
      authority: 'World HRD Congress',
      badge: 'HR Excellence Honor',
      icon: '🎖️',
      description: 'Honored with the National Best Employer Brand Award for exemplary talent cultivation, career growth pathways, and workplace ethics.'
    },
    {
      id: 4,
      title: 'Best Wellness Company',
      authority: 'ABP News Healthcare Awards',
      badge: 'Excellence in Wellness',
      icon: '🌿',
      description: 'Recognized as India’s leading healthcare & direct selling brand for pioneering Cellular Nourishment Therapy (CNT) wellness formulations.'
    },
    {
      id: 5,
      title: 'ISO 9001:2015 Certified',
      authority: 'International Standards Organization',
      badge: 'Quality Assurance Standard',
      icon: '🛡️',
      description: 'Certified standard in corporate operations, logistics, product storage, customer care, and distributor business management.'
    },
    {
      id: 6,
      title: 'GMP Certified Manufacturing',
      authority: 'Good Manufacturing Practices',
      badge: 'Pharmaceutical Benchmark',
      icon: '⚙️',
      description: 'State-of-the-art manufacturing facility in Baddi (Himachal Pradesh) engineered with sterile cleanrooms and automated packaging.'
    },
    {
      id: 7,
      title: 'Halal India Certification',
      authority: 'Halal India Authority',
      badge: 'Purity & Global Benchmark',
      icon: '✨',
      description: '100% Halal certified product ingredients ensuring highest purity, hygienic processing, and ethical sourcing for Indian and global consumers.'
    },
    {
      id: 8,
      title: 'FSSAI Approved Formulations',
      authority: 'Food Safety & Standards Authority',
      badge: 'Nutraceutical Compliance',
      icon: '🌱',
      description: 'Compliant nutrient profiles and dietary supplements meeting the stringent national quality benchmarks set by FSSAI.'
    }
  ];

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200" id="awards-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Excellence &amp; Accreditations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-slate-900 font-['Oswald'] mt-3">
            Awards &amp; Recognitions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm mt-2">
            Vestige is recognized by global bodies, industry associations, and national auditing institutes for unparalleled quality and ethical leadership.
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-3 rounded"></div>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Oswald'] uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {item.authority}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-700">
                <span>Verified Compliance</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
