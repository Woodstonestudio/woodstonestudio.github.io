import type { Metadata } from "next";
import { AuditPage, auditMetadata } from "@/components/audit-page";

export const metadata: Metadata = auditMetadata("en");

export default function Page() {
  return <AuditPage locale="en" />;
}
