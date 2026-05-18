import type { NextConfig } from "next";

// Allow the GitHub Pages CI job to inject a subpath like `/my_bio`. Locally
// (and on Vercel-style hosts) it stays empty, so dev still serves at `/`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages has no Node runtime.
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  // assetPrefix lets /_next/* assets resolve at the subpath.
  assetPrefix: basePath || undefined,
  images: {
    // Required for `output: "export"` — there's no image-optimization server.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "api.dicebear.com" },
      { protocol: "https", hostname: "unpkg.com" },
    ],
  },
};

export default nextConfig;
