import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { saasEN } from "@/lib/services/saas";

export const metadata: Metadata = serviceMetadata(saasEN);

export default function Page() {
  return <ServicePage c={saasEN} />;
}
