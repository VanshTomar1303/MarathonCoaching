"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-20 sm:px-16 text-center">
          <BlueprintGrid className="text-white" />
          <div className="relative">
            <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight text-balance max-w-2xl mx-auto">
              Start your IIT-JEE journey today
            </h2>
            <p className="mt-5 text-white/60 max-w-lg mx-auto">
              Join Marathon Academy and prepare with the structure, mentorship, and results that
              have defined our IIT-JEE coaching.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/booking">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="white" size="lg" asChild>
                <Link href="/contact">Talk to a Counsellor</Link>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
