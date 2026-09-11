import type { Metadata } from "next";
import { BlogList, blogListMetadata } from "@/components/blog";

export const metadata: Metadata = blogListMetadata("sq");

export default function Page() {
  return <BlogList locale="sq" />;
}
