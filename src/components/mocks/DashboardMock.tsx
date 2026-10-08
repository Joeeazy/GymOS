import { Icon } from "@/components/ui/Icon";
import type { RoleKey } from "@/lib/content";

/**
 * Stand-in for the Club Dashboard screenshots the design embeds live
 * (`<dc-import name="Club Dashboard" role="…">`). gymos_club_dashboard is not
 * built yet, so each role view is rebuilt here from the handoff's Club
 * Dashboard spec and the docs/02 permission matrix. Replace with real
 * screenshots once that repo exists.
 */

type Role = {
  label: string;
  person: string;
  nav: { icon: string; label: string }[];
  title: string;
  subline: string;
  branch: string;
  branchLocked: boolean;
};

const ROLES: Record<RoleKey, Role> = {
  owner: {
    label: "Gym Owner",
    person: "Peter Mwangi",
    nav: [
      { icon: "insights", label: "Overview" },
      { icon: "point_of_sale", label: "Front desk" },
      { icon: "group", label: "Members" },
      { icon: "payments", label: "Payments" },
      { icon: "receipt_long", label: "Invoices" },
      { icon: "trending_down", label: "Expenses" },
      { icon: "event", label: "Classes" },
      { icon: "badge", label: "Staff" },
      { icon: "settings", label: "Settings" },
    ],
    title: "Overview",
    subline: "All branches · October 2026",
    branch: "All branches",
    branchLocked: false,
  },
  front_desk: {
    label: "Front Desk",
    person: "Mary Njeri",
    nav: [
      { icon: "point_of_sale", label: "Front desk" },
      { icon: "group", label: "Members" },
      { icon: "payments", label: "Payments" },
    ],
    title: "Front desk",
    subline: "Westlands · Tuesday, 7 October",
    branch: "Westlands",
    branchLocked: true,
  },
  accountant: {
    label: "Accountant",
    person: "Grace Wanjiru",
    nav: [
      { icon: "account_balance", label: "Finance" },
      { icon: "receipt_long", label: "Invoices" },
      { icon: "payments", label: "Payments" },
      { icon: "undo", label: "Refunds" },
      { icon: "trending_down", label: "Expenses" },
      { icon: "group", label: "Members" },
    ],
    title: "Finance",
    subline: "All branches · October 2026",
    branch: "All branches",
    branchLocked: false,
  },
  trainer: {
    label: "Trainer",
    person: "Brian Kipchoge",
    nav: [
      { icon: "fitness_center", label: "My clients" },
      { icon: "event", label: "Classes" },
      { icon: "assignment", label: "Workout plans" },
      { icon: "qr_code_scanner", label: "Check-in" },
    ],
    title: "My clients",
    subline: "12 active clients · Westlands",
    branch: "Westlands",
    branchLocked: true,
  },
  branch_manager: {
    label: "Branch Manager",
    person: "Daniel Otieno",
    nav: [
      { icon: "insights", label: "Overview" },
      { icon: "point_of_sale", label: "Front desk" },
      { icon: "group", label: "Members" },
      { icon: "payments", label: "Payments" },
      { icon: "event", label: "Classes" },
      { icon: "badge", label: "Staff" },
    ],
    title: "Overview",
    subline: "Kilimani · October 2026",
    branch: "Kilimani",
    branchLocked: true,
  },
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-sur border-line rounded-card border p-[18px] ${className}`}>
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
  deltaTone = "ok",
}: {
  label: string;
  value: string;
  delta: string;
  deltaTone?: "ok" | "err" | "warn" | "mut";
}) {
  const tone = {
    ok: "text-ok",
    err: "text-err",
    warn: "text-warn",
    mut: "text-mut",
  }[deltaTone];
  return (
    <Card className="flex flex-col gap-1">
      <span className="text-mut text-[13px]">{label}</span>
      <span className="stretch-mid text-[26px] leading-none font-extrabold">{value}</span>
      <span className={`text-xs font-semibold ${tone}`}>{delta}</span>
    </Card>
  );
}

function Pill({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "ok" | "warn" | "err" | "neutral";
}) {
  const map = {
    ok: "bg-okbg text-ok",
    warn: "bg-warnbg text-warn",
    err: "bg-errbg text-err",
    neutral: "bg-sur2 text-mut",
  } as const;
  return (
    <span
      className={`${map[tone]} rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap`}
    >
      {children}
    </span>
  );
}

/** Stacked revenue by branch — pri for the first branch, acc for the second. */
const REVENUE = [
  { m: "May", a: 52, b: 24 },
  { m: "Jun", a: 58, b: 27 },
  { m: "Jul", a: 61, b: 31 },
  { m: "Aug", a: 57, b: 35 },
  { m: "Sep", a: 68, b: 38 },
  { m: "Oct", a: 74, b: 41 },
];

function RevenueChart({ single = false }: { single?: boolean }) {
  return (
    <Card className="flex min-h-0 flex-col gap-3">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-h3 font-semibold">Revenue by month</span>
        <span className="text-mut font-mono text-xs">KES, thousands</span>
      </div>
      <div className="flex min-h-0 flex-1 items-end gap-3">
        {REVENUE.map((r) => {
          const total = single ? r.a : r.a + r.b;
          return (
            <div key={r.m} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
              <span className="font-mono text-[11px] font-medium">{total}</span>
              <div
                className="flex w-full flex-col justify-end overflow-hidden rounded-t-lg"
                style={{ height: `${total * 1.6}px` }}
              >
                {!single && (
                  <div className="bg-acc w-full" style={{ height: `${r.b * 1.6}px` }} />
                )}
                <div className="bg-pri w-full" style={{ height: `${r.a * 1.6}px` }} />
              </div>
              <span className="text-mut text-xs">{r.m}</span>
            </div>
          );
        })}
      </div>
      {!single && (
        <div className="text-mut flex gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="bg-pri h-2.5 w-2.5 rounded-sm" />
            Westlands
          </span>
          <span className="flex items-center gap-1.5">
            <span className="bg-acc h-2.5 w-2.5 rounded-sm" />
            Kilimani
          </span>
        </div>
      )}
    </Card>
  );
}

const EXPIRING = [
  { name: "Achieng Were", plan: "Monthly Unlimited", days: "2 days" },
  { name: "Samuel Kariuki", plan: "Off-peak Monthly", days: "3 days" },
  { name: "Fatuma Ali", plan: "Monthly Unlimited", days: "5 days" },
];

function ExpiringList() {
  return (
    <Card className="flex min-h-0 flex-col gap-3">
      <span className="text-h3 font-semibold">Expiring in 7 days</span>
      <div className="flex min-h-0 flex-col gap-2 overflow-hidden">
        {EXPIRING.map((e) => (
          <div key={e.name} className="flex items-center gap-2">
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-semibold">{e.name}</span>
              <span className="text-mut truncate text-xs">{e.plan}</span>
            </span>
            <Pill tone="warn">{e.days}</Pill>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MethodMix() {
  const rows = [
    { l: "M‑Pesa STK push", v: 62 },
    { l: "M‑Pesa paybill", v: 24 },
    { l: "Cash", v: 10 },
    { l: "Card (PDQ)", v: 4 },
  ];
  return (
    <Card className="flex flex-col gap-3">
      <span className="text-h3 font-semibold">Payment methods</span>
      {rows.map((r) => (
        <div key={r.l} className="flex flex-col gap-1">
          <div className="flex justify-between text-[13px]">
            <span>{r.l}</span>
            <span className="font-mono">{r.v}%</span>
          </div>
          <div className="bg-sur2 h-2 overflow-hidden rounded-full">
            <div className="bg-pri h-full rounded-full" style={{ width: `${r.v}%` }} />
          </div>
        </div>
      ))}
    </Card>
  );
}

function ProfitAndLoss() {
  const rows: { l: string; v: string; tone?: string }[] = [
    { l: "Membership revenue", v: "1,148,000" },
    { l: "POS and day passes", v: "96,500" },
    { l: "Refunds", v: "(18,000)", tone: "text-err" },
    { l: "Expenses", v: "(412,300)", tone: "text-err" },
  ];
  return (
    <Card className="flex flex-col gap-3">
      <span className="text-h3 font-semibold">Profit &amp; loss · October</span>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.l} className="flex justify-between text-[13px]">
            <span className="text-mut">{r.l}</span>
            <span className={`font-mono ${r.tone ?? ""}`}>{r.v}</span>
          </div>
        ))}
        <div className="border-line mt-1 flex justify-between border-t pt-2 text-sm font-bold">
          <span>Net</span>
          <span className="font-mono">KES 814,200</span>
        </div>
      </div>
    </Card>
  );
}

function FrontDeskBody() {
  return (
    <div className="grid min-h-0 grid-cols-1 gap-3 dash:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="flex min-h-0 flex-col gap-3">
        <div className="border-priink bg-sur rounded-ctl flex h-14 items-center gap-2.5 border-2 px-4">
          <Icon name="search" className="text-mut" />
          <span className="text-mut text-[15px]">Name, phone or member no.</span>
        </div>
        <Card className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2">
          <Icon name="qr_code_scanner" className="text-mut !text-[32px]" />
          <span className="text-mut text-[13px]">Waiting for a scan…</span>
        </Card>
        <Card className="flex flex-col gap-2">
          <span className="text-h3 font-semibold">Today at Westlands</span>
          {[
            { t: "06:12", n: "Achieng Were", s: "In" },
            { t: "06:28", n: "Samuel Kariuki", s: "In" },
            { t: "07:03", n: "Fatuma Ali", s: "In" },
          ].map((r) => (
            <div key={r.t} className="flex items-center gap-2 text-[13px]">
              <span className="text-mut font-mono">{r.t}</span>
              <span className="flex-1 truncate font-semibold">{r.n}</span>
              <Pill tone="ok">{r.s}</Pill>
            </div>
          ))}
        </Card>
      </div>

      {/* Granted scan result: okbg with a 2px ok border and a filled check. */}
      <div className="bg-okbg border-ok rounded-card flex flex-col gap-3 border-2 p-[18px]">
        <div className="flex items-center gap-2">
          <Icon name="check_circle" filled className="text-ok !text-[28px]" />
          <span className="stretch-mid text-ok text-[20px] font-extrabold">
            Checked in · 07:14
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-sur2 text-mut flex h-14 w-14 items-center justify-center rounded-xl text-base font-bold">
            AW
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-[17px] font-bold">Achieng Were</span>
            <span className="text-mut truncate font-mono text-xs">
              SF‑00412 · 254712345678
            </span>
          </div>
        </div>
        <div className="bg-sur border-line rounded-ctl flex items-center justify-between border p-3">
          <span className="text-[13px] font-semibold">Monthly Unlimited</span>
          <Pill tone="ok">18 days left</Pill>
        </div>
        <div className="bg-warnbg text-warn rounded-ctl flex items-start gap-2 p-3 text-[13px]">
          <Icon name="medical_information" className="!text-[18px] shrink-0" />
          <span>Asthma — inhaler in locker. Avoid high-intensity intervals.</span>
        </div>
      </div>
    </div>
  );
}

const CLIENTS = [
  { n: "Achieng Were", goal: "Weight loss", plan: "Hypertrophy block B", last: "Today", trend: "−3.2 kg" },
  { n: "Samuel Kariuki", goal: "Strength", plan: "5×5 block A", last: "Yesterday", trend: "+1.8 kg" },
  { n: "Fatuma Ali", goal: "General fitness", plan: "Full body 3×", last: "2 days ago", trend: "−1.1 kg" },
  { n: "Joseph Mutua", goal: "Marathon prep", plan: "Base build", last: "Today", trend: "−0.4 kg" },
];

function TrainerBody() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 dash:grid-cols-3">
      {CLIENTS.map((c) => (
        <Card key={c.n} className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="bg-sur2 text-mut flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold">
              {c.n.split(" ").map((p) => p[0]).join("")}
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold">{c.n}</span>
              <span className="text-mut truncate text-xs">{c.goal}</span>
            </span>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between">
              <span className="text-mut">Plan</span>
              <span className="truncate font-semibold">{c.plan}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-mut">Last in</span>
              <span className="font-mono">{c.last}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-mut">Weight</span>
              <span className="text-ok font-mono">{c.trend}</span>
            </div>
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="bg-sur border-line rounded-ctl hover:bg-sur2 h-9 border text-[13px] font-semibold"
          >
            Open plan
          </button>
        </Card>
      ))}
    </div>
  );
}

export function DashboardMock({ role }: { role: RoleKey }) {
  const r = ROLES[role];
  const actions =
    role === "front_desk"
      ? [
          { label: "Register member", kind: "pri" as const },
          { label: "Capture payment", kind: "acc" as const },
        ]
      : role === "trainer"
        ? [{ label: "New plan", kind: "pri" as const }]
        : [{ label: "Export CSV", kind: "sec" as const }];

  return (
    <div className="bg-bg text-ink flex h-full w-full overflow-hidden">
      {/* Sidebar 232px from 960 up; the frame is too narrow for it below that. */}
      <aside className="bg-sur border-line hidden w-[232px] shrink-0 flex-col gap-1 border-r p-3 dash:flex">
        <div className="flex items-center gap-1.5 px-2 pt-1 pb-3">
          <span className="stretch-wide text-[20px] leading-none font-black tracking-[-0.03em]">
            gym
          </span>
          <span className="stretch-wide bg-acc text-onacc rounded-chip px-1.5 py-0.5 text-[11px] leading-none font-extrabold">
            OS
          </span>
        </div>
        {r.nav.map((n, i) => (
          <span
            key={n.label}
            className={`rounded-ctl flex items-center gap-2.5 px-3 py-[11px] text-sm whitespace-nowrap ${
              i === 0 ? "bg-pri text-onpri font-semibold" : "text-mut"
            }`}
          >
            <Icon name={n.icon} className="!text-[20px]" filled={i === 0} />
            {n.label}
          </span>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header: gym name, staff name · role, branch picker */}
        <div className="bg-sur border-line flex shrink-0 items-center gap-3 border-b px-4 py-2.5 dash:px-7">
          <span className="truncate text-sm font-bold">Simba Fitness</span>
          <div className="flex-1" />
          {r.branchLocked ? (
            <span className="bg-sur2 text-mut flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap">
              <Icon name="lock" className="!text-[14px]" />
              {r.branch}
            </span>
          ) : (
            <span className="border-line bg-sur rounded-ctl flex items-center gap-1.5 border px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap">
              {r.branch}
              <Icon name="expand_more" className="text-mut !text-[16px]" />
            </span>
          )}
          <span className="hidden flex-col text-right md:flex">
            <span className="truncate text-xs font-semibold">{r.person}</span>
            <span className="text-mut truncate text-[11px]">{r.label}</span>
          </span>
          <span className="bg-sur2 text-mut flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
            {r.person.split(" ").map((p) => p[0]).join("")}
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-hidden p-4 dash:px-8 dash:py-7">
          {/* Page header: H1 + subline + right-aligned actions */}
          <div className="flex shrink-0 flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="stretch-wide m-0 text-[28px] leading-none font-extrabold tracking-[-0.01em]">
                {r.title}
              </h3>
              <span className="text-mut text-[13px]">{r.subline}</span>
            </div>
            <div className="flex gap-2">
              {actions.map((a) => (
                <span
                  key={a.label}
                  className={`rounded-ctl flex h-11 items-center gap-1.5 px-4 text-[15px] whitespace-nowrap ${
                    a.kind === "pri"
                      ? "bg-pri text-onpri font-semibold"
                      : a.kind === "acc"
                        ? "bg-acc text-onacc font-bold"
                        : "bg-sur border-line text-ink border font-semibold"
                  }`}
                >
                  {a.kind === "acc" && <Icon name="phone_iphone" className="!text-[18px]" />}
                  {a.label}
                </span>
              ))}
            </div>
          </div>

          {role === "front_desk" ? (
            <FrontDeskBody />
          ) : role === "trainer" ? (
            <TrainerBody />
          ) : role === "accountant" ? (
            <div className="flex min-h-0 flex-col gap-3">
              <div className="grid shrink-0 grid-cols-2 gap-3 dash:grid-cols-4">
                <StatCard label="Collected · October" value="KES 1.24M" delta="+8.4% vs Sep" />
                <StatCard label="Unpaid invoices" value="KES 96,500" delta="14 invoices" deltaTone="mut" />
                <StatCard label="Refunds" value="KES 18,000" delta="3 approved" deltaTone="err" />
                <StatCard label="To reconcile" value="21" delta="Cash and card" deltaTone="warn" />
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 dash:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <RevenueChart />
                <div className="flex min-h-0 flex-col gap-3">
                  <ProfitAndLoss />
                  <MethodMix />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-0 flex-col gap-3">
              <div className="grid shrink-0 grid-cols-2 gap-3 dash:grid-cols-4">
                <StatCard label="Active members" value="412" delta="+18 this month" />
                <StatCard
                  label={role === "branch_manager" ? "Revenue · Kilimani" : "Revenue · October"}
                  value={role === "branch_manager" ? "KES 418K" : "KES 1.24M"}
                  delta="+8.4% vs Sep"
                />
                <StatCard label="Check-ins today" value="137" delta="Busiest 6–8am" deltaTone="mut" />
                <StatCard label="Expiring in 7 days" value="24" delta="KES 108K at risk" deltaTone="warn" />
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 dash:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <RevenueChart single={role === "branch_manager"} />
                <div className="flex min-h-0 flex-col gap-3">
                  <ExpiringList />
                  <MethodMix />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
