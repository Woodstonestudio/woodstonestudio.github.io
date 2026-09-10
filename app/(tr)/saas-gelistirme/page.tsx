import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { saasTR } from "@/lib/services/saas";

export const metadata: Metadata = serviceMetadata(saasTR);

export default function Page() {
  return <ServicePage c={saasTR} />;
}
