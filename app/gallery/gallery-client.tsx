"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { galleryImages } from "@/constants/gallery";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Campus & Classrooms", value: "campus" },
  { label: "Success Celebrations", value: "success-party" },
] as const;

export function GalleryClient() {
  const [active, setActive] = useState<string>("all");

  if (galleryImages.length === 0) {
    return (
      <section className="relative pb-28">
        <ComingSoon
          title="Photos & gallery coming soon"
          subtitle="We're putting together photos from our campus and events — check back soon."
        />
      </section>
    );
  }

  const filtered =
    active === "all" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                active === f.value ? "bg-navy text-white" : "bg-surface-muted text-foreground/60 hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </RevealOnScroll>

        <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img) => (
            <motion.div
              layout
              key={img.src}
              className="relative break-inside-avoid rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
