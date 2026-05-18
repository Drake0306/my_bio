import { Section } from "@/components/section";
import { aboutHtml } from "@/content/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <div
        className="
          prose prose-sm prose-zinc max-w-none font-mono text-foreground
          leading-relaxed
          dark:prose-invert
          prose-headings:font-sans prose-headings:font-semibold
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:font-medium prose-a:text-foreground prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline
          prose-li:marker:text-muted-foreground

          prose-ul:my-5
          prose-ul:space-y-4
          prose-li:my-0
          prose-li:pl-1
          prose-li:leading-7

          [&_ul_ul]:mt-3
          [&_ul_ul]:mb-1
          [&_ul_ul]:space-y-2.5
          [&_ul_ul_li]:leading-7
        "
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />
    </Section>
  );
}
