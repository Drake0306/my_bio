// Featured side projects sourced from your local repos and Desktop assets.
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Bullet list of key features rendered inside the expanded accordion. */
  features?: string[];
  /** Longer detail shown on the /projects/[slug] page. Optional. */
  detail?: string;
  href?: string; // live URL
  repo?: string; // github repo
  stack: string[];
  featured: boolean; // shown in the marquee + "View all" row
  /** Optional remote logo URL — Dicebear shapes if not provided. */
  logo?: string;
  /** Date range shown in the row title. */
  start?: string; // "12.2025"
  end?: string | "∞";
  /** Screenshot URLs relative to /public. */
  screenshots?: string[];
  /** Video URL relative to /public. */
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "unichat",
    name: "UniChat",
    tagline: "Talk to 20+ LLMs from one chat — free, no login wall.",
    start: "09.2025",
    end: "∞",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=UniChat",
    features: [
      "20+ models across Gemini, OpenRouter, Groq, Mistral, OpenAI",
      "Vision chat with image attachments and inline PDF parsing",
      "Command palette (⌘K) for instant navigation",
      "Guest mode with localStorage; cloud sync for authenticated users",
      "Grouped model picker with capability badges and benchmark scores",
    ],
    description:
      "Multi-model AI chat bridging Gemini, OpenRouter (Llama, Mixtral, DeepSeek, Qwen), Groq, Mistral, and OpenAI from a single interface. Built with SvelteKit 2 + Svelte 5 + Tailwind v4 and shadcn-svelte; auth and storage on Supabase. Vision chat with image attachments, command palette (⌘K), Markdown via remark + shiki, lazy-loaded PDF.js parsing. Guests get localStorage persistence; authenticated users get cloud sync. Live on Vercel.",
    detail:
      "I built UniChat after juggling six different chat tabs every time I wanted to compare model outputs. The grouped model picker shows providers and capability badges side-by-side, the command palette gets you anywhere in two keystrokes, and vision chat handles image attachments and PDFs without leaving the conversation. Free models work without an account; bring-your-own-key unlocks the paid frontier models too. Open source.",
    href: "https://uni-chat-sigma.vercel.app/",
    repo: "https://github.com/Drake0306/uni-chat",
    stack: [
      "SvelteKit 2",
      "Svelte 5",
      "Tailwind v4",
      "shadcn-svelte",
      "Supabase",
      "TypeScript",
      "Vercel",
    ],
    featured: true,
    screenshots: [
      "/screenshots/unichat/01-home.png",
      "/screenshots/unichat/02-model-picker.png",
      "/screenshots/unichat/03-command-palette.png",
      "/screenshots/unichat/04-vision-chat.png",
      "/screenshots/unichat/05-customization.png",
      "/screenshots/unichat/06-models-catalog.png",
      "/screenshots/unichat/07-model-details.png",
    ],
    video: "/videos/unichat.mp4",
  },
  {
    slug: "whatsappflow",
    name: "WhatsAppFlow",
    tagline: "AI-powered WhatsApp automation for Indian SMBs.",
    start: "10.2025",
    end: "∞",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=WhatsAppFlow",
    features: [
      "Multi-vertical skill routing (salon, clinic, coaching, retail)",
      "AI intent classifier across Gemini, Groq, Sarvam, Claude",
      "Contacts CRM with auto-creation from WhatsApp conversations",
      "Appointment management, broadcasts, and escalation queue",
      "Razorpay subscriptions + Cloudflare R2 storage on Railway",
    ],
    description:
      "End-to-end WhatsApp automation platform for salons, clinics, coaching institutes, and retail — handles 24/7 customer conversations, books appointments, sends reminders, collects feedback, and nudges cold leads. SvelteKit 2 + MySQL (Drizzle ORM) + Auth.js. AI routing across Gemini Flash, Groq, Sarvam (Indian languages), and Claude. Meta Cloud API for messaging, Razorpay subscriptions, Cloudflare R2 storage, deployed on Railway.",
    detail:
      "Most Indian SMBs lose bookings because they can't reply on WhatsApp fast enough. WhatsAppFlow runs the conversation for them: an intent classifier routes incoming messages to the right skill (FAQ, booking, reschedule, escalation), an analytics dashboard shows what's converting, and an escalation queue flags low-confidence replies for human review. Multi-vertical from day one — salons, clinics, coaching institutes, retail.",
    href: "https://whatsappautomation-production-1928.up.railway.app/",
    repo: "https://github.com/Drake0306/whatsapp_automation",
    stack: [
      "SvelteKit 2",
      "TypeScript",
      "MySQL",
      "Drizzle ORM",
      "Auth.js",
      "Gemini",
      "Razorpay",
      "Meta Cloud API",
      "Railway",
    ],
    featured: true,
    screenshots: [
      "/screenshots/whatsappflow/01-shot.png",
      "/screenshots/whatsappflow/02-shot.png",
      "/screenshots/whatsappflow/03-shot.png",
      "/screenshots/whatsappflow/04-shot.png",
      "/screenshots/whatsappflow/05-shot.png",
    ],
    video: "/videos/whatsappflow.mp4",
  },
  {
    slug: "llm-chain",
    name: "LLM-Chain",
    tagline: "Train your own AI model locally, on your own hardware.",
    start: "11.2025",
    end: "∞",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=LLM-Chain",
    features: [
      "Hardware probe + capability gating (matches model size to your VRAM)",
      "LoRA / QLoRA / DPO on Apple Silicon MLX and NVIDIA CUDA",
      "Dataset workshop with synthetic data generator and HF Hub library",
      "Multi-adapter chat, A/B prompt comparator, run notes, scheduled runs",
      "Export to GGUF, Ollama, and Hugging Face Hub",
    ],
    description:
      "Open-source desktop app for local LLM fine-tuning with a hardware-aware UI. Tauri 2 shell + Python sidecar. Apple Silicon MLX + NVIDIA CUDA shipped; AMD ROCm experimental. LoRA / QLoRA / DPO via TRL, inline distillation, dataset workshop, synthetic data generator, multi-adapter chat, Ollama integration, A/B prompt comparator, adapter merge, recipes. Export to GGUF, Ollama, and Hugging Face Hub.",
    detail:
      "Local fine-tuning is still way more painful than it should be. LLM-Chain probes your hardware first and gates model + dataset choices to what your machine can actually run — so you don't pick a 7B model on 8GB of VRAM. The dataset workshop turns raw CSV or chat logs into clean JSONL, recipes one-click common fine-tunes, and the run viewer streams loss/lr/step over Server-Sent Events. Open source, native installers for macOS / Windows / Linux.",
    repo: "https://github.com/Drake0306/LLM-Chain",
    stack: [
      "Tauri 2",
      "Python",
      "Rust",
      "MLX",
      "CUDA",
      "TRL",
      "Hugging Face",
      "Ollama",
    ],
    featured: true,
  },
  {
    slug: "fresh-wall",
    name: "FreshWall",
    tagline: "Material 3 wallpaper app for Android.",
    start: "12.2025",
    end: "∞",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=FreshWall",
    features: [
      "Three sources in one feed — Featured, Pexels, Unsplash",
      "Pinterest-style staggered Compose grid with aspect-aware tiles",
      "System wallpaper cropper Intent for pan/zoom and Home/Lock targeting",
      "Long-press preview popup with attribution and dimensions",
      "WorkManager auto-rotation on a schedule with AdMob rewarded gate",
    ],
    description:
      "Modern wallpaper app with three sources in one feed — Featured, Pexels, and Unsplash. Kotlin 2.2 + Jetpack Compose + Material 3 (Expressive). Pinterest-style staggered grid that mixes portraits, squares, and landscapes; system wallpaper cropper Intent; long-press preview popup; haptic vocabulary; WorkManager auto-rotation; AdMob rewarded gate; persistent favorites; pitch-black theming.",
    detail:
      "I wanted a wallpaper app that didn't feel like a marketing funnel. FreshWall pulls from a hand-curated Featured collection plus Pexels and Unsplash, all in a single staggered Compose grid where tiles size to source aspect ratio. Long-press any tile for an animated preview card with attribution and dimensions. Apply hands the bitmap to Android's cropper Intent so users get the system pan/zoom UI — no parallax double-stretch. Auto-rotate runs on a schedule via WorkManager.",
    repo: "https://github.com/Drake0306/fresh-wall",
    stack: [
      "Kotlin 2.2",
      "Jetpack Compose",
      "Material 3",
      "Coil",
      "OkHttp",
      "WorkManager",
      "AdMob",
    ],
    featured: true,
    screenshots: [
      "/screenshots/freshwall/01-welcome.jpeg",
      "/screenshots/freshwall/02-home-unsplash.jpeg",
      "/screenshots/freshwall/03-home-pexels.jpeg",
      "/screenshots/freshwall/04-search.jpeg",
      "/screenshots/freshwall/05-preview-popup.jpeg",
      "/screenshots/freshwall/06-detail-apply.jpeg",
    ],
    video: "/videos/freshwall.mp4",
  },
  {
    slug: "zero",
    name: "Zero",
    tagline: "Cross-platform local LLM tool built on Ollama.",
    start: "06.2024",
    end: "∞",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=Zero",
    description:
      "Cross-platform Svelte app for interacting with local LLMs via Ollama on macOS, Windows, and Linux. Tool-based workflows enable AI-powered assistance, automation, and dev tasks — fully local, private, and extensible.",
    repo: "https://github.com/Drake0306/zero",
    stack: ["Svelte", "Ollama", "TypeScript"],
    featured: false,
  },
  {
    slug: "facescan-access",
    name: "FaceScan Access",
    tagline: "Biometric access control system.",
    start: "02.2024",
    end: "06.2024",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=FaceScan",
    description:
      "Face-recognition access control built with Django + React for secure entry/exit pipelines.",
    repo: "https://github.com/Drake0306/facescan-Access",
    stack: ["Django", "React", "Python", "TypeScript"],
    featured: false,
  },
  {
    slug: "inventory-manager",
    name: "Inventory Manager",
    tagline: "Windows desktop inventory app.",
    start: "03.2023",
    end: "09.2023",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=Inventory",
    description:
      "Native C# / .NET desktop application for managing inventory — stock tracking, suppliers, and reporting.",
    repo: "https://github.com/Drake0306/INVENTORY_WindowsVersion",
    stack: ["C#", ".NET"],
    featured: false,
  },
  {
    slug: "go-api-server",
    name: "Go API Server",
    tagline: "Lightweight Go REST API starter.",
    start: "01.2024",
    end: "02.2024",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=GoAPI",
    description:
      "Go-based HTTP API server scaffolding — routing, middleware, JSON I/O, and a clean structure for adding handlers.",
    repo: "https://github.com/Drake0306/goAPIServer",
    stack: ["Go", "REST"],
    featured: false,
  },
];

/** Helper: find a project by slug, used by the detail page. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Helper: list of projects that have screenshots — used by the marquee row. */
export function projectsWithScreenshots() {
  return projects.filter((p) => (p.screenshots?.length ?? 0) > 0);
}
