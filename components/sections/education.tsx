import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" title="Education" bodyClassName="px-0 pt-0 pb-2 sm:px-0">
      <ul className="divide-y divide-edge">
        {education.map((e, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <li className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-4 sm:px-6">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {e.institution}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {e.degree}
                  {e.location && ` · ${e.location}`}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                {e.start} <span className="font-mono">—</span> {e.end}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
