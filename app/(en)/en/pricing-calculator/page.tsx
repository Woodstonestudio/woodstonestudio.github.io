import type { Metadata } from "next";
import { PricingPage, pricingMetadata } from "@/components/pricing-page";

export const metadata: Metadata = pricingMetadata("en");

export default function Page() {
  return <PricingPage locale="en" />;
}
