<div align="center">

# Abhinav Roy — Portfolio

A framed-panel portfolio site built with Next.js 16, Tailwind v4, and a lot of taste.

[![Live site](https://img.shields.io/badge/Visit_Live-drake0306.github.io%2Fmy__bio-3080ff?style=for-the-badge&logo=githubpages&logoColor=white)](https://drake0306.github.io/my_bio/)

[![Deploy](https://github.com/Drake0306/my_bio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Drake0306/my_bio/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**→ [drake0306.github.io/my_bio](https://drake0306.github.io/my_bio/) ←**

</div>

---

## What this is

The source code for my personal portfolio at **[drake0306.github.io/my_bio](https://drake0306.github.io/my_bio/)**.

The design is a **framed document layout** — vertical 1px edges on the centered column, horizontal rules that span the full viewport beyond it, diagonal hatch dividers between sections. Inspired by [abdulrehmanwaseem.me](https://abdulrehmanwaseem.me/) and shadcn/ui's spatial language.

## Sections

| Section | What lives there |
|---|---|
| **Hero** | Pixel "AR" cover banner, avatar, name, `text-3xl text-zinc-50 font-medium` class-name easter-egg strip, subtitle |
| **Overview** | Multi-column info card — tagline, currently building, pronouns, location + live local time, phone, GitHub handle, email, site |
| **About** | Mono-prose bulleted highlights with bold inline tokens for jobs and projects |
| **GitHub Contributions** | Live heatmap fetched from `github-contributions-api.jogruber.de` at build time |
| **Featured Work** | Pure-CSS marquee — two rows scrolling opposite directions, every project screenshot click-throughs to its detail page |
| **Stack** | Large brand-icon grid sourced from Devicon, Simple Icons, and `@lobehub/icons` for AI brands |
| **Experience** | Company-grouped Radix accordions; current employer gets a blue ping-dot indicator and an auto-expanded role |
| **Education** | Institution rows with degree and dates |
| **Side Projects** | Accordion list with `Show More` and per-project detail pages at `/projects/[slug]` |
| **Brand** | Mark + Logotype spec rows |
| **Footer** | llms.txt · RSS · DMCA icons + © year |

## Project detail pages

Each featured project gets its own page at `/projects/<slug>` with:
- Title, tagline, live + repo buttons, tech-stack chips
- Embedded screen-recording video
- Description and key features
- Full screenshot grid

Slugs: `unichat`, `whatsappflow`, `llm-chain`, `fresh-wall`, `zero`, `facescan-access`, `inventory-manager`, `go-api-server`.

## Stack

| Layer | Tech |
|---|---|
| Framework | **Next.js 16** (App Router, static export) |
| Styling | **Tailwind CSS v4** + `@tailwindcss/typography` plugin |
| Fonts | **IBM Plex Sans** (body) + **Geist Mono** (monospace) |
| Animation | **Motion** (motion.dev) + **Radix Accordion** |
| Icons | **Lucide** + **react-icons** + **Devicon** + **Simple Icons** + **`@lobehub/icons`** (AI brands) |
| Avatars / logos | **DiceBear** |
| Hosting | **GitHub Pages** via GitHub Actions |

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export to ./out
pnpm lint
```

## Deployment

Auto-deploys to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The workflow:
1. Checks out the repo
2. Installs pnpm 10 + Node 22 (cached)
3. Builds with `NEXT_PUBLIC_BASE_PATH=/my_bio` so all asset URLs resolve at the GitHub Pages subpath
4. Uploads `./out` as a Pages artifact
5. Deploys via `actions/deploy-pages@v4`

Average end-to-end time: 2–4 minutes per push.

## Repo layout

```
app/
  page.tsx                # Home — composes all sections
  projects/[slug]/        # Per-project detail pages, statically generated
  layout.tsx              # Root layout + theme provider + IBM Plex + Geist Mono
  globals.css             # Tailwind v4 theme tokens, screen-line utilities,
                          # CSS marquee + accordion keyframes
components/
  sections/               # One file per section on the home page
  ui/                     # primitive helpers (section, reveal, pixel-logo, ...)
  three/                  # 3D scene (kept for future use)
content/
  profile.ts              # Name, contacts, About bullets
  experience.ts           # Company → roles[] with stack chips
  projects.ts             # Side projects + per-project metadata for /projects/[slug]
  socials.ts              # Social links and handles
  tech-stack.ts           # Stack grid + icon-URL helper
  featured-shots.ts       # Marquee rows
public/
  screenshots/<project>/  # Marquee + project-detail images
  videos/<project>.mp4    # Per-project demo recordings
```

## Credits

Design language inspired by:
- [abdulrehmanwaseem.me](https://abdulrehmanwaseem.me/) — framed panels, screen-spanning lines, hatch dividers
- [tailwindcss.com](https://tailwindcss.com) — document-style typography
- [ui.shadcn.com](https://ui.shadcn.com) — primitives and spatial system

---

<div align="center">

Built by a human. Source on [GitHub](https://github.com/Drake0306/my_bio).

</div>
