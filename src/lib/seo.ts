/**
 * Global SEO config and helpers.
 * Per-page SEO can be driven by Sanity or passed as props to BaseLayout.
 */

export const SITE_URL = "https://handoff.ai";

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
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
