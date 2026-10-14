/**
 * HONE Bakes — Brand Configuration & Editable Settings
 * All brand metadata, verified business locations, contact channels,
 * and demo flags are centralised here for easy client handoff.
 */

export const BRAND_CONFIG = {
  name: "HONE Bakes",
  tagline: "Little moments, baked beautifully.",
  foundingStory: "A mother-daughter artisan bakery born from a shared love for slow mornings, meticulous layers, and ceremonial Japanese tea.",
  
  // Official Channels (Verified)
  instagram: {
    handle: "@hone.bakes",
    url: "https://instagram.com/hone.bakes",
    dmUrl: "https://ig.me/m/hone.bakes"
  },
  
  // Physical Micro-Bakery & Studio Pick-up (Verified from Shenton Way storefront)
  location: {
    isVerified: true,
    addressLine1: "70 Shenton Way",
    addressLine2: "EON Shenton, #01-13",
    city: "Singapore",
    postalCode: "079118",
    country: "Singapore",
    nearestMrt: "Tanjong Pagar (EW15) / Prince Edward Road (CC32)",
    googleMapsUrl: "https://maps.google.com/?q=70+Shenton+Way+EON+Shenton+#01-13+Singapore+079118",
    statusNote: "Studio pre-order collections & walk-in bake drops"
  },

  // Operating Schedule (Demo default based on typical boutique CBD bake drops)
  operatingHours: {
    pickupDays: "Wednesday – Sunday",
    hours: "11:30 AM – 5:30 PM (or until sold out)",
    closedDays: "Monday & Tuesday (Baking & Prep Days)",
    isVerifiedSchedule: false // Flag indicating hours should be finalized with owners
  },

  // Key Brand Pillars
  pillars: [
    {
      id: "tea",
      titleEn: "Ceremonial Uji Matcha",
      titleZh: "日本宇治丸久小山园抹茶",
      descEn: "Single-origin Marukyu Koyamaen matcha sourced directly from Kyoto for authentic umami depth and zero bitterness.",
      descZh: "选用京都直采丸久小山园抹茶，茶香清雅，浓郁甘醇，回味悠长。"
    },
    {
      id: "layers",
      titleEn: "Architectural Layers",
      titleZh: "精雕细琢的层次质感",
      descEn: "Contrasting textures: dense fudgy gateaux, pillowy mochi centers, and whipped cloud creams crafted with patient precision.",
      descZh: "浓郁生巧般的蛋糕体，夹入软糯拉丝的手作麻薯与轻盈云朵奶油，层次分明。"
    },
    {
      id: "fermentation",
      titleEn: "Naturally Leavened",
      titleZh: "天然慢酵酸种烘焙",
      descEn: "Long 24-hour slow-fermented sourdough shio pan and bagels boasting crisp crusts and a chewy, aromatic crumb.",
      descZh: "经历24小时低温慢发酵的日式盐面包与贝果，麦香扑鼻，外脆内韧。"
    }
  ],

  // Production & Demo Metadata
  siteUrl: "https://honebakes.sg",
  currency: "SGD ($)",
  enquiryEmailPlaceholder: "hello@honebakes.sg"
};
