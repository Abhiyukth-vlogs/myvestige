/**
 * global.myvestige.com - 1:1 Exact Global Portal Replication
 * High-performance ES Module with Anti-Gravity UI Micro-Interactions
 * Complete interactive wireframe matching 100% of global.myvestige.com features
 */

import { products } from './data/products.js';
import { brands } from './data/brands.js';

// ============================================================================
// 0. Global Toast Notification System
// ============================================================================
export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.style.cssText = `
    padding: 12px 20px;
    background: #0f172a;
    color: #ffffff;
    border-left: 4px solid ${type === 'info' ? '#38bdf8' : type === 'warning' ? '#f59e0b' : '#10b981'};
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.88rem;
    font-weight: 500;
    animation: fadeInDown 0.25s ease;
    z-index: 99999;
  `;

  const iconColor = type === 'info' ? '#38bdf8' : type === 'warning' ? '#f59e0b' : '#10b981';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 300ms ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
if (typeof window !== 'undefined') {
  window.showToast = showToast;
}

// ============================================================================
// 1. Anti-Gravity Canvas Particle Physics Engine
// ============================================================================
function initAntiGravityCanvas() {
  const canvas = document.getElementById('antigravity-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: width / 2, y: height / 2, active: false };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  const particlesCount = Math.min(Math.floor(window.innerWidth / 20), 60);
  const particles = [];
  const colors = ['#1f579c', '#059669', '#38bdf8', '#f59e0b', '#2563eb'];

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.12, // zero-g upward lift
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.35 + 0.15,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      pulseAngle: Math.random() * Math.PI * 2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.1;
          p.y -= (dy / dist) * force * 1.1;
        }
      }

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      p.pulseAngle += p.pulseSpeed;
      const currentRadius = p.radius + Math.sin(p.pulseAngle) * 0.4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      for (let j = idx + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 85) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#1f579c';
          ctx.globalAlpha = (1 - dist / 85) * 0.08;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================================
// 2. 3D Parallax Tilt Physics for Anti-Gravity Cards
// ============================================================================
function setup3DParallaxTilt() {
  const cards = document.querySelectorAll('.antigravity-card-3d');
  cards.forEach((card) => {
    if (card.dataset.tiltInit) return;
    card.dataset.tiltInit = 'true';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    });
  });
}

// ============================================================================
// 3. Global Banner Slider with Vertical Navigation Dots
// ============================================================================
function setupGlobalBannerSlider() {
  const track = document.getElementById('banner-track');
  const dotsContainer = document.getElementById('banner-dots');
  const slider = document.getElementById('banner-slider');
  if (!track || !dotsContainer || !slider) return;

  const slides = track.querySelectorAll('.banner-item');
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  // Generate vertical navigation dots
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `banner-vertical-dot ${i === 0 ? 'active' : ''}`;
    dot.title = `Banner Slide ${i + 1}`;
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  }

  const allDots = dotsContainer.querySelectorAll('.banner-vertical-dot');

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    allDots.forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    startAutoplay();
  }

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

