"use client";

import {
  Users, GraduationCap, Video, Radio, ClipboardCheck,
  BarChart3, Eye, HeartHandshake, Award, BookOpen, Laptop, TrendingUp,
} from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Card } from "@/components/ui/card";

const features = [
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Mentors with a proven track record of IIT/NEET selections since 2011." },
  { icon: Users, title: "Small Batch Size", desc: "Capped at 20-25 students so every learner gets individual attention." },
  { icon: Eye, title: "Personal Attention", desc: "Faculty who know each student's strengths, weaknesses, and pace." },
  { icon: Video, title: "Recorded Lectures", desc: "Revisit any class, any time, at your own pace." },
  { icon: Radio, title: "Live Interactive Classes", desc: "Real-time doubt clearing, not one-way lecturing." },
  { icon: ClipboardCheck, title: "Regular Mock Tests", desc: "The MAST test series, with live all-batch ranking." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Subject-wise, chapter-wise breakdowns after every test." },
  { icon: HeartHandshake, title: "Parent Monitoring", desc: "Regular reports and open counselling sessions for parents." },
  { icon: Award, title: "Scholarships", desc: "Merit-based fee waivers through our annual Scholarship Test." },
  { icon: BookOpen, title: "Study Material", desc: "Structured, chapter-wise material built by our own faculty." },
  { icon: Laptop, title: "Digital Learning", desc: "A full online platform for classes, tests, and resources." },
  { icon: TrendingUp, title: "Progress Tracking", desc: "See exactly how a student is trending, chapter over chapter." },
];

export function WhyMarathon() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Why Marathon Academy</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
            Everything you need to prepare with confidence
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={(i % 3) * 0.08}>
              <Card className="p-6 h-full hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(11,31,77,0.25)] transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="font-heading font-medium text-base mb-1.5">{f.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
