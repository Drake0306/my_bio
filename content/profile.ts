export const profile = {
  name: "Abhinav Roy",
  // Worn next to "AR" in the Brand section logotype
  wordmark: "AbhinavRoy",
  title: "Full-Stack Developer",
  // Subtitle shown in hero just below the name
  subtitle: "Full-Stack Developer & Tech Lead",
  // Top tagline shown above the Overview info grid
  tagline: "Senior Software Engineer & Tech Lead",
  employer: "@TalentBridge",
  // What the user is currently shipping — shown in the Overview "Building" row
  building: "TB-VMS · TalentBridgeOne",
  pronouns: "he/him",
  // NEEDS UPDATE: confirm city — defaulted to college city
  location: "Bhubaneswar, Odisha",
  timezone: "Asia/Kolkata",
  avatar: "https://avatars.githubusercontent.com/u/48856484?v=4",
  email: "abhinavroy.hello@gmail.com",
  phone: "+91 79038-26151",
  githubHandle: "@Drake0306",
  github: "https://github.com/Drake0306",
  // NEEDS UPDATE: personal website domain (placeholder)
  website: "abhinavroy.dev",
  // Short intro used for sub-pages / metadata
  intro:
    "Full-stack developer and tech lead building SaaS platforms, real-time apps, and AI-assisted tooling — from APIs and infra to scalable React / Svelte / Next.js frontends.",
} as const;

/**
 * About content as markdown-style bullet HTML. Rendered inside `prose font-mono`
 * to match the reference's design. Drawn from the resume's "Work Summary" and the
 * featured open-source builds in your GitHub.
 */
export const aboutHtml = `
<ul>
  <li>
    I'm a <strong>Full-Stack Developer and Tech Lead</strong>, six years
    deep — building enterprise systems, SaaS platforms, and AI-powered apps
    across web, mobile, and desktop. I lead the people doing the same.
  </li>

  <li>
    I work end-to-end — from the database and APIs all the way to the
    interface customers actually see. The work I'm proudest of lives where
    those layers meet: <strong>real-time systems</strong>,
    <strong>well-shaped APIs</strong>, and
    <strong>interfaces that hold up at scale</strong>.
  </li>

  <li>
    Right now I lead a team at
    <a href="#experience"><strong>Talent Bridge</strong></a>,
    building a customizable platform for vendor management and talent
    acquisition. My day-to-day is architecture, planning, and keeping
    delivery on track across two flagship products:
    <ul>
      <li>
        <strong>TB-VMS</strong> — helps companies onboard vendors, run
        approval pipelines, manage who-can-see-what, and generate invoices
        end-to-end.
      </li>
      <li>
        <strong>TalentBridgeOne (Staff Trader)</strong> — a hiring
        marketplace that brings hiring managers, recruiters, and job seekers
        into one place.
      </li>
    </ul>
  </li>

  <li>
    On the side, I build in the open.
    <a href="https://github.com/Drake0306/uni-chat"><strong>UniChat</strong></a>
    lets you talk to 20+ AI models from one chat.
    <a href="https://github.com/Drake0306/whatsapp_automation"><strong>WhatsAppFlow</strong></a>
    runs 24/7 customer conversations for small businesses.
    <a href="https://github.com/Drake0306/LLM-Chain"><strong>LLM-Chain</strong></a>
    trains your own AI model locally — no cloud required.
    <a href="https://github.com/Drake0306/fresh-wall"><strong>FreshWall</strong></a>
    is a polished wallpaper app for Android.
  </li>

  <li>
    Beyond the code, I run teams. I break ambitious projects into shippable
    milestones, push for thoughtful decisions early, and keep quality high
    when deadlines tighten.
  </li>

  <li>
    <strong>Mission:</strong> ship software that solves real problems.
    Full systems, not demos.
  </li>
</ul>
`;
