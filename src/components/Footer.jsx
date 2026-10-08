import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Subscribed Successfully with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="footer bg-white text-slate-700 border-t border-slate-200" id="footer-section">
      
      {/* ====================================================================
          1. Newsletter Strip (vest-newsletter)
          ==================================================================== */}
      <section className="vest-newsletter bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="newsletter-inner">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-['Oswald'] tracking-wide">
                Get The Latest Updates.
              </h2>
              <h5 className="text-sm text-slate-300 mt-1">
                Signup for offers &amp; exclusive discounts.
              </h5>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
              <input 
                type="email" 
                className="form-control bg-white text-slate-900 px-4 py-2.5 rounded-lg text-sm flex-1 outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                className="btn bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider font-['Oswald'] transition-colors whitespace-nowrap shadow-md"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Main Footer Content Matrix
          ==================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Logo Column */}
          <div className="md:col-span-12 lg:col-span-3">
            <div className="inner-logo mb-4">
              <a href="/">
                <img 
                  src="/images/logo-1.png" 
                  alt="Vestige - Wish You Wellth" 
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/logo.png';
                  }}
                />
              </a>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Vestige Marketing Pvt. Ltd., an ISO 9001-2015 certified direct selling company dealing in world-class health, wellness, and personal care products. Spreading Wellth since 2004.
            </p>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Col 1: Company */}
            <div>
              <h6 className="font-['Oswald'] uppercase font-bold text-slate-900 text-base mb-4 tracking-wide border-b border-blue-600 pb-1 inline-block">
                Company
              </h6>
              <ul className="space-y-2 text-xs">
                <li><a href="/about-vestige" className="text-slate-600 hover:text-blue-700 transition-colors">About Vestige</a></li>
                <li className="nav-item nav-with-menu">
                  <button 
                    onClick={() => setIsCareerOpen(!isCareerOpen)}
                    className="text-slate-600 hover:text-blue-700 transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span>Career</span>
                    <span className="text-[10px]">{isCareerOpen ? '▲' : '▼'}</span>
                  </button>
                  {isCareerOpen && (
                    <ul className="pl-3 mt-1.5 space-y-1.5 border-l-2 border-blue-600/40">
                      <li><a href="/work-culture" className="text-slate-500 hover:text-blue-700">Work Culture</a></li>
                      <li><a href="/vestige-values" className="text-slate-500 hover:text-blue-700">Vestige Values</a></li>
                      <li><a href="/competitive-compensation" className="text-slate-500 hover:text-blue-700">Competitive Compensation</a></li>
                      <li><a href="/fun-vestige" className="text-slate-500 hover:text-blue-700">Fun @Vestige</a></li>
                      <li><a href="/vestige-heart-to-heart-foundation" className="text-slate-500 hover:text-blue-700">Vestige Heart to Heart</a></li>
                      <li><a href="/employee-benefits-preposition" className="text-slate-500 hover:text-blue-700">Employee Benefits</a></li>
                      <li><a href="/current-openings" className="text-slate-500 hover:text-blue-700">Current Openings</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/grievanceRedressal" className="text-slate-600 hover:text-blue-700 transition-colors">Grievance Redressal</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-blue-700 transition-colors">Contact Us</a></li>
                <li><a href="/NotificationHistory" className="text-slate-600 hover:text-blue-700 transition-colors">Notification History</a></li>
                <li><a href="/branches" className="text-slate-600 hover:text-blue-700 transition-colors">Vestige Branches</a></li>
                <li><a href="https://www.vestigehearttoheart.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors">Vestige Heart To Heart</a></li>
                <li className="pt-1"><a href="/news-media/featureVideoGuide" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">Walkthrough Video Feature</a></li>
              </ul>
            </div>

            {/* Col 2: Policy */}
            <div>
              <h6 className="font-['Oswald'] uppercase font-bold text-slate-900 text-base mb-4 tracking-wide border-b border-blue-600 pb-1 inline-block">
                Policy
              </h6>
              <ul className="space-y-2 text-xs">
                <li><a href="/refundPolicy" className="text-slate-600 hover:text-blue-700 transition-colors">Cancellation &amp; Refund Process</a></li>
                <li><a href="/deliveryArea" className="text-slate-600 hover:text-blue-700 transition-colors">Delivery Area</a></li>
                <li><a href="/disclaimer" className="text-slate-600 hover:text-blue-700 transition-colors">Disclaimer</a></li>
                <li><a href="/privacyPolicy" className="text-slate-600 hover:text-blue-700 transition-colors">Privacy and Security Policy</a></li>
                <li><a href="/shippingPolicy" className="text-slate-600 hover:text-blue-700 transition-colors">Shipping Policy</a></li>
                <li><a href="/terms-and-condition" className="text-slate-600 hover:text-blue-700 transition-colors">T&amp;C</a></li>
              </ul>
            </div>

            {/* Col 3: Our Corporate Office */}
            <div>
              <h6 className="font-['Oswald'] uppercase font-bold text-slate-900 text-base mb-4 tracking-wide border-b border-blue-600 pb-1 inline-block">
                Our Corporate Office
              </h6>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Vestige%20Marketing%20Pvt.%20Ltd.%20A-89,%20Okhla%20Industrial%20Area%20Phase%20II%20New%20Delhi%20110020" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-xs text-slate-600 hover:text-blue-700 transition-colors leading-relaxed"
              >
                <div className="nav-link address">
                  <strong>Vestige Marketing Pvt. Ltd.</strong><br />
                  A-89, Okhla Industrial Area Phase II<br />
                  New Delhi 110020
                </div>
              </a>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span>CIN: U51101DL2004PTC126744</span>
              </div>
            </div>

            {/* Col 4: Customer Care */}
            <div>
              <h6 className="font-['Oswald'] uppercase font-bold text-slate-900 text-base mb-4 tracking-wide border-b border-blue-600 pb-1 inline-block">
                Customer Care
              </h6>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Phone:</span>
                  <a href="tel:011-43101234" className="font-bold text-slate-900 hover:text-blue-700 text-sm">
                    011- 43101234
                  </a>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">All India Toll Free No.:</span>
                  <a href="tel:18001023424" className="font-bold text-blue-700 hover:text-blue-800 text-base font-mono">
                    1800 102 3424
                  </a>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">WhatsApp Queries:</span>
                  <a href="https://wa.me/919315955844" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:text-emerald-700">
                    +91 9315955844
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="top-bar-social-media pt-2">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-2">Connect With Us:</span>
                  <div className="flex gap-2">
                    <a 
                      href="https://www.instagram.com/vestige_official/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 flex items-center justify-center text-xs font-bold transition-all shadow-sm"
                      title="Instagram"
                    >
                      IG
                    </a>
                    <a 
                      href="https://www.facebook.com/VestigeMkt/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center text-xs font-bold transition-all shadow-sm"
                      title="Facebook"
                    >
                      FB
                    </a>
                    <a 
                      href="https://twitter.com/vestigemkt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center text-xs font-bold transition-all shadow-sm"
                      title="Twitter / X"
                    >
                      𝕏
                    </a>
                    <a 
                      href="https://www.youtube.com/vestigemedia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 flex items-center justify-center text-xs font-bold transition-all shadow-sm"
                      title="YouTube"
                    >
                      YT
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ====================================================================
            3. Payment Partners & ISO Certification Strip (1:1 Exact Assets)
            ==================================================================== */}
        <div className="py-6 border-b border-slate-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Payment Partners Local Asset */}
            <div className="text-center lg:text-left">
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-0">
                <li className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Payment Partners
                </li>
                <li>
                  <a href="#!">
                    <img 
                      src="/assets/payment-partners.png" 
                      alt="Accepted Payment Methods: Visa, MasterCard, RuPay, UPI, Net Banking, Paytm" 
                      className="h-8 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/asset 4.png';
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="text-xs text-slate-500 hover:text-blue-700 pl-2">
                    | SiteMap
                  </a>
                </li>
              </ul>
            </div>

            {/* ISO Certification Local Asset */}
            <div className="text-center lg:text-right">
              <img 
                src="/assets/iso-certified.png" 
                alt="ISO Certifications" 
                className="h-10 md:h-12 w-auto object-contain inline-block"
                onError={(e) => {
                  e.currentTarget.src = '/assets/asset 27.png';
                }}
              />
            </div>

          </div>
        </div>

        {/* ====================================================================
            4. Install App Badges (Exact Local Asset Badges)
            ==================================================================== */}
        <div className="py-6 border-b border-slate-200">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-center">
            <li className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Install App
            </li>
            <li className="foot-img">
              <a 
                href="https://play.google.com/store/apps/details?id=com.vestigeshopping" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Get Vestige Mobile App on Google Play"
              >
                <img 
                  src="/assets/google-play.jpeg" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto rounded shadow-sm hover:opacity-95 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/asset 5.jpeg';
                  }}
                />
              </a>
            </li>
            <li className="foot-img">
              <a 
                href="https://apps.apple.com/in/app/vestige-online-shopping-app/id1448596224" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Download Vestige Mobile App on Apple App Store"
              >
                <img 
                  src="/assets/app-store.jpeg" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto rounded shadow-sm hover:opacity-95 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/asset 6.jpeg';
                  }}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* ====================================================================
            5. Exact Copyright Claim
            ==================================================================== */}
        <div className="pt-6 text-center">
          <span className="text-xs text-slate-500">
            Copyright &copy; <span id="copyright">{new Date().getFullYear()}</span> Vestige Marketing Private Limited | All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};
