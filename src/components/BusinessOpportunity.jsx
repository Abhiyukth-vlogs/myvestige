import React, { useState } from 'react';
import { useRegion } from '../context/RegionContext.jsx';

export const BusinessOpportunity = ({ onOpenDistributor }) => {
  const { formatPrice } = useRegion();
  const [personalPV, setPersonalPV] = useState(100);
  const [teamMembers, setTeamMembers] = useState(6);

  const totalTeamPV = personalPV + (teamMembers * personalPV * 4);
  let rank = 'Distributor (5% - 8%)';
  let baseBonus = totalTeamPV * 18 * 0.08 + 1200;

  if (totalTeamPV >= 5500) {
    rank = 'Bronze Director (11% + Director Bonus)';
    baseBonus = totalTeamPV * 18 * 0.11 + 6500;
  }
  if (teamMembers >= 6 && totalTeamPV >= 15000) {
    rank = 'Crown Director (Car & Travel Fund)';
    baseBonus = totalTeamPV * 18 * 0.14 + 45000;
  }
  if (teamMembers >= 16 && totalTeamPV >= 40000) {
    rank = 'Universal Crown Director (House & Car Fund)';
    baseBonus = totalTeamPV * 18 * 0.16 + 120000;
  }

  return (
    <section className="opp-section" id="opportunity">
      <div className="container">
        <div className="opp-grid">
          <div>
            <span
              style={{
                color: '#fbbf24',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              BUSINESS OPPORTUNITY
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.15, marginBottom: '18px' }}>
              Direct Selling is a Booming Business: <br />
              <span style={{ color: '#34d399' }}>10 Ways to Earn</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Vestige provides an empowering business opportunity with 10 ways to earn, world-class products, and cumulative compensation plan designed to reward persistent performance.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '0.86rem',
                color: '#e2e8f0',
                marginBottom: '30px'
              }}
            >
              <div>✓ 1. Retail Profit (10% - 20%)</div>
              <div>✓ 2. Performance Bonus (5% - 11%)</div>
              <div>✓ 3. Bronze Director Bonus (4%)</div>
              <div>✓ 4. Business Building Bonus (14%)</div>
              <div>✓ 5. Team Building Bonus (3%)</div>
              <div>✓ 6. Leadership Overriding (18%)</div>
              <div>✓ 7. Travel Fund (3%)</div>
              <div>✓ 8. Car Fund (5%)</div>
              <div>✓ 9. House Fund (3%)</div>
              <div>✓ 10. Elite Club Bonus (2%)</div>
            </div>

            <button
              type="button"
              id="distributor-join-cta"
              className="btn btn-gold"
              onClick={onOpenDistributor}
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Join As Distributor
            </button>
          </div>

          {/* Interactive Earnings Simulator */}
          <div className="calculator-card antigravity-card-3d">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>PV &amp; Income Simulator</h3>
              <span
                style={{
                  fontSize: '0.74rem',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontWeight: 700
                }}
              >
                Calculator
              </span>
            </div>

            <div className="calc-slider-group">
              <div className="calc-label-row">
                <span style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>Your Monthly Personal Purchase:</span>
                <span id="calc-pv-val" style={{ color: '#34d399', fontWeight: 700 }}>
                  {personalPV} PV
                </span>
              </div>
              <input
                type="range"
                id="calc-pv-slider"
                className="calc-slider"
                min="30"
                max="600"
                step="10"
                value={personalPV}
                onChange={(e) => setPersonalPV(Number(e.target.value))}
              />
            </div>

            <div className="calc-slider-group">
              <div className="calc-label-row">
                <span style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>Direct Downline Distributors in Team:</span>
                <span id="calc-team-val" style={{ color: '#34d399', fontWeight: 700 }}>
                  {teamMembers} Distributors
                </span>
              </div>
              <input
                type="range"
                id="calc-team-slider"
                className="calc-slider"
                min="1"
                max="50"
                step="1"
                value={teamMembers}
                onChange={(e) => setTeamMembers(Number(e.target.value))}
              />
            </div>

            <div className="calc-results-box">
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                  Estimated Monthly Income
                </div>
                <div id="calc-income-val" className="calc-result-val">
                  {formatPrice(Math.round(baseBonus))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                  Target Qualification Rank
                </div>
                <div
                  id="calc-rank-val"
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34d399', marginTop: '6px' }}
                >
                  {rank}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '14px', textAlign: 'center', lineHeight: 1.4 }}>
              *Simulated estimates based on standardized duplication model. Actual bonuses vary by business volume structures.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
