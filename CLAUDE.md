@AGENTS.md

# Portfolio site — design and architecture reference

This file is the durable context for working on this codebase. If you're a future
Claude session opening this repo, read this top-to-bottom before touching code.

> **Live:** https://drake0306.github.io/my_bio/
> **Reference:** Built to mirror [abdulrehmanwaseem.me](https://abdulrehmanwaseem.me/) — when in doubt about design choices, that site is the source of truth.

---

## Stack at a glance

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) | `output: "export"` for static GitHub Pages deploy |
| Styling | **Tailwind CSS v4** + `@tailwindcss/typography` plugin | `@theme inline` tokens, `@custom-variant dark` for class-based dark mode |
| Body font | **IBM Plex Sans** | Via `next/font/google`. Loaded weights: 300/400/500/600/700 |
| Mono font | **Geist Mono Variable** | Via `next/font/google` |
| Animation | **Motion** (motion.dev) + **Radix Accordion** | CSS keyframes for marquee + accordion sizing |
| Icons | **Lucide** (UI) + **react-icons/fa** (brand) + **Devicon** + **Simple Icons** + **`@lobehub/icons`** | Three CDNs for the Stack section grid (see `content/tech-stack.ts`) |
| Logos / avatars | **DiceBear** (`api.dicebear.com/9.x/...`) | Initials style for companies, shapes for projects |
| Package manager | **pnpm 10** | `pnpm-lock.yaml` committed |
| Hosting | **GitHub Pages** | Auto-deploy on push to `main` via `.github/workflows/deploy.yml` |

---

## Design language — the framed-panel pattern

Every section on the home page is a **panel** with three signature elements,
all defined in `app/globals.css` and reused via `components/section.tsx`:

1. **`border-x border-edge`** — vertical 1px rules on the centered container's
   left and right edges. The content column is `md:max-w-3xl` (768px) on
   desktop, full width on mobile.

2. **`screen-line-after` (and `screen-line-before`)** — horizontal 1px rules
   that extend **across the full viewport**, not just across the centered
   panel. Implementation: a `::after` pseudo-element positioned
   `left: -100vw; width: 200vw`. The line continues past the panel's edges
   into the gutter area.

3. **`bg-stripes`** — diagonal 315° hatch pattern used in `StripeDivider`
   between sections, and in the cover banner above the hero h1 (the
   class-name easter-egg strip). It's a `repeating-linear-gradient` over
   `var(--edge)`.

4. **`bg-dots`** — radial dot grid used in the hero cover banner.
   `radial-gradient(var(--edge) 1px, transparent 0)` at 10px spacing.

`--edge` is **separate from `--border`** — it's a transparency-based color
(`rgba(255,255,255,0.1)` in dark, `rgba(0,0,0,0.1)` in light) so the lines
blend smoothly against any background.

### Light vs. dark

- **Light bg:** `#ffffff`, foreground `#09090b`
- **Dark bg:** `#09090b` (zinc-950, NOT pure `#000` — the user explicitly
  requested zinc-950)
- Switching is done with `next-themes` (`attribute="class"`, default `dark`)

---

## Typography rules — when to use sans vs. mono

The reference site uses **two** fonts, switched by element, not by section.
This is a key design decision and easy to get wrong:

| Use **font-mono** (Geist Mono) | Use **font-sans** (IBM Plex Sans, default) |
|---|---|
| Overview info-grid values | Section headings (`h2`, `h3`) |
| About prose body (`prose-mono`) | Project / role names |
| Project description prose (`prose-mono`) | Bullet content in Experience |
| Hero subtitle | Brand "Mark" / "Logotype" labels |
| Stack chips / date ranges (em-dash only) | Project taglines (outside prose) |
| Footer text, kbd shortcuts | Project / education dates themselves |

A common mistake when extending: don't add `font-mono` to text in
Experience/Brand/Projects bodies. The reference uses sans there.

### Sizes

- Section h2 titles: `text-4xl font-bold sm:text-[42px]`
- Hero h1: `text-4xl font-medium sm:text-[42px]` (the breadcrumb above shows
  `font-medium` for the easter-egg; matches the actual h1)
- Body prose: `text-base leading-7` (16px / 28px)
- Small labels and chips: `text-xs` mono
- Body default fallback set in `globals.css`: `font-size: 15px; line-height: 1.55`

---

## Section composition

The home page (`app/page.tsx`) is a flat list of sections separated by
`<StripeDivider />`. Order:

