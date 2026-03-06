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
  {
    label: "Who We Serve",
    items: [
      { label: "Established Remodelers", href: "/" },
      { label: "New & Small Remodeling Businesses", href: "/" },
      { label: "Trade Contractors & Handymen", href: "/" },
    ],
  },
  {
    label: "Solutions",
    wide: true,
    items: [
      {
        label: "Sales & Marketing Growth",
        href: "/sales-marketing-growth",
        description: "Win more projects with AI-powered estimates and proposals that convert leads into clients faster.",
      },
      {
        label: "Project Management & Operations",
        href: "/project-management",
        description: "Streamline projects from estimate to completion with connected AI systems that save time and reduce errors.",
      },
      {
        label: "Financial & Business Management",
        href: "/financial-management",
        description: "Get paid faster with AI-powered digital invoicing, track profitability, and make data-driven decisions to grow your business.",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    items: [
      { label: "Case Studies", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/" },
      { label: "Webinars", href: "/" },
      { label: "Testimonials", href: "/" },
      { label: "Platform Updates", href: "/" },
      { label: "Contractor Course", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Handoff Nation Community", href: "/" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Contact Us", href: "/" },
      { label: "Help Center", href: "/" },
    ],
  },
];

export interface FooterColumn {
  title: string;
  lightTitle?: boolean;
  links: (NavLink & { badge?: string })[];
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
