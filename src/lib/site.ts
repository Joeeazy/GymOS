/**
 * Canonical origin for metadata, the sitemap and robots.txt.
 *
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment to pin it. Without that
 * it follows the current Vercel production domain, so the sitemap and robots
 * stay correct on preview infrastructure, and only falls back to the project
 * domain as a last resort.
 */
const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  vercelProduction ??
  "https://gymos.com"
).replace(/\/+$/, "");
