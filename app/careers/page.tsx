import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";
import { jobOpenings } from "@/constants/jobs";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join the ${site.name} team — faculty, administration, and marketing roles.`,
};

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Careers</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Join the SKC Career team
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4 mb-16">
          {jobOpenings.map((job, i) => (
            <RevealOnScroll key={job.slug} delay={i * 0.06}>
              <Card className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-base">{job.title}</h3>
                    <p className="text-sm text-foreground/60 mt-1">{job.description}</p>
                    <div className="flex gap-4 mt-2 text-xs text-foreground/45">
                      <span>{job.department}</span>
                      <span>{job.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-6 text-center">
              Apply Now
            </h2>
            <CareerApplicationForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
