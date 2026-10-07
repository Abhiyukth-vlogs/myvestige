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
                    background: 'linear-gradient(135deg, #0a192f, #059669)',
                    boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
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
