import React from 'react';
import { useRegion, REGIONS } from '../context/RegionContext.jsx';

export const Footer = () => {
  const { region, selectedCountry } = useRegion();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
          {/* Col 1: About Vestige */}
          <div>
            <h4 className="footer-col-title">About Vestige</h4>
            <ul className="footer-links-list">
              <li><a href="#about">Company Profile</a></li>
              <li><a href="#about">Management Team</a></li>
              <li><a href="#about">Vision &amp; Mission</a></li>
              <li><a href="#about">Awards &amp; Recognitions</a></li>
              <li><a href="#about">Vestige Heart to Heart (CSR)</a></li>
              <li><a href="#downloads">Voice Magazine</a></li>
            </ul>
          </div>

          {/* Col 2: Help & Policies */}
          <div>
            <h4 className="footer-col-title">Help &amp; Policies</h4>
            <ul className="footer-links-list">
              <li><a href="#downloads">Direct Selling Guidelines</a></li>
              <li><a href="#about">Code of Ethics</a></li>
              <li><a href="#about">Grievance Redressal</a></li>
              <li><a href="#about">Privacy Policy</a></li>
              <li><a href="#about">Terms and Conditions</a></li>
              <li><a href="#about">Shipping &amp; Delivery Policy</a></li>
            </ul>
          </div>

          {/* Col 3: Corporate Office */}
          <div>
            <h4 className="footer-col-title">
              {region === REGIONS.INDIA ? 'Corporate Office' : 'Global Headquarters'}
            </h4>
            {region === REGIONS.INDIA ? (
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '12px' }}>
                <strong>Vestige Marketing Pvt. Ltd.</strong><br />
                A-89, Okhla Industrial Area Phase II,<br />
                New Delhi - 110020, India
              </p>
            ) : (
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '12px' }}>
                <strong>Vestige International Hub</strong><br />
                Office 402, Business Bay Tower,<br />
                Dubai, United Arab Emirates
              </p>
            )}
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
              <div>CIN: U51909DL2004PTC126738</div>
              <div>ISO 9001:2015 Certified Enterprise</div>
            </div>
          </div>

          {/* Col 4: Customer Care */}
          <div>
            <h4 className="footer-col-title">Customer Care</h4>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.8, color: '#cbd5e1' }}>
              <div>📞 <strong>Support:</strong> {selectedCountry.phone}</div>
              <div>✉️ <strong>Email:</strong> {region === REGIONS.INDIA ? 'info@myvestige.com' : 'globaldesk@myvestige.com'}</div>
              <div style={{ marginTop: '8px', color: '#34d399', fontSize: '0.8rem' }}>
                Mon - Sat: 9:30 AM to 6:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            &copy; 2026 Vestige Marketing Pvt. Ltd. All rights reserved. "Wish You Wellth" is a registered trademark.
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
            <a href="https://www.facebook.com/VestigeMkt/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/vestige_official/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/vestigemedia" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://x.com/VestigeMkt" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
