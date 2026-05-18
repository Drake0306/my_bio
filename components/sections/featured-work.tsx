import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { rowA, rowB, type Shot } from "@/content/featured-shots";
import { projectsWithScreenshots } from "@/content/projects";
import { cn, withBase } from "@/lib/utils";

/**
 * Server-rendered Featured Work section. Pure-CSS marquee — duplicates each row
 * inline so the SSR'd HTML already contains every image, and the CSS animation
 * scrolls -50% to loop seamlessly. No JS dependency, no SSR hydration gap.
 */
export function FeaturedWork() {
  const projects = projectsWithScreenshots();

  return (
    <Section id="featured-work" srTitle="Featured work" bodyClassName="p-0">
      {/* Top row: per-project "View all" pills */}
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
        <MarqueeRow shots={rowA} direction="left" durationSec={60} />
        <MarqueeRow shots={rowB} direction="right" durationSec={70} />
      </div>
    </Section>
  );
}

function MarqueeRow({
  shots,
  direction,
  durationSec,
}: {
  shots: Shot[];
  direction: "left" | "right";
  durationSec: number;
}) {
  // Duplicate the items in the track so the -50% translate produces a seamless loop.
  const doubled = [...shots, ...shots];
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={cn("marquee-track", direction === "left" ? "marquee-left" : "marquee-right")}
        style={{ ["--marquee-duration" as string]: `${durationSec}s` }}
      >
        {doubled.map((shot, i) => (
          <ShotCard key={i} shot={shot} ariaHidden={i >= shots.length} />
        ))}
      </div>
    </div>
  );
}

function ShotCard({ shot, ariaHidden }: { shot: Shot; ariaHidden: boolean }) {
  const isWide = shot.shape === "wide";
  return (
    <Link
      href={`/projects/${shot.slug}`}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : undefined}
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
        {/* Raw <img> so basePath actually prefixes via withBase(). next/image
            with unoptimized: true silently drops the basePath. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(shot.src)}
          alt={shot.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between border-t border-edge px-3 py-2">
        <span className="font-mono text-xs text-foreground">{shot.repo}</span>
        <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
      </div>
    </Link>
  );
}
