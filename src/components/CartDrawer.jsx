import React from 'react';
import { useRegion } from '../context/RegionContext.jsx';

export const CartDrawer = ({ isOpen, onClose, cart, onUpdateQty }) => {
  const { formatPrice } = useRegion();

  const totalPV = cart.reduce((acc, item) => acc + (item.pv * item.qty), 0);
  const totalBV = cart.reduce((acc, item) => acc + (item.bv * item.qty), 0);
  const totalDP = cart.reduce((acc, item) => acc + (item.dp * item.qty), 0);

  return (
    <>
      <div
        id="cart-drawer-overlay"
        className={`cart-drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <aside
        id="cart-drawer"
        className={`cart-drawer ${isOpen ? 'active' : ''}`}
        aria-label="Shopping Cart"
      >
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-navy-950)' }}>
              Your Shopping Cart
            </h3>
          </div>
          <button
            type="button"
            id="close-cart-btn"
            className="modal-close-btn"
            onClick={onClose}
            style={{ position: 'static' }}
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div
          style={{
            padding: '12px 20px',
            background: '#ecfdf5',
            borderBottom: '1px solid #d1fae5',
            fontSize: '0.8rem',
            color: '#065f46',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>🎉</span>
          <span><strong>Free Shipping Unlocked!</strong> Orders over ₹1,000 ship free across India.</span>
        </div>

        {/* Items List */}
        <div id="cart-items-list" className="cart-drawer-body">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="cart-item-card"
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '14px 20px',
                  borderBottom: '1px solid var(--surface-border)',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>
                    {item.title}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>
                    {formatPrice(item.dp)} • {item.pv} PV each
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        background: '#e2e8f0',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 700
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        background: '#e2e8f0',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 700
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--brand-navy-950)' }}>
                    {formatPrice(item.dp * item.qty)}
                  </strong>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {(item.pv * item.qty).toFixed(2)} PV
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
              Your shopping cart is currently empty.
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="cart-drawer-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem', color: '#64748b' }}>
            <span>Point Value Accumulated:</span>
            <strong id="cart-total-pv" style={{ color: '#059669', fontSize: '0.95rem' }}>
              {totalPV.toFixed(2)} PV
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.85rem', color: '#64748b' }}>
            <span>Business Volume (BV):</span>
            <strong id="cart-total-bv" style={{ color: 'var(--brand-navy-900)' }}>
              {totalBV.toFixed(0)} BV
            </strong>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--brand-navy-950)',
              paddingTop: '10px',
              borderTop: '1px solid var(--surface-border)'
            }}
          >
            <span>Total (DP):</span>
            <span id="cart-subtotal">{formatPrice(totalDP)}</span>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px', fontSize: '1rem' }}
            onClick={() => alert('Proceeding to Secure Checkout with Distributor Point Value Verification...')}
          >
            Proceed to Checkout
          </button>
          <div style={{ textAlign: 'center', fontSize: '0.74rem', color: '#94a3b8', marginTop: '8px' }}>
            🔒 256-Bit SSL Encrypted &amp; Direct Selling Assured
          </div>
        </div>
      </aside>
    </>
  );
};
