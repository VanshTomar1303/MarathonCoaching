import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { cookiePolicySections } from "@/constants/legal";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return <LegalLayout title="Cookie Policy" sections={cookiePolicySections} />;
}
