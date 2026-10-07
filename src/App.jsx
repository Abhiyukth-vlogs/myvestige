import React, { useState } from 'react';
import { RegionProvider } from './context/RegionContext.jsx';
import { AntiGravityCanvas } from './components/AntiGravityCanvas.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Accreditations } from './components/Accreditations.jsx';
import { Categories } from './components/Categories.jsx';
import { Products } from './components/Products.jsx';
import { Brands } from './components/Brands.jsx';
import { BusinessOpportunity } from './components/BusinessOpportunity.jsx';
import { Schedule } from './components/Schedule.jsx';
import { Downloads } from './components/Downloads.jsx';
import { VMCSuccessStories } from './components/VMCSuccessStories.jsx';
import { AwardsRecognitions } from './components/AwardsRecognitions.jsx';
import { ReachOut } from './components/ReachOut.jsx';
import { Footer } from './components/Footer.jsx';

import { CartDrawer } from './components/CartDrawer.jsx';
import { DistributorModal } from './components/DistributorModal.jsx';
import { QuickViewModal } from './components/QuickViewModal.jsx';
import { AskVictor } from './components/AskVictor.jsx';
import { products } from './data/products.js';

export const AppContent = () => {
  const [cart, setCart] = useState([
    { ...products[0], qty: 2 }, // Vestige Flax Oil
    { ...products[1], qty: 1 }  // Vestige Spirulina
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDistributorOpen, setIsDistributorOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (productId) => {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...p, qty: 1 }];
    });
    showToast(`Added "${p.title}" to Cart (+${p.pv} PV)`);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
    } else {
      setCart(prev => prev.map(item => item.id === productId ? { ...item, qty: newQty } : item));
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen relative">
      {/* 0. Anti-Gravity 3D Celestial Particle Physics Canvas */}
      <AntiGravityCanvas />

      {/* 1. Header with Top Utility Bar + Region Toggle + Mega-Menu */}
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDistributor={() => setIsDistributorOpen(true)}
        cartCount={cartCount}
      />

      {/* 2. Official Hero Banner & 3D Tilt Card */}
      <Hero onAddToCart={handleAddToCart} />

      {/* 3. Accreditations Banner */}
      <Accreditations />

      {/* 4. Shop By Categories (Exact Categories) */}
      <Categories />

      {/* 5. Our Products (Best Sellers & Formulations) */}
      <Products
        onAddToCart={handleAddToCart}
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* 6. The 13 Flagship Brands Showcase */}
      <Brands />

      {/* 7. Business Opportunity & 10 Ways to Earn Calculator */}
      <BusinessOpportunity onOpenDistributor={() => setIsDistributorOpen(true)} />

      {/* 8. Schedule (CNT & Training Schedules) */}
      <Schedule />

      {/* 9. Downloads (Product Catalogues & Literature) */}
      <Downloads />

      {/* 10. Official Mobile App Download Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0a192f, #059669)', color: 'white', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ maxWidth: '620px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase' }}>
              Manage Business on the Go
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '8px 0 12px' }}>
              Download Vestige Mobile &amp; POS App
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Track downline volume, verify consistency vouchers, place repurchase orders, and access real-time training schedules directly from your smartphone.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.vestigebestdeals.android"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <span>📱 Google Play Store</span>
            </a>
            <a
              href="https://apps.apple.com/in/app/vestige-online-shopping-app/id1439294943"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <span>🍏 Apple App Store</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. VMC Success Stories */}
      <VMCSuccessStories />

      {/* 12. Awards & Recognitions */}
      <AwardsRecognitions />

      {/* 13. Refined Reach Out Section */}
      <ReachOut />

      {/* 14. Comprehensive High-Contrast Footer */}
      <Footer />


      {/* 12. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
      />

      {/* 13. Distributor Login Modal */}
      <DistributorModal
        isOpen={isDistributorOpen}
        onClose={() => setIsDistributorOpen(false)}
      />

      {/* 14. Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 15. Floating Old Site Tab */}
      <a
        href="https://www.myvestige.com"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-old-site-btn"
        title="Open Legacy myvestige.com Portal"
      >
        Visit Vestige Old Website
      </a>

      {/* 16. Floating Ask Victor AI Assistant */}
      <AskVictor />

      {/* 17. Toast Notifications */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            padding: '12px 20px',
            background: '#0a192f',
            color: 'white',
            borderLeft: '4px solid #10b981',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.88rem',
            fontWeight: 500
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export const App = () => {
  return (
    <RegionProvider>
      <AppContent />
    </RegionProvider>
  );
};

export default App;
