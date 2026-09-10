import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { socialSQ } from "@/lib/services/social";

export const metadata: Metadata = serviceMetadata(socialSQ);

export default function Page() {
  return <ServicePage c={socialSQ} />;
}
