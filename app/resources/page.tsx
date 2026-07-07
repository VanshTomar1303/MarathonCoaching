import type { Metadata } from "next";
import { FileText, Download, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resources } from "@/constants/resources";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Download Centre",
  description: `Previous year papers, formula sheets, and practice questions from ${site.name}.`,
};

const categories = Array.from(new Set(resources.map((r) => r.category)));

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Download Centre</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Resources to strengthen your prep
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <RevealOnScroll>
                <h2 className="font-display font-semibold text-2xl tracking-tight mb-6">{category}</h2>
              </RevealOnScroll>
              <div className="grid sm:grid-cols-2 gap-4">
                {resources
                  .filter((r) => r.category === category)
                  .map((r, i) => (
                    <RevealOnScroll key={r.title} delay={(i % 2) * 0.06}>
                      <Card className="p-5 flex items-center gap-4">
                        <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                          <FileText className="h-5 w-5 text-foreground" />
                        </div>
                        <p className="text-sm font-medium flex-1">{r.title}</p>
                        {r.fileHref ? (
                          <Button variant="outline" size="sm" asChild>
                            <a href={r.fileHref} download>
                              <Download className="h-4 w-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="h-4 w-4" /> Request
                            </a>
                          </Button>
                        )}
                      </Card>
                    </RevealOnScroll>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
