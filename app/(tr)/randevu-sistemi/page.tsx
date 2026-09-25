import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { bookingTR } from "@/lib/services/booking";

export const metadata: Metadata = serviceMetadata(bookingTR);

export default function Page() {
  return <ServicePage c={bookingTR} />;
}
