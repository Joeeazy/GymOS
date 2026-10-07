import { Icon } from "@/components/ui/Icon";

/**
 * Stand-in for the Member PWA Home screenshot the design embeds live
 * (`<dc-import name="Member PWA" start-screen="home">`). gymos_member_pwa is
 * not built yet, so this renders the same screen from the handoff's Home spec
 * using the shared tokens. Replace with a real screenshot — a single
 * next/image swap — once that repo exists.
 */

const TABS = [
  { icon: "home", label: "Home", active: true },
  { icon: "qr_code_2", label: "Check-in", active: false },
  { icon: "event", label: "Classes", active: false },
  { icon: "monitoring", label: "Progress", active: false },
  { icon: "person", label: "Me", active: false },
];

export function MemberHomeMock() {
  return (
    <div className="bg-bg text-ink flex h-full w-full flex-col">
      {/* top header: gym · branch, page title, theme toggle, avatar */}
      <div className="border-line bg-sur flex shrink-0 items-center gap-2 border-b px-4 py-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-mut truncate font-mono text-[11px]">
            Simba Fitness · Westlands
          </span>
          <span className="stretch-mid truncate text-[17px] leading-tight font-extrabold">
            Home
          </span>
        </div>
        <Icon name="contrast" className="text-mut !text-[18px]" />
        <span className="bg-sur2 text-mut flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold">
          AW
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 p-4">
        <span className="text-mut text-[13px]">Habari, Achieng</span>

        {/* membership hero card */}
        <div className="bg-pri text-onpri flex flex-col gap-2 rounded-[20px] p-[18px]">
          <div className="flex items-start justify-between gap-2">
            <span className="stretch-mid text-[15px] font-bold">Monthly Unlimited</span>
            <span className="bg-acc text-onacc dark:bg-onpri dark:text-pri shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold">
              Active
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="stretch-wide text-[76px] leading-[0.82] font-black tracking-[-0.03em]">
              18
            </span>
            <span className="pb-1 text-[13px] opacity-90">days left</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/22 dark:bg-onpri/25">
            <div className="bg-acc dark:bg-onpri h-full w-[60%] rounded-full" />
          </div>
          <div className="flex justify-between font-mono text-[11px] opacity-85">
            <span>2026‑09‑20</span>
            <span>2026‑10‑20</span>
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="bg-acc text-onacc dark:bg-onpri dark:text-pri mt-2 flex h-14 items-center justify-center gap-2 rounded-xl text-[15px] font-extrabold"
          >
            <Icon name="phone_iphone" className="!text-[20px]" />
            Renew with M‑Pesa
          </button>
        </div>

        {/* quick-link cards */}
        {[
          { icon: "qr_code_2", title: "Check-in code", sub: "Tap to show at the desk" },
          { icon: "event", title: "Spin · 6:30pm", sub: "Studio 2 · Brian K." },
        ].map((q) => (
          <div
            key={q.title}
            className="bg-sur border-line flex items-center gap-3 rounded-card border p-3"
          >
            <span className="bg-sur2 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
              <Icon name={q.icon} className="text-priink" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-[14px] font-semibold">{q.title}</span>
              <span className="text-mut truncate text-[12px]">{q.sub}</span>
            </span>
            <Icon name="chevron_right" className="text-mut shrink-0" />
          </div>
        ))}
      </div>

      {/* bottom tab bar: active icon sits in an acc pill */}
      <div className="border-line bg-sur flex shrink-0 items-start justify-around border-t pt-1.5 pb-2">
        {TABS.map((t) => (
          <span key={t.label} className="flex w-[56px] flex-col items-center gap-0.5">
            <span
              className={`flex h-6 items-center justify-center rounded-full px-4 ${
                t.active ? "bg-acc text-onacc" : "text-mut"
              }`}
            >
              <Icon name={t.icon} className="!text-[19px]" filled={t.active} />
            </span>
            <span
              className={`text-[11px] whitespace-nowrap ${
                t.active ? "font-semibold" : "text-mut"
              }`}
            >
              {t.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
