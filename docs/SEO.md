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
- **Open Graph + Twitter** – `og:*` and `twitter:*` meta tags; `summary_large_image` card on all pages. Default share image is `public/og-image.png` (add this file, 1200×630 recommended); override per page via `image` in `PAGE_SEO`. `twitter:site` set to `@HandoffAI`.
- **Canonical URLs** – `<link rel="canonical">` on every page (current path by default; override with `canonicalPath`).
- **One-time foundation** – `src/lib/seo.ts` holds `SITE_URL`, helpers, and default description; layout uses them.
- **Structured data** – Default JSON-LD (Organization + WebSite) on all pages; optional per-page `jsonLd` for Article, etc.
- **Sitemap** – `@astrojs/sitemap` generates `sitemap-index.xml` (and segment sitemaps) at build time.
- **Robots** – `public/robots.txt` allows all crawlers, explicitly allows common AI/LLM crawlers (GPTBot, Claude-Web, PerplexityBot, etc.), and points to the sitemap.
- **llms.txt** – `public/llms.txt` provides an LLM-friendly site summary at `https://handoff.ai/llms.txt` (per [llmstxt.org](https://llmstxt.org/)): brand, one-line description, and curated links so AI systems can discover and cite Handoff accurately.

## AEO / AI search optimization

The site is tuned for **Answer Engine Optimization (AEO)** so AI search (e.g. [AEO Checker](https://check.aeojs.org/), ChatGPT, Perplexity, Google AI Overviews) can discover, understand, and cite content.

- **AI discoverability** – `robots.txt` allows common AI crawlers; `llms.txt` gives a concise, markdown summary and key links; sitemap is referenced for indexing.
- **Content structure** – One H1 per page, clear heading hierarchy, canonical URLs, complete meta and OG/Twitter tags, JSON-LD (Organization, WebSite with description, Article for blog, FAQPage where applicable).
- **AI citability** – Unique titles and descriptions per page, descriptive image alts, and structured data so answers can attribute to handoff.ai.

To re-check after changes: run a scan at [check.aeojs.org](https://check.aeojs.org/) (or similar AEO/GEO tools) against the live site.

## Final SEO element checklist (AEO/GEO)

Use this as a quick audit list for schema, meta, and social sharing.

### Single H1 (no duplicate H1s)

- **One H1 per page** – Each page should have exactly one `<h1>`. All hero/section components that render a main heading accept an optional **`headingLevel?: 1 | 2`** prop (default `1`). When `headingLevel={2}`, the component renders `<h2>` with the same styles instead of `<h1>`, so pages that compose multiple heroes (e.g. the components showcase) can keep a single H1.
- **Components with `headingLevel`** – NewHeroSection, HeroSection, FinHeroSection, PricingSection, ComparisonHero, PresetsHero, EstimateHero, CostCalculatorsHero, AiTeammateHero, HeroSectionChangeOrders, HeroSectionInvoicing, HeroSectionFileManagement, HeroSectionHomeownerFinancing, HeroSectionAiTranscription, HeroSectionCreatingEstimates, HeroSectionClientManagement, HeroSectionWinningProposals, HeroSectionAiAgent, HeroSectionAiDocuments, HeroSectionCRM.
- **Example** – The `/components` page passes `headingLevel={2}` to NewHeroSection, HeroSection, FinHeroSection, and PricingSection; the only H1 on that page is the sidebar "Components."
- **Blog listing** – `/blog` has a single H1 "Handoff Blog" (sr-only) so the visual layout is unchanged while crawlers get a proper page title.
- **Dynamic pages** – Construction cost calculator pages (`/construction-costs/[slug]`) use `calculator.title` for the H1 and breadcrumb so every slug has a non-empty, unique H1.

### Schema / meta tags

- **Organization + WebSite** – Output on every page via `getDefaultJsonLd()` in BaseLayout.
- **Article (blog)** – Blog posts pass `getArticleSchema()` with headline, author, datePublished, dateModified, image. See `src/pages/blog/[slug].astro`.
- **FAQPage** – Pages with an FAQ section can add FAQ schema for rich results. Use `getFaqPageSchema(faqItems, pageUrl)` from `@/lib/seo` and pass `jsonLd={[getFaqPageSchema(...)]}` to BaseLayout (or set `seo.jsonLd`). Example: `change-orders.astro`, `pricing.astro`.
- **Author / date** – Blog posts expose author name and published date in the Article schema and in the visible byline; optional `dateModified` is set when available.
- **Internal linking** – Nav and footer in `src/lib/navigation.ts`; blog related posts and category links; comparison pages link to other comparisons and features.

### Alt tags

- **Content images** – Use descriptive `alt` (e.g. "Jobber logo", "Handoff app screenshot"). Comparison competitor logos and blog thumbnails use descriptive alt.
- **Decorative images** – Use `alt=""` for background patterns, glows, and purely decorative graphics so screen readers skip them.

**Alt tag audit (content vs decorative):** Descriptive alts were added for: hero/dashboard carousel (PartialCarousel), BuiltOnDataSection logo, DetailRowClientManagement and EstimateDetailRow app screenshots, contractor-course and contractor-webinars avatar stacks. Left as `alt=""` (decorative): bg patterns, hero glows, small icons next to text, connector graphics, checkbox/check icons.

### Social sharing / Open Graph images

- **Default** – Every page gets `og:image` and `twitter:image` from `public/og-image.png` (1200×630 recommended) when no page-specific image is set.
- **Per-page** – Set `image` and optional `imageAlt` in `PAGE_SEO` or pass as BaseLayout props (e.g. blog posts use featured image and title as `imageAlt`).
- **Tags in place** – `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name`, `og:locale`, `og:image`, `og:image:alt`; `twitter:card` (summary_large_image), `twitter:site`, `twitter:creator` (@HandoffAI), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`, `twitter:image:width` (1200), `twitter:image:height` (630).
- **Twitter Card completeness** – BaseLayout ensures title, description, and image alt are never empty (fallbacks: default description, "Handoff") so validators do not flag incomplete cards.

### Optional enhancements

- **Table of contents** – Long articles can add a TOC component and (if desired) `TableOfContents` or list schema; not implemented by default.
- **BreadcrumbList** – Can be added via `jsonLd` for deeper pages (e.g. comparison, blog) if you want breadcrumb rich results.

## Performance (speed)

- **Static output** – Site is fully static (Astro `output: 'static'`); HTML is pre-rendered and compressHTML is on by default.
- **LCP** – Homepage hero image (NewHeroSection) uses `loading="eager"`, `decoding="async"`, and `fetchpriority="high"`. Other hero images use `loading="eager"` where they are above the fold; below-the-fold images use `loading="lazy"` and `decoding="async"`.
- **Fonts** – `preconnect` for `fonts.googleapis.com` and `fonts.gstatic.com`; Google Fonts requested with `display=swap` to avoid invisible text.
- **Third-party** – `preconnect` for `www.googletagmanager.com`. GTM loads async; PostHog and Intercom are deferred (load after window load with a delay).
- **Scripts** – Swiper (carousel) loads with `defer` so it does not block parsing. Vercel Speed Insights is used for monitoring.
- **Images** – Hero/section images use Astro-processed assets; many use `loading="lazy"` and `decoding="async"`. Consider adding explicit `width`/`height` where known to reduce CLS.

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
