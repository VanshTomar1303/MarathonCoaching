"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors",
        className
      )}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      <Sun className={cn("h-[18px] w-[18px]", isDark ? "block" : "hidden")} />
      <Moon className={cn("h-[18px] w-[18px]", isDark ? "hidden" : "block")} />
    </button>
  );
}
