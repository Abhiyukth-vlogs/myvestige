import React from 'react';

export const Accreditations = () => {
  return (
    <div style={{ background: 'white', borderBottom: '1px solid var(--surface-border)', padding: '24px 0' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🔬</span>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ color: 'var(--brand-navy-900)', display: 'block', fontSize: '0.95rem' }}>
              GMP Certified
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Good Manufacturing Practice</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🌿</span>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ color: 'var(--brand-navy-900)', display: 'block', fontSize: '0.95rem' }}>
              Halal Certified
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>100% Permissible &amp; Pure</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>📜</span>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ color: 'var(--brand-navy-900)', display: 'block', fontSize: '0.95rem' }}>
              ISO 9001:2015
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Quality Management Systems</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🛡️</span>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ color: 'var(--brand-navy-900)', display: 'block', fontSize: '0.95rem' }}>
              IDSA Compliant
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Indian Direct Selling Guidelines</span>
          </div>
        </div>
      </div>
    </div>
  );
};
