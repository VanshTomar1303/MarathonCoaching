import { Hero } from "@/components/sections/Hero";
import { WhyMarathon } from "@/components/sections/WhyMarathon";
import { CoursesBento } from "@/components/sections/CoursesBento";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
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
      <AdmissionProcess />
      <StudentJourneyTimeline />
      <ResultsPreview />
      <TestimonialsWall />
      <CTASection />
    </>
  );
}
