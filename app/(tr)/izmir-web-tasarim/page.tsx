import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { izmirTR } from "@/lib/services/izmir";

export const metadata: Metadata = serviceMetadata(izmirTR);

export default function Page() {
  return <ServicePage c={izmirTR} />;
}
