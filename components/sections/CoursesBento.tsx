"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { courses } from "@/constants/courses";
import { Button } from "@/components/ui/button";

export function CoursesBento() {
  const featured = courses.slice(0, 5);

  return (
    <section className="relative py-28 bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-2xl mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 w-full">
          <div>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Programs</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
              A course for every stage of the journey
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </RevealOnScroll>

        <div className="grid md:grid-cols-6 gap-5">
          <RevealOnScroll className="md:col-span-4 md:row-span-2">
            <BentoCard course={featured[0]} large />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="md:col-span-2">
            <BentoCard course={featured[1]} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="md:col-span-2">
            <BentoCard course={featured[2]} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="md:col-span-3">
            <BentoCard course={featured[3]} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.25} className="md:col-span-3">
            <BentoCard course={featured[4]} />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ course, large = false }: { course: (typeof courses)[number]; large?: boolean }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={`group relative block h-full min-h-[220px] overflow-hidden rounded-3xl ${large ? "min-h-[460px]" : ""}`}
    >
      <Image
        src={course.image}
        alt={course.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/0" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <p className="text-xs font-medium text-gold uppercase tracking-wider mb-2">{course.grades}</p>
        <h3 className={`font-heading font-semibold text-white mb-1.5 ${large ? "text-2xl" : "text-lg"}`}>
          {course.shortName}
        </h3>
        <p className="text-sm text-white/70 max-w-md">{course.tagline}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-white">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
