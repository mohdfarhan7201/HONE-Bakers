# HONE Bakes — Premium Animated Website & Brand Experience

A luxury digital bakery experience designed and crafted for **HONE Bakes Singapore** (`@hone.bakes`), combining the aesthetic warmth of an independent editorial food magazine, a contemporary Japanese-inspired dessert studio, and creative agency motion design.

---

## 1. Project Overview & Creative Direction

- **Brand:** HONE Bakes (`@hone.bakes`)
- **Founders:** Mother & daughter duo
- **Origins:** Started as an artisanal Instagram home-baking venture in Singapore, famous for Korean/Japanese-style gateau cakes with chewy mochi cores, cloud chiffons, and wild-fermented sourdough shio pan.
- **Physical Studio:** 70 Shenton Way, EON Shenton, #01-13, Singapore 079118 (CBD micro-bakery & pre-order pick-up studio).
- **Core Aesthetic:** Warm cream (`#F7F1E8`), soft ivory (`#FFFDF8`), deep cocoa (`#35271F`), ceremonial matcha green (`#7D8964`), and caramel brown (`#B78052`), paired with editorial serif typography (`Cormorant Garamond`) and modern grotesque sans-serif (`DM Sans`).

---

## 2. Research & Business Verification Status

In accordance with strict brand accuracy guidelines, the table below documents which business details are verified from public records versus provided as configurable demo defaults:

| Detail | Status | Source / Notes |
| :--- | :--- | :--- |
| **Brand Name & Wordmark** | Verified | Instagram `@hone.bakes` |
| **Founders** | Verified | Mother-daughter founding duo |
| **Physical Studio Address** | Verified | 70 Shenton Way, EON Shenton, #01-13, Singapore 079118 |
| **Signature: Matcha Black Sesame Gateau** | Verified | Renowned for Marukyu Koyamaen Uji matcha + black sesame mochi core |
| **Signature: Pandan Gula Melaka Chiffon** | Verified | Popular home-baked and studio item |
| **Signature: Sourdough Shio Pan & Bagels**| Verified | In-house 24hr fermented bakes with flaky salt |
| **Ordering Model** | Verified | Instagram DM drops & scheduled studio pick-ups |
| **Exact Operating Hours** | Demo Config | Configured as Wed–Sun (11:30 AM–5:30 PM); editable in `js/config.js` |
| **Whole Cake Prices** | Demo Range | Indicated as enquiry-based studio ranges ($50–$88 SGD); finalize with owner |
| **Direct WhatsApp Number** | Not Fabricated | Kept as official Instagram DM link (`https://ig.me/m/hone.bakes`) |