// ============================================================================
// 4. Onstart Popup Modal (MOM Nail Lacquer Announcement)
// ============================================================================
function setupOnstartModal() {
  const modal = document.getElementById('onstartmodal');
  const closeBtn = document.getElementById('close-onstart-modal');
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

// ============================================================================
// 5. Country Flag Switcher Dropdown & Glassmorphism Region Switcher
// ============================================================================
function setupCountrySwitcher() {
  const triggerBtn = document.getElementById('switchcountry-btn');
  const dropdown = document.getElementById('country-dropdown');
  const currentFlag = document.getElementById('current-flag-img');
  const currentCountryName = document.getElementById('current-country-name');
  const countryBox = document.getElementById('country-box');
  const btnIndia = document.getElementById('toggle-india-portal');
  const btnGlobal = document.getElementById('toggle-global-portal');

  // Handle India / Global Unified Toggle
  if (btnIndia && btnGlobal) {
    btnIndia.addEventListener('click', () => {
      btnIndia.style.background = '#059669';
      btnIndia.style.color = 'white';
      btnGlobal.style.background = 'transparent';
      btnGlobal.style.color = '#cbd5e1';

      if (currentFlag) {
        currentFlag.src = 'https://vestdata.s3.ap-southeast-1.amazonaws.com/images/flag/india.jpg';
        currentFlag.alt = 'india';
      }
      if (currentCountryName) {
        currentCountryName.textContent = 'India';
      }
      dropdown?.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-country') === 'india');
      });
      showToast('Switched to www.myvestige.com (India Prime Portal)', 'success');
    });

    btnGlobal.addEventListener('click', () => {
      btnGlobal.style.background = '#1f579c';
      btnGlobal.style.color = 'white';
      btnIndia.style.background = 'transparent';
      btnIndia.style.color = '#cbd5e1';

      if (currentFlag) {
        currentFlag.src = 'https://vestdata.s3.ap-southeast-1.amazonaws.com/images/flag/uae.jpg';
        currentFlag.alt = 'uae';
      }
      if (currentCountryName) {
        currentCountryName.textContent = 'Global (UAE)';
      }
      dropdown?.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-country') === 'uae');
      });
      showToast('Switched to global.myvestige.com (Global Unified Hub)', 'info');
    });
  }

  if (!triggerBtn || !dropdown || !currentFlag) return;

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  dropdown.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.querySelectorAll('li').forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      const flagImg = item.querySelector('img');
      const countryCode = item.getAttribute('data-country');
      const text = item.textContent.trim();

      if (flagImg) {
        currentFlag.src = flagImg.src;
        currentFlag.alt = flagImg.alt;
      }
      if (currentCountryName) {
        currentCountryName.textContent = text.charAt(0) + text.slice(1).toLowerCase();
      }

      dropdown.classList.remove('show');
      showToast(`Selected Regional Portal: ${text} (${countryCode.toUpperCase()})`, 'info');
    });
  });

  document.addEventListener('click', (e) => {
    if (countryBox && !countryBox.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
}

// ============================================================================
// 6. Multi-Language Selection Modal
// ============================================================================
function setupLanguageModal() {
  const triggerBtn = document.getElementById('lang-trigger-btn');
  const modal = document.getElementById('multiLanguagePopUp');
  const closeBtn = document.getElementById('close-lang-modal');
  const selectedText = document.getElementById('languageSelectedText');

  if (!triggerBtn || !modal || !closeBtn) return;

  triggerBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  modal.querySelectorAll('.lang-choice-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (selectedText && lang) {
        selectedText.textContent = lang;
      }
      modal.classList.remove('active');
      showToast(`Language switched to ${lang}`, 'success');
    });
  });
}

// ============================================================================
// 7. Login & Forgot Password Modals
// ============================================================================
function setupLoginModals() {
  const loginTrigger = document.getElementById('login');
  const navLoginLink = document.getElementById('nav-login-link');
  const loginModal = document.getElementById('loginPopupModal');
  const closeLogin = document.getElementById('close-login-modal');

  const openForgotLink = document.getElementById('open-forgot-pwd');
  const forgotModal = document.getElementById('forgotpwdPopup');
  const closeForgot = document.getElementById('close-forgot-modal');
  const cancelForgot = document.getElementById('cancel-forgot-modal');

  const togglePwdBtn = document.getElementById('toggle-pwd-btn');
  const pwdInput = document.getElementById('login-pwd-input');

  function openLogin() {
    loginModal?.classList.add('active');
  }

  function closeLoginModal() {
    loginModal?.classList.remove('active');
  }

  loginTrigger?.addEventListener('click', openLogin);
  navLoginLink?.addEventListener('click', openLogin);
  closeLogin?.addEventListener('click', closeLoginModal);

  loginModal?.addEventListener('click', (e) => {
    if (e.target === loginModal) closeLoginModal();
  });

  // Password Visibility Toggle
  togglePwdBtn?.addEventListener('click', () => {
    if (!pwdInput) return;
    if (pwdInput.type === 'password') {
      pwdInput.type = 'text';
      togglePwdBtn.textContent = '🔒';
    } else {
      pwdInput.type = 'password';
      togglePwdBtn.textContent = '👁️';
    }
  });

  // Switch between Login and Forgot Password
  openForgotLink?.addEventListener('click', () => {
    closeLoginModal();
    forgotModal?.classList.add('active');
  });

  function closeForgotModal() {
    forgotModal?.classList.remove('active');
  }

  closeForgot?.addEventListener('click', closeForgotModal);
  cancelForgot?.addEventListener('click', closeForgotModal);

  forgotModal?.addEventListener('click', (e) => {
    if (e.target === forgotModal) closeForgotModal();
  });
}

