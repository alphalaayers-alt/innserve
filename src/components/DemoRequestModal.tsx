"use client";

import { useEffect, useId, useState, type FormEvent } from "react";

const venues = ["Restaurant", "Bar", "Cafe", "Hotel"] as const;

export function DemoRequestModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/70" aria-label="Close" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-[440px] rounded-xl border border-white/[0.1] bg-[#0a0a0a] p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-white/40 hover:text-white"
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="font-[family-name:var(--font-jakarta)] text-2xl font-semibold">Request received</p>
            <p className="mt-2 text-[14px] text-white/50">We’ll call you shortly to set up a demo.</p>
            <button type="button" onClick={onClose} className="btn-primary mt-8">
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-[13px] text-[#8bff00]">Demo request</p>
            <h2 id={titleId} className="mt-1 font-[family-name:var(--font-jakarta)] text-[24px] font-semibold tracking-tight">
              See InnServe on your floor
            </h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div>
                <label className="label" htmlFor="demo-name">
                  Full name
                </label>
                <input id="demo-name" name="fullName" required className="field" placeholder="Your name" />
              </div>
              <div>
                <label className="label" htmlFor="demo-email">
                  Email
                </label>
                <input id="demo-email" name="email" type="email" required className="field" placeholder="you@email.com" />
              </div>
              <div>
                <label className="label" htmlFor="demo-mobile">
                  Mobile number
                </label>
                <input
                  id="demo-mobile"
                  name="mobile"
                  type="tel"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  className="field"
                  placeholder="10-digit mobile"
                />
              </div>
              <div>
                <label className="label" htmlFor="demo-venue">
                  Outlet name
                </label>
                <input
                  id="demo-venue"
                  name="venueName"
                  required
                  className="field"
                  placeholder="Name of your restaurant, bar, cafe, or hotel"
                />
              </div>
              <div>
                <p className="label">Type</p>
                <div className="grid grid-cols-2 gap-2">
                  {venues.map((venue) => (
                    <label
                      key={venue}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/[0.1] px-3 py-2.5 text-[13px] has-[:checked]:border-[#8bff00] has-[:checked]:bg-[#8bff00]/10"
                    >
                      <input
                        type="radio"
                        name="venueType"
                        value={venue}
                        required
                        defaultChecked={venue === "Restaurant"}
                        className="accent-[#8bff00]"
                      />
                      {venue}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-primary mt-1 w-full">
                Request demo
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
