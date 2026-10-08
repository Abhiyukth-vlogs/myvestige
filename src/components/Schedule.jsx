import React from 'react';
import { events } from '../data/events.js';
import { useRegion, REGIONS } from '../context/RegionContext.jsx';

export const Schedule = () => {
  const { region, selectedCountry, showToast } = useRegion();

  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SCHEDULE</span>
          <h2 className="section-title">CNT &amp; Training Schedules</h2>
          <p className="section-desc">
            {region === REGIONS.INDIA
              ? 'Attend Cellular Nourishment Therapy (CNT) seminars and leadership masterclasses across India.'
              : `Attend international business seminars and trainings across ${selectedCountry.name} and global branches.`}
          </p>
        </div>

        <div className="events-grid" id="events-grid">
          {events.map((ev) => (
            <div key={ev.id} className="event-card antigravity-card-3d">
              <div className="event-header-row">
                <span className="event-type-badge">{ev.type}</span>
                <span className="event-date-text">📅 {ev.date}</span>
              </div>
              <h3 className="event-title">{ev.title}</h3>
              <div className="event-detail-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{region === REGIONS.INDIA ? ev.location : `${selectedCountry.name} Hub - ${ev.location}`}</span>
              </div>
              <div className="event-detail-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{ev.time}</span>
              </div>
              <div className="event-detail-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Trainer: {ev.trainer}</span>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>
                  Seats Available: {ev.seats}
                </span>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => showToast(`RSVP registered for ${ev.title} in ${region === REGIONS.INDIA ? 'India' : selectedCountry.name}!`, 'success')}
                  style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                >
                  Register Seat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
