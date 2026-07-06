export const site = {
  name: "Marathon Academy",
  tagline: "Run Beyond Limits. Achieve Excellence.",
  founded: 2011,
  mission:
    "To empower students with exceptional academic guidance, innovative teaching methods, and personalized mentorship that enables them to crack India's toughest engineering and medical entrance examinations.",
  phone: "+91 89616 55910",
  phoneHref: "tel:+918961655910",
  whatsappHref: "https://wa.me/918961655910",
  email: "info@marathonacademy.co.in",
  address: "AD-89, First Floor, Sector 1, Salt Lake, Kolkata - 700064",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Foundation (IX-X)", href: "/courses/foundation" },
      { label: "JEE Main", href: "/courses/jee-main" },
      { label: "JEE Advanced", href: "/courses/jee-advanced" },
      { label: "WBJEE", href: "/courses/wbjee" },
      { label: "NEET", href: "/courses/neet" },
      { label: "Crash Course", href: "/courses/crash-course" },
      { label: "Revision Program", href: "/courses/revision" },
      { label: "Test Series", href: "/courses/test-series" },
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
      { label: "Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/videos" },
      { label: "Blog", href: "/blog" },
      { label: "Download Centre", href: "/resources" },
      { label: "Scholarship Test", href: "/scholarship" },
      { label: "Offers", href: "/offers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  programs: [
    { label: "Foundation Course", href: "/courses/foundation" },
    { label: "JEE Main & Advanced", href: "/courses/jee-advanced" },
    { label: "NEET", href: "/courses/neet" },
    { label: "WBJEE", href: "/courses/wbjee" },
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

export const stats = [
  { label: "Students Enrolled", value: 3200, suffix: "+" },
  { label: "Years of Excellence", value: new Date().getFullYear() - 2011, suffix: "+" },
  { label: "Selection Stories", value: 850, suffix: "+" },
  { label: "Mock Tests Conducted", value: 12000, suffix: "+" },
  { label: "Expert Faculty", value: 18, suffix: "+" },
];
