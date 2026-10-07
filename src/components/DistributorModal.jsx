import React from 'react';

export const DistributorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="distributor-modal" className="modal-overlay active" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '520px', padding: '28px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" id="distributor-modal-close" className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="logo-symbol" style={{ margin: '0 auto 12px', width: '48px', height: '48px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-navy-950)' }}>Distributor Portal</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Access your real-time PV/BV telemetry and downline genealogy
          </p>
        </div>

        {/* Demo Distributor Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0a192f, #102a4e)',
            color: 'white',
            borderRadius: '12px',
            padding: '18px',
            marginBottom: '20px',
            border: '1px solid rgba(255,255,255,0.12)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: '#34d399', textTransform: 'uppercase', fontWeight: 700 }}>
                Simulated Active Session
              </div>
              <strong style={{ fontSize: '1.05rem' }}>ID: 78291044</strong>
            </div>
            <span
              style={{
                background: '#fbbf24',
                color: '#1e1b4b',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '999px'
              }}
            >
              Crown Director
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              paddingTop: '10px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Current PV</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>2,450</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Group PV</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fbbf24' }}>48,200</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Downlines</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>1,280</div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Logged into Vestige Distributor Business Center!');
            onClose();
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '6px' }}>
              Distributor ID / Registered Mobile
            </label>
            <input
              type="text"
              defaultValue="78291044"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--surface-border)', borderRadius: '8px', fontSize: '0.9rem' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '6px' }}>
              Secret PIN / Password
            </label>
            <input
              type="password"
              defaultValue="••••••••"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--surface-border)', borderRadius: '8px', fontSize: '0.9rem' }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}>
            Enter Business Center
          </button>
        </form>
      </div>
    </div>
  );
};
