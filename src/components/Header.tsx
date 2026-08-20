"use client";

import Link from "next/link";
import { useState } from "react";
import { DemoRequestModal } from "./DemoRequestModal";
import { Logo } from "./Logo";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [menu, setMenu] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-md">
        <div className="flex h-[68px] w-full items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/60 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              aria-label="Log in"
              className="inline-flex items-center justify-center rounded-md text-[14px] text-white/70 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                <path
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 21v-2a3.5 3.5 0 0 0-2.5-3.35"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 3.2a4 4 0 0 1 0 7.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <button type="button" onClick={() => setDemoOpen(true)} className="btn-primary h-10 px-4">
              Demo request
            </button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-label="Open menu"
            onClick={() => setMenu((open) => !open)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
            </span>
          </button>
        </div>

        {menu && (
          <div className="border-t border-white/[0.08] px-5 py-4 sm:px-8 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm text-white/70"
                onClick={() => setMenu(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <Link
                href="/login"
                aria-label="Log in"
                className="btn-ghost flex-1 flex items-center justify-center"
                onClick={() => setMenu(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 21v-2a3.5 3.5 0 0 0-2.5-3.35"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 3.2a4 4 0 0 1 0 7.6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className="btn-primary flex-1"
                onClick={() => {
                  setMenu(false);
                  setDemoOpen(true);
                }}
              >
                Demo request
              </button>
            </div>
          </div>
        )}
      </header>
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
