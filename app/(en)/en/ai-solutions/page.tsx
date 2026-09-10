import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { aiEN } from "@/lib/services/ai";

export const metadata: Metadata = serviceMetadata(aiEN);

export default function Page() {
  return <ServicePage c={aiEN} />;
}
