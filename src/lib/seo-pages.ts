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
  "/sales-marketing-growth": {
    title: "Handoff — Construction-Trained AI for Sales and Lead Intake",
    description:
      "Construction-trained AI for sales and lead intake. Turn leads into estimates faster.",
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

  "/presets": {
    title: "Presets — Train an AI Teammate | Handoff",
    description:
      "Train an AI teammate with presets. Set your rules once, apply them everywhere.",
  },

  "/project-management": {
    title: "Project Management",
    description:
      "Handoff offers residential construction contractors an AI-agent that acts as an assistant for managing your projects from start to finish like generating estimates, sending proposals, and collecting invoices.",
  },
  "/financial-management": {
    title: "Financial Management — Handoff",
    description:
      "Financial management for contractors. Invoicing, payments, and reporting.",
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
