import { Section } from "@/components/section";

type ApiResp = {
  total: Record<string, number>;
  contributions: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[];
};

async function fetchContributions(username: string): Promise<ApiResp | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as ApiResp;
  } catch {
    return null;
  }
}

const levelClass: Record<number, string> = {
  0: "bg-muted",
  1: "bg-emerald-200 dark:bg-emerald-900/60",
  2: "bg-emerald-400 dark:bg-emerald-700",
  3: "bg-[#40c463] dark:bg-[#30a14e]",
  4: "bg-[#39d353] dark:bg-[#39d353]",
};

export async function GithubContributions({ username }: { username: string }) {
  const data = await fetchContributions(username);
  const total = data
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : null;

  type Day = { date: string; count: number; level: number };
  const weeks: (Day | null)[][] = [];
  if (data && data.contributions.length > 0) {
    const firstDow = new Date(data.contributions[0].date).getUTCDay();
    const totalSlots = firstDow + data.contributions.length;
    const totalWeeks = Math.ceil(totalSlots / 7);
    for (let w = 0; w < totalWeeks; w++) {
      weeks.push(Array(7).fill(null));
    }
    for (let i = 0; i < data.contributions.length; i++) {
      const slot = firstDow + i;
      weeks[Math.floor(slot / 7)][slot % 7] = data.contributions[i];
    }
  }

  return (
    <Section id="github" srTitle="GitHub Contributions">
      {data ? (
        <div className="overflow-x-auto">
          <div className="inline-flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) =>
                  day ? (
                    <div
                      key={di}
                      title={`${day.date}: ${day.count} contributions`}
                      className={`h-[11px] w-[11px] rounded-[2px] ${levelClass[day.level]}`}
                    />
                  ) : (
                    <div
                      key={di}
                      className="h-[11px] w-[11px] rounded-[2px] bg-transparent"
                    />
                  ),
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>
              {total !== null
                ? `${total.toLocaleString()} contributions in the last year on GitHub and 1,000+ on private client repos.`
                : null}
            </span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className={`h-[11px] w-[11px] rounded-[2px] ${levelClass[l]}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          Couldn’t load contributions.{" "}
          <a
            className="underline"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          .
        </div>
      )}
    </Section>
  );
}
