import type { Testimonial } from "@/types";

/**
 * Fresh, original short-form quotes written for the new site, each attributed to a
 * real Marathon Academy alumnus/institute pair from constants/alumni.ts. These are
 * not reproductions of the long first-person testimonials on the legacy site.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Navneet Agarwal",
    institute: "IIT Bombay, Computer Science",
    quote:
      "The classes never moved on until every doubt in the room was cleared — that habit alone changed how I studied.",
    role: "alumnus",
  },
  {
    name: "Sayak Chakrabarti",
    institute: "IIT Kanpur",
    quote:
      "Structured problem sets and timed practice turned Maths from my weakest subject into a full 122/122 in JEE Advanced.",
    role: "alumnus",
  },
  {
    name: "Sanjay Ghosh",
    institute: "BITS Pilani, Computer Science",
    quote:
      "I went from a 10,000 WBJEE rank on my first attempt to a BITS Pilani seat — the difference was learning to think through a problem, not just memorize it.",
    role: "alumnus",
  },
  {
    name: "Binita Banerjee",
    institute: "RG Kar Medical College",
    quote:
      "After a drop year and a subject I'd stopped touching, the mentorship here gave me back the confidence to sit for the exam again — and this time it worked.",
    role: "alumnus",
  },
  {
    name: "Rupayan Sarkar",
    institute: "IIT Kharagpur",
    quote:
      "When my JEE Main results shook me, the faculty here were the ones who kept me steady for JEE Advanced. I wouldn't be at IIT Kharagpur without that push.",
    role: "alumnus",
  },
  {
    name: "Dibyajyoti Dey",
    institute: "IIT (BHU) Varanasi",
    quote:
      "I started the second half of Class 12 with an unfinished syllabus and no plan. The problem sets here showed me exactly where my gaps were and how to close them.",
    role: "alumnus",
  },
  {
    name: "Sandeep Prasad Shaw",
    institute: "IIST, Aerospace Engineering",
    quote:
      "Doubt sessions weren't limited to class hours — that round-the-clock access made all the difference during the final stretch before the exam.",
    role: "alumnus",
  },
  {
    name: "Spandan Poddar",
    institute: "Chennai Mathematical Institute",
    quote:
      "The weekly practice papers pushed me past just 'knowing' the concepts into actually being fast and accurate under pressure — that's what got me into CMI and ISI both.",
    role: "alumnus",
  },
];

export const parentTestimonials: Testimonial[] = [
  {
    name: "Parent of a JEE Advanced selection, 2021",
    institute: "Salt Lake, Kolkata",
    quote:
      "Regular progress updates meant we always knew exactly where our son stood — no surprises, just steady, visible improvement all year.",
    role: "parent",
  },
  {
    name: "Parent of a WBJEE selection, 2020",
    institute: "Salt Lake, Kolkata",
    quote:
      "Small batch sizes meant our daughter was never just a name on a register. The faculty knew her strengths and weaknesses by name.",
    role: "parent",
  },
];
