"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { resultsByYear, resultYears, totalSelections, bestAIR } from "@/constants/results";

export function ResultsPreview() {
  const latestYear = resultYears[0];
  const latestResults = resultsByYear[latestYear].slice(0, 8);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Results</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
              Ranks that speak for themselves
            </h2>
          </div>
          <div className="flex gap-10">
            <div>
              <AnimatedCounter value={totalSelections} suffix="+" className="font-display font-semibold text-3xl text-navy" />
              <p className="text-sm text-foreground/55 mt-1">Selections since 2018</p>
            </div>
            <div>
              <AnimatedCounter value={bestAIR} className="font-display font-semibold text-3xl text-navy" />
              <p className="text-sm text-foreground/55 mt-1">Best AIR achieved</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
          {latestResults.map((r, i) => (
            <RevealOnScroll key={r.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                {r.image && (
                  <Image src={r.image} alt={r.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 p-3.5">
                  <p className="text-white font-medium text-sm leading-tight">{r.name}</p>
                  <p className="text-gold text-xs font-semibold mt-0.5">AIR {r.air}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/results">
              View All Results <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
