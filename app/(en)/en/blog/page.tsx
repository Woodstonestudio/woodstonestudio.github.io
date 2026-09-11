import type { Metadata } from "next";
import { BlogList, blogListMetadata } from "@/components/blog";

export const metadata: Metadata = blogListMetadata("en");

export default function Page() {
  return <BlogList locale="en" />;
}
