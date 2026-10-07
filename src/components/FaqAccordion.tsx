"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

export function FaqAccordion() {
  // The design opens the first question by default.
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-line border-t">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-5 text-left"
            >
              <span className="text-[18px] font-bold">{f.q}</span>
              <Icon name={isOpen ? "remove" : "add"} className="text-mut shrink-0" />
            </button>
            {isOpen && (
              <p className="text-mut m-0 mb-5 max-w-[720px] text-base leading-[1.6]">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
