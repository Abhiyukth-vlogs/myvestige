import React from 'react';
import { brands } from '../data/brands.js';

export const Brands = () => {
  return (
    <section className="section" id="brands">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PROPRIETARY TRADEMARKS</span>
          <h2 className="section-title">The 13 Flagship Brands</h2>
          <p className="section-desc">
            Vestige's diversified portfolio of trusted household trademarks serving millions of loyal customers daily.
          </p>
        </div>

        <div className="brands-grid" id="brands-grid">
          {brands.map((b) => (
            <div key={b.id} className="brand-card antigravity-card-3d">
              <div
                className="brand-logo-circle antigravity-float"
                style={{
                  background: 'linear-gradient(135deg, #0a192f, #1e293b)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={`https://vestdata.s3.ap-southeast-1.amazonaws.com/brands/${b.name.replace(/\s+/g, '')}.png`}
                  alt={b.name}
                  style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerText = b.name.substring(0, 2).toUpperCase();
                    e.target.parentElement.style.color = '#34d399';
                  }}
                />
              </div>
              <h4 className="brand-card-name">{b.name}</h4>
              <p className="brand-card-category">{b.category}</p>
              <p className="brand-card-desc">{b.description}</p>
              <div
                style={{
                  marginTop: '12px',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--surface-border)',
                  fontSize: '0.75rem',
                  color: '#059669',
                  fontWeight: 700
                }}
              >
                {b.productsCount} Products
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
