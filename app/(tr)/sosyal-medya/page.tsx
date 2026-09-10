import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { socialTR } from "@/lib/services/social";

export const metadata: Metadata = serviceMetadata(socialTR);

export default function Page() {
  return <ServicePage c={socialTR} />;
}
