import type { Metadata } from "next";
import { Display } from "@/components/ui/Type";
import { Icon } from "@/components/ui/Icon";
import { FEATURE_GROUPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "A member app, a club dashboard for your staff, M‑Pesa payments built in, and reports across branches.",
};

export default function FeaturesPage() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-[72px]">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Display>Everything a Kenyan gym runs on.</Display>
        <p className="text-mut m-0 text-[18px] leading-[1.55]">
          GymOS is four connected pieces: a member app, a club dashboard for your staff,
          M‑Pesa payments built in, and reports across branches. Here is what each one
          does.
        </p>
      </div>

      {FEATURE_GROUPS.map((g) => (
        <div
          key={g.title}
          className="border-line grid grid-cols-1 gap-8 border-t pt-8 md:grid-cols-2 dash:grid-cols-3"
        >
          <div className="flex flex-col gap-2.5">
            <Icon name={g.icon} className="text-priink !text-[32px]" />
            <h2 className="stretch-wide m-0 text-[26px] font-extrabold">{g.title}</h2>
            <p className="text-mut m-0 text-[15px] leading-[1.55]">{g.detail}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 md:col-span-1 dash:col-span-2">
            {g.items.map((f) => (
              <div
                key={f.title}
                className="bg-sur border-line rounded-card flex flex-col gap-1.5 border p-[18px]"
              >
                <span className="font-bold">{f.title}</span>
                <span className="text-mut text-sm leading-[1.5]">{f.detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-mut text-[13px]">
        Not included today: lockers, trainer commissions, referrals, instalment plans,
        membership freezes and SMS. We&apos;d rather do fewer things properly.
      </div>
    </section>
  );
}
