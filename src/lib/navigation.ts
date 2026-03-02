export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
  wide?: boolean;
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Product",
    items: [
      { label: "Project Management", href: "/" },
      { label: "Financial Management", href: "/" },
      { label: "Permissions & Roles", href: "/" },
      { label: "Customization", href: "/" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  {
    label: "Company",
    items: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },

  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "/" },
      { label: "Guides", href: "/" },
      { label: "Case Studies", href: "/" },
    ],
  },
];

export interface FooterColumn {
  title: string;
  lightTitle?: boolean;
  links: { label: string; href: string; badge?: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/" },
      { label: "Solutions", href: "/", badge: "New" },
      { label: "Tutorials", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Releases", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "News", href: "/" },
      { label: "Media kit", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/" },
      { label: "Events", href: "/" },
      { label: "Help centre", href: "/" },
      { label: "Tutorials", href: "/" },
      { label: "Support", href: "/" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "/" },
      { label: "LinkedIn", href: "/" },
      { label: "Facebook", href: "/" },
      { label: "GitHub", href: "/" },
      { label: "AngelList", href: "/" },
      { label: "Dribbble", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Cookies", href: "/" },
      { label: "Licenses", href: "/" },
      { label: "Settings", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How accurate are AI-generated estimates?",
    answer: "Handoff learns from your past projects and pricing rules, so estimates match how you actually build and price work. The more you use it, the smarter it gets.",
  },
  {
    question: "Can I customize proposals and templates?",
    answer: "Yes. Every proposal uses your branding, your pricing structure, and your preferred layout. You control what clients see.",
  },
  {
    question: "What if my pricing is complex?",
    answer: "Handoff handles multi-level markups, separate labor and material rates, room-by-room breakdowns, and custom pricing rules. If you can price it, Handoff can learn it.",
  },
  {
    question: "How long does setup take?",
    answer: "Most contractors are up and running in under an hour. Import your pricing, connect your calendar, and start estimating.",
  },
  {
    question: "Does this replace my estimators?",
    answer: "No — it makes them faster. Handoff handles the repetitive work so your team can focus on accuracy, client relationships, and winning more projects.",
  },
];
