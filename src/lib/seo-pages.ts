/**
 * Per-page SEO config. Edit title, description, image, etc. here for each route.
 * Pages use getPageSeo(path) and spread the result into BaseLayout.
 */

import { getDefaultDescription } from "@/lib/seo";
import type { PageSeo } from "@/lib/seo";

/** SEO config keyed by exact path (e.g. "/", "/careers"). */
export const PAGE_SEO: Record<string, Partial<PageSeo> & { title: string }> = {
  "/": {
    title: "Handoff AI Estimating | Construction Software for Remodelers and Handymen",
    description:
      "Transform your remodeling business with Handoff AI. Generate detailed, accurate project estimates instantly. Save time, reduce errors, and win more jobs with our AI-driven software.",
  },
  "/careers": {
    title: "Join the Team | Careers at Handoff",
    description:
      "Explore open roles at Handoff and be part of a fast-growing, product-driven company shaping the future of development and design collaboration. See how you can make an impact.",
  },
  "/pricing": {
    title: "Handoff AI Estimating | Pricing",
    description:
      "Explore Handoff AI&#x27;s competitive pricing for remodeling businesses. Start with a 7-day free trial and find the perfect plan to enhance your project estimates. Compare features today!",
  },
  "/blog": {
    title: "Handoff AI Estimating | Blog",
    description:
      "Stay updated with Handoff AI&#x27;s blog. Explore tips, guides, updates, and resources to accelerate growth and master best practices in the home service industry. Enhance your skills with expert insights.",
  },
  "/reviews": {
    title: "Handoff AI Estimating | Reviews",
    description:
      "Discover why contractors love Handoff. Explore raving reviews from customer testimonials, app stores, and social networks to see the impact for yourself.",
  },
  "/remodelers": {
    title: "Handoff AI Estimating | Remodelers",
    description:
      "Handoff helps remodelers scale profitably by streamlining workflows, increasing profitability, and simplifying project management, all without adding more headcount.",
  },
  "/contractor-webinars": {
    title: "Handoff Webinars – Grow Your Contractor Business with AI Insights | Handoff",
    description:
      "Join live Handoff webinars to learn proven systems for modern contractors. Get practical tips, Q&amp;A, and expert guidance to scale your business. Reserve your spot now!",
  },

  "/instant-ai-estimates": {
    title: "Handoff AI Estimating | Instant AI Estimates",
    description:
      "Get accurate, detailed construction estimates in seconds with Handoff&#x27;s AI-driven tool. Streamline your remodeling projects with instant estimates, easy editing, and localized pricing data. Start your 7-day free trial today!",
  },
  "/resources": {
    title: "Resources — Handoff",
    description: getDefaultDescription(),
  },


  "/project-management": {
    title: "Project Management",
    description:
      "Handoff offers residential construction contractors an AI-agent that acts as an assistant for managing your projects from start to finish like generating estimates, sending proposals, and collecting invoices.",
  },
  "/financial-business-solution": {
    title: "Financial business solutions — Handoff",
    description:
      "Financial business solutions for contractors. Invoicing, payments, and reporting.",
  },

  "/comparison": {
    title: "Comparison",
    description:
      "JobTread is best suited for commercial builders. Handoff is built for residential remodelers and handymen. Compare features, pricing, and more.",
  },
  "/ai-teammate": {
    title: "Ai teammate",
    description: "ai teammate - Handoff"
      },
  "/presets": {
    title: "Presets",
    description:
      "Train an AI teammate to run your construction business",
  },
  "/sales-marketing-growth": {
    title: "Sales & Marketing Growth",
    description:
      "Turn site visits into signed contracts faster than any competitor. Handoff captures every lead and generates complete estimates using trained AI built for construction",
  },
  "/careers/jobs": {
    title: "Open Positions | Careers at Handoff",
    description:
      "Browse open roles at Handoff. Join a fast-growing team building AI-powered software for remodelers and handymen. Find your next opportunity and apply today.",
  },
  "/construction-costs": {
    title: "Construction Costs for Contractors",
    description:
      "Use Handoff’s free construction costs database and estimating calculations to quickly get accurate construction costs for any project across US cities. From residential remodeling, new construction, repairs, roofing, electrical, and many more categories to plan your projects with confidence.",
  },
  "/comparison/handoff-vs-contractor-foreman": {
    title: "Handoff vs Contractor Foreman",
    description:
      "Unlike Contractor Foreman&#x27;s complex interface requiring dozens of clicks, Handoff&#x27;s AI-native project management automates routine tasks and simplifies workflows, saving contractors 75-85% of administrative time while actually improving project oversight and client communication."
  },
 "/comparison/handoff-vs-jobtread": {
    title: "Handoff vs Job Tread",
    description: "JobTread is best suited for commercial builders and ground-up home builders. Handoff is developed primarily for Residential Remodelers and Handymen. With Handoff&#x27;s interfaced, residential general contractors won&#x27;t be overwhelmed with complexity that does not apply to their projects."
 },
 "/comparison/handoff-vs-markate": {
    title: "Handoff vs Markate",
    description: "Handoff is 100% developed and optimized for residential construction contractors, offering pricing accuracy and efficiency. Markate, although offering some overlapping features, primarily offers job management for home service businesses."
 },
 "/comparison/handoff-vs-simplywise": {
    title: "Handoff vs SimplyWise",
    description: "Handoff is 100% developed and optimized for remodeling contractors, offering pricing accuracy and efficiency. SimplyWise was not created for estimating purposes and the estimate is a random feature with no construction background in an invoicing App. Handoff, on the other hand, is an AI-driven estimating app that presents estimates supported by local, real-time construction databases."
 },
 "/comparison/handoff-vs-xactimate": {
    title: "Handoff vs Xactimate",
    description: "Handoff is more efficient and provides estimates quicker, Xactimate on the other hand is more complicated and time-consuming. Xactimate does not offer AI estimation, unlike Handoff, which speeds up the process with advanced technology. Xactimate is optimized for Insurance Adjusters, Public Adjusters, Restoration Companies, and General Contractors working with insurance claim settlements."
 },
 "/comparison/handoff-vs-houzz-pro": {
    title: "Handoff vs Houzz Pro",
    description: "Handoff is an AI-driven application that utilizes advanced algorithms and real-time data to produce estimates based on defined scopes of work. Houzz Pro&#x27;s AI features are extremely limited, and not useful for contractors. Plus, Houzz Pro includes features not essential for builders, such as mood boards and 3D planners, which can make the tool complex and expensive for those not using these features."
 },
 "/comparison/handoff-vs-housecall-pro": {
    title: "Handoff vs Housecall Pro",
    description: "Handoff is an AI-native solution offering automated estimates, proposals, and invoicing. Housecall Pro does not offer AI-powered estimates or real-time, localized pricing data. Plus, Handoff is specifically designed for remodelers and construction professionals, unlike Housecall Pro, which targets recurring services."
 },
 "/comparison/handoff-vs-jobber": {
    title: "Handoff vs Jobber",
    description: "Although Jobber offers an AI co-pilot, it is not a not AI-native platform like Handoff. Rather, Jobber&#x27;s co-pilot answers questions that ChatGPT will do for free. Handoff offers AI-generated estimates, reducing manual input and error compared to Jobber&#x27;s manual processes."
 },
 "/comparison/handoff-vs-joist": {
    title: "Handoff vs Joist",
    description: "Handoff offers AI-generated estimates, reducing manual input and error compared to Joist&#x27;s manual processes. Joist is limited to single-trade projects, while Handoff caters to complex, multi-trade construction projects. Joist also lacks a desktop version, restricting users to mobile devices, whereas Handoff provides full desktop support."
 },
 "/comparison/handoff-vs-homewyse": {
    title: "Handoff vs Homewyse",
    description: "Handoff uses real-time, local construction pricing data from actual supliers and construction professionals, to generate quick and accurate estimates with AI. Homewyse provides price books but does not automatically create estimates, proposals, and invoices with the click of a button."
 },
 "/comparison/handoff-vs-chatgpt": {
    title: "Handoff vs ChatGPT",
    description: "Handoff uses real-time, local construction pricing data from actual suppliers and construction professionals, to generate quick and accurate estimates. ChatGPT isn’t specifically trained on construction cost data, leading to very inaccurate and non-localized estimates."
 },
 "/fix-and-flip": {
    title: "Handoff AI Estimating | Fix and Flip",
    description: "Boost your real estate business with Handoff AI&#x27;s Fix and Flip solutions. Get AI-driven project assessments and proposals for accurate estimates, manage contractor bids, and grow your portfolio. Start your 7-day free trial!"
 },
 "/handyman": {
    title: "Handoff AI Estimating | Handyman",
    description: "Become the best-paid handyman in your area with Handoff. Streamline your workflow, increase profitability, and manage projects effortlessly, all without adding more headcount."
   },
   "/ai-agent": {
    title: "AI Agent by Handoff – Automate Customer Conversations with Ease",
    description: "Discover Handoff’s AI Agent: a smart, no-code solution for automating customer interactions across platforms. Boost efficiency, reduce workload, and deliver instant support 24/7."
   },
   "/ai-documents": {
    title: "AI Documents – Turn Photos, Notes &amp; Estimates into Project Docs Instantly | Handoff",
    description: "Generate scopes of work, punch-lists, material lists and daily logs in seconds using Handoff’s AI. Upload your notes, photos, or estimates and get polished, shareable documents—all organized under one project."
   }, 
   "/ai-transcription": {
    title: "AI Transcription for Contractors | Handoff",
    description: "Convert voice notes into organized documents instantly with Handoff’s AI transcription. Create estimates, reports, and checklists hands-free — built for busy construction teams."
   },
   "/change-orders": {
    title: "Change Orders",
    description: "We&#x27;ve included everything you need to know to be successful during your 7-day free trial of Handoff. You&#x27;ll be creating AI estimates, proposals, and invoices by the end of the tutorial!"
   },
   "/client-management-system": {
    title: "Handoff AI Estimating | Client Management System",
    description: "Efficiently manage client relationships with Handoff&#x27;s intuitive Client Management System. Track client details, project statuses, and streamline your business operations with integrated AI-driven estimates and proposals. Try our 7-day free trial now!"
   },
   "/contractor-course": {
    title: "7-Day AI Contractor Course | Handoff Training Program for Remodelers",
    description: "Master AI-powered estimating, project management, and client communication. Free 7-day course to help handymen increase profitability and streamline workflows."
   },
   "/creating-estimates-from-files": {
    title: "Creating Estimates – Fast &amp; Accurate Quotes with Handoff",
    description: "Streamline your sales process by creating professional estimates in minutes with Handoff. Customize pricing, add services, and send quotes that win business faster."
   },
   "/file-management": {
    title: "File Management – Generate Estimates with Photos, Videos, and Files",
    description: "Manage photos, videos, and other files with ease using Handoff’s AI-powered file management system. Use files to generate accurate project estimates in seconds"
   },
   "/homeowner-financing": {
    title: "Homeowner Financing – Flexible Payment Solutions for Customers | Handoff",
    description: "Empower your customers with flexible financing options through Handoff. Increase conversions and make high-ticket services more accessible with seamless payment plans."
       },  
       "/invoicing": {
    title: "Handoff AI Estimating | Invoicing",
    description: "Streamline your billing process with Handoff&#x27;s digital invoicing. Create and send invoices quickly, accept payments via credit card and ACH, and integrate with proposals for seamless project management. Try our 7-day free trial today!"
       },  
       "/privacy-policy": {
    title: "Handoff AI Estimating | Privacy Policy",
    description: "Learn how Handoff AI collects, uses, and safeguards your data. Read our privacy policy to understand your rights, data security measures, and how we handle personal information. Stay informed on privacy practices for using our AI-powered lead response and estimation services."
       },
       "/terms-of-use": {
    title: "Handoff AI Estimating | Terms of Service",
    description: "Understand the terms and conditions for using Handoff AI&#x27;s lead response and estimation services. Read our Terms of Service to learn about user responsibilities, intellectual property rights, payment terms, data privacy, and more. Stay informed about your obligations and our policies for a seamless experience with Handoff AI"
       },
"/winning-ai-proposals": {
    title: "Handoff AI Estimating | Winning AI Proposals",
    description: "Create impressive client proposals effortlessly with Handoff&#x27;s AI-powered tool. Transform your estimates into detailed, professional proposals that win deals, complete with file attachments and digital signatures. Start your 7-day free trial now!"
},
       
};

/**
 * Returns SEO props for the given path. Use in page frontmatter:
 *   const seo = getPageSeo(Astro.url.pathname);
 *   <BaseLayout {...seo}>
 * For paths not in PAGE_SEO, returns a safe fallback (site title + default description).
 */
export function getPageSeo(path: string): PageSeo {
  const normalized = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  const entry = PAGE_SEO[normalized];

  if (entry) {
    return {
      title: entry.title,
      description: entry.description ?? getDefaultDescription(),
      image: entry.image,
      imageAlt: entry.imageAlt,
      canonicalPath: entry.canonicalPath,
      noindex: entry.noindex,
      jsonLd: entry.jsonLd,
    };
  }

  // Fallback for unknown paths (e.g. dynamic routes that provide their own SEO)
  return {
    title: "Handoff",
    description: getDefaultDescription(),
  };
}
