import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { videos } from "@/constants/videos";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Video Gallery",
  description: `Campus tours, teaching demos, and interviews from ${site.name}.`,
};

export default function VideosPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Video Gallery</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              See Marathon Academy in motion
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <RevealOnScroll key={v.title} delay={(i % 3) * 0.08}>
              <Card className="overflow-hidden">
                {v.youtubeId ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      className="h-full w-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center gap-2 bg-surface-muted text-foreground/40">
                    <PlayCircle className="h-8 w-8" />
                    <p className="text-xs font-medium">Video coming soon</p>
                  </div>
                )}
                <div className="p-5">
                  <p className="text-xs font-medium text-gold uppercase tracking-wider mb-1.5">{v.category}</p>
                  <h3 className="font-heading font-medium text-sm">{v.title}</h3>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
