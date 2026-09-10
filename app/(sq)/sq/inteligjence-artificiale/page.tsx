import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { aiSQ } from "@/lib/services/ai";

export const metadata: Metadata = serviceMetadata(aiSQ);

export default function Page() {
  return <ServicePage c={aiSQ} />;
}
