export type LearningMode = "online" | "offline" | "hybrid";

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  grades: string;
  exam: "JEE" | "NEET" | "WBJEE" | "Foundation" | "Government";
  modes: LearningMode[];
  duration: string;
  batchSize: string;
  description: string;
  highlights: string[];
  curriculum: { title: string; topics: string[] }[];
  studyMaterial: string[];
  mockTests: string;
  parentDashboard: string;
  faqs: CourseFAQ[];
  image: string;
}

export interface RankResult {
  name: string;
  air: number;
  image?: string;
  category: "JEE Advanced" | "WBJEE" | "NEET";
}

export interface AlumniPlacement {
  name: string;
  institute: string;
  branch?: string;
  note?: string;
  year?: number;
}

export interface Testimonial {
  name: string;
  institute: string;
  quote: string;
  role: "student" | "alumnus" | "parent";
}

export interface FacultyMember {
  slug: string;
  name: string;
  role: string;
  subject: string;
  qualification: string;
  experience: string;
  bio: string;
  achievements: string[];
  image: string;
}

export interface GalleryImage {
  src: string;
  category: "campus" | "success-party";
  alt: string;
}

export interface VideoItem {
  title: string;
  youtubeId: string;
  category: "Campus Tour" | "Teaching Demo" | "Faculty Interview" | "Student Interview" | "Seminar";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  content: string[];
}

export interface ResourceItem {
  title: string;
  category: "Previous Year Papers" | "Formula Sheets" | "Practice Questions" | "Board Exams";
  fileHref?: string;
}

export interface Branch {
  name: string;
  address: string;
  mapQuery: string;
  phone: string;
  timings: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}
