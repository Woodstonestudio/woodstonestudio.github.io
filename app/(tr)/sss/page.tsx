import type { Metadata } from "next";
import { FaqPage, faqMetadata } from "@/components/faq-page";

export const metadata: Metadata = faqMetadata("tr");

export default function Page() {
  return <FaqPage locale="tr" />;
}
