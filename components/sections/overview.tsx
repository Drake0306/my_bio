import {
  Hammer,
  User,
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  CodeXml,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";
import { Section } from "@/components/section";
import { LocalTime } from "@/components/local-time";
import { ProtectedContact } from "@/components/protected-contact";
import { profile } from "@/content/profile";

export function Overview() {
  return (
    <Section id="overview" srTitle="Overview">
      {/* Top tagline with code icon */}
      <div className="mb-6 flex items-center gap-3 font-mono text-base leading-6">
        <div
          aria-hidden
          className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background text-muted-foreground"
        >
          <CodeXml className="h-4 w-4" />
        </div>
        <p className="text-foreground">
          {profile.tagline}{" "}
          <span className="text-muted-foreground">At</span>{" "}
          <span className="text-info">{profile.employer}</span>
        </p>
      </div>

      {/* 2-col 4-row info grid */}
      <dl className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        <InfoRow icon={<Hammer className="h-4 w-4" />} label="Currently building">
          <span className="text-info">{profile.building}</span>
        </InfoRow>
        <InfoRow icon={<User className="h-4 w-4" />} label="Pronouns">
          {profile.pronouns}
        </InfoRow>
        <InfoRow icon={<MapPin className="h-4 w-4" />} label="Location">
          {profile.location}
        </InfoRow>
        <InfoRow icon={<Clock className="h-4 w-4" />} label="Local time">
          <LocalTime timezone={profile.timezone} />
          <span className="text-muted-foreground"> same time</span>
        </InfoRow>
        <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone">
          <ProtectedContact
            value={profile.phone}
            label="Phone protected"
            type="phone"
          />
        </InfoRow>
        <InfoRow icon={<FaGithub className="h-4 w-4" />} label="GitHub">
          <a
            className="hover:text-foreground hover:underline underline-offset-4"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.githubHandle}
          </a>
        </InfoRow>
        <InfoRow icon={<Mail className="h-4 w-4" />} label="Email">
          <ProtectedContact
            value={profile.email}
            label="Email protected"
            type="email"
          />
        </InfoRow>
        <InfoRow icon={<Globe className="h-4 w-4" />} label="Site">
          <a
            className="hover:text-foreground hover:underline underline-offset-4"
            href={`https://${profile.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.website}
          </a>
        </InfoRow>
      </dl>
    </Section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-base">
      <div
        aria-hidden
        className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background text-muted-foreground"
      >
        {icon}
      </div>
      <dt className="sr-only">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}
