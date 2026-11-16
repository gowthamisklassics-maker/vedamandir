
export type Puja = {
  id: number;
  badge: string;
  title: string;
  benefits: string[];
  temple: string;
  date: string;
  category: "Deity" | "Dosha" | "Benefit";
  image: string;

  // Additional details for the puja details page
  price?: number;
  description?: string;
  duration?: string;
  location?: string;

  procedure?: {
    title: string;
    description: string;
  }[];

  receive?: string[];

  faqs?: {
    question: string;
    answer: string;
  }[];

  gallery?: string[];
};

export const pujas: Puja[] = [
  {
    id: 1,
    badge: "KANDA SASHTI SPECIAL",
    title: "Murugavel Homam – Kanda Sashti Special Worship",

    benefits: [
      "Strength and courage",
      "Good health",
      "Prosperity"
    ],

    temple: "Vedic Yagasala, Palani",
    date: "14 November",
    category: "Deity",
    image: "/images/murugavel-homam.avif",

    price: 999,
    description:
      "Murugavel Homam is a sacred worship dedicated to Lord Murugan. Devotees participate in this ritual to seek strength, courage, good health and prosperity.",

    duration: "As per ritual",
    location: "Palani"
  },

  {
    id: 2,
    badge: "SHANIVAR SPECIAL",
    title: "Shani Sade Sati Shanti Maha Puja and Til Tailabhishek",

    benefits: [
      "Relief from planetary challenges",
      "Family harmony",
      "Removal of obstacles"
    ],

    temple: "Navgraha Shani Temple, Ujjain",
    date: "15 November",
    category: "Dosha",
    image: "/images/shani-puja.avif",

    price: 999,
    description:
      "Shani Sade Sati Shanti Maha Puja is performed to seek blessings of Lord Shani and pray for peace, harmony and relief from difficulties.",

    duration: "As per ritual",
    location: "Ujjain"
  },

  {
    id: 3,
    badge: "SHANI-HANUMAN SPECIAL",
    title: "Shani Mool Mantra Jaap and Hanuman Ashtak Path",

    benefits: [
      "Peace of mind",
      "Protection",
      "Family harmony"
    ],

    temple: "Shri Navgrah Shani Temple",
    date: "16 November",
    category: "Dosha",
    image: "/images/shani-hanuman.avif",

    price: 999,
    description:
      "This special worship combines Shani Mool Mantra Jaap and Hanuman Ashtak Path to seek peace, protection and family harmony.",

    duration: "As per ritual",
    location: "Shri Navgrah Shani Temple"
  },

  {
    id: 4,
    badge: "SUBRAHMANYA HOMAM",
    title: "Shatru Samhara Subrahmanya Swamy Homam",

    benefits: [
      "Protection",
      "Victory over obstacles",
      "Confidence"
    ],

    temple: "Vaidika Yagashala",
    date: "17 November",
    category: "Deity",
    image: "/images/subrahmanya-homam.avif",

    price: 999,
    description:
      "Shatru Samhara Subrahmanya Swamy Homam is a sacred ritual dedicated to Lord Subrahmanya for protection, courage and overcoming obstacles.",

    duration: "As per ritual",
    location: "Vaidika Yagashala"
  },

  {
    id: 5,
    badge: "RAVIVAR SPECIAL",
    title: "Special Surya Puja for Career and Leadership",

    benefits: [
      "Career growth",
      "Confidence",
      "Well-being"
    ],

    temple: "Assi Ghat, Kashi",
    date: "18 November",
    category: "Benefit",
    image: "/images/surya-puja.avif",

    price: 999,
    description:
      "Special Surya Puja is performed to seek the blessings of Lord Surya for career growth, confidence and overall well-being.",

    duration: "As per ritual",
    location: "Assi Ghat, Kashi"
  },

  {
    id: 6,
    badge: "CHHATH PUJA SPECIAL",
    title: "Chhath Mahaparv and Chhathi Maiya Arghya Seva",

    benefits: [
      "Family well-being",
      "Gratitude",
      "Prosperity"
    ],

    temple: "Assi Ghat, Kashi",
    date: "19 November",
    category: "Deity",
    image: "/images/chhath-puja.avif",

    price: 999,
    description:
      "Chhath Mahaparv is a traditional worship dedicated to the Sun God and Chhathi Maiya, seeking family well-being, gratitude and prosperity.",

    duration: "As per ritual",
    location: "Assi Ghat, Kashi"
  }
];
