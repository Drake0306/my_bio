import { Section } from "@/components/section";
import { PixelLogo } from "@/components/pixel-logo";
import { profile } from "@/content/profile";

export function Brand() {
  return (
    <Section id="brand" title="Brand" bodyClassName="px-0 pt-0 pb-0 sm:px-0">
      <BrandRow label="Mark">
        <PixelLogo className="h-16 w-32 sm:h-20 sm:w-40" />
      </BrandRow>
      <BrandRow label="Logotype">
        <div className="flex items-center gap-4 sm:gap-6">
          <PixelLogo className="h-10 w-20 sm:h-12 sm:w-24" />
          <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {profile.wordmark}
          </span>
        </div>
      </BrandRow>
      <div className="border-t border-edge px-4 py-6 sm:px-6">
        <p className="text-center text-sm text-muted-foreground">
          Inspired by{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
          >
            tailwindcss.com
          </a>{" "}
          &{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
          >
            ui.shadcn.com
          </a>
          .
        </p>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Built by a human. The source code is available on{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href={`${profile.github}/my_bio`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

function BrandRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[120px] border-t border-edge first:border-t-0 sm:min-h-[160px]">
      {/* Vertical label column — sans, matching the reference */}
      <div
        className="flex w-10 shrink-0 items-center justify-center border-r border-dashed border-edge bg-background text-sm text-muted-foreground"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {label}
      </div>
      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-6 py-6">
        {children}
      </div>
    </div>
  );
}
