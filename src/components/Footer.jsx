import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    alert(`Thank you for subscribing to Vestige Updates with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t-4 border-blue-600 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ====================================================================
            ROW 1: Top Newsletter & Customer Helpline Strip
            ==================================================================== */}
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Newsletter Box */}
          <div className="flex-1 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Stay Connected
            </span>
            <h3 className="text-2xl font-bold text-white font-['Oswald'] uppercase tracking-wide">
              Get the latest updates
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Subscribe to receive new monthly scheme circulars, training schedules, and special product releases directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm font-['Oswald'] uppercase tracking-wider transition-colors shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Helpline Highlight */}
          <div className="w-full lg:w-auto bg-slate-950/70 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-2xl border border-blue-500/30">
                📞
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  All India Toll-Free
                </span>
                <a href="tel:18001023424" className="text-xl sm:text-2xl font-black text-white hover:text-blue-400 transition-colors font-mono">
                  1800 102 3424
                </a>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30">
                💬
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  WhatsApp Support
                </span>
                <a href="https://wa.me/919315955844" target="_blank" rel="noreferrer" className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  +91 9315955844
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            ROW 2: Main 5-Column Navigation Matrix
            ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: Our Corporate Office */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Oswald'] uppercase tracking-wider border-b border-blue-600/60 pb-2 inline-block">
              Our Corporate Office
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-2 pt-1">
              <p className="font-semibold text-slate-200 text-sm">
                Vestige Marketing Pvt. Ltd.
              </p>
              <p>
                A-89, Okhla Industrial Area Phase II<br />
                New Delhi - 110020, India
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                CIN: U51101DL2004PTC126744<br />
                ISO 9001:2015 Certified
              </p>
              <div className="pt-2 space-y-1">
                <div><span className="text-slate-500">Phone:</span> <a href="tel:011-43101234" className="text-slate-300 hover:text-blue-400">011-43101234</a></div>
                <div><span className="text-slate-500">Toll-Free:</span> <a href="tel:18001023424" className="text-blue-400 font-bold">1800 102 3424</a></div>
                <div><span className="text-slate-500">Email:</span> <a href="mailto:info@myvestige.com" className="text-slate-300 hover:text-blue-400">info@myvestige.com</a></div>
              </div>
            </div>
          </div>

          {/* Column 2: Company & Opportunities */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Oswald'] uppercase tracking-wider border-b border-blue-600/60 pb-2 inline-block">
              Company &amp; Opps
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Vestige</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Management Team</a></li>
              <li><a href="#leadership-series" className="hover:text-blue-400 transition-colors">Leadership Conclave (VLC)</a></li>
              <li><a href="#leadership-series" className="hover:text-blue-400 transition-colors">Business Opportunity Plan</a></li>
              <li><a href="#car-achievers" className="hover:text-blue-400 transition-colors">Car Achievers Club</a></li>
              <li><a href="#car-achievers" className="hover:text-blue-400 transition-colors">Travel Fund Tour Gallery</a></li>
              <li><a href="#vmc-stories-section" className="hover:text-blue-400 transition-colors">Vestige Millionaire Club (VMC)</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Vestige Heart to Heart (CSR)</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Careers @Vestige</a></li>
            </ul>
          </div>

          {/* Column 3: Products & Brands */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Oswald'] uppercase tracking-wider border-b border-blue-600/60 pb-2 inline-block">
              Products &amp; Brands
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Health Supplements</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Ayusante Ayurveda</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Assure &amp; Assure Natural</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Dentassure Oral Care</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Skin Formula 9</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Mistral of Milan (Cosmetics)</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Hyvest Home Care</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Agri 82 Bio-Enhancers</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Mach-Drive Nano-Energizer</a></li>
              <li><a href="#brands-section" className="hover:text-blue-400 transition-colors">Invigo &amp; Zeta Health Foods</a></li>
            </ul>
          </div>

          {/* Column 4: Company Policies & Compliance */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Oswald'] uppercase tracking-wider border-b border-blue-600/60 pb-2 inline-block">
              Company Policies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Privacy &amp; Security Policy</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Shipping &amp; Delivery Policy</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Cancellation / Refund Policy</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Distributor Code of Conduct</a></li>
              <li><a href="#reach-out-section" className="hover:text-blue-400 transition-colors">Grievance Redressal Mechanism</a></li>
              <li><a href="#downloads" className="hover:text-blue-400 transition-colors">Direct Selling Guidelines 2021</a></li>
              <li><a href="mailto:nodalofficer@myvestige.com" className="hover:text-blue-400 transition-colors">Nodal Officer: Mr. Vivek Jhamb</a></li>
              <li><a href="#reach-out-section" className="hover:text-blue-400 transition-colors">DLCP &amp; Branch Locator</a></li>
            </ul>
          </div>

          {/* Column 5: Download App & Social Media */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Oswald'] uppercase tracking-wider border-b border-blue-600/60 pb-2 inline-block">
              Vestige Mobile App
            </h4>
            <p className="text-xs text-slate-400">
              Experience seamless shopping, tracking PV points, and monitoring your distributor network.
            </p>

            {/* App Store Badges */}
            <div className="space-y-2.5">
              <a 
                href="https://apps.apple.com/in/app/vestige-online-shopping-app/id1438781989" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-xl transition-colors group"
              >
                <span className="text-2xl text-white">🍎</span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block leading-tight">Download on the</span>
                  <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">App Store</span>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.vestigeshopping" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-xl transition-colors group"
              >
                <span className="text-2xl text-emerald-400">▶</span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block leading-tight">Get it on</span>
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">Google Play</span>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Follow Vestige
              </span>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/Vestige-Marketing-PvtLtd-131892360177567/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center text-xs font-bold transition-colors" title="Facebook">f</a>
                <a href="https://twitter.com/vestigemkt" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-500 text-white flex items-center justify-center text-xs font-bold transition-colors" title="Twitter / X">𝕏</a>
                <a href="https://www.instagram.com/vestige_official" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center text-xs font-bold transition-colors" title="Instagram">📸</a>
                <a href="http://youtube.com/vestigemedia" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center text-xs font-bold transition-colors" title="YouTube">▶</a>
                <a href="https://www.linkedin.com/company/vestige-marketing-pvt.-ltd." target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-700 text-white flex items-center justify-center text-xs font-bold transition-colors" title="LinkedIn">in</a>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            ROW 3: Payment Partners Section
            ==================================================================== */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-slate-300">Accepted Payment Methods:</span>
            <span>100% Secure Encrypted Transactions</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-white text-[11px] tracking-wider">
              VISA
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-red-400 text-[11px] tracking-wider">
              Mastercard
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-emerald-400 text-[11px] tracking-wider">
              RuPay
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-sky-400 text-[11px] tracking-wider">
              UPI / GPay
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-slate-300 text-[11px] tracking-wider">
              Net Banking
            </div>
            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-blue-300 text-[11px] tracking-wider">
              Paytm
            </div>
          </div>
        </div>

        {/* ====================================================================
            ROW 4: Accreditations, ISO & Exact Copyright Claim Text
            ==================================================================== */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <div>
            <p className="font-medium text-slate-400">
              &copy; {new Date().getFullYear()} Vestige Marketing Private Limited | All Rights Reserved
            </p>
            <p className="text-[11px] text-slate-600 mt-1">
              "Wish You Wellth" is a registered trademark of Vestige Marketing Pvt. Ltd. Direct Selling Entity registered under Consumer Protection (Direct Selling) Rules, 2021.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">ISO 9001:2015</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">GMP Certified</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Halal Certified</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">IDSA Member</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
