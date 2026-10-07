import React, { useState } from 'react';
import { useRegion, REGIONS } from '../context/RegionContext.jsx';
import { categories } from '../data/categories.js';
import { products } from '../data/products.js';

export const Header = ({ onOpenCart, onOpenDistributor, cartCount }) => {
  const {
    region,
    switchRegion,
    selectedCountry,
    handleCountryChange,
    availableCountries,
    formatPrice
  } = useRegion();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.trim().length >= 2) {
      const filtered = products.filter(p =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase()) ||
        p.description.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  return (
    <>
      {/* ========================================================================
           1. Top Utility Header (Exact Links + Region: India | Global Switcher)
           ======================================================================== */}
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="utility-left">
            {/* Exact Top Links from live site */}
            <a href="#about" className="utility-item">About Vestige</a>
            <a href="#news" className="utility-item">News/Media</a>
            <a href="#offers" className="utility-item">Offers</a>
            <a href="#branches" className="utility-item" id="branch-nav-link">
              Vestige Branches
            </a>

            {/* Region: India | Global Switcher */}
            <div className="portal-switch-group" id="portal-switch-container">
              <button
                type="button"
                id="portal-btn-india"
                className={`portal-btn ${region === REGIONS.INDIA ? 'active' : ''}`}
                onClick={() => switchRegion(REGIONS.INDIA)}
                title="Switch to India Portal (myvestige.com)"
              >
                <span>🇮🇳</span> India
              </button>
              <button
                type="button"
                id="portal-btn-global"
                className={`portal-btn ${region === REGIONS.GLOBAL ? 'active global-mode' : ''}`}
                onClick={() => switchRegion(REGIONS.GLOBAL)}
                title="Switch to Global Portal (global.myvestige.com)"
              >
                <span>🌐</span> Global
              </button>
            </div>

            {/* Dynamic Country Selector */}
            <div className="utility-item">
              <select
                id="country-select"
                className="utility-select"
                aria-label="Select Country"
                value={selectedCountry.code}
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                {availableCountries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Selector */}
            <div className="utility-item">
              <select id="language-select" className="utility-select" aria-label="Select Language">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="ar">العربية</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
          </div>

          <div className="utility-right">
            <div className="utility-item" id="toll-free-display">
              <span>{region === REGIONS.INDIA ? 'Toll-Free:' : 'International Hub:'}</span>
              <a
                href={`tel:${selectedCountry.phone.replace(/[^0-9+]/g, '')}`}
                id="support-phone-link"
                style={{ color: '#34d399', fontWeight: 700 }}
              >
                {selectedCountry.phone}
              </a>
              {region === REGIONS.INDIA && (
                <>
                  <span style={{ color: '#64748b' }}>|</span>
                  <a href="tel:01143101234" style={{ color: '#cbd5e1' }}>011-43101234</a>
                </>
              )}
            </div>
            <span className="utility-item" style={{ color: '#fbbf24', fontWeight: 700 }}>
              Wish You Wellth
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================
           2. Main Header & Exact Navigation Menu
           ======================================================================== */}
      <header className="main-header">
        <div className="container header-container">
          {/* Original Vestige Logo */}
          <a href="/" className="brand-logo-wrap" title="Vestige Marketing Pvt. Ltd. - Wish You Wellth">
            <img
              src="/images/logo-1.png"
              alt="Vestige - Wish You Wellth"
              className="original-brand-logo"
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://www.myvestige.com/images/theme/logo-1.png';
              }}
            />
          </a>

          {/* Search Box */}
          <div className="search-box-wrap">
            <div className="search-input-inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                id="global-search-input"
                className="search-input"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.length >= 2 && setShowSearchDropdown(true)}
                autoComplete="off"
              />
            </div>

            {showSearchDropdown && (
              <div id="search-dropdown" className="search-results-dropdown active">
                {searchResults.length > 0 ? (
                  searchResults.map((p) => (
                    <a
                      key={p.id}
                      href="#products"
                      className="search-item-row"
                      onClick={() => setShowSearchDropdown(false)}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        padding: '8px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>
                          {p.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#059669' }}>
                          {p.brand} • {formatPrice(p.dp)} • {p.pv} PV
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div style={{ padding: '12px', fontSize: '0.82rem', color: '#94a3b8', textAlign: 'center' }}>
                    No matching products found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <button
              type="button"
              id="distributor-portal-btn"
              className="btn btn-secondary"
              onClick={onOpenDistributor}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Distributor Login
            </button>

            <a href="#products" className="action-icon-btn" title="View Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </a>

            <button
              type="button"
              id="cart-drawer-trigger"
              className="action-icon-btn"
              title="Open Shopping Cart"
              onClick={onOpenCart}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span id="cart-count-badge" className="action-badge">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Exact Primary Navigation Bar */}
        <nav className="nav-categories-bar">
          <div className="container">
            <ul className="nav-links-list">
              {/* Shop By Products (Mega-Menu) */}
              <li
                className="nav-link-item"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button type="button" className="nav-link-btn highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  Shop By Products
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Mega-Menu with Exact Categories */}
                <div className={`mega-menu ${megaMenuOpen ? 'active' : ''}`}>
                  <div className="mega-grid">
                    <div className="mega-cat-card">
                      <div className="mega-cat-title">
                        <span>Health Supplements</span>
                      </div>
                      <ul className="mega-sub-list">
                        <li>• Pro Heart</li>
                        <li>• Joints &amp; Bones Health</li>
                        <li>• Immunity Booster</li>
                        <li>• Weight Management</li>
                        <li>• Fitness &amp; Diet</li>
                        <li>• Detox &amp; Rejuvenation</li>
                      </ul>
                    </div>

                    <div className="mega-cat-card">
                      <div className="mega-cat-title">
                        <span>Personal Care</span>
                      </div>
                      <ul className="mega-sub-list">
                        <li>• Hair Care</li>
                        <li>• Skin Care</li>
                        <li>• Body Care</li>
                        <li>• Sun Defense SPF 50+</li>
                      </ul>
                    </div>

                    <div className="mega-cat-card">
                      <div className="mega-cat-title">
                        <span>Ayusante</span>
                      </div>
                      <ul className="mega-sub-list">
                        <li>• RespoCare</li>
                        <li>• GlucoHealth</li>
                        <li>• ProCard</li>
                        <li>• ToxClean</li>
                        <li>• Vital Complex</li>
                      </ul>
                    </div>

                    <div className="mega-cat-card">
                      <div className="mega-cat-title">
                        <span>Agri Products</span>
                      </div>
                      <ul className="mega-sub-list">
                        <li>• Agri 82</li>
                        <li>• Agri Humic</li>
                        <li>• Agri Gold</li>
                      </ul>
                    </div>
                  </div>

                  {/* 100 PV Consistency Offer */}
                  <div className="mega-promo-box">
                    <div>
                      <span
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}
                      >
                        Consistency Offer
                      </span>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '12px 0 6px' }}>
                        100 PV Monthly Scheme
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        Purchase 100 PV products continuously for 4 consecutive months and receive products worth ₹2,500 free!
                      </p>
                    </div>
                    <a
                      href="#products"
                      className="btn btn-gold"
                      style={{ marginTop: '20px', fontSize: '0.82rem', padding: '8px 14px' }}
                    >
                      Shop Consistency Offer
                    </a>
                  </div>
                </div>
              </li>

              {/* Exact Menu Items */}
              <li className="nav-link-item"><a href="#brands" className="nav-link-btn">Brands</a></li>
              <li className="nav-link-item"><a href="#schedule" className="nav-link-btn">Schedule</a></li>
              <li className="nav-link-item"><a href="#downloads" className="nav-link-btn">Downloads</a></li>
              <li className="nav-link-item"><a href="#opportunity" className="nav-link-btn">Business Opportunity</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
