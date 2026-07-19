"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[var(--color-cream-deep)]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 text-left"
            >
              <span className="font-[family-name:var(--font-display)] text-lg md:text-xl text-[var(--color-charcoal)]">
                {faq.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-[var(--color-ink)]/65 leading-relaxed pr-14">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
