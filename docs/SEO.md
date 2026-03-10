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

## Sitemap automation

The XML sitemap is **generated at build time** by `@astrojs/sitemap`. No manual file or cron is needed.

- **When** – Every `npm run build` (and thus every Vercel deploy) produces `sitemap-index.xml` and segment sitemaps (e.g. `sitemap-0.xml`) in the build output.
- **Where** – Live at `https://handoff.ai/sitemap-index.xml`. Crawlers discover it via `public/robots.txt` (`Sitemap: https://handoff.ai/sitemap-index.xml`).
- **Config** – In `astro.config.mjs`, the sitemap integration:
  - **Excludes** – `/components`, `/astro-components`, and `/blogold` so they are not included in the sitemap.
  - **Serializes** – Sets `lastmod` to build date, and `changefreq` / `priority` by section (e.g. homepage `daily` / `1`, blog posts `weekly` / `0.8`).

To change what’s excluded, edit the `filter` function in `astro.config.mjs`. To change `lastmod`/`changefreq`/`priority`, edit the `serialize` function.
