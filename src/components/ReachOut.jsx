import React, { useState } from 'react';

export const ReachOut = () => {
  const [formData, setFormData] = useState({
    distId: '',
    name: '',
    mobile: '',
    email: '',
    grievance: '',
    message: '',
    captcha: ''
  });

  const [messageCharsLeft, setMessageCharsLeft] = useState(500);
  const [captchaCode, setCaptchaCode] = useState('433985');
  const [submitted, setSubmitted] = useState(false);

  const refreshCaptcha = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(newCode);
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setFormData({ ...formData, message: val });
    setMessageCharsLeft(500 - val.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== captchaCode) {
      alert(`Invalid Captcha Code! Please enter ${captchaCode}.`);
      return;
    }

    setSubmitted(true);
    alert(`Thank you ${formData.name} (Distributor ID: ${formData.distId || 'N/A'})! Your grievance has been registered with Vestige Support. Reference ID: VST-${Date.now().toString().slice(-6)}.`);
    setFormData({
      distId: '',
      name: '',
      mobile: '',
      email: '',
      grievance: '',
      message: '',
      captcha: ''
    });
    setMessageCharsLeft(500);
    refreshCaptcha();
  };

  const handleReset = () => {
    setFormData({
      distId: '',
      name: '',
      mobile: '',
      email: '',
      grievance: '',
      message: '',
      captcha: ''
    });
    setMessageCharsLeft(500);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200" id="reach-out-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-slate-900 font-['Oswald']">
            Reach Out
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Corporate Office Details */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold uppercase text-blue-900 font-['Oswald'] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>🏢</span> Our Corporate Office
            </h3>
            
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <strong className="block text-slate-900 font-semibold">Vestige Marketing Pvt. Ltd.</strong>
                <p className="mt-1 leading-relaxed">
                  A-89, Okhla Industrial Area Phase II<br />
                  New Delhi 110020, India
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">Phone:</span>
                <a href="tel:011-43101234" className="text-blue-700 hover:underline">011-43101234</a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">All India Toll-Free Helpline:</span>
                <a href="tel:18001023424" className="text-blue-700 font-bold hover:underline">1800 102 3424</a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">WhatsApp Queries:</span>
                <a href="https://wa.me/919315955844" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
                  +91 9315955844
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1">Customer Care Hubs:</span>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>Chennai: <a href="tel:044-28252516" className="text-blue-700">044-28252516</a></li>
                  <li>Bhubaneswar: <a href="tel:0674-2573326" className="text-blue-700">0674-2573326</a></li>
                  <li>Kolkata North: <a href="tel:033-40016441" className="text-blue-700">033-40016441</a></li>
                  <li>Kolkata South: <a href="tel:033-40034921" className="text-blue-700">033-40034921</a></li>
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a 
                  href="https://maps.google.com/?q=Vestige+Marketing+Pvt.+Ltd.+Okhla+Phase+II+New+Delhi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block rounded-lg overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="https://global.myvestige.com/images/VestigeMap.PNG" 
                    alt="Vestige Head Office Location Map" 
                    className="w-full h-36 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <span className="block text-center py-1.5 bg-slate-100 text-xs font-semibold text-blue-900">
                    📍 View on Google Maps
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Write To Us Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold uppercase text-blue-900 font-['Oswald'] mb-2 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>✉️</span> Write to Us
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Please write to us using the contact form below if you would like to know more about the business opportunity, share ideas, give feedback, have complaints, or request a catalogue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <input 
                  type="text" 
                  maxLength={8}
                  placeholder="Distributor ID *"
                  value={formData.distId}
                  onChange={(e) => setFormData({ ...formData, distId: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input 
                  type="tel" 
                  maxLength={10}
                  placeholder="Mobile (10 digits) *"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <select 
                  value={formData.grievance}
                  onChange={(e) => setFormData({ ...formData, grievance: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 bg-white"
                >
                  <option value="">Select Grievance Category *</option>
                  <option value="1">Company Related</option>
                  <option value="2">Distributor Related</option>
                  <option value="3">Order Related</option>
                  <option value="4">Product Quality-Related</option>
                  <option value="5">Profile Related</option>
                  <option value="6">Refund Related</option>
                  <option value="7">Registration Related</option>
                  <option value="8">RULES OF CONDUCT Related</option>
                  <option value="9">Branch/ DLCP/ Mini DLCP Related</option>
                  <option value="10">Mobile App Related</option>
                  <option value="11">Product Delivery Related</option>
                </select>
              </div>

              <div>
                <textarea 
                  maxLength={500}
                  rows={3}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                />
                <div className="text-right text-xs text-slate-400 mt-1">
                  {messageCharsLeft} Characters left
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  maxLength={6}
                  placeholder="Enter Captcha *"
                  value={formData.captcha}
                  onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 placeholder:text-slate-400"
                />
                <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg">
                  <span className="font-mono font-bold tracking-widest text-slate-800 text-base select-none">
                    {captchaCode}
                  </span>
                  <button 
                    type="button" 
                    onClick={refreshCaptcha}
                    title="Refresh Captcha"
                    className="text-slate-500 hover:text-blue-700 text-sm ml-1"
                  >
                    🔄
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="submit" 
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition-colors font-['Oswald'] uppercase tracking-wider text-sm shadow-sm"
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="px-6 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2.5 rounded-lg transition-colors font-['Oswald'] uppercase tracking-wider text-sm"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Contact Emails & Governance */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold uppercase text-blue-900 font-['Oswald'] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>📬</span> Direct Inquiries
            </h3>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-900 block">General Information:</span>
                <a href="mailto:info@myvestige.com" className="text-blue-700 hover:underline">info@myvestige.com</a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">Grievance Redressal Officer:</span>
                <p className="text-xs text-slate-600 mt-0.5">Mr. Eshan Suri</p>
                <a href="mailto:grievance.officerin@myvestige.com" className="text-blue-700 text-xs hover:underline block break-all">
                  grievance.officerin@myvestige.com
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">Mechanism to Raise Grievance:</span>
                <a 
                  href="#downloads" 
                  onClick={(e) => { e.preventDefault(); alert('Downloading Grievance Redressal Mechanism Document (PDF)...'); }}
                  className="text-blue-700 underline text-xs font-semibold block mt-0.5"
                >
                  📄 Click Here to Download PDF
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">Nodal Officer:</span>
                <p className="text-xs text-slate-600 mt-0.5">Mr. Vivek Jhamb</p>
                <a href="mailto:nodalofficer@myvestige.com" className="text-blue-700 text-xs hover:underline block break-all">
                  nodalofficer@myvestige.com
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block">Vestige Voice Magazine:</span>
                <a href="mailto:voice@myvestige.com" className="text-blue-700 text-xs hover:underline">voice@myvestige.com</a>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="font-semibold text-slate-900 block mb-2">Our CSR Initiative:</span>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                  <img 
                    src="https://global.myvestige.com/images/brand/06.png" 
                    alt="Vestige Heart to Heart" 
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = 'https://vestdata.s3.ap-southeast-1.amazonaws.com/brands/img06.png';
                    }}
                  />
                  <div>
                    <strong className="block text-xs text-slate-900">Vestige Heart to Heart</strong>
                    <span className="text-[11px] text-slate-500">Impacting lives through education, health &amp; community aid.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
