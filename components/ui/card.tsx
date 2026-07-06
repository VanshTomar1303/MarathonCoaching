import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border-subtle bg-surface shadow-[0_2px_20px_-8px_rgba(11,31,77,0.15)]",
        className
      )}
      {...props}
    />
  );
}
