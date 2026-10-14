/**
 * HONE Bakes — Products Catalog & Detail Modal Logic
 * Sourced from verified HONE Bakes signatures and actual customer favourites.
 */

export const PRODUCTS = [
  {
    id: "matcha-black-sesame-gateau",
    category: "gateaux",
    isSignature: true,
    nameEn: "OG Matcha Black Sesame Gateau",
    nameZh: "经典宇治抹茶黑芝麻麻薯蛋糕",
    taglineEn: "Uji Marukyu Koyamaen matcha fudge, roasted black sesame ganache & chewy mochi core.",
    taglineZh: "京都丸久小山园抹茶浓郁生巧底，石磨黑芝麻甘纳许与拉丝手作麻薯夹心。",
    image: "assets/images/hone-bakes-matcha-black-sesame-gateau.jpg",
    alt: "HONE Bakes slice of OG Matcha Black Sesame Gateau showing vibrant green matcha layers and black sesame mochi core on ceramic plate",
    badgeEn: "Iconic Signature",
    badgeZh: "镇店招牌",
    flavourNotes: ["Marukyu Koyamaen Matcha", "Stone-ground Sesame", "Chewy Mochi", "Velvety Cream"],
    detailsEn: "Our flagship creation that put HONE Bakes on Singapore's bakery map. Inspired by traditional Japanese tearooms, this cake unites bitter-sweet ceremonial Uji matcha with deeply roasted charcoal sesame. A hand-pulled mochi layer creates an irresistible textural surprise.",
    detailsZh: "让 HONE Bakes 在新加坡甜品界崭露头角的招牌力作。灵感源于日式传统茶室，将京都宇治丸久小山园抹茶的微苦醇厚，与深焙黑芝麻的坚果浓香交融。手工拉丝麻薯更带来独特的软糯嚼感。",
    specs: {
      serving: "Available in 6\" (6-8 pax) / 8\" (10-14 pax) or weekly studio slices",
      storage: "Keep chilled. Consume within 2-3 days for peak mochi chewiness.",
      allergens: "Contains Gluten, Dairy, Eggs, Sesame"
    }
  },
  {
    id: "pandan-gula-melaka-chiffon",
    category: "chiffon",
    isSignature: true,
    nameEn: "Pandan Gula Melaka Chiffon",
    nameZh: "经典斑兰椰糖云朵雪纺",
    taglineEn: "Feather-light natural pandan sponge drizzled with rich Malaccan palm sugar caramel.",
    taglineZh: "纯正鲜榨斑兰叶汁慢蒸烤雪纺，淋上马六甲古法纯椰糖焦糖浆。",
    image: "assets/images/hone-bakes-pandan-chiffon-cake.jpg",
    alt: "Tall pillowy Pandan Gula Melaka Chiffon Cake with toasted coconut flakes and golden syrup drip on white pedestal",
    badgeEn: "Pure Fresh Pandan",
    badgeZh: "鲜榨斑兰",
    flavourNotes: ["Cold-Pressed Pandan", "Pure Gula Melaka", "Toasted Coconut", "Airy Crumb"],
    detailsEn: "A heartfelt nod to Southeast Asian heritage. We steep and cold-press fresh pandan leaves for an authentic herbal fragrance and delicate jade color—completely free of artificial essences. Topped with smoky Gula Melaka and toasted coconut ribbons.",
    detailsZh: "向南洋传统风味致敬的温柔之作。每日手工清洗、冷萃新鲜斑兰叶，无任何人工香精与色素，天然翡翠色泽，搭配手工熬煮的马六甲烟熏椰糖与香脆椰子脆片。",
    specs: {
      serving: "7-inch classic chiffon ring (6-8 pax)",
      storage: "Best enjoyed fresh on collection day. Can be kept in an airtight container for 2 days.",
      allergens: "Contains Eggs, Gluten, Coconut"
    }
  },
  {
    id: "earl-grey-chocolate-gateau",
    category: "gateaux",
    isSignature: false,
    nameEn: "Earl Grey Dark Chocolate Gateau",
    nameZh: "伯爵茶浓郁黑巧层次蛋糕",
    taglineEn: "Citrus bergamot infused tea cream layered with 70% Belgian dark chocolate fudge.",
    taglineZh: "佛手柑清香伯爵茶浸润奶油，层叠70%比利时黑巧克力生巧蛋糕。",
    image: "assets/images/hone-bakes-earl-grey-chocolate-gateau.jpg",
    alt: "Decadent slice of Earl Grey Dark Chocolate Gateau with glossy ganache and tea leaf accents",
    badgeEn: "70% Belgian Cocoa",
    badgeZh: "70%比利时黑巧",
    flavourNotes: ["Italian Bergamot", "Ceylon Black Tea", "70% Cocoa Ganache", "Sea Salt"],
    detailsEn: "Slow-brewed loose-leaf Earl Grey tea leaves impart a bright, elegant floral aroma that cuts through the intense, rich dark chocolate fudge cake. Finished with a satin dark chocolate mirror glaze and delicate edible botanicals.",
    detailsZh: "严选原叶伯爵红茶慢泡萃取茶汤，将清雅的柑橘佛手柑香气注入顺滑奶油中，恰到好处地中和了70%比利时黑巧的厚重浓郁。淋面如丝缎般光润。",
    specs: {
      serving: "Available in 6\" or single-slice weekend boxes",
      storage: "Keep chilled; bring to room temperature for 10 minutes before eating for a melt-in-mouth texture.",
      allergens: "Contains Gluten, Dairy, Eggs"
    }
  },
  {
    id: "lemon-pistachio-gateau",
    category: "gateaux",
    isSignature: false,
    nameEn: "Meyer Lemon Pistachio Gateau",
    nameZh: "迈耶柠檬西西里开心果蛋糕",
    taglineEn: "Tangy curd, roasted Bronte pistachio sponge, and whipped vanilla mascarpone.",
    taglineZh: "鲜榨迈耶柠檬凝乳，烘烤西西里开心果蛋糕底与马斯卡彭轻芝士奶油。",
    image: "assets/images/hone-bakes-lemon-pistachio-gateau.jpg",
    alt: "Vibrant Meyer Lemon Pistachio Gateau with pistachio crumb and zesty lemon curd",
    badgeEn: "Seasonal Citrus",
    badgeZh: "时令风味",
    flavourNotes: ["Meyer Lemon Curd", "Sicilian Pistachio", "Mascarpone", "Sea Salt Crumble"],
    detailsEn: "A vibrant seasonal creation offering an invigorating contrast. Slow-cooked lemon curd made with fresh Meyer lemons is paired with fragrant roasted pistachio cake layers and airy whipped mascarpone cream.",
    detailsZh: "充满阳光气息的时令创作。鲜榨迈耶柠檬慢熬细腻酸甜凝乳，搭配粒粒香浓的西西里开心果研磨蛋糕体，与轻盈马斯卡彭奶油碰撞出清新火花。",
    specs: {
      serving: "6\" round cake (6-8 pax)",
      storage: "Keep strictly chilled. Consume within 48 hours.",
      allergens: "Contains Tree Nuts (Pistachio), Dairy, Gluten, Eggs"
    }
  },
  {
    id: "sourdough-shio-pan",
    category: "sourdough",
    isSignature: true,
    nameEn: "Artisan Sourdough Shio Pan",
    nameZh: "天然酸种日式盐面包",
    taglineEn: "24-hour slow fermented dough, melting French butter core, and flaky Maldon sea salt.",
    taglineZh: "24小时慢酵天然野生酸种，包裹法国发酵黄油，撒上海盐脆片。",
    image: "assets/images/hone-bakes-sourdough-shio-pan.jpg",
    alt: "Golden brown crisp Japanese Sourdough Shio Pan rolls with sea salt flakes on rustic parchment",
    badgeEn: "24hr Wild Ferment",
    badgeZh: "24小时天然酵母",
    flavourNotes: ["Maldon Sea Salt", "French Butter Sheen", "Crispy Bottom", "Sourdough Chew"],
    detailsEn: "Our sourdough interpretation of the beloved Japanese shio pan (salt bread). Each roll has a shatteringly crisp caramelized base where butter pools during baking, a fluffy, chewy interior, and glistening Maldon salt flakes on top.",
    detailsZh: "日式盐面包与野生酸种的迷人融合。底部在烘烤过程中被融化的优质法国黄油浸润，形成金黄焦脆的酥脆底壳，内部拉丝柔软，顶部闪耀着片状海盐。",
    specs: {
      serving: "Box of 4 rolls (Signature Sea Salt, Mentaiko Nori, or Garlic Butter)",
      storage: "Best eaten warm on the day. Reheat in oven or toaster at 180°C for 3-4 minutes to restore crispness.",
      allergens: "Contains Gluten, Dairy"
    }
  },
  {
    id: "sourdough-bagels",
    category: "sourdough",
    isSignature: false,
    nameEn: "Handcrafted Sourdough Bagels",
    nameZh: "手工慢酵酸种贝果",
    taglineEn: "Kettle-boiled and stone-baked with a glossy, blistered crust and satisfying chew.",
    taglineZh: "传统糖水快煮后石板高温烘烤，表皮微韧带有诱人气泡，麦香深邃。",
    image: "assets/images/hone-bakes-sourdough-bagels.jpg",
    alt: "Handcrafted sourdough bagels stacked on wooden board with toasted seeds",
    badgeEn: "Stone-Baked",
    badgeZh: "石板烘烤",
    flavourNotes: ["Wild Yeast Tang", "Roasted Sesame", "Malt Crust", "Dense Chew"],
    detailsEn: "Naturally leavened over 24 hours without commercial yeast. Boiled in lightly malted water and baked at high heat for a blistered golden exterior and dense, elastic crumb. Available in Plain, Everything, and Sesame.",
    detailsZh: "完全依靠自然培养的活性酸种菌群进行24小时低温慢发酵，绝无商业干酵母。沸水麦芽糖水定型后高温烘烤，拥有经典的紧实嚼劲与自然麦香回甘。",
    specs: {
      serving: "Pack of 4 bagels",
      storage: "Freeze up to 3 weeks. Slice and toast directly from freezer.",
      allergens: "Contains Gluten, Sesame (on seeded varieties)"
    }
  },
  {
    id: "matcha-cookies-box",
    category: "small",
    isSignature: false,
    nameEn: "Salted Chocolate Matcha Cookies",
    nameZh: "宇治抹茶黑巧海盐软心曲奇",
    taglineEn: "Rich Marukyu Koyamaen matcha dough studded with molten 70% dark chocolate chunks.",
    taglineZh: "浓纯丸久小山园抹茶曲奇面团，嵌入熔岩般大块70%纯黑巧克力与海盐。",
    image: "assets/images/hone-bakes-matcha-cookies.jpg",
    alt: "Thick matcha cookies with dark chocolate pools and sea salt flakes",
    badgeEn: "Studio Bake Box",
    badgeZh: "周末烘焙盒",
    flavourNotes: ["Uji Matcha", "Valrhona Dark Chocolate", "Fleur de Sel", "Fudge Texture"],
    detailsEn: "Crisp golden edges with a soft, dense, fudgy center. Made with pure matcha powder and loaded with hand-chopped dark chocolate chunks, finished with a sprinkle of French fleur de sel to balance the rich chocolate.",
    detailsZh: "外层微微酥脆，内芯宛如软糖般湿润浓郁。融入纯正宇治抹茶粉与大块手切黑巧克力，撒上法国盐之花，甜咸交织，茶香与可可香气层层爆发。",
    specs: {
      serving: "Box of 6 generously sized cookies",
      storage: "Store in an airtight container at room temperature for up to 5 days.",
      allergens: "Contains Gluten, Dairy, Eggs"
    }
  }
];

