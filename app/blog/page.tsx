import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { blogPosts } from "@/constants/blog";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `JEE, NEET and WBJEE preparation tips, study strategies and exam guidance from ${site.name}.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-navy" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Blog</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Study tips, exam strategy, and preparation guides
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-3xl border border-border-subtle bg-surface p-7 hover:shadow-[0_20px_50px_-15px_rgba(11,31,77,0.25)] transition-shadow duration-300"
              >
                <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">{post.category}</p>
                <h2 className="font-heading font-semibold text-xl mb-2.5 leading-snug flex gap-1.5">
                  {post.title}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-foreground/45">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingTime}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
