import type { Metadata } from "next";
import { PricingPage, pricingMetadata } from "@/components/pricing-page";

export const metadata: Metadata = pricingMetadata("tr");

export default function Page() {
  return <PricingPage locale="tr" />;
}
