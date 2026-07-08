import { Hero } from "@/components/sections/Hero";
import { WhySKCCareer } from "@/components/sections/WhySKCCareer";
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
      <WhySKCCareer />
      <CoursesBento />
      <AdmissionProcess />
      <StudentJourneyTimeline />
      <ResultsPreview />
      <TestimonialsWall />
      <CTASection />
    </>
  );
}
