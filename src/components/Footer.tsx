import Link from "next/link";
import { DemoRequestButton } from "./DemoRequestButton";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#product", label: "How it works" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Account",
    links: [{ href: "/login", label: "Log in" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-8 border-b border-white/[0.08] py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] text-[#8bff00]">Ready when you are</p>
          <h2 className="mt-2 max-w-md font-[family-name:var(--font-jakarta)] text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]">
            Put InnServe on the floor.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <DemoRequestButton />
          <Link href="/#pricing" className="btn-ghost">
            View pricing
          </Link>
        </div>
      </div>

      <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/45">
            Restaurant POS for cafes, QSRs, bars, and cloud kitchens — billing, stock, and ordering in one place.
          </p>
          <a
            href="mailto:hello@innserve.com"
            className="mt-5 inline-block text-[14px] text-white/70 transition hover:text-[#8bff00]"
          >
            hello@innserve.com
          </a>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[13px] font-medium text-white/40">{column.title}</p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-white/70 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/[0.08] py-6 text-[13px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} InnServe. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
}
