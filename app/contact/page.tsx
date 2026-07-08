import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapEmbed } from "@/components/locations/MapEmbed";
import { Card } from "@/components/ui/card";
import { site } from "@/constants/site";
import { branches } from "@/constants/locations";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} — call, WhatsApp, or visit our Salt Lake, Orissa centre.`,
};

export default function ContactPage() {
  const mainBranch = branches[0];

  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Contact Us</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              We&apos;d love to hear from you
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <RevealOnScroll className="lg:col-span-3">
            <ContactForm />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:col-span-2 space-y-5">
            <Card className="p-6 space-y-4">
              <a href={site.phoneHref} className="flex items-center gap-3 text-sm hover:text-foreground">
                <Phone className="h-5 w-5 text-gold shrink-0" /> {site.phone}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-foreground">
                <MessageCircle className="h-5 w-5 text-gold shrink-0" /> WhatsApp Us
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm hover:text-foreground">
                <Mail className="h-5 w-5 text-gold shrink-0" /> {site.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" /> {mainBranch.address}
              </div>
            </Card>
            <MapEmbed query={mainBranch.mapQuery} />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
