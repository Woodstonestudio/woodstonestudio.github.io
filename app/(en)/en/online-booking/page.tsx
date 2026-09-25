import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { bookingEN } from "@/lib/services/booking";

export const metadata: Metadata = serviceMetadata(bookingEN);

export default function Page() {
  return <ServicePage c={bookingEN} />;
}
