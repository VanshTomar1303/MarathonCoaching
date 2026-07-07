export const site = {
  name: "Marathon Academy",
  tagline: "Hear the Success Mantra",
  descriptor: "IIT-JEE Coaching Institute in Kolkata",
  mission:
    "We at Marathon Academy are committed to provide quality education in a high competitive, congenial and healthy environment along with the best infrastructure.",
  phone: "+91 89616 55910",
  phoneHref: "tel:+918961655910",
  whatsappHref: "https://wa.me/918961655910",
  email: "info@marathonacademy.co.in",
  address: "AD-89, First Floor, (Marathon Academy) Sector 1, Salt Lake, Kolkata - 700064",
  social: {
    facebook: "https://www.facebook.com/p/Marathon-Academy-IIT-JEE-Course-100083274168045/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/channel/UC7S2rsZTgaMf8tD_YYBlMkg/videos",
  },
  androidApp: "https://play.google.com/store/apps/details?id=co.martin.glasa",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Foundation (Class IX-X)", href: "/courses/foundation" },
      { label: "One Year Course (JEE Main & Advanced)", href: "/courses/one-year" },
      { label: "Two Year Course (JEE Main & Advanced)", href: "/courses/two-year" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Alumni", href: "/alumni" },
  { label: "Faculty", href: "/faculty" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Past Year Questions", href: "/resources" },
      { label: "Online Test Series", href: "/resources" },
      { label: "Board Exams", href: "/resources" },
      { label: "Mock Practice Papers", href: "/resources" },
      { label: "Download IIT-JEE Formulae", href: "/resources" },
      { label: "Success Party Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/videos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  programs: [
    { label: "IIT JEE Foundation Course", href: "/courses/foundation" },
    { label: "One Year Course (JEE Main & Advanced)", href: "/courses/one-year" },
    { label: "Two Year Course (JEE Main & Advanced)", href: "/courses/two-year" },
    { label: "Online Test Series", href: "/resources" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Careers", href: "/careers" },
    { label: "Partnership Programme", href: "/partnership" },
  ],
  resources: [
    { label: "Results", href: "/results" },
    { label: "Blog", href: "/blog" },
    { label: "Download Centre", href: "/resources" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Refund Policy", href: "/legal/refund" },
  ],
};

// Numbers that can be verified from the live site's own published data
// (rank list, course details) — no invented figures.
export const stats = [
  { label: "Documented Top Ranks", value: 27, suffix: "+" },
  { label: "Best All-India Rank (JEE Advanced)", value: 69, suffix: "" },
  { label: "Practice Questions", value: 10000, suffix: "+" },
  { label: "Students per Batch (max)", value: 25, suffix: "" },
];
