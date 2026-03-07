import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { toHTML } from "@portabletext/to-html";

const projectId = "j8uzpe76";
const dataset = "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: { _type: string; asset?: { _ref?: string } } | null | undefined): ReturnType<typeof builder.image> {
  if (!source) return builder.image("");
  return builder.image(source);
}

// --- Types (aligned with Sanity schemas) ---

export interface SanityCategory {
  name: string;
  slug: string;
}

export interface SanityAuthor {
  name: string | null;
  avatar?: { _type: string; asset?: { _ref?: string } } | null;
}

export interface SanityPostListItem {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  date: string | null;
  excerpt: string | null;
  featuredImage?: { _type: string; asset?: { _ref?: string } } | null;
  thumbnailImage?: { _type: string; asset?: { _ref?: string } } | null;
  category?: SanityCategory | null;
  author?: SanityAuthor | null;
  isFeatured?: boolean;
}

export interface SanityPostSingle extends SanityPostListItem {
  body?: string | null;
  bodyPortable?: unknown[] | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
}

// --- GROQ queries ---

const postListProjection = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  date,
  excerpt,
  featuredImage,
  thumbnailImage,
  "category": category->{ name, "slug": slug.current },
  "author": author->{ name, avatar },
  isFeatured
`;

export const categoriesQuery = `*[_type == "blogCategory"] | order(name asc) { name, "slug": slug.current }`;

export const allPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, date) desc) {
  ${postListProjection}
}`;

export const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  ${postListProjection},
  body,
  bodyPortable,
  seoTitle,
  seoDescription
}`;

export const allPostSlugsQuery = `*[_type == "blogPost" && defined(slug.current)].slug.current`;

// --- Fetch helpers ---

export async function getCategories(): Promise<SanityCategory[]> {
  return sanityClient.fetch<SanityCategory[]>(categoriesQuery);
}

export async function getAllPosts(): Promise<SanityPostListItem[]> {
  return sanityClient.fetch<SanityPostListItem[]>(allPostsQuery);
}

export async function getPostBySlug(slug: string): Promise<SanityPostSingle | null> {
  return sanityClient.fetch<SanityPostSingle | null>(postBySlugQuery, { slug });
}

export async function getAllPostSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(allPostSlugsQuery);
}

/** Render post body: use bodyPortable if present, else raw body HTML. */
export function renderPostBody(post: SanityPostSingle): string {
  if (post.bodyPortable && Array.isArray(post.bodyPortable) && post.bodyPortable.length > 0) {
    return toHTML(post.bodyPortable, {
      components: {
        types: {
          image: ({ value }: { value?: { asset?: { _ref?: string }; alt?: string; caption?: string } }) => {
            if (!value?.asset?._ref) return "";
            const img = urlFor({ _type: "image", asset: value.asset }).width(1200).url();
            const alt = value.alt ?? "";
            const caption = value.caption;
            if (caption) {
              return `<figure><img src="${img}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy" decoding="async" class="rounded-lg w-full" /><figcaption class="mt-2 text-sm text-text-tertiary">${escapeHtml(caption)}</figcaption></figure>`;
            }
            return `<img src="${img}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy" decoding="async" class="rounded-lg w-full" />`;
          },
        },
      },
    });
  }
  return post.body ?? "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Format date for display from Sanity date/datetime string. */
export function formatPostDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function formatPostDateShort(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}
