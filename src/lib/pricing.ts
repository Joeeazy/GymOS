/**
 * Platform tiers.
 *
 * The landing design ships placeholder tiers (Starter/Growth/Pro at
 * 2,500/6,500/14,000) and flags them in-page as "replace with
 * docs/07-pricing-tiers.md". Per the handoff's conflict rule — docs win for
 * tiers, design wins for visual treatment — every name, price, cap and feature
 * row below comes from docs/07-pricing-tiers.md. Only the layout is the
 * design's.
 *
 * Prices are draft placeholders for market validation in docs/07 itself; the
 * cap + feature-unlock *structure* is the decided part.
 */

export type TierCard = {
  name: string;
  price: string;
  per: string;
  description: string;
  popular: boolean;
  cta: string;
};

export const TIERS: TierCard[] = [
  {
    name: "Foundation",
    price: "KES 2,500",
    per: "/ month",
    description:
      "One location getting off the paper register. Up to 150 active members and 5 staff accounts.",
    popular: false,
    cta: "Start trial",
  },
  {
    name: "Advanced",
    price: "KES 6,000",
    per: "/ month",
    description:
      "Up to 500 members and 15 staff. Adds the member app, WhatsApp reminders and enquiry follow-up.",
    popular: true,
    cta: "Start trial",
  },
  {
    name: "Professional",
    price: "KES 15,000",
    per: "/ month",
    description:
      "Up to 1,500 members across 3 branches. Adds classes, trainer tools, POS and cross-branch reports.",
    popular: false,
    cta: "Start trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    description:
      "Chains with unlimited branches and members, a custom domain, and a dedicated support SLA.",
    popular: false,
    cta: "Talk to us",
  },
];

export const TIER_NAMES = TIERS.map((t) => t.name);

/** A matrix cell: a tick, a dash, or a literal value shown in mono. */
export type Cell = { kind: "yes" } | { kind: "no" } | { kind: "text"; text: string };

const Y: Cell = { kind: "yes" };
const N: Cell = { kind: "no" };
const T = (text: string): Cell => ({ kind: "text", text });

export type MatrixRow = { label: string; cells: [Cell, Cell, Cell, Cell] };

/** Rows transcribed from the docs/07 tier table, in its own order. */
export const MATRIX: MatrixRow[] = [
  { label: "Price", cells: [T("KES 2,500/mo"), T("KES 6,000/mo"), T("KES 15,000/mo"), T("Talk to us")] },
  { label: "Active members", cells: [T("150"), T("500"), T("1,500"), T("Unlimited")] },
  { label: "Staff accounts", cells: [T("5"), T("15"), T("50"), T("Unlimited")] },
  { label: "Branches", cells: [T("1"), T("1"), T("3"), T("Unlimited")] },
  { label: "Your own subdomain", cells: [Y, Y, Y, Y] },
  { label: "M‑Pesa, email reminders, Kenyan data shapes, DPA tooling", cells: [Y, Y, Y, Y] },
  { label: "Flexible pricing (day and week passes, pay-as-you-go, discounts)", cells: [Y, Y, Y, Y] },
  { label: "WhatsApp reminders", cells: [N, Y, Y, Y] },
  { label: "Member app: self-renew and QR check-in", cells: [N, Y, Y, Y] },
  { label: "Enquiry follow-up automation and win-back", cells: [N, Y, Y, Y] },
  { label: "Classes, booking and waitlists", cells: [N, N, Y, Y] },
  { label: "Trainer tools: PT sessions, workout and diet plans, progress", cells: [N, N, Y, Y] },
  { label: "Multi-branch and chain reporting", cells: [N, N, Y, Y] },
  { label: "POS for drinks and supplements", cells: [N, N, Y, Y] },
  { label: "Full reports and exports (CSV and PDF), audit log viewer", cells: [N, N, Y, Y] },
  { label: "Custom domain (app.yourclub.co.ke)", cells: [N, N, N, Y] },
  { label: "Dedicated support and SLA", cells: [N, N, N, Y] },
  {
    label: "Billing",
    cells: [T("M‑Pesa"), T("M‑Pesa"), T("M‑Pesa or bank"), T("M‑Pesa, bank or invoice")],
  },
];

export type BranchChoice = 1 | 2 | 3 | 4;

/** Segmented options on the Get started form, as labelled in the design. */
export const BRANCH_OPTIONS: { value: BranchChoice; label: string; phrase: string }[] = [
  { value: 1, label: "1", phrase: "1 branch" },
  { value: 2, label: "2", phrase: "2 branches" },
  { value: 3, label: "3–5", phrase: "3–5 branches" },
  { value: 4, label: "6+", phrase: "6+ branches" },
];

/**
 * Cheapest tier whose branch cap fits the answer. docs/07 caps branches at
 * 1 (Foundation), 1 (Advanced), 3 (Professional) and unlimited (Enterprise),
 * so two branches already needs Professional — Advanced is never the
 * recommendation on branch count alone.
 */
export function recommendTier(branches: BranchChoice): string {
  if (branches === 1) return "Foundation";
  if (branches === 2 || branches === 3) return "Professional";
  return "Enterprise";
}
