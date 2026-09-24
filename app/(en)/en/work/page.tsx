import type { Metadata } from "next";
import { WorkPage, workMetadata } from "@/components/work-page";

export const metadata: Metadata = workMetadata("en");

export default function Page() {
  return <WorkPage locale="en" />;
}
