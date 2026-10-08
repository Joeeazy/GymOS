/**
 * Canonical origin for metadata, sitemap and robots.
 *
 * CLAUDE.md and this repo's README put the marketing site at `gymos.com`
 * (gyms live at `<slug>.gymos.com`), while the design's copy writes
 * `gymos.co.ke` in the footer and in the demo subdomain. The docs win for
 * routing, so that is the default — override per environment rather than
 * hard-coding either one.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gymos.com"
).replace(/\/+$/, "");
