"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { careerSchema, type CareerValues } from "./schemas";
import { Input, Label, Select, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { jobOpenings } from "@/constants/jobs";

export function CareerApplicationForm({ defaultRole }: { defaultRole?: string }) {
  const [submitted, setSubmitted] = useState<CareerValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareerValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: { role: defaultRole ?? "" },
  });

  async function onSubmit(values: CareerValues) {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-5" />
        <h3 className="font-display font-semibold text-2xl mb-2">Application Received</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Thank you, {submitted.name}. Our hiring team will review your application and reach
          out at {submitted.email} if there&apos;s a fit.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 00000 00000" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="role">Role</Label>
          <Select id="role" {...register("role")}>
            <option value="">Select a role</option>
            {jobOpenings.map((j) => (
              <option key={j.slug} value={j.title}>{j.title}</option>
            ))}
          </Select>
          {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Tell us about yourself</Label>
          <Textarea id="message" rows={4} placeholder="A short note about your experience" {...register("message")} />
        </div>
        <Button variant="gold" size="lg" className="sm:col-span-2 mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Card>
  );
}
