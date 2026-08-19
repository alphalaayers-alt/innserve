const features = [
  {
    title: "Point of sale",
    copy: "Fast billing, tables, splits, and offline mode. The floor never waits on the network.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 18v2M17 18v2M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Inventory",
    copy: "Recipes write down stock automatically. Low-stock alerts before an 86 hits the pass.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 7h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 7l2.5-3h11L20 7M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Direct ordering",
    copy: "QR dine-in, takeout, and delivery with zero marketplace commission.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 16h2v2h-2zM18 13v3M21 16h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Guest CRM",
    copy: "Digital bills and offers on WhatsApp. Know who came back — and who didn’t.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 19c.5-3 2.5-5 5-5s4.5 2 5 5M16 8h5M18.5 5.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Menu management",
    copy: "One menu across dine-in, QR, and aggregators. Prices, modifiers, and timings in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Kitchen display",
    copy: "KOTs print or land on a screen. Modifiers stay accurate when the pass is busy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Reports",
    copy: "Sales, item mix, and outlet targets on one dashboard. See today against the plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 15v-4M12 15V8M16 15v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Staff & roles",
    copy: "Cashiers, captains, and managers get only what they need. Shift-level control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14 19c.3-2 1.6-3.5 3.5-3.5 1.4 0 2.5.8 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Payments",
    copy: "UPI, cards, and cash in one close. Partial pays and splits without extra tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h18M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Table management",
    copy: "Live floor map, merges, and transfers. Know which tables are turning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="4" y="8" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V6M16 8V6M8 16v2M16 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Multi-outlet",
    copy: "Central menus and reports for chains and franchises. Each store still runs independently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M4 10h16l-1.5 9H5.5L4 10zM4 10l8-6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    copy: "Swiggy, Zomato, printers, and gateways stay in the same ledger as walk-in tickets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12h4M14.5 9l-1 2.5M14.5 15l-1-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-[#8bff00]">What you get</p>
          <h2 className="mt-2 max-w-lg font-[family-name:var(--font-jakarta)] text-[32px] font-semibold tracking-[-0.03em]">
            One system for the floor and the back office.
          </h2>
        </div>
        <p className="max-w-xs text-[14px] leading-6 text-white/45">
          Twelve modules. Turn on what you need — leave the rest off until you grow.
        </p>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 transition hover:border-[#8bff00]/40"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#8bff00]/10 text-[#8bff00]">
              {item.icon}
            </span>
            <h3 className="mt-5 text-[16px] font-medium">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-6 text-white/50">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
