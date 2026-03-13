export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  inStock: boolean;
  isFeatured: boolean;
  isSummerSpecial: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hair Growth Protein Shampoo",
    category: "Hair Care",
    price: 340,
    image: "/assets/generated/product-hair-oil.dim_600x600.jpg",
    description:
      "Protein-rich herbal shampoo that strengthens hair from root to tip and promotes healthy growth.",
    benefits: [
      "Promotes hair growth",
      "Reduces hair fall",
      "Strengthens hair shaft",
      "Adds volume & shine",
    ],
    ingredients: [
      "Protein Complex",
      "Bhringraj Extract",
      "Amla",
      "Aloe Vera",
      "Argan Oil",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: false,
  },
  {
    id: 2,
    name: "Nira Herbals 25 Buti Hair Oil",
    category: "Hair Care",
    price: 320,
    image: "/assets/generated/product-hair-mask.dim_600x600.jpg",
    description:
      "Powerful blend of 25 Ayurvedic herbs and oils to nourish scalp and revive dull, damaged hair.",
    benefits: [
      "25 herbal ingredients",
      "Nourishes scalp",
      "Reduces dandruff",
      "Conditions & softens hair",
    ],
    ingredients: [
      "25 Ayurvedic Herbs",
      "Coconut Oil",
      "Castor Oil",
      "Bhringraj",
      "Amla",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: false,
  },
  {
    id: 3,
    name: "Hibiscus Hair Gel",
    category: "Hair Care",
    price: 160,
    image: "/assets/generated/product-hair-oil.dim_600x600.jpg",
    description:
      "Natural hibiscus-infused hair gel for frizz-free, defined styles without harsh chemicals.",
    benefits: ["Controls frizz", "Defines curls", "No flaking", "Natural hold"],
    ingredients: [
      "Hibiscus Extract",
      "Aloe Vera Gel",
      "Flaxseed",
      "Glycerin",
      "Rose Water",
    ],
    inStock: true,
    isFeatured: false,
    isSummerSpecial: false,
  },
  {
    id: 4,
    name: "Amla Hibiscus Hair Conditioner",
    category: "Hair Care",
    price: 280,
    image: "/assets/generated/product-hair-mask.dim_600x600.jpg",
    description:
      "Deep conditioning treatment with amla and hibiscus to restore moisture and shine to dry hair.",
    benefits: [
      "Deep conditioning",
      "Reduces frizz",
      "Adds shine",
      "Prevents breakage",
    ],
    ingredients: [
      "Amla Extract",
      "Hibiscus",
      "Shea Butter",
      "Coconut Milk",
      "Honey",
    ],
    inStock: true,
    isFeatured: false,
    isSummerSpecial: false,
  },
  {
    id: 5,
    name: "Rosemary Damage Control Hair Spa Cream",
    category: "Hair Care",
    price: 320,
    image: "/assets/generated/product-hair-mask.dim_600x600.jpg",
    description:
      "Intensive spa-grade hair cream with rosemary to repair damage and restore hair health.",
    benefits: [
      "Repairs damage",
      "Stimulates growth",
      "Intense moisture",
      "Reduces split ends",
    ],
    ingredients: [
      "Rosemary Extract",
      "Keratin",
      "Argan Oil",
      "Shea Butter",
      "Vitamin E",
    ],
    inStock: true,
    isFeatured: false,
    isSummerSpecial: false,
  },
  {
    id: 6,
    name: "Pripa Brightening Cream",
    category: "Face Care",
    price: 200,
    image: "/assets/generated/product-face-cream.dim_600x600.jpg",
    description:
      "Herbal brightening cream that fades dark spots and gives a radiant, even skin tone.",
    benefits: [
      "Brightens complexion",
      "Fades dark spots",
      "Even skin tone",
      "Daily moisturization",
    ],
    ingredients: [
      "Kojic Acid",
      "Rose Extract",
      "Vitamin C",
      "Aloe Vera",
      "Glycerin",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: false,
  },
  {
    id: 7,
    name: "Coffee Scrub (Face & Body)",
    category: "Face Care",
    price: 300,
    image: "/assets/generated/product-turmeric-scrub.dim_600x600.jpg",
    description:
      "Energising coffee scrub that exfoliates dead skin cells and leaves skin smooth and glowing.",
    benefits: [
      "Exfoliates skin",
      "Reduces cellulite",
      "Boosts circulation",
      "Smooths skin",
    ],
    ingredients: [
      "Coffee Grounds",
      "Coconut Oil",
      "Brown Sugar",
      "Vitamin E",
      "Cinnamon",
    ],
    inStock: true,
    isFeatured: false,
    isSummerSpecial: false,
  },
  {
    id: 8,
    name: "Rice Korean Facial Kit",
    category: "Face Care",
    price: 360,
    image: "/assets/generated/product-vitamin-c-serum.dim_600x600.jpg",
    description:
      "K-beauty inspired rice facial kit for glass skin — brightens, hydrates and tightens pores.",
    benefits: [
      "Glass skin effect",
      "Tightens pores",
      "Brightens skin",
      "Deep hydration",
    ],
    ingredients: [
      "Rice Extract",
      "Niacinamide",
      "Hyaluronic Acid",
      "Rice Bran Oil",
      "Ceramides",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: true,
  },
  {
    id: 9,
    name: "Nira Herbals – Spa Nourish Massage Oil",
    category: "Body Care",
    price: 300,
    image: "/assets/generated/product-body-butter.dim_600x600.jpg",
    description:
      "Luxurious herbal massage oil that relaxes muscles, nourishes skin and leaves a natural glow.",
    benefits: [
      "Relaxes muscles",
      "Nourishes skin",
      "Calming aroma",
      "Natural ingredients",
    ],
    ingredients: [
      "Sweet Almond Oil",
      "Lavender Essential Oil",
      "Jojoba Oil",
      "Vitamin E",
      "Rose Oil",
    ],
    inStock: true,
    isFeatured: false,
    isSummerSpecial: false,
  },
  {
    id: 10,
    name: "Sunscreen Body Lotion SPF 30",
    category: "Body Care",
    price: 300,
    image: "/assets/generated/product-summer-combo.dim_600x600.jpg",
    description:
      "Lightweight SPF 30 body lotion that protects against UVA/UVB rays while keeping skin moisturised.",
    benefits: [
      "SPF 30 protection",
      "UVA/UVB shield",
      "Moisturises skin",
      "Non-greasy formula",
    ],
    ingredients: [
      "Zinc Oxide",
      "Aloe Vera",
      "Shea Butter",
      "Vitamin E",
      "Green Tea Extract",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: true,
  },
  {
    id: 11,
    name: "Ultralight Gel Based Sunscreen (SPF 30)",
    category: "Summer Special",
    price: 300,
    image: "/assets/generated/product-neem-facewash.dim_600x600.jpg",
    description:
      "Feather-light gel sunscreen with SPF 30 that absorbs instantly — no white cast, no stickiness.",
    benefits: [
      "Ultralight texture",
      "No white cast",
      "SPF 30 protection",
      "Ideal for oily skin",
    ],
    ingredients: [
      "Titanium Dioxide",
      "Niacinamide",
      "Aloe Vera Gel",
      "Hyaluronic Acid",
      "Cucumber Extract",
    ],
    inStock: true,
    isFeatured: true,
    isSummerSpecial: true,
  },
];

export const categories = [
  "All",
  "Face Care",
  "Hair Care",
  "Body Care",
  "Summer Special",
];
