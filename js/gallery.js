/**
 * HONE Bakes — Visual Journal & Accessible Lightbox
 * Displays an editorial gallery and provides keyboard/swipe accessible lightbox.
 */

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    src: "assets/images/hone-bakes-artisan-baking-studio.jpg",
    alt: "Artisan bakers in linen aprons dusting delicate Uji matcha over a cake in the sunlit studio",
    captionEn: "Morning studio rituals: Dusting Marukyu Koyamaen matcha over slow-baked layers.",
    captionZh: "工作室晨光时刻：为慢烤蛋糕细细筛落京都丸久小山园抹茶粉。",
    orientation: "portrait",
    aspect: "standard"
  },
  {
    id: "gal-2",
    src: "assets/images/hone-bakes-matcha-black-sesame-gateau.jpg",
    alt: "Signature Matcha Black Sesame Gateau with mochi center on speckled ceramic plate",
    captionEn: "The OG Slice: Uji matcha fudge, charcoal sesame cream, and our signature mochi core.",
    captionZh: "镇店之作：宇治抹茶生巧底，石磨黑芝麻甘纳许与手作拉丝麻薯。",
    orientation: "landscape",
    aspect: "wide"
  },
  {
    id: "gal-3",
    src: "assets/images/hone-bakes-pandan-chiffon-cake.jpg",
    alt: "Tall Pandan Gula Melaka Chiffon Cake with toasted coconut flakes and palm sugar drizzle",
    captionEn: "Southeast Asian heritage: Fresh cold-pressed pandan leaf chiffon with pure Malaccan palm sugar.",
    captionZh: "南洋传统风味：纯鲜榨斑兰叶汁慢蒸烤雪纺，淋上马六甲古法纯椰糖。",
    orientation: "landscape",
    aspect: "wide"
  },
  {
    id: "gal-4",
    src: "assets/images/hone-bakes-matcha-whisk.jpg",
    alt: "Ceremonial bamboo matcha whisk chasen and vibrant green matcha bowl",
    captionEn: "Honouring the leaf: Whisking single-origin Japanese ceremonial green tea.",
    captionZh: "静心点茶：选用日本宇治单一产地仪式级抹茶，茶汤鲜翠浓醇。",
    orientation: "square",
    aspect: "standard"
  },
  {
    id: "gal-5",
    src: "assets/images/hone-bakes-sourdough-shio-pan.jpg",
    alt: "Freshly baked golden Japanese sourdough shio pan with glistening sea salt flakes",
    captionEn: "24-hour slow fermentation: Shatteringly crisp bottoms and melting French butter.",
    captionZh: "24小时低温慢酵：金黄酥脆的黄油底壳与片状海盐的绝妙咸香。",
    orientation: "portrait",
    aspect: "standard"
  },
  {
    id: "gal-6",
    src: "assets/images/hone-bakes-packaging.jpg",
    alt: "Warm cream bakery gift box with ribbon and dried botanical accents",
    captionEn: "Crafted to be gifted: Hand-tied ribbons, linen paper, and heartfelt baking notes.",
    captionZh: "心意礼赞：雅致系带温润纸盒，附上手写赏味卡片，为分享而生。",
    orientation: "landscape",
    aspect: "wide"
  }
];

export function initGallery(currentLang = "en") {
  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  if (!grid) return;

  // Render Grid
  grid.innerHTML = GALLERY_ITEMS.map((item, index) => {
    const caption = currentLang === "zh" ? item.captionZh : item.captionEn;
    return `
      <div class="gallery-item gallery-item--${item.aspect}" data-index="${index}" role="button" tabindex="0" aria-label="Open image: ${item.alt}">
        <div class="gallery-item__inner">
          <img src="${item.src}" alt="${item.alt}" class="gallery-item__img" loading="lazy" width="600" height="600" />
          <div class="gallery-item__overlay">
            <span class="gallery-item__zoom-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </span>
            <p class="gallery-item__caption-preview">${caption}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (!lightbox) return;

  let currentIndex = 0;

  function showLightbox(index) {
    if (index < 0) index = GALLERY_ITEMS.length - 1;
    if (index >= GALLERY_ITEMS.length) index = 0;
    currentIndex = index;

    const item = GALLERY_ITEMS[currentIndex];
    const caption = currentLang === "zh" ? item.captionZh : item.captionEn;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = caption;

    lightbox.classList.add("is-active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (lightboxClose) lightboxClose.focus();
  }

  function hideLightbox() {
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // Click & keyboard events on items
  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-index"), 10);
      showLightbox(idx);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const idx = parseInt(el.getAttribute("data-index"), 10);
        showLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", hideLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => showLightbox(currentIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => showLightbox(currentIndex + 1));

  // Lightbox overlay click to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox__container")) {
      hideLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-active")) return;
    if (e.key === "Escape") hideLightbox();
    if (e.key === "ArrowLeft") showLightbox(currentIndex - 1);
    if (e.key === "ArrowRight") showLightbox(currentIndex + 1);
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      showLightbox(currentIndex + 1); // Swiped left -> next
    } else if (touchEndX - touchStartX > 50) {
      showLightbox(currentIndex - 1); // Swiped right -> prev
    }
  }, { passive: true });
}
