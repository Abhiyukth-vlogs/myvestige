import React, { useState, useEffect } from 'react';
import { useRegion } from '../context/RegionContext.jsx';

export const Hero = ({ onAddToCart }) => {
  const { formatPrice } = useRegion();

  const banners = [
    {
      id: 1,
      image: '/assets/hero-banner-1.jpeg',
      title: 'MOM All Seasons Nail Lacquer'
    },
    {
      id: 2,
      image: '/assets/hero-banner-2.png',
      title: 'MOM True Define Eyebrow Definer Pencil'
    },
    {
      id: 3,
      image: 'https://vestdata.s3.ap-southeast-1.amazonaws.com/banners/indiabanners/Special-Buy-More-Get-More-Offer-Web-Banner.jpg',
      fallback: '/assets/hero-banner-1.jpeg',
      title: 'Special Buy More Get More Offer'
    },
    {
      id: 4,
      image: 'https://vestdata.s3.ap-southeast-1.amazonaws.com/banners/indiabanners/Vestige-22-Anniversary-Web-banners_Main-Website.jpg',
      fallback: '/assets/hero-banner-2.png',
      title: 'Vestige 22nd Anniversary'
    },
    {
      id: 5,
      image: 'https://vestdata.s3.ap-southeast-1.amazonaws.com/banners/indiabanners/veg-calcium.jpg',
      fallback: '/assets/hero-banner-1.jpeg',
      title: 'Vestige Veg Calcium'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <>
      {/* ====================================================================
          1. Exact Hero Banner Slider (1:1 with myvestige.com)
          ==================================================================== */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="relative w-full overflow-hidden" style={{ minHeight: '380px', maxHeight: '560px' }}>
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((b, idx) => (
              <div key={b.id} className="w-full flex-shrink-0 relative flex items-center justify-center bg-slate-900">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-auto object-cover max-h-[560px]"
                  onError={(e) => {
                    if (b.fallback) e.currentTarget.src = b.fallback;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Vertical/Horizontal Slide Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {banners.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all rounded-full ${
                  i === currentSlide ? 'w-6 h-2 bg-emerald-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 7-Action Scheme Ribbon (1:1 from live myvestige.com) */}
        <div className="bg-slate-900/90 backdrop-blur-md border-t border-slate-800 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider">
            <a
              href="https://www.myvestige.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>📱</span> Vestige Website
            </a>
            <a
              href="#reach-out-section"
              className="px-3.5 py-1.5 rounded bg-red-700 hover:bg-red-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>⏰</span> Grievance Redressal
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.vestigeshopping"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded bg-blue-700 hover:bg-blue-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>📱</span> Mobile App
            </a>
            <a
              href="#schedule"
              className="px-3.5 py-1.5 rounded bg-blue-700 hover:bg-blue-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>⏰</span> Schedule
            </a>
            <a
              href="#products"
              className="px-3.5 py-1.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>🛒</span> Online Shopping
            </a>
            <a
              href="https://vimeo.com/795209725/bd9d0cecbd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded bg-red-700 hover:bg-red-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>🏛️</span> Bank Pan
            </a>
            <a
              href="#reach-out-section"
              className="px-3.5 py-1.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>🚚</span> Courier Partner
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Prime Brand Value Proposition & 3D Anti-Gravity Card
          ==================================================================== */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span>Top Leading Direct Selling Company</span>
              <span>•</span>
              <span>Wish You Wellth</span>
            </div>
            <h1 className="hero-title">
              World Class Health &amp; <br />
              <span className="hero-title-gradient">Wellness Products</span>
            </h1>
            <p className="hero-subtitle">
              Vestige Marketing Pvt. Ltd., an ISO 9001:2015 certified direct selling company, provides world-class health, wellness, and personal care products with rewarding business opportunities.
            </p>
            <div className="hero-cta-group">
              <a href="#products" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Explore Products
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#opportunity" className="btn btn-gold" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Join As Distributor
              </a>
            </div>

            {/* Live Facts */}
            <div className="hero-stats-row">
              <div>
                <div className="hero-stat-number">20+</div>
                <div className="hero-stat-label">Years of Trust</div>
              </div>
              <div>
                <div className="hero-stat-number">30M+</div>
                <div className="hero-stat-label">Distributors Globally</div>
              </div>
              <div>
                <div className="hero-stat-number">300+</div>
                <div className="hero-stat-label">Products Range</div>
              </div>
              <div>
                <div className="hero-stat-number">#38</div>
                <div className="hero-stat-label">Global 100 Rank</div>
              </div>
            </div>
          </div>

          {/* Core Product with 3D Anti-Gravity Tilt */}
          <div className="hero-card-showcase">
            <div className="hero-card-featured antigravity-card-3d">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge-tag bg-emerald-600 text-white">Featured Product</span>
                <span className="badge-pv">★ 41.67 PV</span>
              </div>
              <img
                src="/assets/featured-product.jpeg"
                alt="Vestige Prime Krill Oil"
                className="hero-product-img"
                onError={(e) => {
                  e.currentTarget.src = '/assets/asset 2.jpeg';
                }}
              />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase' }}>
                VESTIGE PRIME
              </div>
              <h3 style={{ fontSize: '1.3rem', margin: '4px 0 8px', color: 'white' }}>
                Krill Oil
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px', lineHeight: 1.5 }}>
                Antarctic Krill Oil with Astaxanthin. Sourced from Antarctic waters, providing phospholipid-bound Omega-3 fatty acids for cardiovascular and cellular wellness.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <div>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                    {formatPrice(1250)}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textDecoration: 'line-through', marginLeft: '6px' }}>
                    {formatPrice(1435)}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onAddToCart('vestige-krill-oil')}
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
