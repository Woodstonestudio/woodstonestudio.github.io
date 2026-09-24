import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { seoEN } from "@/lib/services/seo";

export const metadata: Metadata = serviceMetadata(seoEN);

export default function Page() {
  return <ServicePage c={seoEN} />;
}
