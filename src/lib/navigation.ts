export interface NavLink {
  label: string;
  href: string;
  description?: string;
  iconName?: string;
  /** Optional feature list for this nav item (used by Solutions menu) */
  features?: NavLink[];
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

// Base features list used to derive per-solution feature groups.
const solutionsBaseFeatures: NavLink[] = [
  { label: "Instant AI estimates", href: "/instant-ai-estimates" },
  { label: "Winning AI proposals", href: "/winning-ai-proposals" },
  { label: "Client management CRM", href: "/client-management-system" },
  { label: "Project management", href: "/project-management" },
  { label: "Change orders", href: "/change-orders" },
  { label: "File management", href: "/file-management" },
  { label: "Estimates from files", href: "/creating-estimates-from-files" },
  { label: "Invoicing", href: "/invoicing" },
  { label: "Customer financing", href: "/homeowner-financing" },
  { label: "AI agent", href: "/ai-agent" },
  { label: "AI documents", href: "/ai-documents" },
  { label: "AI transcription", href: "/ai-transcription" },
];

// Per-solution feature groups (currently overlapping / similar,
// but structured so they can diverge later without code changes).
const salesAndMarketingFeatures: NavLink[] = [
  solutionsBaseFeatures[0], // Instant AI estimates
  solutionsBaseFeatures[1], // Winning AI proposals
  solutionsBaseFeatures[2], // Client management CRM
  solutionsBaseFeatures[3], // Project management
  solutionsBaseFeatures[4], // Change orders
  solutionsBaseFeatures[5], // File management
  solutionsBaseFeatures[6], // Estimates from files
  solutionsBaseFeatures[7], // Customer financing
  solutionsBaseFeatures[8], // Customer financing
  solutionsBaseFeatures[9],  // AI agent
  solutionsBaseFeatures[10], // AI documents
  solutionsBaseFeatures[11], // AI transcription
];

const projectManagementFeatures: NavLink[] = [
  solutionsBaseFeatures[3], // Project management
  solutionsBaseFeatures[4], // Change orders
  solutionsBaseFeatures[5], // File management
  solutionsBaseFeatures[6], // Estimates from files
];

const financialBusinessFeatures: NavLink[] = [
  solutionsBaseFeatures[7], // Invoicing
  solutionsBaseFeatures[8], // Customer financing
];

const aiTeammateFeatures: NavLink[] = [
  solutionsBaseFeatures[9],  // AI agent
  solutionsBaseFeatures[10], // AI documents
  solutionsBaseFeatures[11], // AI transcription
  solutionsBaseFeatures[0],  // Instant AI estimates
];

export const navItems: NavItem[] = [
  {
    label: "Who We Serve",
    items: [
      { label: "Home Builders", href: "/builders", iconName: "book-closed" },
      { label: "Remodelers", href: "/remodelers", iconName: "pencil-line" },
      { label: "Trade Contractors & Handymen", href: "/handyman", iconName: "book-open-01" },
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
        features: salesAndMarketingFeatures,
      },
      {
        label: "Project management and operations",
        href: "/project-management",
        description: "One system from estimate to completion",
        iconName: "stars-02",
        features: projectManagementFeatures,
      },
      {
        label: "Financial and business management",
        href: "/financial-business-solution",
        description: "Get paid faster. Know your numbers",
        iconName: "play-circle",
        features: financialBusinessFeatures,
      },
      {
        label: "AI teammate",
        href: "/ai-teammate",
        description: "Your always-on estimating partner",
        iconName: "file-code",
        features: aiTeammateFeatures,
      },
      
    ],
    // Default/fallback features list shown when no specific solution is hovered.
    features: solutionsBaseFeatures,
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    sections: [
      {
        label: "Learn",
        items: [
          { label: "Case studies", href: "/blog#blog-list", description: "See how contractors win with Handoff", iconName: "book-closed" },
          { label: "Blog", href: "/blog", description: "Tips, trends, and product updates", iconName: "pencil-line" },
          { label: "Guides", href: "/blog#blog-list", description: "Step by step playbooks for your business", iconName: "book-open-01" },
          { label: "Webinars", href: "/contractor-webinars", description: "Live sessions with industry pros.", iconName: "play-circle" },
          { label: "Comparisons", href: "/comparison", description: "Compare Handoff to the competition", iconName: "compare" },
        ],
      },
      {
        label: "Community",
        items: [
          { label: "Testimonials", href: "/reviews", description: "Real stories from real contractors", iconName: "message-text-circle-02" },
          { label: "Platform updates", href: "/blog#blog-list", description: "What's new in Handoff", iconName: "announcement-01" },
          { label: "Contractor course", href: "/contractor-course", description: "Level up your remodeling business", iconName: "graduation-hat-01" },
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
      { label: "Help center", href: "https://help.handoff.ai/en/", description: "Find answers fast", iconName: "pencil-line" },
    ],
  },
  { label: "We're Hiring", href: "/careers" },
];

export interface FooterColumn {
  title: string;
  lightTitle?: boolean;
  links: (NavLink & { badge?: string })[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Useful Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Compare", href: "/comparison", badge: "New" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "1build", href: "/1build" },
      { label: "Construction Costs", href: "/construction-costs" },
      { label: "Become an Affiliate", href: "/affiliate" },
      { label: "Contractor Webinars", href: "/contractor-webinars" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Instant AI Estimates", href: "/instant-ai-estimates" },
      { label: "CRM", href: "/client-management-system" },
      { label: "Winning AI Proposals", href: "/winning-ai-proposals" },
      { label: "Invoicing", href: "/invoicing" },
      { label: "Project Management", href: "/project-management" },
      { label: "Change Orders", href: "/change-orders" },
      { label: "AI Agent", href: "/ai-agent" },
      { label: "File Management", href: "/file-management" },
      { label: "Customer Financing", href: "/homeowner-financing" },
      { label: "Creating Estimates from Files", href: "/creating-estimates-from-files" },
      { label: "AI Documents", href: "/ai-documents" },
      { label: "AI Transcription", href: "/ai-transcription" },
    ],
  },
  {
    title: "Who We Serve",
    links: [
      { label: "Remodelers", href: "/remodelers" },
      { label: "Handyman", href: "/handyman" },
      { label: "Builders", href: "/builders" },
      { label: "Fix and Flip", href: "/fix-and-flip" },
    ],
  },
  {
    title: "Blog Categories",
    links: [
      { label: "Case Studies", href: "/blog#case-studies" },
      { label: "Updates", href: "/blog#updates" },
      { label: "Resources", href: "/resources" },
      { label: "Guides", href: "/blog#guides" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com/HandoffAI" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/handoff-ai/" },
      { label: "Facebook", href: "https://facebook.com/handoffai" },
      { label: "Instagram", href: "https://www.instagram.com/handoffai/" },
      { label: "Youtube", href: "https://www.youtube.com/@HandoffAI" },
      { label: "Tik Tok", href: "https://www.tiktok.com/@handoffai" },
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
