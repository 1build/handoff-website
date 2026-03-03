# SEO setup

## What’s in place

- **Global metadata** – `BaseLayout` accepts SEO props; every page gets consistent meta and canonical URLs.
- **Per-page SEO** – Optional props: `title`, `description`, `image`, `imageAlt`, `canonicalPath`, `noindex`, `jsonLd`. Pass from page or from Sanity.
- **Open Graph + Twitter** – `og:*` and `twitter:*` meta tags; large image card when `image` is set.
- **Canonical URLs** – `<link rel="canonical">` on every page (current path by default; override with `canonicalPath`).
- **One-time foundation** – `src/lib/seo.ts` holds `SITE_URL`, helpers, and default description; layout uses them.
- **Structured data** – Default JSON-LD (Organization + WebSite) on all pages; optional per-page `jsonLd` for Article, etc.
- **Sitemap** – `@astrojs/sitemap` generates `sitemap-index.xml` (and segment sitemaps) at build time.
- **Robots** – `public/robots.txt` allows all crawlers and points to `https://handoff.ai/sitemap-index.xml`.

## Per-page usage (~1 hour per page)

In any page that uses `BaseLayout`:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
// Optional: import from Sanity and map to SEO props
---

<BaseLayout
  title="Page title (e.g. from Sanity)"
  description="Optional meta description"
  image="/path/to/og-image.jpg"
  imageAlt="Optional alt for OG/Twitter"
  canonicalPath="/custom/path"
  noindex={false}
  jsonLd={{
    "@type": "Article",
    headline: "...",
    datePublished: "...",
    ...
  }}
>
  ...
</BaseLayout>
```

- **Sanity-driven** – Fetch document (e.g. page, post), then pass `title`, `description`, `image` (asset URL), etc., into `BaseLayout`.
- **Structured data** – Use `jsonLd` for Article, FAQPage, Product, or other schema types; they are output in addition to the default WebSite/Organization JSON-LD.

## Config

- **Site URL** – `src/lib/seo.ts`: `SITE_URL = "https://handoff.ai"`.
- **Sitemap** – Generated automatically; `astro.config.mjs` has `site: 'https://handoff.ai'` and `integrations: [sitemap()]`.
