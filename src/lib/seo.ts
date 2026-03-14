/**
 * Global SEO config and helpers.
 * Per-page SEO can be driven by Sanity or passed as props to BaseLayout.
 */

export const SITE_URL = "https://handoff.ai";

/** Default OG and Twitter card image when a page does not set one. File: public/og-image.png (served at /og-image.png → SITE_URL/og-image.png). Use 1200×630 for best results. */
export const DEFAULT_OG_IMAGE = "/og-image.png";

const DEFAULT_DESCRIPTION =
  "Train an AI Teammate to run your construction business. Set your rules once — Handoff applies them automatically across every estimate, proposal, and change order.";

/** Build absolute canonical URL for a path (e.g. /blog/my-post) */
export function getCanonicalUrl(path: string): string {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${pathname}`;
}

export interface PageSeo {
  title: string;
  description?: string;
  /** Absolute URL for OG/Twitter image, or path (e.g. /og.jpg) resolved against SITE_URL */
  image?: string;
  imageAlt?: string;
  /** Override canonical path (default: current URL path) */
  canonicalPath?: string;
  noindex?: boolean;
  /** JSON-LD structured data (object or array). Merged with default WebSite schema when present. */
  jsonLd?: object | object[];
}

export function getDefaultDescription(): string {
  return DEFAULT_DESCRIPTION;
}

/** Resolve image URL to absolute for OG/Twitter */
export function resolveImageUrl(image: string | undefined): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${SITE_URL}${path}`;
}

/** Default Organization + WebSite JSON-LD for the homepage and site-wide */
export function getDefaultJsonLd(canonicalUrl: string): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Handoff",
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Handoff",
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

/** FAQPage schema for AEO/GEO. Use on pages that have an FAQ section. Pass the same items used in FaqSection. */
export function getFaqPageSchema(
  faqItems: { question: string; answer: string }[],
  pageUrl: string
): object {
  const mainEntity = faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]+>/g, "").trim(),
    },
  }));
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity,
  };
}

/** Article schema for blog posts. Supports AEO/GEO with author and dates. */
export function getArticleSchema(opt: {
  url: string;
  headline: string;
  description?: string;
  imageUrl?: string;
  datePublished: string; // ISO 8601
  dateModified?: string; // ISO 8601
  authorName?: string;
}): object {
  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${opt.url}#article`,
    mainEntityOfPage: { "@id": opt.url },
    headline: opt.headline,
    datePublished: opt.datePublished,
  };
  if (opt.description) article.description = opt.description;
  if (opt.imageUrl) article.image = opt.imageUrl;
  if (opt.dateModified) article.dateModified = opt.dateModified;
  if (opt.authorName) {
    article.author = { "@type": "Person", name: opt.authorName };
  }
  return article;
}