1. **Hero** (`sections/hero.tsx`)
   - Cover banner: `bg-dots` background + centered **PixelLogo** ("AR" pixel mark)
   - Avatar + title row: avatar (DiceBear-eligible but defaulting to GitHub
     avatar) with a vertical edge, then the title column
   - Class-name easter-egg strip above the h1 ("text-3xl text-zinc-50 font-medium")
   - Static subtitle below (no rotating text — was tried, removed)

2. **Overview** (`sections/overview.tsx`)
   - Top tagline with `<CodeXml>` chip
   - 2-col × 4-row info grid: building / pronouns / location / local time / phone / GitHub / email / site
   - Uses `<ProtectedContact>` for email + phone (click to reveal)

3. **Socials** (`sections/socials.tsx`)
   - 2-col grid with `gap-px bg-edge` for clean 1px dividers in both axes
   - Each card: brand-colored full-height icon block + name + handle + up-right arrow

4. **About** (`sections/about.tsx`)
   - **Mono prose** bulleted list (matches reference exactly)
   - Content lives in `content/profile.ts` as `aboutHtml` (HTML string with `<strong>` highlights)

5. **GitHub Contributions** (`sections/github-contributions.tsx`)
   - Server Component, fetches from `github-contributions-api.jogruber.de` at build time
   - **Important:** with static export, `revalidate: 3600` doesn't revalidate at runtime — the heatmap is a snapshot per build

6. **Featured Work** (`sections/featured-work.tsx`)
   - "View all screenshots:" pill row at the top → each pill links to `/projects/<slug>`
   - **Pure-CSS marquee** (rewritten from `react-fast-marquee` — see Gotchas)
   - Two rows scrolling opposite directions (`marquee-left` / `marquee-right`)
   - Items duplicated inline for seamless `-50%` loop; pause-on-hover
   - Cards use **raw `<img>` with `withBase()`** — not `next/image`

7. **Tech Stack** (`sections/tech-stack.tsx`)
   - Flat grid: `grid-cols-6 sm:grid-cols-8 md:grid-cols-10`
   - Three icon sources via `iconUrl()`:
     - `devicon` (default): `cdn.jsdelivr.net/gh/devicons/devicon/...`
     - `simple`: `cdn.simpleicons.org/<slug>`
     - `lobehub`: `unpkg.com/@lobehub/icons-static-svg@latest/icons/<slug>.svg`
   - **`monochrome: true`** flag on items with pure-black SVGs → `dark:invert` applied

8. **Experience** (`sections/experience.tsx`)
   - **Company-grouped** Radix Accordions
   - Each company shows: DiceBear logo + name + **blue ping-dot** if `current: true`
   - Roles under a company are connected by a vertical 1px line (`::before` pseudo)
   - Auto-expand: current employer's first role on initial render
   - Talent Bridge's "Not on GitHub" notes (TB-VMS, TalentBridgeOne) render below as a dashed-border callout

9. **Education** (`sections/education.tsx`)
   - Simple stacked list of institution + degree + dates

10. **Side Projects** (`sections/projects.tsx`)
    - Title rendered as **"Side Projects (8)"** via `<Section count={8}>`
    - Radix Accordion list; first project auto-expanded
    - Each row: DiceBear logo (with dashed right border) + name + date range + link/repo icon + chevron
    - Expanded content: description + features bullets + stack chips + "View details →" and Repo buttons
    - **"Show More (N)"** pill reveals the hidden non-featured projects

11. **Brand** (`sections/brand.tsx`)
    - Two spec rows: **Mark** (just the pixel logo) + **Logotype** (logo + "AbhinavRoy" wordmark)
    - Vertical labels via `writing-mode: vertical-rl; transform: rotate(180deg)` and dashed right border
    - Below: centered credit lines ("Inspired by tailwindcss.com & ui.shadcn.com" + "Built by a human. Source on GitHub")

12. **Footer** (`sections/footer.tsx`)
    - Centered three-icon row (`llms.txt` / RSS / DMCA placeholders) + © year

### Project detail pages — `/projects/[slug]`

`app/projects/[slug]/page.tsx`. **Statically generated** via
`generateStaticParams()` over `projects.map(p => ({ slug: p.slug }))`. Layout:

- Back-to-portfolio link
- Header: name (text-4xl/5xl), tagline, Live + Repo buttons, stack chips
- Embedded `<video controls>` (with `withBase()` for the src)
- About paragraph (uses `project.detail` if set, falls back to `description`)
- Screenshot grid: 2-col responsive, raw `<img>` with `withBase()`, `aspect-[16/10]`
- Footer

