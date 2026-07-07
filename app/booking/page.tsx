import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { BookingForm } from "@/components/forms/BookingForm";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Book a Counselling Session",
  description: `Book a free counselling session with ${site.name} to discuss the right course for you.`,
};

export default function BookingPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Book a Session</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Talk to a counsellor before you enroll
            </h1>
            <p className="mt-6 text-lg text-foreground/65 leading-relaxed max-w-xl mx-auto">
              Pick a mode, course, date, and time that works for you — we&apos;ll confirm your
              session by phone.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <BookingForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
