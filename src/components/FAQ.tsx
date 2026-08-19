"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is InnServe only a billing app?",
    a: "No. POS, inventory, kitchen display, direct ordering, CRM, and reports sit in one system — so the floor and back office share the same numbers.",
  },
  {
    q: "Does it work if the internet drops?",
    a: "Yes. Offline billing keeps taking orders. When the connection returns, tickets and payments sync automatically. No manual dump.",
  },
  {
    q: "Which restaurant types are supported?",
    a: "Cafes, QSR, fine dining, bars, cloud kitchens, food courts, and multi-outlet or franchise groups.",
  },
  {
    q: "Can I run dine-in, takeout, and aggregators together?",
    a: "Yes. Walk-ins, QR orders, and Swiggy or Zomato tickets share the same menu, stock, and close.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are per outlet, billed monthly. Start with billing, then add inventory, ordering, and CRM as you grow. Hardware is separate.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most single outlets are live after a short onboarding: menu, printers, tax, and a floor walkthrough with a specialist.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/[0.08] px-5 py-24 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-[13px] text-[#8bff00]">FAQ</p>
          <h2 className="mt-2 max-w-sm font-[family-name:var(--font-jakarta)] text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]">
            Questions, answered.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/50">
            Still unsure? Write to hello@innserve.com — we’ll reply within a business day.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`rounded-xl border bg-[#0a0a0a] transition ${
                  isOpen ? "border-[#8bff00]/40" : "border-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-medium">{item.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-md text-[16px] ${
                      isOpen ? "bg-[#8bff00] text-black" : "bg-white/5 text-white/50"
                    }`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-[14px] leading-6 text-white/50">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
