import React from 'react';
import { useRegion } from '../context/RegionContext.jsx';

export const Hero = ({ onAddToCart }) => {
  const { formatPrice } = useRegion();

  return (
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

          {/* Live Official Facts */}
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

        {/* Hero Card: Core Product with 3D Anti-Gravity Tilt */}
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
  );
};
