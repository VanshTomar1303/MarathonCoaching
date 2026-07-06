import Link from "next/link";
import { PlayCircle, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { FloatingFormulaFieldLazy } from "@/components/animations/FloatingFormulaFieldLazy";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { stats } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <AuroraBackground />
      <BlueprintGrid className="text-navy" />
      <div className="absolute inset-0 hidden md:block">
        <FloatingFormulaFieldLazy />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-navy mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Est. 2011 — Kolkata&apos;s Trusted IIT-JEE / NEET Institute
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Crack India&apos;s Toughest Exams{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-gold">
              with Confidence
            </span>
          </h1>

          <p className="mt-6 text-lg text-foreground/65 max-w-xl leading-relaxed">
            Empowering future engineers and doctors through world-class coaching, expert
            mentorship, and personalized learning since 2011.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link href="/booking">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/testimonials" className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-gold" /> Success Stories
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="glass noise relative rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(11,31,77,0.35)]">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/50 mb-6">
              Marathon Academy, by the numbers
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display font-semibold text-3xl text-navy"
                  />
                  <p className="text-sm text-foreground/55 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
