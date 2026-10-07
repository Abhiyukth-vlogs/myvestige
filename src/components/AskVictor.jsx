import React, { useState, useRef, useEffect } from 'react';
import { useRegion, REGIONS } from '../context/RegionContext.jsx';

export const AskVictor = () => {
  const { region, selectedCountry } = useRegion();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Hello! I am Victor, your Vestige Digital Assistant. How can I help you today?'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (queryText) => {
    const text = queryText || inputText;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputText('');

    // Formulate bot response
    setTimeout(() => {
      const q = text.toLowerCase();
      let reply = '';

      if (q.includes('consistency') || q.includes('100 pv')) {
        reply = '🌟 100 PV Consistency Scheme: Purchase 100 PV products continuously for 4 consecutive months and receive ₹2,500 worth of free products!';
      } else if (q.includes('distributor') || q.includes('join')) {
        reply = '💼 Distributor Registration: Joining Vestige is 100% free with Zero Joining Fee under IDSA guidelines. Click the Distributor Login or Join As Distributor button!';
      } else if (q.includes('order') || q.includes('track')) {
        reply = `📦 Order Tracking: Orders over ₹1,000 ship free across India! Track active orders in your Distributor Portal or contact ${selectedCountry.phone}.`;
      } else if (q.includes('branch') || q.includes('dlcp') || q.includes('store')) {
        reply = region === REGIONS.INDIA
          ? '📍 Branch Locator: Vestige has over 3,500+ DLCPs and Mini-DLCPs across India. Visit the Vestige Branches link in the top bar to locate your district branch.'
          : `📍 Global Branches: Vestige operates direct international country offices across UAE, Saudi Arabia, Bangladesh, Ghana, Philippines, and Ivory Coast.`;
      } else {
        reply = `✨ Victor: Thank you for your inquiry about "${text}". For detailed orders or distributor sponsorship, please contact our support at ${selectedCountry.phone} or visit your nearest branch. Wish You Wellth!`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <div className="floating-ask-victor-wrap" id="ask-victor-container">
      {/* Victor Chat Dialog */}
      <div className={`victor-chat-dialog ${isOpen ? 'active' : ''}`} id="victor-dialog">
        <div className="victor-chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="victor-avatar">V</div>
            <div>
              <strong style={{ fontSize: '0.95rem', display: 'block' }}>Victor - Vestige AI Assistant</strong>
              <span style={{ fontSize: '0.72rem', color: '#34d399' }}>● Online | 24/7 Support</span>
            </div>
          </div>
          <button
            type="button"
            id="close-victor-btn"
            onClick={() => setIsOpen(false)}
            style={{ color: 'white', fontSize: '1.1rem', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        <div className="victor-chat-body" id="victor-chat-messages">
          {messages.map((m, idx) => (
            <div
              key={idx}
              style={
                m.sender === 'user'
                  ? {
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      margin: '8px 0',
                      textAlign: 'right',
                      fontSize: '0.85rem'
                    }
                  : {
                      background: '#f1f5f9',
                      color: '#0f172a',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      margin: '8px 0',
                      fontSize: '0.85rem',
                      lineHeight: '1.5'
                    }
              }
            >
              {m.text}
            </div>
          ))}

          {/* Quick prompt buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleSend('100 PV Consistency Scheme')}
              style={{ padding: '6px 12px', fontSize: '0.76rem', textAlign: 'left' }}
            >
              🌟 Explain 100 PV Consistency Offer
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleSend('Join As Distributor')}
              style={{ padding: '6px 12px', fontSize: '0.76rem', textAlign: 'left' }}
            >
              💼 How do I become a Distributor?
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleSend('Track Order')}
              style={{ padding: '6px 12px', fontSize: '0.76rem', textAlign: 'left' }}
            >
              📦 Track my Product Order / PV
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleSend('Branch Locator')}
              style={{ padding: '6px 12px', fontSize: '0.76rem', textAlign: 'left' }}
            >
              📍 Find Nearest DLCP Store
            </button>
          </div>
          <div ref={messagesEndRef} />
        </div>

        <div className="victor-chat-footer">
          <input
            type="text"
            id="victor-input"
            placeholder="Type your query here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--surface-border)', borderRadius: '8px', fontSize: '0.85rem' }}
          />
          <button
            type="button"
            id="victor-send-btn"
            className="btn btn-primary"
            onClick={() => handleSend()}
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        id="ask-victor-trigger-btn"
        className="ask-victor-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="victor-avatar">V</div>
        <span>Need Help? Ask Victor</span>
      </button>
    </div>
  );
};
