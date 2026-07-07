import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { resultsByYear, resultYears, totalSelections, bestAIR } from "@/constants/results";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Results",
  description: `IIT-JEE Advanced results and AIR rankings from ${site.name} students, 2018-2021.`,
};

export default function ResultsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Results</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Ranks that speak for themselves
            </h1>
            <div className="mt-10 flex justify-center gap-14">
              <div>
                <AnimatedCounter value={totalSelections} suffix="+" className="font-display font-semibold text-4xl text-foreground" />
                <p className="text-sm text-foreground/55 mt-1">JEE Advanced selections shown</p>
              </div>
              <div>
                <AnimatedCounter value={bestAIR} className="font-display font-semibold text-4xl text-foreground" />
                <p className="text-sm text-foreground/55 mt-1">Best All India Rank</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {resultYears.map((year) => (
            <div key={year}>
              <RevealOnScroll>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight mb-8">
                  JEE Advanced {year}
                </h2>
              </RevealOnScroll>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
                {resultsByYear[year].map((r, i) => (
                  <RevealOnScroll key={r.name} delay={(i % 8) * 0.04}>
                    <div className="group relative overflow-hidden rounded-2xl aspect-square">
                      {r.image && (
                        <Image
                          src={r.image}
                          alt={r.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                      <div className="absolute bottom-0 p-3">
                        <p className="text-white font-medium text-xs leading-tight">{r.name}</p>
                        <p className="text-gold text-xs font-semibold mt-0.5">AIR {r.air}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
