/**
 * Landing copy. Transcribed from design_handoff_gymos/designs/GymOS Landing.dc.html,
 * which the handoff marks as final ("Copy is final unless docs contradict it").
 *
 * "M‑Pesa" uses U+2011 NON-BREAKING HYPHEN throughout, per the handoff.
 */

export const PROOF = [
  { title: "M‑Pesa built in", detail: "STK push and paybill payments matched to members automatically." },
  { title: "KES everywhere", detail: "Prices, receipts and reports in shillings. No currency conversion." },
  { title: "Phone-number login", detail: "Members sign in with 2547… numbers. No email needed." },
  { title: "Works on any phone", detail: "Installable web app. No Play Store, light on data." },
];

export const ROLE_TABS = [
  { key: "owner", label: "Owner" },
  { key: "front_desk", label: "Front desk" },
  { key: "accountant", label: "Accountant" },
  { key: "trainer", label: "Trainer" },
  { key: "branch_manager", label: "Branch manager" },
] as const;

export type RoleKey = (typeof ROLE_TABS)[number]["key"];

export const MPESA_POINTS = [
  {
    icon: "phone_iphone",
    title: "Renew from the member's phone",
    detail:
      "Members tap Renew, get an M‑Pesa prompt, enter their PIN. Their membership extends the moment Safaricom confirms.",
  },
  {
    icon: "link",
    title: "Paybill payments matched for you",
    detail:
      "Members who pay to your paybill with their member number as the account are matched automatically, no SMS forwarding.",
  },
  {
    icon: "receipt_long",
    title: "Every code, on every receipt",
    detail:
      "The M‑Pesa transaction code is stored on the payment and the receipt, so disputes take seconds instead of an afternoon.",
  },
];

export const FEATURE_GROUPS = [
  {
    icon: "smartphone",
    title: "Member app",
    detail:
      "What your members install on their phone. Branded with your gym name, works without the Play Store.",
    items: [
      { title: "Membership status", detail: "Plan, days left and expiry date on the home screen." },
      { title: "Renew with M‑Pesa", detail: "One tap sends an STK prompt to their phone." },
      { title: "QR check-in", detail: "A rotating code scanned at the front desk." },
      { title: "Class booking", detail: "See the week's timetable and book or cancel a spot." },
      { title: "Workout & diet plans", detail: "Plans written by their trainer, day by day." },
      { title: "Progress tracking", detail: "Weight, measurements and private progress photos." },
    ],
  },
  {
    icon: "desktop_windows",
    title: "Club dashboard",
    detail:
      "For your staff on the front desk tablet, the office laptop, or a phone. Each role sees only what it needs.",
    items: [
      { title: "Front desk", detail: "Scan, search, register and take payment from one screen." },
      { title: "Members", detail: "Search, filter by status or plan, see who's expiring." },
      { title: "Trainers", detail: "Client list and a simple plan builder." },
      { title: "Branch managers", detail: "Everything above, locked to their branch." },
    ],
  },
  {
    icon: "payments",
    title: "Payments & accounting",
    detail: "Money in and money out, without a separate spreadsheet.",
    items: [
      { title: "M‑Pesa STK + paybill", detail: "Codes recorded automatically from Safaricom." },
      { title: "Cash and card", detail: "Recorded with references and flagged for reconciliation." },
      {
        title: "Invoices & refunds",
        detail: "Automatic invoices; refunds need owner or accountant approval.",
      },
      { title: "Expenses", detail: "Rent, KPLC tokens, equipment, by branch and category." },
    ],
  },
  {
    icon: "monitoring",
    title: "Reports",
    detail: "The numbers an owner checks every morning.",
    items: [
      { title: "Revenue by branch", detail: "Monthly, split by branch and payment method." },
      { title: "Expiring members", detail: "Who lapses this week and what it's worth." },
      { title: "Profit & loss", detail: "Revenue minus expenses and refunds, per month." },
      { title: "Check-in trends", detail: "Busy hours and attendance per member." },
    ],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Create your gym",
    detail:
      "Enter your gym name, county, email and phone. Confirm with the code we email you. You get your own address, like simbafitness.gymos.co.ke.",
    time: "2 minutes",
  },
  {
    n: "02",
    title: "Add your membership plans",
    detail:
      "Name, price in KES and duration, for example Monthly Unlimited, KES 4,500, 30 days. Add off-peak or day passes if you sell them.",
    time: "5 minutes",
  },
  {
    n: "03",
    title: "Connect your M‑Pesa paybill or till",
    detail:
      "Paste your Daraja credentials from the Safaricom portal. We send a KES 1 test prompt to your phone to confirm it works.",
    time: "15 minutes, or a call with us",
  },
  {
    n: "04",
    title: "Invite your staff",
    detail:
      "Add front desk, trainers, branch managers and your accountant by email, and pick each person's role. They sign in with a password plus a one-time email code.",
    time: "5 minutes",
  },
  {
    n: "05",
    title: "Register members",
    detail:
      "Import a spreadsheet, or let the front desk register members as they arrive: name, phone, plan, branch. Members get a temporary password to sign in.",
    time: "Ongoing",
  },
  {
    n: "06",
    title: "Take your first M‑Pesa payment",
    detail:
      "At the desk, pick the member and send an STK prompt, or let them tap Renew in their app. The code, receipt and new expiry date appear the moment they enter their PIN.",
    time: "Same day",
  },
];

