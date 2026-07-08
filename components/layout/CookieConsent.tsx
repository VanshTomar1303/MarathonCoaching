"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ma-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage unavailable (private mode) — just don't show */
    }
  }, []);

  function decide(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-20 left-4 right-4 z-[60] sm:left-6 sm:right-auto sm:max-w-md lg:bottom-6"
    >
      <div className="rounded-2xl border border-border-subtle bg-surface p-5 shadow-[0_20px_60px_-15px_rgba(11,31,77,0.4)]">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground/5">
            <Cookie className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="font-heading font-medium text-sm mb-1">We use cookies</p>
            <p className="text-sm text-foreground/60 leading-relaxed">
              We use cookies to improve your browsing experience and understand how our site is
              used. Read our{" "}
              <Link href="/legal/cookies" className="text-gold underline underline-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Button variant="gold" size="sm" onClick={() => decide("accepted")}>
                Accept
              </Button>
              <Button variant="outline" size="sm" onClick={() => decide("declined")}>
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
