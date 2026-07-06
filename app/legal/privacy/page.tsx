import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { privacyPolicySections } from "@/constants/legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return <LegalLayout title="Privacy Policy" sections={privacyPolicySections} />;
}