---

## Content model

All editable content lives in `content/*.ts`. The components import these
directly — no CMS, no JSON, no API.

| File | Shape | Notes |
|---|---|---|
| `profile.ts` | Single object + `aboutHtml` constant | Wordmark, title, subtitle, tagline, employer, location, timezone, phone, email, GitHub. The About bullets are HTML string for prose rendering. |
| `experience.ts` | `ExperienceCompany[]` with `roles[]` | Each company has `current?: boolean` to trigger the ping-dot, optional `logo`, and a list of `ExperienceRole`s with `bullets[]`, `stack[]`, and optional `notes[]` |
| `education.ts` | Flat `EducationItem[]` | Institution, degree, location, dates |
| `projects.ts` | Flat `Project[]` + helpers | `featured: boolean` decides marquee inclusion. `screenshots[]` and `video?` drive the detail page. `start`/`end` show in the accordion row. `features[]` becomes the bullet list inside the expanded card. |
| `socials.ts` | `Social[]` | Name, handle, href, icon key |
| `tech-stack.ts` | `TechGroup[]` with `items[]` | Groups: Frontend / Backend / Databases & ORMs / AI & Models / Cloud & DevOps. Flattened by the component into one grid. |
| `featured-shots.ts` | `rowA` and `rowB` arrays of `Shot` | Drives the two marquee rows. Each shot has `src`, `slug` (for click-through), and `shape: "wide" | "tall"` |

---

## Public assets

```
public/
  screenshots/
    unichat/01-home.png …        # 7 desktop shots, ~250-1100 KB each
    whatsappflow/01-shot.png …   # 5 shots
    freshwall/01-welcome.jpeg …  # 6 mobile shots
  videos/
    unichat.mp4                  # 91 MB screen recording
    whatsappflow.mp4             # 55 MB
    freshwall.mp4                # 78 MB
  .nojekyll                      # Tells GitHub Pages not to run Jekyll
```

> Videos are near GitHub's 100 MB hard limit. Long-term, compress with
> `ffmpeg -i in.mp4 -vcodec h264 -crf 30 -preset slow out.mp4` (gets a 90 MB
> screen recording down to ~10 MB with no visible loss) or move to Git LFS.

---

## Gotchas hit during development (and their fixes)

These bit us in real time. Read before debugging similar symptoms.

| Symptom | Cause | Fix |
|---|---|---|
| `Export Github doesn't exist in target module` (build error) | lucide-react v1 removed brand icons (GitHub, Twitter, LinkedIn, …) | Use `react-icons/fa` or `react-icons/fa6` for brand icons |
| `Functions cannot be passed directly to Client Components` (prerender error) | A Server Component (Overview) passing a function prop to a Client Component (ProtectedContact) | Replaced the `href: (v) => string` prop with a `type: "email" \| "phone"` discriminator |
| `react-hooks/set-state-in-effect` lint error | `useEffect(() => setMounted(true), [])` pattern | Removed the mounted gate; use `suppressHydrationWarning` on theme-dependent renders; rely on `dynamic({ ssr: false })` for 3D / browser-only components |
| GitHub contributions heatmap days landed on the wrong day-of-week column | The week-bucketing loop assumed every week starts on Sunday | Padded the first week with leading `null`s based on `new Date(firstDay).getUTCDay()` |
| Some icons (OpenAI, Groq) rendered as broken images | Simple Icons removed those slugs due to brand policy | Added a `lobehub` source pulling from `unpkg.com/@lobehub/icons-static-svg` |
| Some icons (Express, Vercel, Railway, OpenAI, etc.) invisible in dark mode | Brand color is pure black; black-on-black | Added `monochrome: true` flag on the TechItem → `dark:invert` filter in the component |
| Footer year mismatch warning (hydration) | `new Date().getFullYear()` on the server renders the build-time year, client may differ across year rollover or stale static cache | Added `suppressHydrationWarning` on the year span |
| Marquee rendered an empty `<div>` on the deployed site (images missing) | `react-fast-marquee` doesn't render its children during SSR; with `output: "export"` the static HTML is frozen at that empty state | Rewrote as **pure CSS marquee** — track duplicated inline + `translateX(-50%)` keyframe + edge-fade mask |
| `next/image` with `unoptimized: true` skipped `basePath` prefix on local images | Known sharp edge of Next's static export | Use raw `<img src={withBase(...)} />` for local-path images (external CDN URLs are fine via either tag) |
| OrbitControls trap touch scroll on mobile | R3F default | Removed OrbitControls; rely on `Float` + `useFrame` for mesh rotation; set `pointerEvents: "none"` on Canvas |

