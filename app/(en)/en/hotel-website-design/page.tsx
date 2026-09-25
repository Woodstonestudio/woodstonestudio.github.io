import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { hotelEN } from "@/lib/services/hotel";

export const metadata: Metadata = serviceMetadata(hotelEN);

export default function Page() {
  return <ServicePage c={hotelEN} />;
}
