"use client";

import { useCountdown } from "@/hooks/useCountdown";

export function CountdownTimer({ target }: { target: string }) {
  const { days, hours, minutes, seconds } = useCountdown(new Date(target));

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map((u) => (
        <div key={u.label} className="glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-center min-w-[70px] sm:min-w-[90px]">
          <p className="font-display font-semibold text-2xl sm:text-3xl text-foreground tabular-nums">
            {String(u.value).padStart(2, "0")}
          </p>
          <p className="text-[11px] text-foreground/50 uppercase tracking-wider mt-1">{u.label}</p>
        </div>
      ))}
    </div>
  );
}
