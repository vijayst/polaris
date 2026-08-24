export const SITE = {
  name: "PolarisAI Labs",
  url: "https://polarisailabs.com",
  email: "gopala@polarisailabs.com",
  phone: "(+91) 8978556611",
  address: ["Bandlaguda Jagir", "Hyderabad, INDIA"],
  contactEndpoint: "https://gopalakrishna.tech/Search.aspx",
  gaId: "G-92LWMHBF8K",
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "VegaAI", href: "/vegaai" },
      { label: "MarisAI", href: "/marisai" },
      { label: "SpicaAI", href: "/spicaai" },
      { label: "LegalProdigyAI", href: "/legalprodigyai" },
    ],
  },
  {
    label: "Platform",
    href: "#",
    children: [{ label: "PolarisAI Platform", href: "/platform" }],
  },
  {
    label: "Product Management",
    href: "#",
    children: [
      { label: "Advisory", href: "/product-management" },
      { label: "Mentorship", href: "/mentorship" },
    ],
  },
  {
    label: "Technology",
    href: "#",
    children: [
      { label: "Advisory", href: "/technology" },
      { label: "Mentorship", href: "/mentorship" },
    ],
  },
  { label: "About Us", href: "/about" },
];

export const DEMO_LINKS = [
  { label: "Conversational AI", href: "/demos/conversational-ai" },
  { label: "Text Classification", href: "/demos/text-classification" },
  { label: "Recommendations", href: "/demos/recommendations" },
  { label: "Prompt Engineering", href: "/demos/prompt-engineering" },
];
