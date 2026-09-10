import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { webDesignTR } from "@/lib/services/web-design";

export const metadata: Metadata = serviceMetadata(webDesignTR);

export default function Page() {
  return <ServicePage c={webDesignTR} />;
}
