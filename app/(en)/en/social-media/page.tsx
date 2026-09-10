import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { socialEN } from "@/lib/services/social";

export const metadata: Metadata = serviceMetadata(socialEN);

export default function Page() {
  return <ServicePage c={socialEN} />;
}
