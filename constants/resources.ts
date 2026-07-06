import type { ResourceItem } from "@/types";

/**
 * No real downloadable PDFs (PYQs, formula sheets, etc.) were available from
 * the scrape. Each entry without fileHref renders a "Request via WhatsApp"
 * CTA in the UI instead of a broken download link. Drop real files into
 * public/resources/ and set fileHref once available.
 */
export const resources: ResourceItem[] = [
  { title: "JEE Main Previous Year Papers (2015-2024)", category: "Previous Year Papers" },
  { title: "JEE Advanced Previous Year Papers (2015-2024)", category: "Previous Year Papers" },
  { title: "WBJEE Previous Year Papers (2015-2024)", category: "Previous Year Papers" },
  { title: "NEET Previous Year Papers (2015-2024)", category: "Previous Year Papers" },
  { title: "Physics Formula Handbook", category: "Formula Sheets" },
  { title: "Chemistry Formula & Reaction Handbook", category: "Formula Sheets" },
  { title: "Mathematics Formula Handbook", category: "Formula Sheets" },
  { title: "Chapter-wise Practice Questions — Physics", category: "Practice Questions" },
  { title: "Chapter-wise Practice Questions — Chemistry", category: "Practice Questions" },
  { title: "Chapter-wise Practice Questions — Mathematics", category: "Practice Questions" },
  { title: "Board Exam Sample Papers (WB / CBSE / ICSE)", category: "Board Exams" },
];
