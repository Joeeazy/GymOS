import type { Metadata } from "next";
import { Display } from "@/components/ui/Type";
import { PRINCIPLES, WHY_KENYA_PARAGRAPHS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Kenya",
  description:
    "Imported gym software prices in dollars and treats M‑Pesa as a plug-in. GymOS starts from the other end.",
};

export default function WhyKenyaPage() {
  return (
    <section className="mx-auto flex max-w-[1000px] flex-col gap-8 px-6 py-[72px]">
      <Display>Why Kenya first.</Display>

      <div className="text-ink flex max-w-[720px] flex-col gap-5 text-[18px] leading-[1.65]">
        {WHY_KENYA_PARAGRAPHS.map((p) => (
          <p key={p.slice(0, 32)} className="m-0">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className="bg-sur border-line rounded-card flex flex-col gap-2 border p-5"
          >
            <span className="text-[17px] font-extrabold">{p.title}</span>
            <span className="text-mut text-sm leading-[1.5]">{p.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
