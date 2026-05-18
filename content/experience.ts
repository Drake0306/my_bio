/** A single role within a company. Multiple roles can stack under one company. */
export type ExperienceRole = {
  title: string;
  type: string; // "Full-time", "Part-time", "Self-Employed", ...
  start: string; // "2025" or "07.2025"
  end: string | "∞";
  bullets: string[];
  stack: string[];
  notes?: string[];
};

/** A company / employer group containing one or more roles. */
export type ExperienceCompany = {
  company: string;
  /** Render the blue ping dot indicator next to the name. */
  current?: boolean;
  /** Optional remote logo URL — Dicebear initials if not provided. */
  logo?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceCompany[] = [
  {
    company: "Talent Bridge",
    current: true,
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=Talent+Bridge&backgroundColor=3080ff&textColor=ffffff",
    roles: [
      {
        title: "Senior Software Engineer · Tech Lead",
        type: "Full-time",
        start: "2025",
        end: "∞",
        bullets: [
          "Lead the engineering team building a customizable Vendor Management & Talent Acquisition SaaS — own architecture, API design, feature planning, and delivery timelines.",
          "Architecting TB-VMS: a multi-tenant Vendor Management System with vendor onboarding, approval pipelines, multi-role access, and invoice PDF generation.",
          "Architecting TalentBridgeOne (Staff Trader): a multi-sided staffing marketplace connecting hiring managers, recruiters, and job seekers.",
          "Designed the platform around flexibility — companies can adapt hiring and vendor workflows to their own processes without code-level changes.",
          "Shipping analytics dashboards, document management, mobile-app integrations, and customizable recruitment flows.",
        ],
        stack: [
          "Next.js",
          "SvelteKit",
          "Django",
          "TypeScript",
          "PostgreSQL",
          "Kafka",
          "Redis",
          "OpenSearch",
          "Turborepo",
        ],
        notes: [
          "TB-VMS (Vendor Management System SaaS)",
          "TalentBridgeOne / Staff Trader (multi-sided staffing marketplace)",
        ],
      },
    ],
  },
  {
    company: "eTeam",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=eTeam&backgroundColor=18181b&textColor=ffffff",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        start: "2021",
        end: "2025",
        bullets: [
          "Built and integrated REST APIs across multiple stacks — Django REST Framework, Laravel, Node.js, and Go — with a focus on refining systems, improving database performance, and optimizing data flow.",
          "Shipped scalable frontends with React, Next.js, Vue.js, and React Native focused on usability and performance.",
          "Built real-time pricing and product calculation software for clients across multiple verticals.",
          "Developed multi-branch inventory management with stock tracking, reporting tools, and vehicle maintenance organization.",
          "Grew into leadership responsibilities: organizing dev cycles, reviewing architecture decisions, and maintaining delivery quality under tight deadlines.",
        ],
        stack: [
          "Django",
          "Laravel",
          "Node.js",
          "Go",
          "React",
          "Next.js",
          "Vue.js",
          "React Native",
          "MySQL",
        ],
      },
    ],
  },
  {
    company: "CRENEXA",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=CRENEXA&backgroundColor=059669&textColor=ffffff",
    roles: [
      {
        title: "Associate Software Engineer",
        type: "Full-time",
        start: "2021",
        end: "2021",
        bullets: [
          "Contributed to backend and frontend across internal product work — APIs, data flow, and UI integration.",
          "Worked across the JS/TS stack with React on the frontend and Node.js on the backend.",
        ],
        stack: ["JavaScript", "TypeScript", "React", "Node.js", "REST APIs"],
      },
    ],
  },
  {
    company: "SWIRL IT Solutions",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=SWIRL+IT&backgroundColor=ea580c&textColor=ffffff",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        start: "2019",
        end: "2021",
        bullets: [
          "Built an Access Control System for secure entry/exit logging — Laravel + Bootstrap + MySQL — used for attendance tracking and monitoring.",
          "Integrated QR scanning, thumbprint verification, and photo-based logging into a single attendance pipeline.",
          "Owned end-to-end delivery: schema design, API surface, admin UI, and on-site rollouts.",
        ],
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
      },
    ],
  },
  {
    company: "IT Scient",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=IT+Scient&backgroundColor=7c3aed&textColor=ffffff",
    roles: [
      {
        title: "Backend Web Developer",
        type: "Full-time",
        start: "2019",
        end: "2019",
        bullets: [
          "Started my professional career in backend web development — building server-side logic, database schemas, and admin tooling.",
          "Worked with PHP/Laravel stacks delivering client-facing web applications.",
        ],
        stack: ["PHP", "Laravel", "MySQL"],
      },
    ],
  },
];
