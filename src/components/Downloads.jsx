import React from 'react';

export const Downloads = () => {
  return (
    <section
      className="section"
      id="downloads"
      style={{
        background: '#f8fafc',
        borderTop: '1px solid var(--surface-border)',
        borderBottom: '1px solid var(--surface-border)'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">DOWNLOADS</span>
          <h2 className="section-title">Product Catalogues &amp; Literature</h2>
          <p className="section-desc">
            Download official Vestige literature, product guides, and direct selling compliance documents.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          <div className="glass-card antigravity-card-3d" style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📘</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-navy-950)', marginBottom: '6px' }}>
              Product Catalogue
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
              Comprehensive product guide with formulations, ingredients, and MRP/DP details.
            </p>
            <button
              type="button"
              onClick={() => alert('Downloading Vestige Official Product Catalogue (PDF)...')}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              📥 Download PDF
            </button>
          </div>

          <div className="glass-card antigravity-card-3d" style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📰</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-navy-950)', marginBottom: '6px' }}>
              Voice Magazine
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
              Monthly edition featuring achiever success stories, award winners, and company updates.
            </p>
            <button
              type="button"
              onClick={() => alert('Downloading Latest Voice Magazine (PDF)...')}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              📥 Download PDF
            </button>
          </div>

          <div className="glass-card antigravity-card-3d" style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📝</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-navy-950)', marginBottom: '6px' }}>
              Application Form
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
              Distributor Application and registration agreement form for new associates.
            </p>
            <button
              type="button"
              onClick={() => alert('Downloading Distributor Application Form (PDF)...')}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              📥 Download PDF
            </button>
          </div>

          <div className="glass-card antigravity-card-3d" style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚖️</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-navy-950)', marginBottom: '6px' }}>
              Direct Selling Guidelines
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
              Official Ministry of Consumer Affairs direct selling guidelines and Code of Ethics.
            </p>
            <button
              type="button"
              onClick={() => alert('Downloading Direct Selling Guidelines (PDF)...')}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              📥 Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
