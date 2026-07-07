import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { testimonials, parentTestimonials } from "@/constants/testimonials";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read what students, alumni, and parents have to say about ${site.name}.`,
};

function TestimonialGrid({ items }: { items: typeof testimonials }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((t, i) => (
        <RevealOnScroll key={t.name} delay={(i % 3) * 0.06}>
          <Card className="p-7 h-full flex flex-col">
            <Quote className="h-7 w-7 text-gold/50 mb-4" />
            <p className="text-foreground/75 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 pt-5 border-t border-border-subtle">
              <p className="font-heading font-medium text-sm">{t.name}</p>
              <p className="text-xs text-foreground/50 mt-0.5">{t.institute}</p>
            </div>
          </Card>
        </RevealOnScroll>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Hear the Success Mantra</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Loved by students and parents
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="flex justify-center mb-14">
            <Tabs defaultValue="students" className="w-full flex flex-col items-center">
              <TabsList>
                <TabsTrigger value="students">Students & Alumni</TabsTrigger>
                <TabsTrigger value="parents">Parents</TabsTrigger>
              </TabsList>
              <TabsContent value="students" className="w-full">
                <TestimonialGrid items={testimonials} />
              </TabsContent>
              <TabsContent value="parents" className="w-full">
                <TestimonialGrid items={parentTestimonials} />
              </TabsContent>
            </Tabs>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
