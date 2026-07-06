import { Hero } from "@/components/sections/Hero";
import { WhyMarathon } from "@/components/sections/WhyMarathon";
import { CoursesBento } from "@/components/sections/CoursesBento";
import { StudentJourneyTimeline } from "@/components/sections/StudentJourneyTimeline";
import { ResultsPreview } from "@/components/sections/ResultsPreview";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMarathon />
      <CoursesBento />
      <StudentJourneyTimeline />
      <ResultsPreview />
      <TestimonialsWall />
      <CTASection />
    </>
  );
}
