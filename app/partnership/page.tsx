import type { Metadata } from "next";
import { School, Building2, Users2 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Partnership Programme",
  description: `Partner with ${site.name} as a school, educational institution, or training partner.`,
};

const tracks = [
  { icon: School, title: "School Partnerships", desc: "Bring structured JEE/NEET foundation coaching to your school's Class IX-X students." },
  { icon: Building2, title: "Educational Partners", desc: "Collaborate on joint programs, seminars, and student assessment initiatives." },
  { icon: Users2, title: "Training Partners", desc: "Partner with us to deliver faculty training or curriculum design support." },
];

export default function PartnershipPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Partnership Programme</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Partner with Marathon Academy
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 mb-16">
          {tracks.map((t, i) => (
            <RevealOnScroll key={t.title} delay={i * 0.08}>
              <Card className="p-7 h-full">
                <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                  <t.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{t.desc}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-6 text-center">
              Become a Partner
            </h2>
            <PartnershipForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
