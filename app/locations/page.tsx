import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { branches } from "@/constants/locations";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Our Centres",
  description: `Find ${site.name} centres, timings, and directions.`,
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Our Centres</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Visit us in person
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          {branches.map((b, i) => (
            <RevealOnScroll key={b.name} delay={i * 0.08}>
              <Card className="overflow-hidden grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <iframe
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&output=embed`}
                    title={`Map to ${b.name}`}
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-heading font-semibold text-xl mb-4">{b.name}</h2>
                  <div className="space-y-3 text-sm text-foreground/65">
                    <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {b.address}</p>
                    <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-gold shrink-0" /> {b.phone}</p>
                    <p className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-gold shrink-0" /> {b.timings}</p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
