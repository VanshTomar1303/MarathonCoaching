import type { Metadata } from "next";
import { Gift, Users, Repeat } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { Card } from "@/components/ui/card";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Referral Programme",
  description: `Refer a friend to ${site.name} and both of you earn a reward.`,
};

const rewards = [
  { icon: Gift, title: "Student Referral", desc: "Refer a friend and earn a fee credit toward your next term once they enroll." },
  { icon: Users, title: "Alumni Referral", desc: "Alumni referrals earn a cash reward for every successful enrolment." },
  { icon: Repeat, title: "Referral Tracking", desc: "Track the status of every referral you've made from your student dashboard." },
];

export default function ReferralPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <BlueprintGrid className="text-foreground" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Referral Programme</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-balance">
              Refer a friend, both of you win
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 mb-16">
          {rewards.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 0.08}>
              <Card className="p-7 h-full">
                <div className="h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                  <r.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{r.desc}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-3 text-center">
              Refer a Friend
            </h2>
            <p className="text-sm text-foreground/55 text-center mb-6 max-w-md mx-auto">
              Terms: rewards are credited once your referral completes enrolment and their first
              month of fees. See our{" "}
              <a href="/legal/terms" className="text-foreground underline">Terms &amp; Conditions</a> for details.
            </p>
            <ReferralForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
