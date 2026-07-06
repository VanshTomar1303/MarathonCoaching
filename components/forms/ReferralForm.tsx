"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { referralSchema, type ReferralValues } from "./schemas";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ReferralForm() {
  const [submitted, setSubmitted] = useState<ReferralValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReferralValues>({ resolver: zodResolver(referralSchema) });

  async function onSubmit(values: ReferralValues) {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-5" />
        <h3 className="font-display font-semibold text-2xl mb-2">Referral Submitted</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Thanks, {submitted.referrerName}! We&apos;ll reach out to {submitted.friendName}, and
          your reward will be credited once they enroll.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="referrerName">Your Name</Label>
          <Input id="referrerName" placeholder="Your name" {...register("referrerName")} />
          {errors.referrerName && <p className="text-xs text-red-500 mt-1">{errors.referrerName.message}</p>}
        </div>
        <div>
          <Label htmlFor="referrerPhone">Your Phone Number</Label>
          <Input id="referrerPhone" placeholder="+91 00000 00000" {...register("referrerPhone")} />
          {errors.referrerPhone && <p className="text-xs text-red-500 mt-1">{errors.referrerPhone.message}</p>}
        </div>
        <div>
          <Label htmlFor="friendName">Friend&apos;s Name</Label>
          <Input id="friendName" placeholder="Friend's name" {...register("friendName")} />
          {errors.friendName && <p className="text-xs text-red-500 mt-1">{errors.friendName.message}</p>}
        </div>
        <div>
          <Label htmlFor="friendPhone">Friend&apos;s Phone Number</Label>
          <Input id="friendPhone" placeholder="+91 00000 00000" {...register("friendPhone")} />
          {errors.friendPhone && <p className="text-xs text-red-500 mt-1">{errors.friendPhone.message}</p>}
        </div>
        <Button variant="gold" size="lg" className="sm:col-span-2 mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Refer a Friend"}
        </Button>
      </form>
    </Card>
  );
}
