import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { ecommerceTR } from "@/lib/services/ecommerce";

export const metadata: Metadata = serviceMetadata(ecommerceTR);

export default function Page() {
  return <ServicePage c={ecommerceTR} />;
}
