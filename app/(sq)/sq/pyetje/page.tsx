import type { Metadata } from "next";
import { FaqPage, faqMetadata } from "@/components/faq-page";

export const metadata: Metadata = faqMetadata("sq");

export default function Page() {
  return <FaqPage locale="sq" />;
}
