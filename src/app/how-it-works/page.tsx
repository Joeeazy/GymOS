import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/Cta";
import { Display } from "@/components/ui/Type";
import { STEPS } from "@/lib/content";
import { START_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From sign-up to your first M‑Pesa payment in six steps. None of it needs a developer.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto flex max-w-[1000px] flex-col gap-10 px-6 py-[72px]">
      <div className="flex flex-col gap-3.5">
        <Display>From sign‑up to your first M‑Pesa payment.</Display>
        <p className="text-mut m-0 text-[18px] leading-[1.55]">
          This is what a gym owner does on day one. None of it needs a developer.
        </p>
      </div>

      {STEPS.map((s) => (
        <div
          key={s.n}
          className="border-line grid grid-cols-[72px_1fr] gap-5 border-b pb-8"
        >
          <span className="stretch-wide text-priink text-[44px] leading-none font-black">
            {s.n}
          </span>
          <div className="flex flex-col gap-2">
            <span className="stretch-mid text-[22px] font-extrabold">{s.title}</span>
            <span className="text-mut text-base leading-[1.6] text-pretty">{s.detail}</span>
            <span className="text-mut font-mono text-xs">{s.time}</span>
          </div>
        </div>
      ))}

      <CtaLink href={START_HREF} className="self-start !px-6">
        Start step 1 now
      </CtaLink>
    </section>
  );
}
