"use client";

import {
  UserPlus, Compass, BookOpen, PenTool, ClipboardCheck,
  FileText, BarChart3, HeartHandshake, RefreshCw, GraduationCap, Trophy,
} from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const steps = [
  { icon: UserPlus, title: "Admission", desc: "Enroll into the right batch for your goal and grade." },
  { icon: Compass, title: "Orientation", desc: "Meet your faculty and understand the roadmap ahead." },
  { icon: BookOpen, title: "Learning", desc: "Structured, concept-first classes across every subject." },
  { icon: PenTool, title: "Assignments", desc: "Chapter-wise practice to lock in every concept." },
  { icon: ClipboardCheck, title: "Weekly Tests", desc: "Short, frequent tests that build exam temperament." },
  { icon: FileText, title: "Mock Exams", desc: "Full-length, exam-pattern tests under timed conditions." },
  { icon: BarChart3, title: "Performance Reports", desc: "Detailed, subject-wise analytics after every test." },
  { icon: HeartHandshake, title: "Mentoring", desc: "One-on-one guidance whenever a student needs it." },
  { icon: RefreshCw, title: "Final Revision", desc: "A focused sprint through the entire syllabus once more." },
  { icon: GraduationCap, title: "JEE / NEET Exam", desc: "Walking in prepared, calm, and confident." },
  { icon: Trophy, title: "Success", desc: "A seat at the institute you set out to reach." },
];

export function StudentJourneyTimeline() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">The Student Journey</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
            From admission to acceptance letter
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-gold/40 to-foreground/20 md:-translate-x-1/2" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <RevealOnScroll
                key={step.title}
                delay={i * 0.04}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto md:flex-row-reverse md:text-right"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold shadow-[0_10px_30px_-10px_rgba(11,31,77,0.5)]">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
