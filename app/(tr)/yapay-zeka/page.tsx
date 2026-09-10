import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { aiTR } from "@/lib/services/ai";

export const metadata: Metadata = serviceMetadata(aiTR);

export default function Page() {
  return <ServicePage c={aiTR} />;
}
