import type { JobOpening } from "@/types";

/**
 * No live job postings were available from the source site. These are sample
 * roles clearly labeled as such in the UI — replace with real openings before
 * launch.
 */
export const jobOpenings: JobOpening[] = [
  {
    slug: "sample-physics-faculty",
    title: "Physics Faculty (Sample Role)",
    department: "Academics",
    type: "Full-time",
    location: "Salt Lake, Orissa",
    description:
      "Sample listing — replace with a real opening. Would involve teaching JEE/NEET-level Physics across Foundation, Main and Advanced batches.",
  },
  {
    slug: "sample-front-desk-counsellor",
    title: "Admissions Counsellor (Sample Role)",
    department: "Administration",
    type: "Full-time",
    location: "Salt Lake, Orissa",
    description:
      "Sample listing — replace with a real opening. Would involve guiding prospective students and parents through course selection and enrolment.",
  },
];
