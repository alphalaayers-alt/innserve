"use client";

import Image from "next/image";
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
          A RESTAURANT POS
          <br />
          <span className="text-[#8bff00]">THAT JUST WORKS.</span>
        </h1>
        <p className="hero-in mx-auto mt-5 max-w-[480px] text-[16px] leading-7 text-white/55">
          Handle billing, stock, and orders from one system. Made for cafes, QSRs, bars, and cloud kitchens.
        </p>
        <div className="hero-in mt-8 flex items-center justify-center md:hidden">
          <DemoRequestButton label="Demo request" />
        </div>
      </div>

      <div className="hero-in mt-16 w-full px-6 sm:px-10 lg:px-16">
        <div className="relative h-auto w-full overflow-hidden">
          <Image
            src="/dashboard.png"
            alt="InnServe dashboard"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            unoptimized
            className="mx-auto block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
