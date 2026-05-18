// Tech stack icons. Two CDNs in play:
//   • Devicon (cdn.jsdelivr.net/gh/devicons/devicon) for dev tools / langs / clouds
//   • Simple Icons (cdn.simpleicons.org) for brand icons Devicon doesn't carry
//     (AI providers, some SaaS clouds). Simple Icons returns the brand color.
//
// `monochrome: true` flags brands whose logo is pure-black; we apply a
// `dark:invert` filter on those so they stay visible against a dark background.
export type TechItem = {
  name: string;
  /** Identifier for the icon — slug in whichever CDN. */
  icon: string;
  /**
   * Icon source.
   *  • "devicon"  (default) — Devicon collection on jsDelivr
   *  • "simple"             — Simple Icons CDN, brand color
   *  • "lobehub"            — @lobehub/icons (covers AI brands SimpleIcons drops, e.g. OpenAI, Groq)
   */
  source?: "simple" | "lobehub";
  /** Brand is pure-black; invert in dark mode to stay visible. */
  monochrome?: boolean;
};
export type TechGroup = { label: string; items: TechItem[] };

export const techStack: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react/react-original" },
      { name: "Next.js", icon: "nextjs/nextjs-original", monochrome: true },
      { name: "Svelte", icon: "svelte/svelte-original" },
      { name: "Vue.js", icon: "vuejs/vuejs-original" },
      { name: "React Native", icon: "react/react-original" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "Express", icon: "express/express-original", monochrome: true },
      { name: "NestJS", icon: "nestjs/nestjs-original" },
      { name: "Go", icon: "go/go-original-wordmark" },
      { name: "Python", icon: "python/python-original" },
      { name: "Django", icon: "django/django-plain" },
      { name: "FastAPI", icon: "fastapi/fastapi-original" },
      { name: "PHP", icon: "php/php-original" },
      { name: "Laravel", icon: "laravel/laravel-original" },
      { name: ".NET", icon: "dotnetcore/dotnetcore-original" },
    ],
  },
  {
    label: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "MySQL", icon: "mysql/mysql-original" },
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Redis", icon: "redis/redis-original" },
      { name: "Firebase", icon: "firebase/firebase-plain" },
      { name: "Supabase", icon: "supabase", source: "simple" },
      { name: "Prisma", icon: "prisma/prisma-original", monochrome: true },
      { name: "Drizzle ORM", icon: "drizzle", source: "simple" },
      { name: "Kafka", icon: "apachekafka/apachekafka-original" },
      { name: "OpenSearch", icon: "opensearch", source: "simple" },
    ],
  },
  {
    label: "AI & Models",
    items: [
      // OpenAI and Groq were removed from SimpleIcons, so we use lobehub's set.
      { name: "OpenAI", icon: "openai", source: "lobehub", monochrome: true },
      { name: "Anthropic", icon: "anthropic", source: "simple", monochrome: true },
      { name: "Google Gemini", icon: "googlegemini", source: "simple" },
      { name: "Hugging Face", icon: "huggingface", source: "simple" },
      { name: "Ollama", icon: "ollama", source: "simple", monochrome: true },
      { name: "LangChain", icon: "langchain", source: "simple", monochrome: true },
      { name: "Groq", icon: "groq", source: "lobehub", monochrome: true },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark" },
      { name: "Google Cloud", icon: "googlecloud/googlecloud-original" },
      { name: "Azure", icon: "azure/azure-original" },
      { name: "Vercel", icon: "vercel", source: "simple", monochrome: true },
      { name: "Cloudflare", icon: "cloudflare", source: "simple" },
      { name: "Railway", icon: "railway", source: "simple", monochrome: true },
      { name: "Docker", icon: "docker/docker-original" },
      { name: "Linux", icon: "linux/linux-original" },
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub Actions", icon: "githubactions/githubactions-original" },
    ],
  },
];

export const iconUrl = (item: TechItem) => {
  switch (item.source) {
    case "simple":
      return `https://cdn.simpleicons.org/${item.icon}`;
    case "lobehub":
      return `https://unpkg.com/@lobehub/icons-static-svg@latest/icons/${item.icon}.svg`;
    default:
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}.svg`;
  }
};

/** Kept for backwards-compat with older imports. */
export const devIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
