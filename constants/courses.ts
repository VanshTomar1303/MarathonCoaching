import type { Course } from "@/types";

/**
 * The three courses Marathon Academy actually offers, per marathonacademy.co.in.
 * Copy is drawn from the live course pages (Foundation, One-Year, Two-Year).
 */
export const courses: Course[] = [
  {
    slug: "foundation",
    name: "IIT JEE Foundation Course (Class 9 & 10)",
    shortName: "Foundation Course",
    tagline: "Build a strong foundation for the JEE — Class 9 & 10",
    grades: "Class IX - X",
    exam: "Foundation",
    modes: ["online", "hybrid"],
    duration: "12 months access",
    batchSize: "20-25 students",
    description:
      "An online course from Marathon Academy that prepares Class 9 and Class 10 students for the Joint Entrance Examination (JEE). It covers all the important topics of the IIT-JEE syllabus and provides ample practice through mock tests and question banks, with video lectures from experienced faculty to help students understand complex concepts — building a strong foundation well before Class 11 begins.",
    highlights: [
      "12 months of access to online video lectures",
      "5,000+ practice questions",
      "10 full-length mock tests",
      "Unlimited doubt-clearing sessions",
    ],
    curriculum: [
      { title: "Physics Fundamentals", topics: ["Measurement & Motion", "Force & Laws of Motion", "Work & Energy", "Sound & Light"] },
      { title: "Chemistry Fundamentals", topics: ["Matter & its Nature", "Atomic Structure", "Chemical Reactions", "Periodic Classification"] },
      { title: "Mathematics Fundamentals", topics: ["Number Systems", "Algebra", "Coordinate Geometry", "Mensuration"] },
    ],
    studyMaterial: ["Online video lectures", "Chapter-wise question banks", "Hard copy study material", "Access on the Marathon Academy mobile app"],
    mockTests: "10 full-length mock tests with practice question banks to test your knowledge.",
    parentDashboard: "Parents can closely monitor their child's progress and performance through Marathon Academy's online portal.",
    faqs: [
      { question: "What is the IIT JEE Foundation Course?", answer: "An online course by Marathon Academy that prepares students for the Joint Entrance Examination (JEE). It covers all the important topics of the IIT-JEE syllabus and offers practice through mock tests, question banks and video lectures from experienced faculty." },
      { question: "Who should take the IIT JEE Foundation Course?", answer: "Students in Class 9 and Class 10 who want to build a solid foundation early for the IIT-JEE entrance exam and a future career in engineering." },
      { question: "How is it different from other courses?", answer: "It is created by Marathon Academy — which has a proven track record of preparing students for the IIT-JEE — is available online so you can study at your own pace from anywhere, and includes mock tests and practice questions to test your knowledge." },
    ],
    image: "/courses/JEE-Foundation-Course.jpg",
  },
  {
    slug: "one-year",
    name: "One Year Course for JEE Main and JEE Advanced",
    shortName: "One Year Course",
    tagline: "A focused one-year programme for JEE Main & Advanced",
    grades: "Class XII / Droppers",
    exam: "JEE",
    modes: ["online", "hybrid"],
    duration: "1 year",
    batchSize: "20-25 students",
    description:
      "Marathon Academy's one-year course for JEE Main and JEE Advanced, open to students who have completed or will complete Class 12. The module covers every topic taught in Physics, Chemistry and Mathematics across the 11th and 12th grades, helping students do well in their 12th Board exams and engineering entrance exams alike.",
    highlights: [
      "Detailed video lessons covering all topics on the syllabus",
      "Practice questions and mock tests to assess your progress",
      "Performance tracking to help you identify areas of improvement",
      "Dedicated personal mentors to guide and support you throughout your journey",
    ],
    curriculum: [
      { title: "Physics", topics: ["Mechanics", "Electricity & Magnetism", "Waves & Optics", "Modern Physics"] },
      { title: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { title: "Mathematics", topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry"] },
      { title: "Exams You'll Be Prepared For", topics: ["JEE Main and JEE Advanced", "BITSAT", "WBJEE", "KVPY", "ISI, CMI", "State-level engineering entrances", "12th Board Exams"] },
    ],
    studyMaterial: ["Detailed video lessons", "Practice question sets", "Hard copy study material", "Online test series with performance tracking"],
    mockTests: "Online JEE Main and JEE Advanced pattern mock tests to help you assess your progress.",
    parentDashboard: "Progress and performance can be tracked through Marathon Academy's online portal, with dedicated personal mentors supporting each student.",
    faqs: [
      { question: "Who is eligible for the one-year course?", answer: "Students who have completed or will complete Class 12 are eligible for the JEE one-year programme." },
      { question: "Which exams does this course prepare me for?", answer: "JEE Main and JEE Advanced, BITSAT, WBJEE, KVPY, ISI, CMI, all state-level engineering entrance exams, and the 12th Board exams." },
    ],
    image: "/courses/JEE-Foundation-Course2.jpg",
  },
  {
    slug: "two-year",
    name: "Two Year Course for JEE Main & Advanced",
    shortName: "Two Year Course",
    tagline: "The complete two-year path to JEE Main & Advanced",
    grades: "Class XI - XII",
    exam: "JEE",
    modes: ["online", "hybrid"],
    duration: "2 years",
    batchSize: "20-25 students",
    description:
      "Marathon Academy's two-year course for JEE Main and JEE Advanced, designed for students entering Class XI. Over two years it covers XII Boards, JEE (Main & Advanced), other engineering entrance exams, and various national and international Olympiads together — preparing students in a pattern-proof method for the fully computer-based JEE.",
    highlights: [
      "Video recordings of every class, available anytime in the Marathon Academy mobile app",
      "Online test series with test analysis, weak-area improvement and time management",
      "National benchmarking against students from across India and NRI students",
      "Pattern-proof preparation for the computer-based JEE Main & Advanced",
    ],
    curriculum: [
      { title: "Physics", topics: ["Mechanics", "Electricity & Magnetism", "Thermodynamics", "Modern Physics"] },
      { title: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { title: "Mathematics", topics: ["Algebra", "Calculus", "Coordinate Geometry", "Vectors & 3D Geometry"] },
      { title: "Covered Together", topics: ["XII Board Exams", "JEE Main & Advanced", "Other engineering entrance exams", "National & international Olympiads"] },
    ],
    studyMaterial: ["Class video recordings on the Marathon Academy mobile app", "Hard copy study material", "Online question banks and test series"],
    mockTests: "National-level online test series conducted on a common platform with students from across India and abroad, for a true measure of competition and performance.",
    parentDashboard: "Parents can closely monitor their child's progress and performance through Marathon Academy's online portal.",
    faqs: [
      { question: "Who is the two-year course for?", answer: "Students currently in Class X who will enter Class XI — the course prepares them across two years for the 12th Boards, JEE Main & Advanced, other entrance exams and Olympiads together." },
      { question: "Is JEE Advanced now an online exam?", answer: "Yes. Since 2018 the Joint Entrance Examination (Advanced) is conducted online as a computer-based test, and the course prepares you in a pattern-proof method so you're ready even if the format changes." },
    ],
    image: "/courses/JEE-Foundation-Course3.jpg",
  },
  {
    slug: "neet",
    name: "NEET Coaching (Medical Entrance)",
    shortName: "NEET",
    tagline: "For students aiming at a seat in medicine",
    grades: "Class XI - XII / Droppers",
    exam: "NEET",
    modes: ["online", "hybrid"],
    duration: "1-2 years",
    batchSize: "20-25 students",
    description:
      "A dedicated NEET track covering Physics, Chemistry and Biology in the depth the medical entrance exam demands — NCERT-anchored concept building layered with NEET-pattern practice, regular mock tests and one-on-one mentorship right through to exam day.",
    highlights: [
      "Complete Physics, Chemistry and Biology coverage",
      "NCERT-anchored teaching with NEET-pattern question practice",
      "Regular full-syllabus mock tests with detailed analysis",
      "Doubt-clearing sessions and one-on-one mentorship",
    ],
    curriculum: [
      { title: "Biology", topics: ["Diversity in the Living World", "Human Physiology", "Genetics & Evolution", "Ecology"] },
      { title: "Physics", topics: ["Mechanics", "Electrodynamics", "Optics & Modern Physics"] },
      { title: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
    ],
    studyMaterial: ["NCERT-aligned notes", "Chapter-wise question banks", "NEET previous-year papers with solutions"],
    mockTests: "Full-syllabus NEET-pattern mock tests with subject-wise performance reports.",
    parentDashboard: "Progress and performance tracked through the online portal, with regular updates shared with parents.",
    faqs: [
      { question: "Who is the NEET course for?", answer: "Class 11 and 12 students and droppers preparing for the medical entrance exam (NEET)." },
      { question: "Is Biology taught by dedicated faculty?", answer: "Yes — Biology is taught alongside Physics and Chemistry by subject specialists." },
    ],
    image: "/courses/JEE-Foundation-Course.jpg",
  },
  {
    slug: "government-exams",
    name: "Government Job Exams — SSC, Banking & Railway",
    shortName: "Govt. Exams",
    tagline: "Structured coaching for secure government careers",
    grades: "Graduates & Class XII pass",
    exam: "Government",
    modes: ["online", "hybrid"],
    duration: "Flexible",
    batchSize: "Small batches",
    description:
      "Focused preparation for major government recruitment exams — SSC, Banking (IBPS/SBI) and Railways — spanning quantitative aptitude, reasoning, English and general awareness, with regular sectional and full-length practice and current-affairs updates.",
    highlights: [
      "Coverage of SSC, Banking (IBPS/SBI) and Railway exam patterns",
      "Quantitative aptitude, reasoning, English and general awareness",
      "Sectional tests plus full-length mock exams with analysis",
      "Current-affairs updates and speed-and-accuracy drills",
    ],
    curriculum: [
      { title: "Quantitative Aptitude", topics: ["Arithmetic", "Algebra", "Data Interpretation", "Number Series"] },
      { title: "Reasoning", topics: ["Verbal Reasoning", "Non-verbal Reasoning", "Puzzles", "Seating Arrangement"] },
      { title: "English", topics: ["Grammar", "Vocabulary", "Reading Comprehension", "Error Spotting"] },
      { title: "General Awareness", topics: ["Current Affairs", "General Science", "Static GK", "Banking & Economy Awareness"] },
    ],
    studyMaterial: ["Topic-wise practice sets", "Previous-year question papers", "Monthly current-affairs digests"],
    mockTests: "Sectional and full-length mock tests in the latest exam patterns, with detailed analysis.",
    parentDashboard: "Attendance and test performance tracked through the online portal.",
    faqs: [
      { question: "Which exams does this cover?", answer: "Major government recruitment exams including SSC (CGL/CHSL), Banking (IBPS/SBI PO & Clerk) and Railways (RRB)." },
      { question: "Who can join?", answer: "Graduates and Class 12 pass candidates preparing for government job exams, subject to each exam's own eligibility rules." },
    ],
    image: "/courses/JEE-Foundation-Course2.jpg",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
