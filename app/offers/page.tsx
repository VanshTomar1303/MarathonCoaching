import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Percent, Users, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Admission Offers",
  description: `Current admission offers and scholarships at ${site.name}.`,
};

const offerDeadline = new Date();
offerDeadline.setDate(offerDeadline.getDate() + 14);

const offers = [
  { icon: Percent, title: "Early Enrolment Discount", desc: "Save on your course fee when you enroll before the batch commencement date." },
  { icon: Users, title: "Sibling & Referral Discount", desc: "Additional fee waiver when a sibling or a referred friend enrolls alongside you." },
  { icon: Sparkles, title: "Scholarship Test Waivers", desc: "Qualify through the Scholarship Test for up to 50% off your course fee." },
];

export default function OffersPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Limited-Time Offer</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance mb-8">
              Seats for this batch close soon
            </h1>
            <CountdownTimer target={offerDeadline.toISOString()} />
            <div className="mt-9">
              <Button variant="gold" size="lg" asChild>
                <Link href="/booking">Claim Your Seat <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <RevealOnScroll key={o.title} delay={i * 0.08}>
              <Card className="p-7 h-full">
                <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                  <o.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">{o.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{o.desc}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
