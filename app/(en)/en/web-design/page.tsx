import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { webDesignEN } from "@/lib/services/web-design";

export const metadata: Metadata = serviceMetadata(webDesignEN);

export default function Page() {
  return <ServicePage c={webDesignEN} />;
}
