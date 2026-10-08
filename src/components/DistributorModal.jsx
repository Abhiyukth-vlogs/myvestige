import React, { useState } from 'react';
import { useRegion } from '../context/RegionContext.jsx';
import confetti from 'canvas-confetti';

export const DistributorModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const { showToast } = useRegion();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [distId, setDistId] = useState('78291044');
  const [password, setPassword] = useState('vestige2026');

  // Sign up state
  const [sponsorId, setSponsorId] = useState('78291044');
  const [fullName, setFullName] = useState('Aarav Sharma');
  const [mobile, setMobile] = useState('9876543210');
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [stateRegion, setStateRegion] = useState('Delhi');
  const [pincode, setPincode] = useState('110020');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    showToast(`Welcome back, Crown Director! Logged in as #${distId}`, 'success');
    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.3 } });
    } catch (_) {}
    onClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const newId = '89' + Math.floor(100000 + Math.random() * 900000);
    showToast(`🎉 Registration Successful! Welcome to Vestige, ${fullName}! Your ID: ${newId}`, 'success');
    try {
      confetti({ particleCount: 100, spread: 90, origin: { y: 0.4 } });
    } catch (_) {}
    onClose();
  };

  return (
    <div id="distributor-modal" className="modal-overlay active" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '520px', padding: '28px', borderRadius: '16px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" id="distributor-modal-close" className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="/images/logo.png"
            alt="Vestige Logo"
            style={{ height: '48px', width: 'auto', objectFit: 'contain', margin: '0 auto 8px' }}
            onError={(e) => {
              e.currentTarget.src = '/assets/logo.png';
            }}
          />
          <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-navy-950)', marginBottom: '2px' }}>
            Vestige Business Portal
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Wish You Wellth • Global Direct Selling Network
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            background: '#f1f5f9',
            borderRadius: '10px',
            padding: '4px',
            marginBottom: '20px',
            gap: '4px'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('login')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              background: activeTab === 'login' ? 'white' : 'transparent',
              color: activeTab === 'login' ? 'var(--primary-blue, #005baa)' : '#64748b',
              boxShadow: activeTab === 'login' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <span>👤</span> Distributor Login
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('signup')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              background: activeTab === 'signup' ? 'white' : 'transparent',
              color: activeTab === 'signup' ? '#059669' : '#64748b',
              boxShadow: activeTab === 'signup' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <span>✨</span> Sign Up / Join Free
          </button>
        </div>

        {activeTab === 'login' ? (
          <div>
            {/* Demo Distributor Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0a192f, #102a4e)',
                color: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '18px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#34d399', textTransform: 'uppercase', fontWeight: 700 }}>
                    Active Simulation Session
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
                  gap: '8px',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  paddingTop: '8px',
                  textAlign: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Personal PV</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#34d399' }}>2,450</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Group PV</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fbbf24' }}>48,200</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Team Network</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'white' }}>1,280</div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '6px' }}>
                  Distributor ID / Registered Mobile
                </label>
                <input
                  type="text"
                  value={distId}
                  onChange={(e) => setDistId(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '6px' }}>
                  Password / PIN
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.95rem', fontWeight: 700, borderRadius: '8px' }}
              >
                Sign In to Business Center →
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.82rem', color: '#64748b' }}>
              Don't have an ID?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                style={{ color: '#059669', fontWeight: 700, textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                Join Free as Distributor
              </button>
            </div>
          </div>
        ) : (
          /* Sign Up Form */
          <div>
            <form onSubmit={handleSignupSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                  Referral / Sponsor ID
                </label>
                <input
                  type="text"
                  value={sponsorId}
                  onChange={(e) => setSponsorId(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                  required
                />
                <small style={{ color: '#059669', fontWeight: 600, fontSize: '0.74rem' }}>
                  ✓ Verified Sponsor: Vestige Direct Network
                </small>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                  Full Legal Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                    State / Region
                  </label>
                  <select
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                  >
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Global">International</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-navy-900)', display: 'block', marginBottom: '4px' }}>
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', outline: 'none' }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="signupbtn"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Complete Registration &amp; Get Free ID 🚀
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.82rem', color: '#64748b' }}>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                style={{ color: 'var(--primary-blue, #005baa)', fontWeight: 700, textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                Sign in to existing account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

