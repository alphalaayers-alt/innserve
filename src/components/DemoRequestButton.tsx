"use client";

import { useState } from "react";
import { DemoRequestModal } from "./DemoRequestModal";

export function DemoRequestButton({
  className = "btn-primary",
  label = "Demo request",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      <DemoRequestModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
