"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaStackOverflow,
  FaDiscord,
  FaProductHunt,
} from "react-icons/fa6";
import type { ComponentType } from "react";
import { Section } from "@/components/section";
import { socials } from "@/content/socials";

// Each social gets a brand-colored icon block (matches the reference cards).
const brand: Record<
  string,
  { Icon: ComponentType<{ className?: string }>; bg: string; fg: string }
> = {
  github: { Icon: FaGithub, bg: "bg-zinc-200 dark:bg-zinc-800", fg: "text-zinc-900 dark:text-zinc-100" },
  twitter: { Icon: FaXTwitter, bg: "bg-black", fg: "text-white" },
  linkedin: { Icon: FaLinkedin, bg: "bg-[#0a66c2]", fg: "text-white" },
  stackoverflow: { Icon: FaStackOverflow, bg: "bg-[#f48024]", fg: "text-white" },
  discord: { Icon: FaDiscord, bg: "bg-[#5865f2]", fg: "text-white" },
  producthunt: { Icon: FaProductHunt, bg: "bg-[#da552f]", fg: "text-white" },
};

export function Socials() {
  return (
    <Section id="socials" srTitle="Social Links" bodyClassName="p-0">
      {/* gap-px on bg-edge → clean 1px dividers in both axes */}
      <ul className="grid grid-cols-1 gap-px bg-edge sm:grid-cols-2">
        {socials.map((s, i) => {
          const meta = brand[s.icon] ?? brand.github;
          const Icon = meta.Icon;
          return (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="bg-background"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-stretch transition-colors hover:bg-muted/40"
              >
                {/* Full-height brand-colored icon block */}
                <div
                  className={`flex w-14 shrink-0 items-center justify-center ${meta.bg}`}
                >
                  <Icon className={`h-6 w-6 ${meta.fg}`} />
                </div>
                {/* Text column */}
                <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-base font-medium text-foreground">
                      {s.name}
                    </p>
                    <p className="truncate font-mono text-sm text-muted-foreground">
                      {s.handle}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
