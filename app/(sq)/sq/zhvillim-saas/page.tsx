import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { saasSQ } from "@/lib/services/saas";

export const metadata: Metadata = serviceMetadata(saasSQ);

export default function Page() {
  return <ServicePage c={saasSQ} />;
}
