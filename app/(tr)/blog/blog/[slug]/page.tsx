import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage, blogPostMetadata } from "@/components/blog";
import { posts, findPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.filter((p) => p.locales.includes("tr")).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return blogPostMetadata(post, "tr");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post || !post.locales.includes("tr")) notFound();
  return <BlogPostPage post={post} locale="tr" />;
}
