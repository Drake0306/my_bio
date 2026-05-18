"use client";

import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { CodeXml, ChevronsUpDown } from "lucide-react";
import { Section } from "@/components/section";
import { experience, type ExperienceCompany, type ExperienceRole } from "@/content/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  // Auto-expand: current employer's first role.
  const defaultOpen = experience.flatMap((c) =>
    c.current ? [roleId(c.company, c.roles[0].title)] : [],
  );

  return (
    <Section id="experience" title="Experience" bodyClassName="px-0 pt-0 pb-0 sm:px-0">
      <div className="divide-y divide-edge">
        {experience.map((company) => (
          <CompanyBlock
            key={company.company}
            company={company}
            defaultOpen={defaultOpen}
          />
        ))}
      </div>
    </Section>
  );
}

function CompanyBlock({
  company,
  defaultOpen,
}: {
  company: ExperienceCompany;
  defaultOpen: string[];
}) {
  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6">
      {/* Company header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full">
          {company.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={company.logo}
              alt={company.company}
              className="size-7 rounded-full bg-muted"
              loading="lazy"
            />
          ) : (
            <div className="size-7 rounded-full bg-muted ring-1 ring-edge" />
          )}
        </div>
        <h3 className="text-lg leading-snug font-medium text-foreground">
          {company.company}
        </h3>
        {company.current && (
          <span className="relative flex size-3 items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      {/* Roles with vertical connector line on the left */}
      <Accordion.Root
        type="multiple"
        defaultValue={defaultOpen}
        className="relative space-y-3 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-edge"
      >
        {company.roles.map((role) => (
          <RoleItem key={role.title} role={role} companyName={company.company} />
        ))}
      </Accordion.Root>

      {/* Notes (private work not on GitHub) */}
      {company.roles[0].notes && company.roles[0].notes.length > 0 && (
        <div className="mt-4 ml-9 rounded-md border border-dashed border-edge bg-muted/40 p-3 text-sm text-muted-foreground">
          <span className="font-mono uppercase tracking-wider text-[10px]">
            Not on GitHub —
          </span>{" "}
          {company.roles[0].notes.join(" · ")}
        </div>
      )}
    </div>
  );
}

function RoleItem({
  role,
  companyName,
}: {
  role: ExperienceRole;
  companyName: string;
}) {
  const value = roleId(companyName, role.title);
  return (
    <Accordion.Item value={value} className="relative">
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            "group flex w-full items-center gap-3 text-left transition-colors",
            "data-[state=open]:[&_.chev]:rotate-180",
          )}
        >
          <div
            aria-hidden
            className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background text-muted-foreground"
          >
            <CodeXml className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="truncate font-medium text-foreground">
              {role.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {role.type}{" "}
              <span className="font-mono text-muted-foreground/60">|</span>{" "}
              {role.start} <span className="font-mono">—</span> {role.end}
            </p>
          </div>
          <ChevronsUpDown className="chev h-4 w-4 shrink-0 text-muted-foreground transition-transform" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={cn(
          "overflow-hidden",
          "data-[state=open]:animate-accordion-down",
          "data-[state=closed]:animate-accordion-up",
        )}
      >
        <div className="pl-9 pt-3 pb-1">
          <ul className="list-disc space-y-1 pl-4 text-base leading-7 text-foreground/90 marker:text-muted-foreground">
            {role.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {role.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-edge bg-muted/40 px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

function roleId(company: string, title: string) {
  return `${company}::${title}`.replace(/\s+/g, "-").toLowerCase();
}

// Silence unused import warning (Image was kept for future inline logo upgrade).
void Image;
