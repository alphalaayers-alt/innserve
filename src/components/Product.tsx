import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Order",
    text: "Every order: from a table, QR code or food app; lands as a single ticket. Captains don’t retype anything. Food-app orders don’t sit in a separate app. ",
    image: "/how-order.png",
    alt: "InnServe order taking screen",
  },
  {
    step: "02",
    title: "Kitchen",
    text: "The kitchen ticket prints or shows up on screen with every add-on correct. The kitchen sees the exact order the floor just placed. ",
    image: "/how-kitchen.png",
    alt: "InnServe kitchen display",
  },
  {
    step: "03",
    title: "Pay",
    text: "Split the bill, take UPI, card, or cash, then send a digital bill on WhatsApp. Nothing to lose at closing time. ",
    image: "/how-pay.png",
    alt: "InnServe payments and digital bill",
  },
  {
    step: "04",
    title: "Stock",
    text: "Stock goes down the moment a dish is served. Reports update as it happens, so closing the day is just a check, and not a rebuild.",
    image: "/how-stock.png",
    alt: "InnServe inventory and reports",
  },
];

const notes = [
  {
    title: "Offline billing",
    text: "No internet? No problem. Orders keep moving, and everything syncs automatically once you're back online.",
  },
  {
    title: "One menu everywhere",
    text: "Your dine-in, QR, and food-app menus stay in sync. Change a price once, and it updates everywhere.",
  },
  {
    title: "One ledger",
    text: "Swiggy, Zomato, UPI, and walk-in sales all close into the same numbers. No stitching three reports together.",
  },
];

export function Product() {
  return (
    <section id="product" className="scroll-mt-24 border-t border-white/[0.08] px-5 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="flex items-center gap-2.5 text-[17px] font-medium uppercase tracking-[0.08em] text-[#8bff00] sm:text-[18px]">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 sm:h-[22px] sm:w-[22px]" aria-hidden>
              <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="15" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 10h1M12 10h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            HOW IT WORKS
          </p>
          <h2 className="mt-5 max-w-sm font-[family-name:var(--font-jakarta)] text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[32px]">
          Take the order. Everything else happens on its own. 

          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-white/50">
        One order updates your kitchen, stock, and reports at the same time. No extra apps to check. No manual reconciliation at the end of the day. Just your restaurant, running the way it already does; everything connected. 

        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((item) => (
          <article
            key={item.step}
            className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]"
          >
            <div className="relative aspect-[4/3] bg-[#111]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-[12px] font-medium text-[#8bff00]">{item.step}</p>
              <h3 className="mt-2 text-[18px] font-medium">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-white/50">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border-y border-white/[0.08]">
        <div className="grid gap-8 py-8 lg:grid-cols-3 lg:gap-10">
          {notes.map((item, index) => (
            <article
              key={item.title}
              className={`flex gap-3 lg:pr-6 ${
                index !== notes.length - 1 ? "lg:border-r lg:border-white/[0.08]" : ""
              }`}
            >
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#8bff00]/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8bff00]" />
              </span>
              <div>
                <h3 className="text-[16px] font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/55">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
