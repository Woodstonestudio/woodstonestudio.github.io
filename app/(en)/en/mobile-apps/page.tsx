import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { mobileEN } from "@/lib/services/mobile";

export const metadata: Metadata = serviceMetadata(mobileEN);

export default function Page() {
  return <ServicePage c={mobileEN} />;
}