// ============================================================================
// 8. Search Modal with Live Product Catalog
// ============================================================================
function setupSearchModal() {
  const searchBtn = document.getElementById('btnsearch');
  const searchModal = document.getElementById('searchmodal');
  const closeSearch = document.getElementById('close-search-modal');
  const searchInput = document.getElementById('popup-search-input');
  const searchSubmit = document.getElementById('popup-search-btn');
  const resultsBox = document.getElementById('search-popup-results');

  if (!searchBtn || !searchModal || !closeSearch) return;

  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    setTimeout(() => searchInput?.focus(), 100);
  });

  closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
  });

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.classList.remove('active');
  });

  function performSearch() {
    if (!searchInput || !resultsBox) return;
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      resultsBox.innerHTML = '<p style="font-size: 0.85rem; color: #64748b; padding: 10px 0;">Please enter keywords to search products, brands, or categories.</p>';
      return;
    }

    const matches = products.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">
          No products found matching "<strong>${query}</strong>". Try searching for <em>Flax Oil, Spirulina, Ayusante, Assure</em>.
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = matches.slice(0, 6).map(m => `
      <div style="display: flex; gap: 12px; align-items: center; padding: 10px; border-bottom: 1px solid #f1f5f9; transition: background 0.15s; cursor: pointer; border-radius: 6px;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
        <img src="${m.image}" alt="${m.title}" style="width: 44px; height: 44px; object-fit: contain; border-radius: 4px; background: #ffffff; border: 1px solid #e2e8f0; padding: 2px;">
        <div style="flex: 1;">
          <h4 style="font-size: 0.9rem; margin: 0; color: #1f579c;">${m.title}</h4>
          <span style="font-size: 0.78rem; color: #64748b;">${m.brand} • MRP: ₹${m.mrp} • DP: ₹${m.dp} • <strong>${m.pv} PV</strong></span>
        </div>
        <button style="background: #1f579c; color: white; padding: 4px 10px; font-size: 0.75rem; border-radius: 4px;">View</button>
      </div>
    `).join('');
  }

  searchInput?.addEventListener('input', performSearch);
  searchSubmit?.addEventListener('click', performSearch);
}

// ============================================================================
// 9. Grievance "Write to Us" Form Handling & Captcha
// ============================================================================
function setupGrievanceForm() {
  const msgInput = document.getElementById('txtMessage');
  const spanCount = document.getElementById('spanMessage');
  const captchaInput = document.getElementById('txtVerify');

  // Character Count Indicator
  if (msgInput && spanCount) {
    msgInput.addEventListener('input', () => {
      const remaining = 500 - msgInput.value.length;
      spanCount.textContent = `${Math.max(0, remaining)} Characters left`;
    });
  }

  // Intercept Form
  const grievanceForm = document.querySelector('.reachEnqForm form');
  if (grievanceForm) {
    grievanceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const distId = document.getElementById('txtDistId')?.value.trim();
      const name = document.getElementById('txtName')?.value.trim();
      const captchaVal = captchaInput?.value.trim();

      if (captchaVal !== '433985') {
        showToast('Invalid Captcha Code! Please enter 433985.', 'warning');
        captchaInput?.focus();
        return;
      }

      showToast(`Thank you ${name} (ID: ${distId})! Your grievance has been registered. Reference ID: VST-${Date.now().toString().slice(-6)}.`, 'success');
      grievanceForm.reset();
      if (spanCount) spanCount.textContent = '500 Characters left';
    });
  }
}

