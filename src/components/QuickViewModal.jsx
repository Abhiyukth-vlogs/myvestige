import React from 'react';
import { useRegion } from '../context/RegionContext.jsx';

export const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const { formatPrice } = useRegion();
  if (!product) return null;

  return (
    <div id="quick-view-modal" className="modal-overlay active" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" id="quick-view-close" className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'center' }}>
          <div>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '12px' }}
              onError={(e) => {
                e.currentTarget.src = '/assets/featured-product.jpeg';
              }}
            />
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>
              {product.brand} • {product.quantity}
            </span>
            <h3 style={{ fontSize: '1.5rem', margin: '4px 0 10px', color: 'var(--brand-navy-950)' }}>
              {product.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
              {product.description}
            </p>

            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', marginBottom: '18px', border: '1px solid var(--surface-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Distributor Price (DP):</span>
                <strong style={{ fontSize: '1.2rem', color: '#059669' }}>{formatPrice(product.dp)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Maximum Retail Price (MRP):</span>
                <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: '#94a3b8' }}>{formatPrice(product.mrp)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Point Value (PV):</span>
                <span style={{ fontWeight: 700, color: 'var(--brand-navy-900)' }}>★ {product.pv} PV ({product.bv} BV)</span>
              </div>
            </div>

            <div style={{ marginBottom: '18px', fontSize: '0.84rem', color: '#475569' }}>
              <strong>Dosage:</strong> {product.dosage}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
              onClick={() => {
                onAddToCart(product.id);
                onClose();
              }}
            >
              Add to Shopping Cart (+{product.pv} PV)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
