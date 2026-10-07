export type NavItem = { href: string; label: string };

/** Header and footer nav. Mirrors the `pages` list in the landing design. */
export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/why-kenya", label: "Why Kenya" },
  { href: "/faq", label: "FAQ" },
];

export const START_HREF = "/start";
