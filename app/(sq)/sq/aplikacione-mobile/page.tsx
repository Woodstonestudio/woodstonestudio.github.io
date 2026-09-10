import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { mobileSQ } from "@/lib/services/mobile";

export const metadata: Metadata = serviceMetadata(mobileSQ);

export default function Page() {
  return <ServicePage c={mobileSQ} />;
}
