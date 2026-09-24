import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { seoTR } from "@/lib/services/seo";

export const metadata: Metadata = serviceMetadata(seoTR);

export default function Page() {
  return <ServicePage c={seoTR} />;
}
