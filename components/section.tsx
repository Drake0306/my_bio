import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Framed section panel matching the reference design:
 *   • vertical borders on container edges (`border-x border-edge`)
 *   • a horizontal rule that spans the whole viewport (`screen-line-after`)
 *   • optional BIG bold title rendered inside the panel body
 *   • optional `count` rendered next to the title in muted mono
 *
 * If `title` is omitted, a `srTitle` provides the a11y heading.
 */
export function Section({
  id,
  title,
  srTitle,
  count,
  children,
  className,
  bodyClassName,
}: {
  id?: string;
  title?: string;
  srTitle?: string;
  count?: number;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "screen-line-after relative border-x border-edge scroll-mt-20",
        className,
      )}
    >
      {!title && srTitle && <h2 className="sr-only">{srTitle}</h2>}
      <div className={cn("px-4 py-6 sm:px-6 sm:py-8", bodyClassName)}>
        {title && (
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-[42px]">
            {title}
            {count !== undefined && (
              <span className="ml-2 align-middle font-mono text-2xl text-muted-foreground">
                ({count})
              </span>
            )}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

/** Diagonal hatched divider that sits *between* sections, full-bleed. */
export function StripeDivider({ height = 32 }: { height?: number }) {
  return (
    <div
      aria-hidden
      className="relative w-full border-x border-edge bg-stripes"
      style={{ height }}
    />
  );
}
