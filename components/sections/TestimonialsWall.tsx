"use client";

import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/constants/testimonials";

export function TestimonialsWall() {
  return (
    <section className="relative py-28 bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Loved by Students and Parents</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
            Success stories, in their own words
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((t, i) => (
            <RevealOnScroll key={t.name} delay={(i % 3) * 0.08}>
              <Card className="p-7 h-full flex flex-col">
                <Quote className="h-7 w-7 text-gold/50 mb-4" />
                <p className="text-foreground/75 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-border-subtle">
                  <p className="font-heading font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">{t.institute}</p>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
