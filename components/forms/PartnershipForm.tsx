"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { partnershipSchema, type PartnershipValues } from "./schemas";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PartnershipForm() {
  const [submitted, setSubmitted] = useState<PartnershipValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PartnershipValues>({ resolver: zodResolver(partnershipSchema) });

  async function onSubmit(values: PartnershipValues) {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-5" />
        <h3 className="font-display font-semibold text-2xl mb-2">Application Received</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Thank you, {submitted.contactName}. Our partnerships team will reach out to{" "}
          {submitted.organisation} at {submitted.email} shortly.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="organisation">Organisation / School Name</Label>
          <Input id="organisation" placeholder="Organisation name" {...register("organisation")} />
          {errors.organisation && <p className="text-xs text-red-500 mt-1">{errors.organisation.message}</p>}
        </div>
        <div>
          <Label htmlFor="contactName">Contact Person</Label>
          <Input id="contactName" placeholder="Your name" {...register("contactName")} />
          {errors.contactName && <p className="text-xs text-red-500 mt-1">{errors.contactName.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 00000 00000" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Tell us about the partnership</Label>
          <Textarea id="message" rows={4} placeholder="What kind of partnership are you looking for?" {...register("message")} />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>
        <Button variant="gold" size="lg" className="sm:col-span-2 mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Card>
  );
}
