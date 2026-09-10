import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { mobileTR } from "@/lib/services/mobile";

export const metadata: Metadata = serviceMetadata(mobileTR);

export default function Page() {
  return <ServicePage c={mobileTR} />;
}
