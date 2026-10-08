import type { Metadata } from "next";
import { Display } from "@/components/ui/Type";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Paybill setup, transaction fees, cash and card, branch access, data protection and what happens if you stop paying.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto flex max-w-[860px] flex-col gap-6 px-6 py-[72px]">
      <Display>Questions gym owners ask.</Display>
      <FaqAccordion />
    </section>
  );
}
