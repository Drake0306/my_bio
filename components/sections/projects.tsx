"use client";

import { useState } from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronsUpDown, ChevronDown, Link as LinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Section } from "@/components/section";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 4;

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const all = [...featured, ...more];

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? all : all.slice(0, VISIBLE_COUNT);
  const hiddenCount = all.length - VISIBLE_COUNT;

  // First project open by default
  const defaultOpen = [all[0]?.slug].filter(Boolean) as string[];

  return (
    <Section
      id="projects"
      title="Side Projects"
      count={all.length}
      bodyClassName="px-0 pt-0 pb-0 sm:px-0"
    >
      <Accordion.Root
        type="multiple"
        defaultValue={defaultOpen}
        className="divide-y divide-edge"
      >
        {visible.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </Accordion.Root>

      {hiddenCount > 0 && (
        <div className="flex justify-center border-t border-edge bg-muted/30 px-4 py-3">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="group inline-flex items-center gap-1.5 rounded-full border border-edge bg-background px-3 py-1 font-mono text-xs text-foreground transition-colors hover:bg-muted"
          >
            {showAll ? "Show Less" : `Show More (${hiddenCount})`}
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform",
                showAll && "rotate-180",
              )}
            />
          </button>
        </div>
      )}
    </Section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <Accordion.Item value={project.slug}>
      <div className="flex items-stretch">
        {/* Logo cell with dashed right border (reference design) */}
        <div className="flex w-14 shrink-0 items-center justify-center border-r border-dashed border-edge">
          {project.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo}
              alt={project.name}
              className="size-7 rounded-md"
              loading="lazy"
            />
          ) : (
            <div className="size-7 rounded-md bg-muted" />
          )}
        </div>

        {/* Title row with chevron */}
        <Accordion.Header className="flex-1">
          <Accordion.Trigger
            className={cn(
              "group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
              "data-[state=open]:[&_.chev]:rotate-180",
            )}
          >
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-medium text-foreground">
                {project.name}
              </h3>
              {(project.start || project.end) && (
                <p className="text-sm text-muted-foreground">
                  {project.start}{" "}
                  <span className="font-mono">—</span> {project.end}
                </p>
              )}
            </div>
            {project.href && (
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Open live URL"
                className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LinkIcon className="h-4 w-4" />
              </Link>
            )}
            {project.repo && !project.href && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Open repo"
                className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <FaGithub className="h-4 w-4" />
              </Link>
            )}
            <ChevronsUpDown className="chev h-4 w-4 shrink-0 text-muted-foreground transition-transform" />
          </Accordion.Trigger>
        </Accordion.Header>
      </div>

      <Accordion.Content
        className={cn(
          "overflow-hidden border-t border-edge",
          "data-[state=open]:animate-accordion-down",
          "data-[state=closed]:animate-accordion-up",
        )}
      >
        <div className="px-4 py-5 sm:px-6">
          <p className="text-base leading-7 text-foreground/90">
            {project.description}
          </p>
          {project.features && project.features.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-7 text-foreground/90 marker:text-muted-foreground">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-edge bg-muted/40 px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 font-mono text-sm">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-foreground px-3 py-1.5 text-background hover:opacity-90"
            >
              View details →
            </Link>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <FaGithub className="h-3.5 w-3.5" /> Repo
              </a>
            )}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
