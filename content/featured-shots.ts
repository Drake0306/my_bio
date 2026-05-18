// Two parallel marquee rows. Mixed wide/tall shapes for visual interest.
// Pulled from /public/screenshots/<project>/ — see projects.ts for the canonical
// per-project list.
export type Shot = {
  src: string;
  alt: string;
  repo: string;
  slug: string; // for click-through to /projects/<slug>
  shape: "wide" | "tall";
};

export const rowA: Shot[] = [
  {
    src: "/screenshots/unichat/01-home.png",
    alt: "UniChat — home and prompt categories",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/01-welcome.jpeg",
    alt: "FreshWall — welcome / onboarding",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/whatsappflow/01-shot.png",
    alt: "WhatsAppFlow — dashboard",
    repo: "whatsapp_automation",
    slug: "whatsappflow",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/02-home-unsplash.jpeg",
    alt: "FreshWall — Unsplash tab",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/unichat/02-model-picker.png",
    alt: "UniChat — model picker grouped by provider",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/03-home-pexels.jpeg",
    alt: "FreshWall — Pexels tab",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/whatsappflow/02-shot.png",
    alt: "WhatsAppFlow — contacts CRM",
    repo: "whatsapp_automation",
    slug: "whatsappflow",
    shape: "wide",
  },
  {
    src: "/screenshots/unichat/03-command-palette.png",
    alt: "UniChat — command palette",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
];

export const rowB: Shot[] = [
  {
    src: "/screenshots/unichat/04-vision-chat.png",
    alt: "UniChat — vision chat with image attachments",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/04-search.jpeg",
    alt: "FreshWall — cross-source search",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/whatsappflow/03-shot.png",
    alt: "WhatsAppFlow — conversations",
    repo: "whatsapp_automation",
    slug: "whatsappflow",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/05-preview-popup.jpeg",
    alt: "FreshWall — long-press preview",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/unichat/05-customization.png",
    alt: "UniChat — customization and traits",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
  {
    src: "/screenshots/whatsappflow/04-shot.png",
    alt: "WhatsAppFlow — skills config",
    repo: "whatsapp_automation",
    slug: "whatsappflow",
    shape: "wide",
  },
  {
    src: "/screenshots/freshwall/06-detail-apply.jpeg",
    alt: "FreshWall — detail / apply sheet",
    repo: "fresh-wall",
    slug: "fresh-wall",
    shape: "tall",
  },
  {
    src: "/screenshots/unichat/07-model-details.png",
    alt: "UniChat — model details and benchmarks",
    repo: "uni-chat",
    slug: "unichat",
    shape: "wide",
  },
];
