"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ContactType = "email" | "phone" | "url";

type Props = {
  value: string;
  label: string; // e.g. "Email protected"
  type: ContactType;
  className?: string;
};

function buildHref(type: ContactType, value: string) {
  switch (type) {
    case "email":
      return `mailto:${value}`;
    case "phone":
      return `tel:${value.replace(/\s+/g, "")}`;
    default:
      return value;
  }
}

export function ProtectedContact({ value, label, type, className }: Props) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border border-edge bg-muted/60 px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
          className,
        )}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        [{label}]
      </button>
    );
  }

  return (
    <a
      href={buildHref(type, value)}
      className={cn(
        "inline-flex items-center rounded-md border border-edge bg-muted/60 px-2 py-1 text-xs text-foreground hover:bg-muted transition-colors",
        className,
      )}
    >
      {value}
    </a>
  );
}
