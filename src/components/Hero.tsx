"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DemoRequestButton } from "./DemoRequestButton";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-in", {
          y: 18,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="pt-20 pb-8 sm:pt-28">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8 lg:px-12">
        <h1 className="hero-in font-[family-name:var(--font-jakarta)] text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[56px]">
          Restaurant POS,
          <br />
          <span className="text-[#8bff00]">without the noise.</span>
        </h1>
        <p className="hero-in mx-auto mt-5 max-w-[480px] text-[16px] leading-7 text-white/55">
          Billing, inventory, and ordering in one place. Built for cafes, QSRs, bars, and cloud kitchens.
        </p>
        <div className="hero-in mt-8 flex items-center justify-center gap-3">
          <DemoRequestButton label="Demo request" />
          <Link href="/#product" className="btn-ghost">
            See product
          </Link>
        </div>
      </div>

      <div className="hero-in mt-16 w-full px-5 sm:px-8 lg:px-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0c0c]">
          <Image
            src="/dashboard.png"
            alt="InnServe dashboard"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
