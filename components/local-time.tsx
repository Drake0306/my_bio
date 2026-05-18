"use client";

import { useEffect, useState } from "react";

export function LocalTime({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <span
      suppressHydrationWarning
      className="font-mono text-xs text-muted-foreground tabular-nums"
    >
      {time || "--:--:--"}
    </span>
  );
}
