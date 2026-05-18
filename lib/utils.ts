import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public-asset URL with the deployed basePath (e.g. `/my_bio`).
 * `next/image` and `next/link` do this automatically; this helper is for the
 * places where we use raw HTML tags like `<video>` or `<source>`.
 */
export function withBase(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
