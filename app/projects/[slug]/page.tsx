import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Metadata } from "next";
import { getProject, projects } from "@/content/projects";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { StripeDivider } from "@/components/section";
import { withBase } from "@/lib/utils";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Abhinav Roy`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto md:max-w-3xl">
          {/* Back to portfolio */}
          <div className="screen-line-after relative border-x border-edge px-4 py-4 sm:px-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to portfolio
            </Link>
          </div>

          {/* Header */}
          <header className="screen-line-after relative border-x border-edge px-4 py-8 sm:px-6 sm:py-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 font-mono text-base text-muted-foreground">
              {project.tagline}
            </p>

            {/* Action buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-sm">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-foreground px-3 py-1.5 text-background hover:opacity-90"
                >
                  Live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-background px-3 py-1.5 text-foreground hover:bg-muted"
                >
                  <FaGithub className="h-3.5 w-3.5" /> Repo
                </a>
              )}
            </div>

            {/* Stack chips */}
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
          </header>

          {/* Video */}
          {project.video && (
            <section className="screen-line-after relative border-x border-edge">
              <div className="px-4 py-3 sm:px-6">
                <h2 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Demo
                </h2>
              </div>
              <div className="border-t border-edge bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="block h-auto w-full"
                >
                  <source src={withBase(project.video)} type="video/mp4" />
                  Your browser doesn’t support video playback.
                </video>
              </div>
            </section>
          )}

          {/* Description / detail */}
          <section className="screen-line-after relative border-x border-edge px-4 py-6 sm:px-6 sm:py-8">
            <h2 className="mb-3 text-2xl font-bold tracking-tight">About</h2>
            <p className="text-base leading-7 text-foreground/90">
              {project.detail ?? project.description}
            </p>
          </section>

          {/* Screenshots grid */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="screen-line-after relative border-x border-edge">
              <div className="px-4 py-3 sm:px-6">
                <h2 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Screenshots ({project.screenshots.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-px border-t border-edge bg-edge sm:grid-cols-2">
                {project.screenshots.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] bg-card"
                  >
                    {/* Raw <img> so withBase() actually prefixes the path. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBase(src)}
                      alt={`${project.name} screenshot ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <StripeDivider />
          <Footer />
        </div>
      </main>
    </>
  );
}
