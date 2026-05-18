// NEEDS UPDATE: confirm every URL/handle below with the user
export const socials = [
  {
    name: "GitHub",
    handle: "@Drake0306",
    href: "https://github.com/Drake0306",
    icon: "github",
  },
  {
    name: "X (Twitter)",
    handle: "@Abhinav__roy_",
    href: "https://twitter.com/Abhinav__roy_",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    handle: "@abhinav-roy-980020157",
    href: "https://www.linkedin.com/in/abhinav-roy-980020157/",
    icon: "linkedin",
  },
  {
    name: "Stack Overflow",
    // NEEDS UPDATE: real Stack Overflow profile URL
    handle: "abhinav-roy",
    href: "https://stackoverflow.com/users/0000000/abhinav-roy",
    icon: "stackoverflow",
  },
  {
    name: "Discord",
    handle: "simple.3180",
    href: "https://discord.com/users/simple.3180",
    icon: "discord",
  },
  {
    name: "Product Hunt",
    handle: "@abhinav_roy4",
    href: "https://www.producthunt.com/@abhinav_roy4",
    icon: "producthunt",
  },
] as const;

export type Social = (typeof socials)[number];
