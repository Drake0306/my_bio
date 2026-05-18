import { Rss, FileText, ShieldCheck } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="screen-line-after relative mx-auto w-full border-x border-edge md:max-w-3xl">
      <div className="flex flex-col items-center gap-4 px-4 py-6 sm:px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <FooterIcon href="/llms.txt" label="llms.txt">
            <FileText className="h-3.5 w-3.5" />
          </FooterIcon>
          <FooterIcon href="/rss.xml" label="RSS feed">
            <Rss className="h-3.5 w-3.5" />
          </FooterIcon>
          <FooterIcon
            href="https://www.dmca.com/Protection/Status.aspx"
            label="DMCA"
            external
          >
            <ShieldCheck className="h-3.5 w-3.5" />
          </FooterIcon>
        </div>
        <p
          className="text-center font-mono text-[11px] text-muted-foreground"
          suppressHydrationWarning
        >
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-edge bg-muted/40 transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}
