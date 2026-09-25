import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { dentalTR } from "@/lib/services/dental";

export const metadata: Metadata = serviceMetadata(dentalTR);

export default function Page() {
  return <ServicePage c={dentalTR} />;
}
