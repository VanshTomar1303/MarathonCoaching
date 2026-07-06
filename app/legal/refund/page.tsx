import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { refundPolicySections } from "@/constants/legal";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return <LegalLayout title="Refund Policy" sections={refundPolicySections} />;
}
