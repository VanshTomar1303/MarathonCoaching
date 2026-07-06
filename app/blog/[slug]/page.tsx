import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { blogPosts } from "@/constants/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="relative pt-40 pb-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-navy mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">{post.category}</p>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-balance mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-foreground/45 mb-10">
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingTime}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
          </div>
          <div className="prose prose-neutral max-w-none space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-foreground/75 leading-relaxed">{para}</p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </article>
  );
}
