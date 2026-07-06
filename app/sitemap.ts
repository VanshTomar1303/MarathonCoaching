import type { MetadataRoute } from "next";
import { courses } from "@/constants/courses";
import { blogPosts } from "@/constants/blog";

const BASE_URL = "https://marathonacademy.co.in";

const staticRoutes = [
  "",
  "/about",
  "/courses",
  "/results",
  "/testimonials",
  "/alumni",
  "/faculty",
  "/gallery",
  "/videos",
  "/blog",
  "/resources",
  "/booking",
  "/scholarship",
  "/offers",
  "/partnership",
  "/referral",
  "/locations",
  "/contact",
  "/faq",
  "/careers",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const courseEntries = courses.map((c) => ({
    url: `${BASE_URL}/courses/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogEntries = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
