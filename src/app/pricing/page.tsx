import type { Metadata } from "next";
import Link from "next/link";
import { Display } from "@/components/ui/Type";
import { Icon } from "@/components/ui/Icon";
import { MATRIX, TIERS, TIER_NAMES } from "@/lib/pricing";
import { START_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One monthly fee for your whole gym, in shillings. No per-member charges and no cut of your M‑Pesa payments.",
};

const GRID = "grid grid-cols-[1.8fr_repeat(4,1fr)] gap-3";

export default function PricingPage() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[72px]">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Display>Priced in shillings, per gym.</Display>
        <p className="text-mut m-0 text-[18px] leading-[1.55]">
          One monthly fee for your whole gym. No per-member charges, no cut of your M‑Pesa
          payments. Every plan includes the member app and M‑Pesa. Pay GymOS by M‑Pesa
          too.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-4">
        {TIERS.map((t) => (
          <div
            key={t.name}
            // In dark --pri and --acc are both volt, so acc on this card would
            // disappear; the dark: overrides swap it to onpri. Light is unchanged.
            className={`border-line flex flex-col gap-4 rounded-[20px] border p-6 ${
              t.popular ? "bg-pri text-onpri" : "bg-sur text-ink"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="stretch-mid text-[20px] font-extrabold">{t.name}</span>
              {t.popular && (
                <span className="bg-acc text-onacc dark:bg-onpri dark:text-pri rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap">
                  Most gyms
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-baseline gap-x-1.5">
              <span className="stretch-mid text-[36px] font-black tracking-[-0.02em] whitespace-nowrap">
                {t.price}
              </span>
              <span className="text-sm whitespace-nowrap">{t.per}</span>
            </div>
            <span className="flex-1 text-sm leading-[1.5]">{t.description}</span>
            <Link
              href={START_HREF}
              className={`rounded-ctl flex h-[46px] items-center justify-center text-[15px] font-bold whitespace-nowrap transition-[filter] duration-150 ${
                t.popular
                  ? "bg-acc text-onacc dark:bg-onpri dark:text-pri hover:brightness-95"
                  : "bg-pri text-onpri hover:brightness-110"
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-sur border-line rounded-card overflow-auto border">
        <div className="min-w-[760px]">
          <div className={`${GRID} bg-sur2 px-5 py-3.5 text-[13px] font-bold`}>
            <span>Compare plans</span>
            {TIER_NAMES.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          {MATRIX.map((row) => (
            <div
              key={row.label}
              className={`${GRID} border-line items-center border-t px-5 py-3 text-sm`}
            >
              <span>{row.label}</span>
              {row.cells.map((c, i) => (
                <span key={i}>
                  {c.kind === "yes" ? (
                    <Icon name="check_circle" filled className="text-ok" />
                  ) : c.kind === "no" ? (
                    <Icon name="remove" className="text-mut" />
                  ) : (
                    <span className="font-mono text-[13px]">{c.text}</span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="text-mut m-0 max-w-[760px] text-[13px] leading-[1.5]">
        Every tier includes M‑Pesa, email reminders, Kenyan data shapes and Data
        Protection Act tooling. Upgrades take effect immediately; downgrades at the end of
        your current period, and nothing is ever deleted. Only the gym owner can change a
        tier.
      </p>
    </section>
  );
}