All configurable items can be updated in a single place: [`js/config.js`](file:///c:/Users/Dell/Desktop/Cafe/js/config.js).

---

## 3. Mandatory Tech Stack & Architecture

- **Core:** Semantic HTML5 & Vanilla JavaScript (ES6+ Modules)
- **Styling:** Vanilla CSS3 with fluid typography (`clamp()`), CSS Custom Properties (Tokens), and full responsive media queries (1440px down to 320px).
- **Animation Engine:** GSAP 3.12.5 + ScrollTrigger via CDN
- **Smooth Scrolling:** Studio Freight Lenis 1.1.9 smoothly synchronized with GSAP ticker
- **Typography:** Google Fonts (`Cormorant Garamond`, `DM Sans`, `Noto Serif SC`, `Noto Sans SC`)
- **Icons:** Lightweight inline SVGs inspired by Lucide Icons
- **No frameworks:** Zero React, Next.js, Tailwind, Bootstrap, or jQuery. Runs natively in any modern browser without a build step.

---

## 4. File Structure

```text
c:\Users\Dell\Desktop\Cafe/
├── index.html                 # Main website with all 12 sections
├── 404.html                   # Customized 404 error experience
├── robots.txt                 # Search crawler instructions
├── sitemap.xml                # Multilingual XML sitemap
├── site.webmanifest           # PWA web manifest metadata
├── humans.txt                 # Credits & craftsmanship metadata
├── favicon.svg                # Brand logo SVG favicon
├── README.md                  # Complete documentation & handoff guide
├── assets/
│   ├── images/                # High-res photography & assets
│   │   ├── hone-bakes-matcha-black-sesame-gateau.jpg
│   │   ├── hone-bakes-artisan-baking-studio.jpg
│   │   ├── hone-bakes-pandan-chiffon-cake.jpg
│   │   ├── hone-bakes-earl-grey-chocolate-gateau.jpg
│   │   ├── hone-bakes-lemon-pistachio-gateau.jpg
│   │   ├── hone-bakes-sourdough-shio-pan.jpg
│   │   ├── hone-bakes-sourdough-bagels.jpg
│   │   ├── hone-bakes-matcha-cookies.jpg
│   │   ├── hone-bakes-matcha-whisk.jpg
│   │   └── hone-bakes-packaging.jpg
│   └── icons/
├── css/
│   ├── style.css              # Core tokens, layout, typography, components
│   ├── animations.css         # Keyframes, transitions, reduced-motion overrides
│   └── responsive.css         # Breakpoints: 1280px, 1024px, 768px, 480px, 320px
└── js/
    ├── config.js              # Editable brand constants, address, social links
    ├── translations.js        # Full bilingual dictionary (English & 简体中文)
    ├── products.js            # Product catalog, category filters, detail modal
    ├── gallery.js             # Visual masonry grid & accessible lightbox
    ├── form.js                # Enquiry validation, date picker, IG direct CTA
    ├── animations.js          # GSAP timeline, parallax, layer reveals, Lenis sync
    └── main.js                # App lifecycle, mobile menu, language switcher, audio
```

---

## 5. Key Functional & Interactive Features

1. **Bilingual Switching (EN / 简体中文):**
   - Click the language selector in the header to instantaneously switch the entire site's visible text, product names, form placeholders, and SEO meta tags.
   - Preserves user preference in `localStorage`.
2. **Accessible Lightbox:**
   - Click any photo in the *Visual Journal* to open the lightbox.
   - Navigate with `ArrowLeft`, `ArrowRight`, `Escape`, or touch swipe gestures on mobile.
3. **Product Detail Modal & Flavour Profiles:**
   - Click *Discover Profile* on any bake card to open an editorial drawer containing flavour notes, portion sizes, storage instructions, and allergen information.
   - Clicking *Enquire for This Bake* automatically pre-selects the item in the consultation form and smoothly scrolls to it.
4. **Order Consultation & Instagram Integration:**
   - Validates customer name, phone / email / @handle, bake choice, and date.
   - Generates a confirmation receipt modal with a direct link to connect with Kelly on Instagram DM.
5. **Acoustic Audio Ambience Toggle:**
   - A soft, gentle chime rendered on-the-fly via the Web Audio API (zero audio file downloads required).
6. **Accessibility & Core Web Vitals:**
   - Honors `prefers-reduced-motion` to disable GSAP animations gracefully.
   - High-priority LCP loading on the hero image with `fetchpriority="high"`.
   - Lazy loading on below-the-fold media with explicit dimensions to prevent Cumulative Layout Shift (CLS).

---

## 6. How to Run Locally

Because the project uses standard ES6 modules (`import/export`), it should be served via any local HTTP server:

### Option A: Using Python (Pre-installed on most systems)
```bash
# In the project directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option B: Using Node.js `npx serve`
```bash
npx -y serve .
```

### Option C: VS Code / IDE Live Server
Right click `index.html` and choose **"Open with Live Server"**.

---

## 7. Deployment Instructions

### GitHub Pages
1. Push this folder to a GitHub repository.
2. In **Settings** > **Pages**, choose the `main` branch root `/` folder as the source.
3. Your site will be live instantly on `https://<username>.github.io/<repo>/`.

### Netlify or Vercel
- Drag and drop the folder directly into the Netlify dashboard, or run `vercel` in the terminal. No build command is required.
