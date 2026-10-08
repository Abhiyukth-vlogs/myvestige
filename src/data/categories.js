/**
 * Exact Categories from myvestige.com & global.myvestige.com
 * Exact names, no placeholder text, no invented categories.
 */
export const categories = [
  {
    id: 'health-supplements',
    name: 'Health Supplements',
    tagline: 'World-Class Health & Wellness Formulations',
    icon: '/assets/asset 10.svg',
    count: '64+ Products',
    subcategories: [
      { id: 'pro-heart', name: 'Pro Heart', count: 8 },
      { id: 'joints-bones-health', name: 'Joints & Bones Health', count: 6 },
      { id: 'immunity-booster', name: 'Immunity Booster', count: 12 },
      { id: 'weight-management', name: 'Weight Management', count: 5 },
      { id: 'fitness-diet', name: 'Fitness & Diet', count: 7 },
      { id: 'multi-vitamins', name: 'Multi Vitamins', count: 6 },
      { id: 'womens-health', name: "Women's Health", count: 7 },
      { id: 'glycemic-health', name: 'Glycemic Health', count: 4 },
      { id: 'detox-rejuvenation', name: 'Detox & Rejuvenation', count: 9 },
      { id: 'ayurvedic-products', name: 'Ayurvedic Products', count: 14 }
    ]
  },
  {
    id: 'pro-heart',
    name: 'Pro Heart',
    tagline: 'Cardiovascular Support & Omega-3 Formulations',
    icon: '/assets/asset 11.svg',
    count: '8 Products',
    subcategories: [
      { id: 'flax-oil', name: 'Vestige Flax Oil', count: 1 },
      { id: 'coq10', name: 'Vestige CoQ10', count: 1 },
      { id: 'l-arginine', name: 'Vestige L-Arginine', count: 1 },
      { id: 'krill-oil', name: 'Vestige Prime Krill Oil', count: 1 }
    ]
  },
  {
    id: 'joints-bones-health',
    name: 'Joints & Bones Health',
    tagline: 'Glucosamine, Calcium & Bone Strength Formulations',
    icon: '/assets/asset 12.svg',
    count: '6 Products',
    subcategories: [
      { id: 'glucosamine', name: 'Vestige Glucosamine', count: 1 },
      { id: 'calcium', name: 'Vestige Calcium', count: 1 },
      { id: 'collagen', name: 'Vestige Collagen', count: 1 }
    ]
  },
  {
    id: 'immunity-booster',
    name: 'Immunity Booster',
    tagline: 'Spirulina, Noni, Colostrum & Aloe Vera Range',
    icon: '/assets/asset 13.svg',
    count: '12 Products',
    subcategories: [
      { id: 'spirulina', name: 'Vestige Spirulina', count: 1 },
      { id: 'noni', name: 'Vestige Noni', count: 1 },
      { id: 'aloe-vera', name: 'Vestige Aloe Vera', count: 1 },
      { id: 'colostrum', name: 'Vestige Colostrum', count: 1 },
      { id: 'amla', name: 'Vestige Amla', count: 1 }
    ]
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    tagline: 'Veslim Shake, Veslim Tea & Veslim Capsules',
    icon: '/assets/asset 14.svg',
    count: '5 Products',
    subcategories: [
      { id: 'veslim-shake', name: 'Veslim Shake (Mango / Vanilla)', count: 2 },
      { id: 'veslim-tea', name: 'Veslim Tea', count: 1 },
      { id: 'veslim-capsules', name: 'Veslim Capsules', count: 1 }
    ]
  },
  {
    id: 'fitness-diet',
    name: 'Fitness & Diet',
    tagline: 'Protein Powder & Active Daily Nutrition',
    icon: '/assets/asset 15.svg',
    count: '7 Products',
    subcategories: [
      { id: 'protein-powder', name: 'Vestige Protein Powder', count: 2 },
      { id: 'energy-booster', name: 'Energy Boosters', count: 2 }
    ]
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    tagline: 'Assure Hair, Skin & Body Radiance',
    icon: '/assets/asset 16.svg',
    count: '42 Products',
    subcategories: [
      { id: 'hair-care', name: 'Hair Care', count: 12 },
      { id: 'body-care', name: 'Body Care', count: 10 },
      { id: 'skin-care', name: 'Skin Care', count: 14 },
      { id: 'oral-care', name: 'Oral Care', count: 6 },
      { id: 'mens-grooming', name: "Men's Grooming", count: 5 }
    ]
  },
  {
    id: 'ayurvedic-care',
    name: 'Ayusante (Ayurvedic Care)',
    tagline: 'Clinically Validated Ayurvedic Science',
    icon: '/assets/asset 17.svg',
    count: '14 Products',
    subcategories: [
      { id: 'respocare', name: 'Ayusante RespoCare', count: 1 },
      { id: 'glucohealth', name: 'Ayusante GlucoHealth', count: 1 },
      { id: 'procard', name: 'Ayusante ProCard', count: 1 },
      { id: 'toxclean', name: 'Ayusante ToxClean', count: 1 },
      { id: 'vital-complex', name: 'Ayusante Vital Complex', count: 1 }
    ]
  },
  {
    id: 'health-food',
    name: 'Health Food',
    tagline: 'Zeta Tea & Coffee, Lite House Rice Bran Oil, Enerva',
    icon: '/assets/asset 18.svg',
    count: '18 Products',
    subcategories: [
      { id: 'health-food-drink', name: 'Health Food Drink', count: 4 },
      { id: 'edible-oil', name: 'Edible Oil', count: 2 },
      { id: 'tea-coffee', name: 'Premium Tea & Coffee', count: 6 },
      { id: 'healthy-snacking', name: 'Healthy Snacking', count: 6 }
    ]
  },
  {
    id: 'home-hygiene',
    name: 'Home Hygiene',
    tagline: 'Hyvest Cleaning & Laundry Essentials',
    icon: '/assets/asset 19.svg',
    count: '8 Products',
    subcategories: [
      { id: 'ultra-wash', name: 'Ultra Wash Laundry Detergent', count: 2 },
      { id: 'ultra-scrub', name: 'Ultra Scrub Dishwashing Liquid', count: 2 },
      { id: 'ultra-shine', name: 'Ultra Shine Floor Cleaner', count: 2 },
      { id: 'ultra-protect', name: 'Ultra Protect Disinfectant', count: 2 }
    ]
  },
  {
    id: 'make-up',
    name: 'Make-Up (Mistral of Milan)',
    tagline: 'European Color Cosmetics & Beauty',
    icon: '/assets/asset 20.svg',
    count: '32 Products',
    subcategories: [
      { id: 'face', name: 'Face (Compact & Foundation)', count: 10 },
      { id: 'lips', name: 'Lips (Matte & Silk Lipsticks)', count: 12 },
      { id: 'eyes', name: 'Eyes (Eyeliner & Mascara)', count: 6 },
      { id: 'nails', name: 'Nails (Long Wear Lacquer)', count: 4 }
    ]
  },
  {
    id: 'agricultural',
    name: 'Agricultural',
    tagline: 'Agri 82 Crop Yield Enhancers & Soil Activators',
    icon: '/assets/asset 21.svg',
    count: '6 Products',
    subcategories: [
      { id: 'agri-82', name: 'Agri 82', count: 2 },
      { id: 'agri-humic', name: 'Agri Humic', count: 2 },
      { id: 'agri-gold', name: 'Agri Gold', count: 1 },
      { id: 'agri-bio-fungicide', name: 'Agri Bio-Fungicide', count: 1 }
    ]
  }
];
