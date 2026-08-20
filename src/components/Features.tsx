const features = [
  {
    id: "pos",
    title: "Point of sale",
    copy: "Bill fast, manage tables, split bills, and keep working even when the internet is down.",
  },
  {
    id: "inventory",
    title: "Inventory",
    copy: "Stock updates automatically every time an order goes out. Get low-stock alerts before you run out mid-service.",
  },
  {
    id: "ordering",
    title: "Direct ordering",
    copy: "Take QR dine-in, takeout, and delivery orders directly. No commission to any marketplace.",
  },
  {
    id: "crm",
    title: "Guest CRM",
    copy: "Send digital bills and offers on WhatsApp. See who’s a regular and who’s stopped coming.",
  },
  {
    id: "menu",
    title: "Menu management",
    copy: "One menu for dine-in, QR, and food apps. Update prices, add-ons, and timings in one go.",
  },
  {
    id: "kitchen",
    title: "Kitchen display",
    copy: "Orders print or show up on a screen in the kitchen, with add-ons shown correctly even during rush hour.",
  },
  {
    id: "reports",
    title: "Reports",
    copy: "See sales, best-selling items, and outlet performance on one dashboard. Compare today with your target.",
  },
  {
    id: "staff",
    title: "Staff & roles",
    copy: "Give cashiers, captains, and managers access to only what their role needs, shift by shift.",
  },
  {
    id: "payments",
    title: "Payments",
    copy: "Accept UPI, cards, and cash, and close them together. Split bills or take partial payments without extra apps.",
  },
  {
    id: "tables",
    title: "Table management",
    copy: "See your floor live: which tables are free, merged or about to turn over.",
  },
  {
    id: "multi-outlet",
    title: "Multi-outlet",
    copy: "Run central menus and reports across all your outlets. While each one still runs on its own.",
  },
  {
    id: "integrations",
    title: "Integrations",
    copy: "Swiggy, Zomato, printers and payment gateways all show up in the same ledger as your walk-in orders.",
  },
];

function FeatureIcon({ id }: { id: string }) {
  const className = "h-4 w-4 shrink-0 text-white";

  switch (id) {
    case "pos":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "inventory":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M3 6l7-3 7 3v8l-7 3-7-3V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "ordering":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="4" y="4" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="4" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="11" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="11" width="3" height="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M5 5h10M5 10h10M5 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "kitchen":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="3" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "reports":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M4 16V9M8 16V5M12 16v-4M16 16V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "staff":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="13" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 16c0-2.2 1.8-4 4-4M13 12c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "payments":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9h14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "tables":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "multi-outlet":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M4 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="8" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "integrations":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-2.5 text-[17px] font-medium uppercase tracking-[0.08em] text-[#8bff00] sm:text-[18px]">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 sm:h-[22px] sm:w-[22px]" aria-hidden>
              <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            WHAT YOU GET
          </p>
          <h2 className="mt-5 max-w-sm font-[family-name:var(--font-jakarta)] text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[32px]">
            Everything your floor and back office need, in one place.
          </h2>
        </div>

        <div>
          {features.map((item) => (
            <article
              key={item.title}
              className="grid gap-2 border-t border-white/[0.08] py-6 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-7"
            >
              <h3 className="flex items-center gap-2 text-[16px] font-medium tracking-tight text-white">
                <FeatureIcon id={item.id} />
                {item.title}
              </h3>
              <p className="text-[15px] leading-7 text-white/50">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
