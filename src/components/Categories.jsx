import React from 'react';
import { categories } from '../data/categories.js';

export const Categories = () => {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CATEGORIES</span>
          <h2 className="section-title">Shop By Categories</h2>
          <p className="section-desc">
            Explore Vestige's comprehensive range of health supplements, Ayurvedic formulations, personal care, and agriculture products.
          </p>
        </div>

        <div className="categories-grid" id="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card antigravity-card-3d" data-cat-id={cat.id}>
              <div>
                <div
                  className="cat-icon-wrap antigravity-float"
                  style={{
                    background: 'transparent',
                    boxShadow: 'none',
                    padding: 0
                  }}
                >
                  <img src={cat.icon} alt={cat.name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-tagline">{cat.tagline}</p>
              </div>
              <div className="cat-footer">
                <span>{cat.count}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700, color: '#059669' }}>
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
