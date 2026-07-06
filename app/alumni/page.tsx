import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { alumniPlacements } from "@/constants/alumni";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Alumni",
  description: `Where ${site.name} alumni are today — IITs, NITs, BITS, ISI, CMI and leading medical colleges.`,
};

export default function AlumniPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Alumni</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Where our students are today
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              From IITs and NITs to BITS Pilani, ISI, CMI and leading medical colleges — a look
              at where the Marathon Academy journey has led.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {alumniPlacements.map((a, i) => (
              <RevealOnScroll key={a.name} delay={(i % 2) * 0.08}>
                <Card className="p-6 flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-base">{a.name}</p>
                    <p className="text-sm text-gold font-medium mt-0.5">{a.institute}</p>
                    {(a.branch || a.note) && (
                      <p className="text-xs text-foreground/50 mt-1">{a.branch ?? a.note}</p>
                    )}
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
