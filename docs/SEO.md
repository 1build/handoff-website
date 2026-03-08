# SEO setup

## Per-page SEO (central config)

**All static pages** use a single config file so you can edit title, description, and other SEO fields in one place.

- **Config file** – `src/lib/seo-pages.ts`
- **What to edit** – The `PAGE_SEO` object. Each key is the page path (e.g. `"/"`, `"/careers"`, `"/pricing"`). Each value can include:
  - `title` (required) – Page title and `<meta name="description">` / OG title
  - `description` – Meta description (optional; falls back to site default)
  - `image` – OG/Twitter image path or full URL (optional)
  - `imageAlt` – Alt text for the share image (optional)
  - `canonicalPath` – Override canonical URL path (optional)
  - `noindex` – Set `true` to add `noindex, nofollow` (optional)
  - `jsonLd` – Extra structured data (optional)

Example: to change the careers page title and description, edit the `"/careers"` entry in `PAGE_SEO` in `src/lib/seo-pages.ts`.

Pages that use this config call `getPageSeo(Astro.url.pathname)` and pass the result to BaseLayout: `<BaseLayout {...seo}>`. **Blog posts** (`/blog/[slug]`) do not use this config; they use SEO from the CMS (Sanity) per post.

## What’s in place

- **Global metadata** – `BaseLayout` accepts SEO props; every page gets consistent meta and canonical URLs.
- **Per-page SEO** – Central config in `src/lib/seo-pages.ts` (see above). Optional overrides: `image`, `imageAlt`, `canonicalPath`, `noindex`, `jsonLd`. Dynamic pages (e.g. blog post) can pass props from Sanity.
- **Open Graph + Twitter** – `og:*` and `twitter:*` meta tags; large image card when `image` is set.
- **Canonical URLs** – `<link rel="canonical">` on every page (current path by default; override with `canonicalPath`).
- **One-time foundation** – `src/lib/seo.ts` holds `SITE_URL`, helpers, and default description; layout uses them.
- **Structured data** – Default JSON-LD (Organization + WebSite) on all pages; optional per-page `jsonLd` for Article, etc.
- **Sitemap** – `@astrojs/sitemap` generates `sitemap-index.xml` (and segment sitemaps) at build time.
- **Robots** – `public/robots.txt` allows all crawlers and points to `https://handoff.ai/sitemap-index.xml`.

## Overriding from a page (optional)

If a page needs to override or add SEO props (e.g. from Sanity), you can still pass props to `BaseLayout`:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { getPageSeo } from "@/lib/seo-pages";

const seo = getPageSeo(Astro.url.pathname);
// Override or add: seo.title = "Custom title"; seo.image = "/custom-og.jpg";
---
<BaseLayout {...seo} description="Custom meta description">
  ...
</BaseLayout>
```

Or without the config (e.g. blog post):

```astro
<BaseLayout
  title={post.seoTitle ?? `${post.title} — Handoff Blog`}
  description={post.seoDescription ?? post.excerpt}
  image={post.featuredImageUrl}
>
```

## Config

- **Site URL** – `src/lib/seo.ts`: `SITE_URL = "https://handoff.ai"`.
- **Per-page SEO** – `src/lib/seo-pages.ts`: `PAGE_SEO` and `getPageSeo(path)`.
- **Sitemap** – Generated automatically; `astro.config.mjs` has `site: 'https://handoff.ai'` and `integrations: [sitemap()]`.
