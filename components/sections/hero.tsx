"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { PixelLogo } from "@/components/pixel-logo";

export function Hero() {
  return (
    <div id="top">
      {/* COVER BANNER — centered pixel AR logo on a dot-pattern background */}
      <div
        aria-hidden
        className="screen-line-after relative flex aspect-[2/1] items-center justify-center border-x border-edge bg-dots sm:aspect-[3/1]"
      >
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <PixelLogo className="h-16 w-32 sm:h-24 sm:w-48" />
        </motion.div>
      </div>

      {/* AVATAR + TITLE row */}
      <div className="screen-line-after relative flex border-x border-edge">
        {/* Avatar column */}
        <div className="relative shrink-0 border-r border-edge">
          <div className="m-[3px]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              priority
              className="size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
            />
          </div>
        </div>

        {/* Title column */}
        <div className="flex flex-1 flex-col">
          {/* Class-name easter-egg strip on top of the title */}
          <div className="flex grow items-end bg-stripes pb-1 pl-4">
            <div className="line-clamp-1 select-none font-mono text-xs text-muted-foreground/70 max-sm:hidden">
              text-3xl <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span> font-medium
            </div>
          </div>

          {/* Name */}
          <div className="border-t border-edge">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="pl-4 text-4xl font-medium tracking-tight sm:text-[42px]"
            >
              {profile.name}
            </motion.h1>

            {/* Static subtitle */}
            <div className="border-t border-edge py-3 pl-4">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="select-none font-mono text-base text-balance text-muted-foreground"
              >
                {profile.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
