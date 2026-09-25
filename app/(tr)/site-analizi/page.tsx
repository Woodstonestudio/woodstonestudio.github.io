import type { Metadata } from "next";
import { AuditPage, auditMetadata } from "@/components/audit-page";

export const metadata: Metadata = auditMetadata("tr");

export default function Page() {
  return <AuditPage locale="tr" />;
}
