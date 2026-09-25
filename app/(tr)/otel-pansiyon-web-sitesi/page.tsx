import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { hotelTR } from "@/lib/services/hotel";

export const metadata: Metadata = serviceMetadata(hotelTR);

export default function Page() {
  return <ServicePage c={hotelTR} />;
}
