import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Clock, Users, Laptop, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { courses, getCourseBySlug } from "@/constants/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.name,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">{course.grades}</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance mb-5">
              {course.name}
            </h1>
            <p className="text-lg text-foreground/65 leading-relaxed mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <span className="flex items-center gap-2 text-foreground/70"><Clock className="h-4 w-4 text-gold" /> {course.duration}</span>
              <span className="flex items-center gap-2 text-foreground/70"><Users className="h-4 w-4 text-gold" /> {course.batchSize}</span>
              <span className="flex items-center gap-2 text-foreground/70"><Laptop className="h-4 w-4 text-gold" /> {course.modes.join(" / ")}</span>
            </div>
            <Button variant="gold" size="lg" asChild>
              <Link href="/booking">Enroll Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src={course.image} alt={course.name} fill className="object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-20 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="max-w-2xl mb-14">
            <h2 className="font-display font-semibold text-3xl tracking-tight text-balance">Course highlights</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {course.highlights.map((h, i) => (
              <RevealOnScroll key={h} delay={i * 0.06}>
                <Card className="p-5 h-full flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/70 leading-relaxed">{h}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <RevealOnScroll className="lg:col-span-2">
            <h2 className="font-display font-semibold text-3xl tracking-tight text-balance mb-8">Curriculum</h2>
            <div className="space-y-5">
              {course.curriculum.map((c) => (
                <Card key={c.title} className="p-6">
                  <h3 className="font-heading font-medium text-lg mb-3">{c.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <span key={t} className="text-xs font-medium rounded-full bg-navy/5 text-navy px-3 py-1.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-6">
            <Card className="p-6">
              <h3 className="font-heading font-medium text-base mb-3">Study Material</h3>
              <ul className="space-y-2">
                {course.studyMaterial.map((m) => (
                  <li key={m} className="text-sm text-foreground/65 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {m}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-medium text-base mb-2">Mock Tests</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{course.mockTests}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-medium text-base mb-2">Parent Dashboard</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{course.parentDashboard}</p>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-20 bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-3xl tracking-tight text-balance mb-8">Frequently asked questions</h2>
            <Accordion type="single" collapsible>
              {course.faqs.map((f, i) => (
                <AccordionItem key={f.question} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-24 text-center">
        <RevealOnScroll className="mx-auto max-w-2xl px-4">
          <h2 className="font-display font-semibold text-3xl tracking-tight text-balance mb-5">
            Ready to begin {course.shortName}?
          </h2>
          <Button variant="gold" size="lg" asChild>
            <Link href="/booking">Enroll Now <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