/**
 * Render Product Grid based on active category filter
 */
export function renderProducts(containerId, activeFilter = "all", currentLang = "en") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = activeFilter === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  container.innerHTML = filtered.map((item, index) => {
    const isFeatured = item.isSignature && index === 0;
    const name = currentLang === "zh" ? item.nameZh : item.nameEn;
    const tagline = currentLang === "zh" ? item.taglineZh : item.taglineEn;
    const badge = currentLang === "zh" ? item.badgeZh : item.badgeEn;
    const discoverBtn = currentLang === "zh" ? "探索风味" : "Discover Profile";

    return `
      <article class="product-card ${isFeatured ? 'product-card--featured' : ''}" 
               data-product-id="${item.id}"
               data-category="${item.category}">
        <div class="product-card__image-wrap">
          <img src="${item.image}" 
               alt="${item.alt}" 
               class="product-card__image" 
               loading="lazy" 
               width="600" 
               height="450" />
          <span class="product-badge ${item.isSignature ? 'product-badge--signature' : ''}">
            ${badge}
          </span>
        </div>
        <div class="product-card__content">
          <div class="product-card__category">${item.category.toUpperCase()}</div>
          <h3 class="product-card__title">${name}</h3>
          <p class="product-card__tagline">${tagline}</p>
          <div class="product-card__tags">
            ${item.flavourNotes.map(n => `<span class="tag-pill">${n}</span>`).join('')}
          </div>
          <div class="product-card__actions">
            <button class="btn btn-secondary btn-sm js-open-product-modal" 
                    data-product-id="${item.id}" 
                    aria-label="View details for ${name}">
              <span>${discoverBtn}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Setup Product Detail Modal / Drawer with accessibility
 */
export function initProductModal(currentLang = "en") {
  const modal = document.getElementById("product-modal");
  const modalOverlay = document.getElementById("product-modal-overlay");
  const closeBtn = document.getElementById("product-modal-close");
  const modalBody = document.getElementById("product-modal-content");

  if (!modal || !modalBody) return;

  function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const name = currentLang === "zh" ? product.nameZh : product.nameEn;
    const details = currentLang === "zh" ? product.detailsZh : product.detailsEn;
    const badge = currentLang === "zh" ? product.badgeZh : product.badgeEn;
    const servingLbl = currentLang === "zh" ? "规格与份量" : "Portion & Sizing";
    const storageLbl = currentLang === "zh" ? "保存与赏味建议" : "Storage & Serving";
    const allergensLbl = currentLang === "zh" ? "过敏原提示" : "Allergens";
    const enquireBtnText = currentLang === "zh" ? "咨询预订这款烘焙" : "Enquire for This Bake";

    modalBody.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-product-media">
          <img src="${product.image}" alt="${product.alt}" class="modal-product-img" />
          <span class="product-badge product-badge--signature">${badge}</span>
        </div>
        <div class="modal-product-info">
          <span class="modal-product-cat">${product.category.toUpperCase()} · HONE BAKES</span>
          <h2 class="modal-product-title">${name}</h2>
          <div class="product-card__tags" style="margin-bottom: 0.6rem;">
            ${product.flavourNotes.map(n => `<span class="tag-pill">${n}</span>`).join('')}
          </div>
          <p class="modal-product-desc">${details}</p>
          
          <div class="modal-product-specs">
            <div class="spec-item">
              <span class="spec-label">${servingLbl}:</span>
              <span class="spec-val">${product.specs.serving}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${storageLbl}:</span>
              <span class="spec-val">${product.specs.storage}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${allergensLbl}:</span>
              <span class="spec-val">${product.specs.allergens}</span>
            </div>
          </div>

          <div class="modal-product-footer">
            <button class="btn btn-primary btn-sm js-select-and-enquire" data-bake-name="${name}">
              <span>${enquireBtnText}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (closeBtn) closeBtn.focus();

    // Hook the enquire button in modal to scroll down and pre-fill form
    const enquireBtn = modalBody.querySelector(".js-select-and-enquire");
    if (enquireBtn) {
      enquireBtn.addEventListener("click", () => {
        closeModal();
        const bakeSelect = document.getElementById("order-bake");
        if (bakeSelect) {
          bakeSelect.value = product.id;
        }
        const orderSection = document.getElementById("order");
        if (orderSection) {
          orderSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  function closeModal() {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // Delegated open click
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".js-open-product-modal");
    if (trigger) {
      const pId = trigger.getAttribute("data-product-id");
      openModal(pId);
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}