export const WHY_KENYA_PARAGRAPHS = [
  "Most gyms in Kenya already get paid by M‑Pesa. The problem is everything after the payment: matching an SMS confirmation to a member, writing it in a book, remembering who has expired, and chasing renewals one WhatsApp at a time.",
  "Imported gym software doesn't help much. It prices in dollars, assumes card billing, and treats M‑Pesa as a plug-in, if it supports it at all. Members get an app that asks for a card they don't use.",
  "GymOS starts from the other end. Every amount is in KES. Every member logs in with their phone number. Renewing is an M‑Pesa prompt on the member's own phone, and the confirmation code lands on the right membership automatically. Counties, phone formats and receipts follow Kenyan conventions, not American ones.",
  "We're building for the independent gym in Westlands, the studio in Nyali, and the chain with branches across Kisumu, and for the front desk staff who use it at 6am.",
];

export const PRINCIPLES = [
  {
    title: "KES, not dollars",
    detail: "Our own pricing and every number you see is in Kenyan shillings.",
  },
  {
    title: "Phones first",
    detail: "Designed for a member's phone and a front desk tablet before a desktop.",
  },
  {
    title: "Fewer, better features",
    detail: "We leave out what most gyms don't use, so what's left works properly.",
  },
];

export const FAQS = [
  {
    q: "Do I need my own M‑Pesa paybill or till?",
    a: "Yes. Payments go straight into your own paybill or till, not through GymOS. You connect it once from the dashboard using your Safaricom Daraja credentials; we walk you through it, and our team can help on a call.",
  },
  {
    q: "Does GymOS take a percentage of payments?",
    a: "No. You pay a flat monthly fee for your tier. Safaricom's normal transaction charges on your paybill still apply.",
  },
  {
    q: "What do members need?",
    a: "A phone with a browser. The member app installs from the browser (no Play Store needed) and works on any smartphone. Members log in with the phone number you registered them with.",
  },
  {
    q: "Can I still take cash and card?",
    a: "Yes. Front desk records cash with a receipt number and card with the PDQ reference. These are flagged so your accountant can reconcile them against the till.",
  },
  {
    q: "I have several branches. Can managers only see their own?",
    a: "Yes. Branch managers, front desk and trainers are tied to a branch and only see that branch. Owners and accountants can switch between branches or see all of them together.",
  },
  {
    q: "How do I move my existing members over?",
    a: "Upload a spreadsheet with names, phone numbers and expiry dates, or have the front desk register them as they walk in. The short registration form takes under a minute.",
  },
  {
    q: "Is member data safe?",
    a: "Data is stored encrypted and access is limited by role. Every action by GymOS support staff on your account is logged and visible to you. We follow the Kenya Data Protection Act, 2019.",
  },
  {
    q: "What happens if I stop paying?",
    a: "After 30 days unpaid your gym is paused: staff and members can't log in, but nothing is deleted and incoming M‑Pesa payments are still recorded. Pay and everything comes back.",
  },
];

/** Trial unlocks Advanced-tier features per docs/07, not the design's "Pro". */
export const START_INCLUDES = [
  "14 days free, all Advanced features",
  "No card or M‑Pesa needed to start",
  "Setup checklist inside the dashboard",
  "Help from a real person in Nairobi",
];

export const COUNTIES = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Uasin Gishu",
  "Kiambu",
  "Machakos",
  "Kajiado",
  "Nyeri",
  "Kilifi",
  "Other county…",
];
