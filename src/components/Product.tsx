import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Order",
    text: "Table, QR, or aggregator lands as one ticket. Captains don’t retype; aggregators don’t live in a second app.",
    image: "/how-order.png",
    alt: "InnServe order taking screen",
  },
  {
    step: "02",
    title: "Kitchen",
    text: "The KOT prints or hits the display with modifiers intact. The pass sees the same ticket the floor just closed.",
    image: "/how-kitchen.png",
    alt: "InnServe kitchen display",
  },
  {
    step: "03",
    title: "Pay",
    text: "Split, UPI, card, or cash — then send a digital bill on WhatsApp. No paper trail to lose at close.",
    image: "/how-pay.png",
    alt: "InnServe payments and digital bill",
  },
  {
    step: "04",
    title: "Stock",
    text: "The recipe deducts as the plate leaves. Reports update live, so day-end is a check — not a rebuild.",
    image: "/how-stock.png",
    alt: "InnServe inventory and reports",
  },
];

const notes = [
  {
    title: "Offline billing",
    text: "Internet drops. Tickets keep moving. Everything syncs when you’re back online — no manual dump.",
  },
  {
    title: "One menu everywhere",
    text: "Dine-in, QR, and aggregators share prices and modifiers. Change it once. Every channel follows.",
  },
  {
    title: "One ledger",
    text: "Swiggy, Zomato, UPI, and walk-ins close in the same numbers. Finance isn’t stitching three exports.",
  },
];

export function Product() {
  return (
    <section id="product" className="scroll-mt-24 border-t border-white/[0.08] px-5 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[13px] text-[#8bff00]">How it works</p>
          <h2 className="mt-2 font-[family-name:var(--font-jakarta)] text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]">
            Take the order. The rest follows.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-white/50">
          A ticket on the floor updates kitchen, stock, and reports at the same time. No extra apps.
          No end-of-day reconciliation. The service you already run — just connected.
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

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {notes.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/[0.08] px-6 py-6">
            <h3 className="text-[16px] font-medium">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-6 text-white/50">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
