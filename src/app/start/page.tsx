import type { Metadata } from "next";
import { Display } from "@/components/ui/Type";
import { Icon } from "@/components/ui/Icon";
import { StartForm } from "@/components/StartForm";
import { START_INCLUDES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Create your gym in six fields and start a 14-day free trial. No card or M‑Pesa needed to start.",
};

export default function StartPage() {
  return (
    <section className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-12 px-6 py-16">
      <div className="flex flex-col gap-[18px]">
        <Display>Create your gym.</Display>
        <p className="text-mut m-0 text-[17px] leading-[1.55]">
          Six fields. You&apos;ll add plans, branches, staff and your M‑Pesa paybill from
          the dashboard afterwards, at your own pace.
        </p>
        <div className="flex flex-col gap-2.5 text-[15px]">
          {START_INCLUDES.map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon name="check" className="text-ok" />
              {i}
            </div>
          ))}
        </div>
      </div>
      <StartForm />
    </section>
  );
}
