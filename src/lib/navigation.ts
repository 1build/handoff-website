export interface NavLink {
  label: string;
  href: string;
  description?: string;
  iconName?: string;
}

export interface NavSection {
  label: string;
  items: NavLink[];
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
  wide?: boolean;
  features?: NavLink[];
  sections?: NavSection[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

export const navItems: NavItem[] = [
  {
    label: "Who We Serve",
    items: [
      { label: "Established remodelers", href: "/remodelers", description: "See how contractors win with Handoff", iconName: "book-closed" },
      { label: "New and small remodeling businesses", href: "/", description: "Tips, trends, and product updates", iconName: "pencil-line" },
      { label: "Trade contractors and handymen", href: "/", description: "Step by step playbooks for your business", iconName: "book-open-01" },
    ],
  },
  {
    label: "Solutions",
    wide: true,
    items: [
      {
        label: "Sales and marketing growth",
        href: "/sales-marketing-growth",
        description: "Turn leads into signed contracts",
        iconName: "book-closed",
      },
      {
        label: "Project management and operations",
        href: "/project-management",
        description: "One system from estimate to completion",
        iconName: "stars-02",
      },
      {
        label: "Financial and business management",
        href: "/financial-business-solution",
        description: "Get paid faster. Know your numbers",
        iconName: "play-circle",
      },
      {
        label: "AI teammate",
        href: "/",
        description: "Your always-on estimating partner",
        iconName: "file-code",
      },
      {
        label: "Integrations",
        href: "/",
        description: "Connect the tools you already use",
        iconName: "link",
      },
    ],
    features: [
      { label: "Instant AI estimates", href: "/" },
      { label: "Winning AI proposals", href: "/" },
      { label: "Client management CRM", href: "/" },
      { label: "Project management", href: "/" },
      { label: "Change orders", href: "/" },
      { label: "File management", href: "/" },
      { label: "Estimates from files", href: "/" },
      { label: "Invoicing", href: "/" },
      { label: "Customer financing", href: "/" },
      { label: "AI agent", href: "/" },
      { label: "AI documents", href: "/" },
      { label: "AI transcription", href: "/" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    sections: [
      {
        label: "Learn",
        items: [
          { label: "Case studies", href: "/", description: "See how contractors win with Handoff", iconName: "book-closed" },
          { label: "Blog", href: "/blog", description: "Tips, trends, and product updates", iconName: "pencil-line" },
          { label: "Guides", href: "/", description: "Step by step playbooks for your business", iconName: "book-open-01" },
          { label: "Webinars", href: "/contractor-webinars", description: "Live sessions with industry pros.", iconName: "play-circle" },
        ],
      },
      {
        label: "Community",
        items: [
          { label: "Testimonials", href: "/", description: "Real stories from real contractors", iconName: "message-text-circle-02" },
          { label: "Platform updates", href: "/", description: "What's new in Handoff", iconName: "announcement-01" },
          { label: "Contractor course", href: "/", description: "Level up your remodeling business", iconName: "graduation-hat-01" },
          { label: "Careers", href: "/careers", description: "Build something that matters", iconName: "briefcase-02" },
          { label: "Handoff Nation community", href: "/", description: "Connect with contractors like you", iconName: "users-plus" },
        ],
      },
    ],
    items: [
      { label: "Case studies", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/" },
      { label: "Webinars", href: "/contractor-webinars" },
      { label: "Testimonials", href: "/" },
      { label: "Platform updates", href: "/" },
      { label: "Contractor course", href: "/" },
      { label: "Careers", href: "/careers" },
      { label: "Handoff Nation community", href: "/" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Contact us", href: "/", description: "We're here to help", iconName: "book-closed" },
      { label: "Help center", href: "/", description: "Find answers fast", iconName: "pencil-line" },
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
      { label: "Careers", href: "/careers" },
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
