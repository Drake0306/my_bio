"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/command-palette";
import { PixelLogo } from "@/components/pixel-logo";
import { profile } from "@/content/profile";

const navLinks = [
  { label: "Portfolio", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [affix, setAffix] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAffix(y > 8);
      // Reveal logo only after user scrolls past hero (~360px)
      setLogoVisible(y > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-affix={affix}
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2 transition-shadow duration-300",
        "data-[affix=true]:shadow-[0_0_16px_0_rgba(0,0,0,0.08)] dark:data-[affix=true]:shadow-[0_0_16px_0_rgba(0,0,0,1)]",
      )}
    >
      <div className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 sm:gap-4 md:max-w-3xl">
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex h-8 items-center"
        >
          <PixelLogo
            className={cn(
              "h-7 w-14 transition-[opacity,transform] duration-300",
              logoVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
          />
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-4 max-sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            aria-label="Search"
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-flex items-center justify-center rounded-sm bg-black/5 px-1 font-sans text-[11px] text-muted-foreground dark:bg-white/10">
              ⌘K
            </kbd>
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <FaGithub className="h-4 w-4" />
          </a>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto border-x border-edge bg-background md:max-w-3xl sm:hidden">
          <div className="flex flex-col p-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-mono text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </header>
  );
}
