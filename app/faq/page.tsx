import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { FAQClient } from "./faq-client";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about admissions, courses, and fees at ${site.name}.`,
};

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">FAQ</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Frequently asked questions
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <FAQClient />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
