import type { Metadata } from "next";
import { GalleryClient } from "./gallery-client";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Campus, classrooms, and success celebrations at ${site.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Gallery</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Life at Marathon Academy
            </h1>
          </RevealOnScroll>
        </div>
      </section>
      <GalleryClient />
    </>
  );
}
