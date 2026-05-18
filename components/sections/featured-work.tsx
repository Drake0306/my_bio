"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { rowA, rowB, type Shot } from "@/content/featured-shots";
import { projectsWithScreenshots } from "@/content/projects";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const projects = projectsWithScreenshots();

  return (
    <Section id="featured-work" srTitle="Featured work" bodyClassName="p-0">
      {/* Top row: per-project "View all →" buttons */}
      <div className="flex flex-wrap items-center gap-2 border-b border-edge bg-muted/30 px-4 py-3 sm:px-6">
        <span className="mr-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          View all screenshots:
        </span>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-edge bg-background px-3 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted"
          >
            {p.name}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>

      {/* Marquee rows */}
      <div className="space-y-3 py-6">
        <Marquee
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
          speed={32}
          pauseOnHover
        >
          {rowA.map((shot, i) => (
            <ShotCard key={`a-${i}`} shot={shot} />
          ))}
        </Marquee>
        <Marquee
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
          speed={28}
          direction="right"
          pauseOnHover
        >
          {rowB.map((shot, i) => (
            <ShotCard key={`b-${i}`} shot={shot} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}

function ShotCard({ shot }: { shot: Shot }) {
  const isWide = shot.shape === "wide";
  return (
    <Link
      href={`/projects/${shot.slug}`}
      className={cn(
        "mx-2 block shrink-0 overflow-hidden rounded-xl border border-edge bg-card transition-transform hover:-translate-y-0.5",
        isWide ? "w-72 sm:w-80" : "w-32 sm:w-36",
      )}
    >
      <div
        className={cn(
          "relative w-full bg-muted",
          isWide ? "aspect-[16/10]" : "aspect-[9/16]",
        )}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={isWide ? "320px" : "144px"}
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-between border-t border-edge px-3 py-2">
        <span className="font-mono text-xs text-foreground">{shot.repo}</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          @Drake0306
        </span>
      </div>
    </Link>
  );
}
