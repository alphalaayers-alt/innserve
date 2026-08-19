import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/ outlet / month",
    blurb: "For a single counter that needs clean, fast billing.",
    features: [
      "POS billing & tables",
      "Offline mode",
      "Digital bills",
      "Basic daily reports",
      "1 outlet, 2 users",
    ],
    cta: "Start with Starter",
    href: "/signup",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹4,499",
    period: "/ outlet / month",
    blurb: "For busy floors that need stock, QR, and kitchen in sync.",
    features: [
      "Everything in Starter",
      "Inventory & recipes",
      "Kitchen display / KOT",
      "QR & aggregator orders",
      "WhatsApp CRM",
      "Unlimited users",
    ],
    cta: "Choose Growth",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "for groups & chains",
    blurb: "Central control for multi-outlet and franchise operations.",
    features: [
      "Everything in Growth",
      "Multi-outlet dashboard",
      "Role-based access",
      "Dedicated onboarding",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Talk to sales",
    href: "/signup",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-white/[0.08] px-5 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-[#8bff00]">Pricing</p>
          <h2 className="mt-2 max-w-md font-[family-name:var(--font-jakarta)] text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]">
            Simple plans. Per outlet.
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-7 text-white/50">
          Hardware and payment gateway fees are billed separately. Cancel anytime. GST extra.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-xl border p-7 ${
              plan.featured
                ? "border-[#8bff00] bg-[#8bff00]/[0.06]"
                : "border-white/[0.08] bg-[#0a0a0a]"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-medium">{plan.name}</h3>
              {plan.featured && (
                <span className="rounded-md bg-[#8bff00] px-2 py-0.5 text-[11px] font-semibold text-black">
                  Popular
                </span>
              )}
            </div>
            <p className="mt-4 font-[family-name:var(--font-jakarta)] text-[36px] font-semibold tracking-tight">
              {plan.price}
            </p>
            <p className="text-[13px] text-white/40">{plan.period}</p>
            <p className="mt-4 text-[14px] leading-6 text-white/50">{plan.blurb}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[14px] text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8bff00]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`mt-8 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