// ============================================================================
// 10. Victor AI Assistant Dialog
// ============================================================================
function setupVictorAssistant() {
  const triggerBtn = document.getElementById('ask-victor-trigger-btn');
  const bubbleHint = document.getElementById('victor-bubble-hint');
  const dialog = document.getElementById('victor-dialog');
  const closeBtn = document.getElementById('close-victor-btn');
  const sendBtn = document.getElementById('victor-send-btn');
  const input = document.getElementById('victor-input');
  const messages = document.getElementById('victor-chat-messages');

  function toggleDialog() {
    dialog?.classList.toggle('active');
  }

  triggerBtn?.addEventListener('click', toggleDialog);
  bubbleHint?.addEventListener('click', toggleDialog);
  closeBtn?.addEventListener('click', () => dialog?.classList.remove('active'));

  function handleQuery(queryText) {
    if (!queryText.trim() || !messages) return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'background: #e0f2fe; color: #0369a1; padding: 8px 12px; border-radius: 12px; margin: 8px 0; text-align: right; font-size: 0.85rem; font-weight: 500;';
    userMsg.textContent = queryText;
    messages.appendChild(userMsg);

    // AI Bot Response
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.style.cssText = 'background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 12px; margin: 8px 0; font-size: 0.85rem; line-height: 1.5; color: #0f172a;';

      const q = queryText.toLowerCase();
      if (q.includes('scheme') || q.includes('monthly') || q.includes('offer')) {
        botMsg.innerHTML = '🌟 <strong>Monthly Schemes & Consistency:</strong><br>Vestige offers the <strong>100 PV Consistency Offer</strong>: Purchase 100 PV products continuously for 4 consecutive months between the 2nd and 12th, and get a ₹2,500 product voucher FREE! Special Buy More Get More offers are live now.';
      } else if (q.includes('distributor') || q.includes('join') || q.includes('registration')) {
        botMsg.innerHTML = '💼 <strong>Distributor Business Center:</strong><br>Joining Vestige is 100% free under IDSA guidelines with zero registration fees. Access your business portal by clicking the <strong>LOGIN</strong> button with your 8-digit Distributor ID.';
      } else if (q.includes('courier') || q.includes('order') || q.includes('delivery') || q.includes('track')) {
        botMsg.innerHTML = '📦 <strong>Courier & Delivery:</strong><br>Orders over ₹1,000 ship free pan-India! Track active dispatches through your mobile app or contact our Toll-Free Helpline at <strong>1800 102 3424</strong>.';
      } else if (q.includes('branch') || q.includes('dlcp') || q.includes('store') || q.includes('location')) {
        botMsg.innerHTML = '📍 <strong>Branches & DLCPs:</strong><br>Vestige boasts 3,500+ branches and DLCP centers across India, along with international corporate locations in UAE, Saudi Arabia, Bangladesh, Ghana, Philippines, and Ivory Coast.';
      } else if (q.includes('product') || q.includes('catalogue') || q.includes('brand')) {
        botMsg.innerHTML = '🌿 <strong>World-Class Brands:</strong><br>Vestige features 18 authentic premium brands including <em>Ayusante, Assure, Assure Natural, Dentassure, Prime, Mistral of Milan, Skin Formula 9, and Invigo</em>.';
      } else {
        botMsg.innerHTML = `✨ <strong>Victor:</strong><br>Thank you for inquiring about "${queryText}". For specific account verification or sponsor details, please call customer care at <strong>1800 102 3424</strong> or WhatsApp <strong>+91 9315955844</strong>. Wish You Wellth!`;
      }

      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 400);

    if (input) input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn?.addEventListener('click', () => handleQuery(input?.value || ''));
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleQuery(input.value);
  });

  document.querySelectorAll('.victor-quick-prompt').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      if (q) handleQuery(q);
    });
  });
}

// ============================================================================
// 11. Awards & Recognition Carousel & Scroll To Top
// ============================================================================
function setupAwardsCarousel() {
  const prevBtn = document.getElementById('award-prev-btn');
  const nextBtn = document.getElementById('award-next-btn');
  const track = document.getElementById('award-carousel-track');
  if (!prevBtn || !nextBtn || !track) return;

  const awards = [
    {
      title: 'Vestige ET now award',
      img: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_01_9f3831e0ad.png'
    },
    {
      title: 'Global 100 awards',
      img: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_03_9492423bd8.png'
    },
    {
      title: "India's most trusted direct selling brand",
      img: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_04_254e738307.png'
    },
    {
      title: 'National Best Employer Brand 2021',
      img: 'https://prd-vestige-cms.s3.ap-southeast-1.amazonaws.com/Logo_Section_02_75a724239c.png'
    }
  ];

  let currentIdx = 0;

  function renderAwards() {
    track.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const award = awards[(currentIdx + i) % awards.length];
      const div = document.createElement('div');
      div.className = 'award-item';
      div.innerHTML = `
        <img src="${award.img}" alt="${award.title}">
        <h5 class="award-name">${award.title}</h5>
      `;
      track.appendChild(div);
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIdx = (currentIdx === 0) ? awards.length - 1 : currentIdx - 1;
    renderAwards();
  });

  nextBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % awards.length;
    renderAwards();
  });
}

function setupScrollToTop() {
  const btn = document.getElementById('scroll-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
      btn.style.transform = 'translateY(15px)';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================================
// 12. Application Bootstrap
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAntiGravityCanvas();
  setup3DParallaxTilt();
  setupGlobalBannerSlider();
  setupOnstartModal();
  setupCountrySwitcher();
  setupLanguageModal();
  setupLoginModals();
  setupSearchModal();
  setupGrievanceForm();
  setupVictorAssistant();
  setupAwardsCarousel();
  setupScrollToTop();

  console.log('global.myvestige.com 1:1 clone initialized successfully with Anti-Gravity UI.');
});

