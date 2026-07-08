import type { Metadata } from "next";
import { CheckCircle2, Trophy } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { ScholarshipForm } from "@/components/forms/ScholarshipForm";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Scholarship Test",
  description: `Apply for the ${site.name} Scholarship Test and earn a fee waiver based on merit.`,
};

const eligibility = [
  "Open to students of Class IX through XII, and droppers",
  "No prior enrolment at SKC Career required",
  "Valid school ID or previous mark sheet required at the test centre",
];

const benefits = [
  "Up to 50% fee waiver based on test performance",
  "Certificate of merit for all scholarship qualifiers",
  "Priority seating in batches of your chosen course",
];

export default function ScholarshipPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Scholarship Test</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Merit-based scholarships for future rankers
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 mb-16">
          <RevealOnScroll>
            <Card className="p-7 h-full">
              <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-heading font-medium text-lg mb-4">Eligibility</h2>
              <ul className="space-y-2.5">
                {eligibility.map((e) => (
                  <li key={e} className="text-sm text-foreground/65 flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> {e}
                  </li>
                ))}
              </ul>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <Card className="p-7 h-full">
              <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                <Trophy className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-heading font-medium text-lg mb-4">Benefits</h2>
              <ul className="space-y-2.5">
                {benefits.map((b) => (
                  <li key={b} className="text-sm text-foreground/65 flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </Card>
          </RevealOnScroll>
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-6 text-center">
              Apply for the Scholarship Test
            </h2>
            <ScholarshipForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
