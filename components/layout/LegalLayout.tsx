import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { legalLastUpdated } from "@/constants/legal";

export function LegalLayout({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h1 className="font-display font-semibold text-4xl tracking-tight text-balance">{title}</h1>
            <p className="mt-4 text-sm text-foreground/50">Last updated: {legalLastUpdated}</p>
          </RevealOnScroll>
        </div>
      </section>
      <section className="relative pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((s, i) => (
            <RevealOnScroll key={s.heading} delay={i * 0.04}>
              <h2 className="font-heading font-semibold text-xl mb-3">{s.heading}</h2>
              <p className="text-foreground/65 leading-relaxed">{s.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
