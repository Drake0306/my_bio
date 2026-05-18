"use client";

import { Command } from "cmdk";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  X,
  ArrowUpRight,
  Mail,
  Moon,
  Sun,
  Briefcase,
  GraduationCap,
  Boxes,
  Layers,
  FileText,
  Code2,
  Rss,
  Atom,
  CornerDownLeft,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import { socials } from "@/content/socials";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { PixelLogo } from "@/components/pixel-logo";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: Props) {
  const { setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (href: string) => {
    onOpenChange(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, href.startsWith("http") ? "_blank" : "_self");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[18vh] backdrop-blur-[2px]"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-edge bg-card shadow-2xl"
          >
            <Command label="Command Menu" className="flex flex-col">
              {/* Search input row */}
              <div className="flex items-center gap-2.5 border-b border-edge px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent py-3.5 font-mono text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={() => onOpenChange(false)}
                  aria-label="Close"
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Results */}
              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-8 text-center font-mono text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Group heading="Menu">
                  <Item
                    icon={<PixelLogo className="h-3.5 w-7" />}
                    onSelect={() => go("#top")}
                  >
                    Portfolio
                  </Item>
                  <Item
                    icon={<Rss className="h-4 w-4 text-orange-500" />}
                    onSelect={() => go(profile.github)}
                  >
                    GitHub
                  </Item>
                  <Item
                    icon={<Atom className="h-4 w-4 text-blue-400" />}
                    onSelect={() => go("#projects")}
                  >
                    Products
                  </Item>
                </Group>

                <Group heading="Portfolio">
                  <Item
                    icon={<FileText className="h-4 w-4 text-muted-foreground" />}
                    onSelect={() => go("#about")}
                  >
                    About
                  </Item>
                  <Item
                    icon={<Code2 className="h-4 w-4 text-blue-500" />}
                    onSelect={() => go("#tech-stack")}
                  >
                    Tech Stack
                  </Item>
                  <Item
                    icon={<Briefcase className="h-4 w-4 text-muted-foreground" />}
                    onSelect={() => go("#experience")}
                  >
                    Experience
                  </Item>
                  <Item
                    icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />}
                    onSelect={() => go("#education")}
                  >
                    Education
                  </Item>
                  <Item
                    icon={<Boxes className="h-4 w-4 text-muted-foreground" />}
                    onSelect={() => go("#projects")}
                  >
                    Projects
                  </Item>
                </Group>

                <Group heading="Featured projects">
                  {projects
                    .filter((p) => p.featured)
                    .map((p) => (
                      <Item
                        key={p.slug}
                        icon={<Layers className="h-4 w-4 text-muted-foreground" />}
                        onSelect={() => go(p.href ?? p.repo ?? "#projects")}
                      >
                        {p.name}
                      </Item>
                    ))}
                </Group>

                <Group heading="Theme">
                  <Item
                    icon={<Sun className="h-4 w-4 text-amber-400" />}
                    onSelect={() => {
                      setTheme("light");
                      onOpenChange(false);
                    }}
                  >
                    Light mode
                  </Item>
                  <Item
                    icon={<Moon className="h-4 w-4 text-zinc-400" />}
                    onSelect={() => {
                      setTheme("dark");
                      onOpenChange(false);
                    }}
                  >
                    Dark mode
                  </Item>
                </Group>

                <Group heading="Contact">
                  <Item
                    icon={<Mail className="h-4 w-4 text-muted-foreground" />}
                    onSelect={() => go(`mailto:${profile.email}`)}
                  >
                    Email
                  </Item>
                  <Item
                    icon={<FaGithub className="h-4 w-4 text-foreground" />}
                    onSelect={() => go(profile.github)}
                  >
                    GitHub
                  </Item>
                  {socials
                    .filter((s) => s.name !== "GitHub")
                    .map((s) => (
                      <Item
                        key={s.name}
                        icon={
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                        }
                        onSelect={() => go(s.href)}
                      >
                        {s.name} — {s.handle}
                      </Item>
                    ))}
                </Group>
              </Command.List>

              {/* Footer with kbd hints */}
              <div className="flex items-center justify-between border-t border-edge bg-muted/30 px-4 py-2">
                <PixelLogo className="h-3.5 w-7 text-muted-foreground" />
                <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    Go to Page <Kbd><CornerDownLeft className="h-3 w-3" /></Kbd>
                  </span>
                  <span className="flex items-center gap-1.5">
                    Exit <Kbd>Esc</Kbd>
                  </span>
                </div>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Group({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Command.Group
      heading={heading}
      className="
        [&_[cmdk-group-heading]]:px-2
        [&_[cmdk-group-heading]]:py-2
        [&_[cmdk-group-heading]]:font-mono
        [&_[cmdk-group-heading]]:text-[11px]
        [&_[cmdk-group-heading]]:font-medium
        [&_[cmdk-group-heading]]:uppercase
        [&_[cmdk-group-heading]]:tracking-wider
        [&_[cmdk-group-heading]]:text-muted-foreground
      "
    >
      {children}
    </Command.Group>
  );
}

function Item({
  children,
  onSelect,
  icon,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="
        flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 font-mono text-sm text-foreground
        data-[selected=true]:bg-muted
        data-[selected=true]:text-foreground
      "
    >
      {icon && (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center">
          {icon}
        </span>
      )}
      <span className="truncate">{children}</span>
    </Command.Item>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-edge bg-muted px-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </kbd>
  );
}
