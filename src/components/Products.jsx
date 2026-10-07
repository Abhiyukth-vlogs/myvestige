import React, { useState } from 'react';
import { products } from '../data/products.js';
import { useRegion } from '../context/RegionContext.jsx';

export const Products = ({ onAddToCart, onQuickView }) => {
  const { formatPrice } = useRegion();
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState(['vestige-flax-oil', 'ayusante-respocare']);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(w => w !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => {
        if (activeFilter === 'best-sellers') return p.tag === 'Best Seller';
        if (activeFilter === 'health-supplements') return p.category === 'health-supplements';
        if (activeFilter === 'personal-care') return p.category === 'personal-care';
        if (activeFilter === 'ayusante') return p.category === 'ayusante';
        if (activeFilter === 'agri-products') return p.category === 'agri-products';
        return true;
      });

  return (
    <section
      className="section"
      id="products"
      style={{
        background: '#f8fafc',
        borderTop: '1px solid var(--surface-border)',
        borderBottom: '1px solid var(--surface-border)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">OUR PRODUCTS</span>
          <h2 className="section-title">New Arrivals &amp; Best Sellers</h2>
          <p className="section-desc">
            Discover our best selling health supplements and latest certified formulations.
          </p>
        </div>

        {/* Filter Tabs matching exact categories */}
        <div className="filter-tabs-row">
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Products
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'best-sellers' ? 'active' : ''}`}
            onClick={() => setActiveFilter('best-sellers')}
          >
            Best Sellers
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'health-supplements' ? 'active' : ''}`}
            onClick={() => setActiveFilter('health-supplements')}
          >
            Health Supplements
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'personal-care' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal-care')}
          >
            Personal Care
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'ayusante' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ayusante')}
          >
            Ayusante
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeFilter === 'agri-products' ? 'active' : ''}`}
            onClick={() => setActiveFilter('agri-products')}
          >
            Agri Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="product-grid" id="products-grid">
          {filtered.map((p) => {
            const isWishlisted = wishlist.includes(p.id);
            return (
              <div key={p.id} className="product-card antigravity-card-3d">
                <div className="product-media-wrap">
                  <div className="product-badge-overlay">
                    <span className={`badge-tag ${p.badgeClass}`}>{p.tag}</span>
                    <span className="badge-pv antigravity-pulse">★ {p.pv} PV</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(p.id)}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    title="Add to Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={isWishlisted ? '#e11d48' : 'none'}
                      stroke={isWishlisted ? '#e11d48' : '#64748b'}
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <img src={p.image} alt={p.title} className="product-img" loading="lazy" />
                  <button
                    type="button"
                    className="quick-view-overlay-btn"
                    onClick={() => onQuickView(p)}
                  >
                    Quick View
                  </button>
                </div>

                <div className="product-info-wrap">
                  <span className="product-brand">{p.brand}</span>
                  <h4 className="product-title" title={p.title}>{p.title}</h4>
                  <div className="product-rating-row">
                    <span className="rating-stars">★★★★★</span>
                    <span>{p.rating} ({p.reviews})</span>
                    <span style={{ marginLeft: 'auto', color: '#059669', fontWeight: 600 }}>{p.quantity}</span>
                  </div>
                  <div className="product-metrics-row">
                    <div className="product-price-block">
                      <span className="dp-price">{formatPrice(p.dp)}</span>
                      <span className="mrp-price">MRP {formatPrice(p.mrp)}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.76rem', color: '#059669', fontWeight: 700, background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>
                        Save {Math.round(((p.mrp - p.dp) / p.mrp) * 100)}%
                      </span>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>BV: {p.bv}</div>
                    </div>
                  </div>
                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="btn btn-primary add-to-cart-btn"
                      onClick={() => onAddToCart(p.id)}
                      style={{ flex: 1, padding: '8px 12px', fontSize: '0.86rem' }}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onQuickView(p)}
                      style={{ padding: '8px 12px', fontSize: '0.86rem' }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
