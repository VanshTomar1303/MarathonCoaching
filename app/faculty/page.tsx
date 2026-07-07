import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { faculty } from "@/constants/faculty";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Faculty",
  description: `Meet the faculty and main mentor behind ${site.name}'s IIT-JEE results.`,
};

export default function FacultyPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Faculty</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              The mentors behind the results
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          {faculty.map((f, i) => (
            <RevealOnScroll key={f.slug} delay={i * 0.08}>
              <Card className="p-8 grid sm:grid-cols-3 gap-8 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden sm:col-span-1">
                  <Image src={f.image} alt={f.name} fill className="object-cover" />
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-medium text-gold uppercase tracking-wider mb-2">{f.subject} · {f.role}</p>
                  <h2 className="font-display font-semibold text-2xl mb-3">{f.name}</h2>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">{f.bio}</p>
                  <p className="text-xs text-foreground/50 mb-4">
                    {f.qualification} · {f.experience} of teaching experience
                  </p>
                  <div className="space-y-2">
                    {f.achievements.map((a) => (
                      <div key={a} className="flex items-start gap-2 text-sm text-foreground/70">
                        <Award className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {a}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
