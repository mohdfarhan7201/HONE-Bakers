/**
 * HONE Bakes — Main Application Orchestrator
 * Bootstraps components, handles bilingual switching, and coordinates UI state.
 */

import { BRAND_CONFIG } from './config.js';
import { TRANSLATIONS } from './translations.js';
import { renderProducts, initProductModal } from './products.js';
import { initGallery } from './gallery.js';
import { initOrderForm } from './form.js';
import { initAnimations } from './animations.js';

class HoneApp {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.currentCategory = 'all';
    this.animationEngine = null;
  }

  detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang && (paramLang === 'zh' || paramLang === 'en')) {
      return paramLang;
    }
    const saved = localStorage.getItem('hone_bakes_lang');
    if (saved && (saved === 'zh' || saved === 'en')) {
      return saved;
    }
    return 'en';
  }

  init() {
    // 1. Initialise core bilingual text
    this.applyTranslations(this.currentLang);

    // 2. Render Products & Modal
    renderProducts('products-grid', this.currentCategory, this.currentLang);
    initProductModal(this.currentLang);

    // 3. Render Gallery & Lightbox
    initGallery(this.currentLang);

    // 4. Initialise Order Form
    initOrderForm(this.currentLang);

    // 5. Initialise Animations (GSAP + Lenis)
    this.animationEngine = initAnimations();

    // 6. UI Listeners
    this.setupNavigation();
    this.setupLanguageSwitcher();
    this.setupCategoryFilters();
    this.setupBackToTop();
    this.setupAudioAmbience();
    this.setupSignatureLayers();

    console.log(`%c HONE BAKES %c Artisan Bakery Singapore %c Loaded (${this.currentLang.toUpperCase()}) `, 
      'background: #35271F; color: #FFFDF8; font-weight: bold; padding: 4px;',
      'background: #7D8964; color: #FFFDF8; padding: 4px;',
      'background: #F7F1E8; color: #35271F; padding: 4px;'
    );
  }

  applyTranslations(lang) {
    this.currentLang = lang;
    localStorage.setItem('hone_bakes_lang', lang);
    document.documentElement.lang = lang;

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Translate all standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update Language Switcher UI Active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update document title and meta description
    if (lang === 'zh') {
      document.title = "HONE Bakes — 新加坡日式手作烘焙坊 | 经典抹茶黑芝麻麻薯蛋糕";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'HONE Bakes 新加坡母女手作烘焙工坊。精选日本京都宇治丸久小山园抹茶、慢酵酸种日式盐面包与斑兰雪纺蛋糕。珊顿道实体工作室每周限量出炉。');
      }
    } else {
      document.title = "HONE Bakes — Artisan Bakery Singapore | OG Matcha Black Sesame Gateau";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'HONE Bakes is an independent mother-daughter artisan bakery studio in Singapore, famed for the OG Matcha Black Sesame Gateau, sourdough shio pan, and cloud chiffons.');
      }
    }
  }

  setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang !== this.currentLang) {
          this.applyTranslations(selectedLang);
          // Re-render language-dependent components
          renderProducts('products-grid', this.currentCategory, selectedLang);
          initGallery(selectedLang);
        }
      });
    });
  }

  setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-tab-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        this.currentCategory = btn.getAttribute('data-filter') || 'all';
        renderProducts('products-grid', this.currentCategory, this.currentLang);

        if (this.animationEngine && this.animationEngine.animateProductCards) {
          this.animationEngine.animateProductCards();
          this.animationEngine.refreshScroll();
        } else if (typeof gsap !== 'undefined') {
          gsap.from('.product-card', {
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });
    });
  }

  setupNavigation() {
    const header = document.querySelector('.site-header');
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-drawer__nav a');

    // Sticky nav on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    }, { passive: true });

    // Mobile Drawer toggle
    if (toggleBtn && mobileDrawer) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        toggleBtn.classList.toggle('is-active', isOpen);
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        document.body.classList.toggle('menu-open', isOpen);
      });

      // Close on link click
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          toggleBtn.classList.remove('is-active');
          toggleBtn.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('menu-open');
        });
      });
    }

    // Active link highlighting via IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.site-nav__link');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('is-current');
              } else {
                link.classList.remove('is-current');
              }
            });
          }
        });
      }, { rootMargin: '-30% 0px -60% 0px' });

      sections.forEach(sec => observer.observe(sec));
    }
  }

  setupBackToTop() {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backBtn.classList.add('is-visible');
      } else {
        backBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      if (this.animationEngine && this.animationEngine.lenis) {
        this.animationEngine.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  setupAudioAmbience() {
    const audioBtn = document.getElementById('sound-toggle');
    if (!audioBtn) return;

    // Use Web Audio API for subtle soft acoustic baking bell chime (zero external audio file dependency)
    let audioCtx = null;
    let soundEnabled = false;

    function playSoftChime() {
      if (!soundEnabled) return;
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        // Warm harmonious bell frequency
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5

        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
      } catch (e) {
        console.log("Audio not supported or blocked");
      }
    }

    audioBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      audioBtn.classList.toggle('sound-on', soundEnabled);
      audioBtn.setAttribute('aria-pressed', soundEnabled ? 'true' : 'false');
      
      const soundStatus = audioBtn.querySelector('.sound-status-text');
      if (soundStatus) {
        soundStatus.textContent = soundEnabled ? 'Sound: ON' : 'Sound: OFF';
      }

      if (soundEnabled) {
        playSoftChime();
      }
    });

    // Soft chime on primary button hover when sound is enabled
    document.querySelectorAll('.btn-primary, .product-card').forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (soundEnabled) playSoftChime();
      });
    });
  }

  setupSignatureLayers() {
    const tabs = document.querySelectorAll('.sig-layer-tab');
    const cards = document.querySelectorAll('.signature-layer-card');
    const indicator = document.getElementById('sig-active-layer-indicator');

    const layerTexts = {
      'all': 'Marukyu Koyamaen Uji Matcha · Charcoal Sesame',
      '1': 'Layer 01: Bittersweet Uji Matcha Fudge Base (95% Intensity)',
      '2': 'Layer 02: Hand-Pulled Charcoal Black Sesame Mochi (90% Chew)',
      '3': 'Layer 03: Stone-Ground Sesame & Japanese Cream Ganache (85% Aroma)',
      '4': 'Layer 04: Ceremonial Green Tea Finishing Dusting (80% Floral)'
    };

    function selectLayer(layerId) {
      tabs.forEach(t => {
        t.classList.toggle('is-active', t.dataset.layer === layerId);
      });
      cards.forEach(c => {
        if (layerId === 'all') {
          c.classList.remove('is-active');
        } else {
          c.classList.toggle('is-active', c.dataset.layer === layerId);
        }
      });
      if (indicator && layerTexts[layerId]) {
        indicator.textContent = layerTexts[layerId];
      }
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        selectLayer(tab.dataset.layer);
      });
    });

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const layerId = card.dataset.layer;
        const currentActive = card.classList.contains('is-active');
        selectLayer(currentActive ? 'all' : layerId);
      });
    });
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new HoneApp();
  app.init();
});
