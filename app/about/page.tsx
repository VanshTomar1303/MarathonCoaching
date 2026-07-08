import Image from "next/image";
import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `The mission and teaching philosophy behind ${site.name} — an IIT-JEE coaching institute in Cuttack, Odisha.`,
};

const values = [
  { icon: Target, title: "Discipline", desc: "Consistent, structured effort beats last-minute intensity, every time." },
  { icon: Eye, title: "Clarity", desc: "No concept is moved past until the whole room understands it." },
  { icon: HeartHandshake, title: "Mentorship", desc: "We teach students, not syllabi — every learner gets individual guidance." },
  { icon: Sparkles, title: "Excellence", desc: "We hold ourselves to the same rigor we ask of our students." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">About SKC Career</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Quality IIT-JEE education in a competitive, congenial and healthy environment
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              {site.mission}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/gallery/campus/IIT-JEE-course-India-1.jpg" alt="SKC Career classroom" fill className="object-cover" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Our Story</p>
            <h2 className="font-display font-semibold text-3xl tracking-tight mb-5 text-balance">
              A classroom built around one idea: never move on until every student understands
            </h2>
            <p className="text-foreground/65 leading-relaxed mb-4">
              We at SKC Career are committed to provide quality education in a high
              competitive, congenial and healthy environment along with the best infrastructure.
              We infuse the exemplary skills demanded of students to succeed in IIT-JEE, NEET and
              other major competitive examinations.
            </p>
            <p className="text-foreground/65 leading-relaxed">
              First and foremost of our strengths is an esteemed faculty with proven track records
              in IIT coaching. The output of their teamwork is an innovative curriculum that moulds
              our students&apos; inborn intelligence to the highest possible level — constantly
              revised and fine-tuned to match the demands of newer methods of competitive testing,
              in small batches where no student is ever just a name on a register.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-28 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">What We Stand For</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
              Our core values
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-heading font-medium text-base mb-1.5">{v.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{v.desc}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