---

## Deployment — how GitHub Pages works here

### The workflow (`.github/workflows/deploy.yml`)

Triggers on push to `main` or manual `workflow_dispatch`. Two jobs:

**build:**
1. `actions/checkout@v4`
2. `pnpm/action-setup@v4` (pnpm 10) + `actions/setup-node@v4` (Node 22, pnpm cache)
3. `pnpm install --frozen-lockfile`
4. `pnpm build` with **`NEXT_PUBLIC_BASE_PATH=/my_bio`** in env (this is the magic — inlines `/my_bio` everywhere)
5. `actions/configure-pages@v5` (reads Pages config from repo settings)
6. `actions/upload-pages-artifact@v3` uploading `./out`

**deploy:**
7. `actions/deploy-pages@v4`

### One-time setup

Pages must be enabled on the repo with `build_type=workflow`. Done via:
```
gh api -X PUT /repos/Drake0306/my_bio/pages -f build_type=workflow
```
(Or UI: Settings → Pages → Source → "GitHub Actions")

### Static-export config (`next.config.ts`)

```ts
output: "export"          // Build to ./out instead of .next
basePath: "/my_bio"       // Subpath prefix (via env var)
assetPrefix: "/my_bio"    // So /_next/* assets resolve at the subpath
trailingSlash: true       // Pages serves /path/ better than /path
images: { unoptimized: true }   // No Node runtime to optimize
```

### `withBase()` helper (`lib/utils.ts`)

Wraps any local path that's used in a raw HTML tag (`<video>`, `<source>`,
raw `<img>`). Reads `process.env.NEXT_PUBLIC_BASE_PATH`. `next/image` and
`next/link` auto-prefix; raw HTML doesn't.

---

## Git identity

**The user uses a non-default SSH identity for this repo.** Do NOT change
this without explicit permission.

```
remote.origin.url   git@github-tb-vms:Drake0306/my_bio.git
user.name           Drake0306
user.email          abhinavroy.hello@gmail.com
```

The SSH alias `github-tb-vms` resolves to `github.com` via `~/.ssh/config`
using the `id_github` key.

**Co-authoring rule:** the user explicitly asked **not** to add
`Co-Authored-By: Claude` lines to commits. Don't.

---

## Quick command reference

```bash
# Local
pnpm dev                   # Dev server on :3000 (no basePath)
pnpm build                 # Produces ./out
pnpm lint
pnpm exec tsc --noEmit

# Production-style local build (with basePath)
NEXT_PUBLIC_BASE_PATH=/my_bio pnpm build

# Trigger CI deploy manually
gh workflow run "Deploy to GitHub Pages" --ref main

# Watch / debug CI
gh run list --limit 5
gh run view <id> --log-failed
gh run view <id> --verbose

# Verify deployed assets
curl -sL -o /dev/null -w "HTTP %{http_code}\n" \
  https://drake0306.github.io/my_bio/screenshots/unichat/01-home.png
```

---

## What's intentionally not here yet

- **Blog** — the reference has one; we skipped per user request
- **Testimonials** — skipped; replaced visually with the Featured Work marquee
- **Honors & Awards** + **Certifications** — skipped (user said no)
- **3D scene in hero** — built (`components/three/hero-scene.tsx`) but removed
  from the page since the reference doesn't use 3D; the files are still in the
  repo for future re-enablement
- **Country flag overlay on avatar** — skipped (user said no)
- **Rotating subtitle** — built (`rotating-text.tsx` deleted), reverted to static
- **A real SO profile URL, real LinkedIn handle, dates for education** — these
  are `NEEDS UPDATE` and live in `content/*.ts`. Search the repo for
  `NEEDS UPDATE` to find them.

---

## What the next session should always do first

1. Check `git status` and current branch (always `main`)
2. Check the active TaskList — there may be open items
3. Run `pnpm exec tsc --noEmit` and `pnpm lint` before committing anything
4. If pushing, never add `Co-Authored-By`, never commit Claude as author
5. If introducing new icons, set the right `source` and `monochrome` flag
6. If touching the marquee, **don't** reintroduce `react-fast-marquee` —
   the pure-CSS implementation is intentional for SSR
