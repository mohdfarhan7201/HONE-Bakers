/**
 * HONE Bakes — GSAP 3 & Lenis Smooth Scroll Animation Engine
 * Comprehensive full-website scroll-based animation suite inspired by luxury Japanese pastry studios.
 */

let globalLenis = null;

export function refreshScroll() {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Initialize Lenis Smooth Scroll
  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    try {
      globalLenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      if (typeof ScrollTrigger !== 'undefined') {
        globalLenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          globalLenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // Handle anchor clicks smoothly with Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
              e.preventDefault();
              globalLenis.scrollTo(targetEl, { offset: -60, duration: 1.3 });
            }
          }
        });
      });
    } catch (e) {
      console.warn("Lenis initialization fallback:", e);
    }
  }

  // 2. Premium Loader Sequence
  const loader = document.getElementById('site-loader');
  const loaderProgress = document.getElementById('loader-progress-bar');
  const loaderText = document.getElementById('loader-wordmark');

  if (loader) {
    if (prefersReducedMotion) {
      loader.style.display = 'none';
      initHeroAnimations();
      initFullSiteScrollAnimations();
    } else {
      const loaderTl = gsap.timeline({
        onComplete: () => {
          loader.classList.add('is-finished');
          setTimeout(() => {
            if (loader.parentNode) loader.style.display = 'none';
          }, 800);
          initHeroAnimations();
          initFullSiteScrollAnimations();
        }
      });

      loaderTl
        .to(loaderProgress, { width: '100%', duration: 0.9, ease: 'power2.inOut' })
        .to(loaderText, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, "-=0.7")
        .to(loader, { opacity: 0, scale: 1.02, duration: 0.6, ease: 'power2.inOut', delay: 0.1 });
    }
  } else {
    initHeroAnimations();
    initFullSiteScrollAnimations();
  }

  // 3. Hero Entrance Timeline
  function initHeroAnimations() {
    if (prefersReducedMotion) return;

    const heroTl = gsap.timeline({ delay: 0.1 });

    heroTl
      .from('.hero__badge', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.hero__title-line', {
        y: '105%',
        duration: 1.05,
        stagger: 0.12,
        ease: 'power4.out'
      }, "-=0.6")
      .from('.hero__description', {
        opacity: 0,
        y: 22,
        duration: 0.85,
        ease: 'power3.out'
      }, "-=0.7")
      .from('.hero__actions .btn', {
        opacity: 0,
        y: 20,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.6")
      .from('.hero__visual-media', {
        opacity: 0,
        scale: 0.94,
        duration: 1.2,
        ease: 'power3.out'
      }, "-=0.9")
      .from('.hero__floating-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'back.out(1.4)'
      }, "-=0.5")
      .from('.hero__scroll-indicator', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, "-=0.4");
  }

  // 4. Comprehensive Full-Website Scroll-Based Animations
  function initFullSiteScrollAnimations() {
    if (typeof ScrollTrigger === 'undefined' || prefersReducedMotion) return;

    // A. Global Top Reading Progress Indicator (Scrubbed to 100% of Document)
    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2
        }
      });
    }

    // B. Hero Section Scroll Parallax (Multiple Depth Planes)
    gsap.to('.hero__visual-media img', {
      yPercent: 18,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.hero__floating-card', {
      yPercent: 35,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      }
    });

    gsap.to('.hero__content-column', {
      yPercent: 10,
      opacity: 0.85,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'center top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // C. Section Headers Reveal (Class .sec-reveal)
    gsap.utils.toArray('.sec-reveal').forEach((elem) => {
      gsap.from(elem, {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    // D. Story Section Image Parallax & Floating Accent
    gsap.to('.story__media-primary img', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.story',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      }
    });

    gsap.to('.story__media-accent', {
      yPercent: -22,
      rotation: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: '.story',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.4
      }
    });

    // E. Product Cards Staggered Scroll Entrance & Image Pan
    animateProductCards();

    // F. Signature Section (The OG Gateau) — Zero Lag, Immediate Fluid Entrance
    // 1. Sticky Cake Image Smooth Parallax
    gsap.to('.signature-story__media-frame img', {
      yPercent: 10,
      scale: 1.04,
      ease: 'none',
      scrollTrigger: {
        trigger: '#signature',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // 2. Signature 4-Layers Staggered Entrance (Starts smoothly as section enters viewport)
    gsap.fromTo('.signature-layer-card', 
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.09,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#signature',
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 3. Gauge Meters Fill on Scroll
    gsap.fromTo('.gauge-fill', 
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1.1,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#signature',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // G. Craft & Philosophy Section — Kinetic Text Ribbon Scrub
    gsap.to('.kinetic-text-track', {
      xPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#craft',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.9
      }
    });

    // Craft Cards Multi-Plane Depth Lifts
    const craftCards = gsap.utils.toArray('.philosophy-card');
    if (craftCards.length >= 3) {
      gsap.to(craftCards[0], {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: { trigger: '#craft', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
      gsap.to(craftCards[1], {
        yPercent: -15, // Center card floats higher for dynamic rhythm
        ease: 'none',
        scrollTrigger: { trigger: '#craft', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      });
      gsap.to(craftCards[2], {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: '#craft', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }

    // Parallax inside Philosophy Card Images
    gsap.utils.toArray('.philosophy-card__media img').forEach(img => {
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });

    // H. Gallery Section — Multi-Column Alternating Parallax Scrub
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
      const speed = index % 2 === 0 ? 10 : -8;
      gsap.to(item, {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '#gallery',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    });

    // I. Studio Location Section Entrance
    gsap.from('.location-card', {
      opacity: 0,
      x: -30,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#location',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.location-map-wrap', {
      opacity: 0,
      x: 30,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#location',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // J. Order Form Section Entrance
    gsap.from('.order-perk', {
      opacity: 0,
      y: 25,
      stagger: 0.1,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#order',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.order-form-card', {
      opacity: 0,
      y: 35,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#order',
        start: 'top 78%',
        toggleActions: 'play none none none'
      }
    });

    // K. Ambient floating element micro-motions
    gsap.to('.float-element', {
      y: -8,
      rotation: 1,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Refresh after all images are loaded
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // 5. Product Cards Animation Helper (Callable when filters change)
  function animateProductCards() {
    if (typeof ScrollTrigger === 'undefined' || prefersReducedMotion) return;

    gsap.fromTo('.product-card', 
      { opacity: 0, y: 35, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.07,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#products-grid',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Parallax on each card image
    gsap.utils.toArray('.product-card__image-wrap img').forEach(img => {
      gsap.to(img, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.product-card'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  // 6. Interactive Custom Cursor (Desktop Only)
  if (window.innerWidth >= 1024 && !prefersReducedMotion) {
    const cursorDot = document.getElementById('custom-cursor');
    if (cursorDot) {
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function renderCursor() {
        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;
        cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(renderCursor);
      }
      requestAnimationFrame(renderCursor);

      // Enlarge cursor on interactive links
      document.querySelectorAll('a, button, .product-card, .gallery-item, .sig-layer-tab, .signature-layer-card').forEach((el) => {
        el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-expanded'));
        el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-expanded'));
      });
    }
  }

  return { 
    lenis: globalLenis,
    animateProductCards,
    refreshScroll
  };
}
