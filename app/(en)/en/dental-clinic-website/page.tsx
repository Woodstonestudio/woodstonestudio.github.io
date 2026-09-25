import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { dentalEN } from "@/lib/services/dental";

export const metadata: Metadata = serviceMetadata(dentalEN);

export default function Page() {
  return <ServicePage c={dentalEN} />;
}
