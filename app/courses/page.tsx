import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { courses } from "@/constants/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "IIT JEE Foundation Course (Class 9 & 10), the One Year Course and the Two Year Course for JEE Main and JEE Advanced — online IIT-JEE coaching from SKC Career, Orissa.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Programs</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              A course for every stage of the journey
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              From Class IX foundation to the final JEE Advanced sprint — every program is
              available online, offline, or hybrid, with the same faculty and test schedule.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <RevealOnScroll key={course.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/courses/${course.slug}`}
                className="group block h-full rounded-3xl border border-border-subtle bg-surface overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(11,31,77,0.25)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {course.modes.map((m) => (
                      <span key={m} className="text-[10px] font-semibold uppercase tracking-wider bg-navy/85 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-gold uppercase tracking-wider mb-2">{course.grades}</p>
                  <h3 className="font-heading font-semibold text-lg mb-1.5">{course.name}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">{course.tagline}</p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
