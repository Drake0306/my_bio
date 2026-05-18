"use client";

import { motion } from "motion/react";
import { Section } from "@/components/section";
import { techStack, iconUrl } from "@/content/tech-stack";
import { cn } from "@/lib/utils";

export function TechStack() {
  // Flatten all tech items into one big grid (matches the reference layout)
  const items = techStack.flatMap((g) => g.items);

  return (
    <Section id="tech-stack" title="Stack">
      <ul className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
        {items.map((item, i) => (
          <motion.li
            key={`${item.name}-${i}`}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: Math.min(i * 0.015, 0.35) }}
            className="flex items-center justify-center"
            title={item.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconUrl(item)}
              alt={item.name}
              width={36}
              height={36}
              loading="lazy"
              className={cn(
                "h-9 w-9 select-none transition-transform hover:scale-110",
                // Pure-black brand logos vanish on dark mode — flip them to white there.
                item.monochrome && "dark:invert",
              )}
            />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
