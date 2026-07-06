import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { termsSections } from "@/constants/legal";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <LegalLayout title="Terms & Conditions" sections={termsSections} />;
}
