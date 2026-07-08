"use client";

import Link from "next/link";
import { ClipboardList, MessageSquare, ListChecks, Rocket } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    title: "Register",
    desc: "Send a quick enquiry or call us with your class and the exam you're targeting.",
  },
  {
    icon: MessageSquare,
    title: "Counselling",
    desc: "Sit down with a mentor to map your goals, current level and the road ahead.",
  },
  {
    icon: ListChecks,
    title: "Choose Your Course",
    desc: "We recommend the right program and batch for your target exam and timeline.",
  },
  {
    icon: Rocket,
    title: "Start Learning",
    desc: "Get your study material and portal access, and begin classes with your batch.",
  },
];

export function AdmissionProcess() {
  return (
    <section className="relative py-28 bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Getting Started</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance">
            How to join — in four simple steps
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl border border-border-subtle bg-surface p-6">
                <span className="font-display font-semibold text-5xl text-gold/30 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-heading font-medium text-base mb-1.5">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.1} className="mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link href="/booking">Register Now</Link>
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
