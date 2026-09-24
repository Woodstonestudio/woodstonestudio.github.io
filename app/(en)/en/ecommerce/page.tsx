import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { ecommerceEN } from "@/lib/services/ecommerce";

export const metadata: Metadata = serviceMetadata(ecommerceEN);

export default function Page() {
  return <ServicePage c={ecommerceEN} />;
}
