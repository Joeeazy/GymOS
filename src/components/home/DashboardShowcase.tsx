"use client";

import { useState } from "react";
import { ROLE_TABS, type RoleKey } from "@/lib/content";
import { BrowserFrame } from "@/components/mocks/BrowserFrame";
import { DashboardMock } from "@/components/mocks/DashboardMock";
import { Eyebrow, SectionTitle } from "@/components/ui/Type";

export function DashboardShowcase() {
  const [role, setRole] = useState<RoleKey>("owner");

  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-[88px]">
      <div className="flex max-w-[720px] flex-col gap-3">
        <Eyebrow>FOR OWNERS AND STAFF</Eyebrow>
        <SectionTitle>One dashboard. Each person sees their part.</SectionTitle>
        <p className="text-mut m-0 text-[17px] leading-[1.55]">
          The front desk scans and registers. Trainers write plans. Your accountant
          reconciles. You see revenue, expenses and who&apos;s about to lapse. Switch the
          role below to see what each one gets.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ROLE_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setRole(t.key)}
            aria-pressed={role === t.key}
            className={`border-line cursor-pointer rounded-full border px-3.5 py-[9px] text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
              role === t.key ? "bg-ink text-bg" : "bg-sur text-ink hover:bg-sur2"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <BrowserFrame url="simbafitness.gymos.co.ke/dashboard">
        <DashboardMock role={role} />
      </BrowserFrame>
    </section>
  );
}
