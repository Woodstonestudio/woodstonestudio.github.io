import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { webDesignSQ } from "@/lib/services/web-design";

export const metadata: Metadata = serviceMetadata(webDesignSQ);

export default function Page() {
  return <ServicePage c={webDesignSQ} />;
}
