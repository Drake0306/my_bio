import { cn } from "@/lib/utils";

/**
 * Pixel-block "AR" mark (Abhinav Roy). 192×256 letter cells on a 16px grid.
 *
 *  A — 6 pieces:
 *    1. narrow top cap (rows 0–3, centered)
 *    2. left side top half (rows 4–7)
 *    3. right side top half (rows 4–7)
 *    4. full-width middle bar (rows 8–11)
 *    5. left leg (rows 12–15)        ← previously merged with #2 (bug)
 *    6. right leg (rows 12–15)       ← previously merged with #3 (bug)
 *
 *  R — 5 pieces:
 *    1. full-height left bar (rows 0–15)
 *    2. top bar (rows 0–3, right of left bar)
 *    3. top-right cap (rows 4–7)
 *    4. middle bar (rows 8–11)
 *    5. bottom-right leg (rows 12–15)
 */
export function PixelLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      className={cn("text-foreground", className)}
      aria-label="Abhinav Roy"
    >
      <path
        fill="currentColor"
        d="
          M48 0h96v64H48V0Z
          M0 64h64v64H0V64Z
          M128 64h64v64h-64V64Z
          M0 128h192v64H0v-64Z
          M0 192h64v64H0v-64Z
          M128 192h64v64h-64v-64Z
          M256 0h64v256h-64V0Z
          M320 0h128v64H320V0Z
          M448 64h64v64h-64V64Z
          M320 128h128v64H320v-64Z
          M448 192h64v64h-64v-64Z
        "
      />
    </svg>
  );
}
