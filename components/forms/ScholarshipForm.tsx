"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { scholarshipSchema, type ScholarshipValues } from "./schemas";
import { Input, Label, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ScholarshipForm() {
  const [submitted, setSubmitted] = useState<ScholarshipValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ScholarshipValues>({ resolver: zodResolver(scholarshipSchema) });

  async function onSubmit(values: ScholarshipValues) {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-5" />
        <h3 className="font-display font-semibold text-2xl mb-2">Application Received</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Thank you, {submitted.name}. We&apos;ve received your Scholarship Test application and
          will share your test slot and hall ticket details on {submitted.email} soon.
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
        <div>
          <Label htmlFor="grade">Current Class</Label>
          <Select id="grade" {...register("grade")}>
            <option value="">Select class</option>
            <option value="IX">Class IX</option>
            <option value="X">Class X</option>
            <option value="XI">Class XI</option>
            <option value="XII">Class XII</option>
            <option value="Dropper">Dropper</option>
          </Select>
          {errors.grade && <p className="text-xs text-red-500 mt-1">{errors.grade.message}</p>}
        </div>
        <div>
          <Label htmlFor="school">School Name</Label>
          <Input id="school" placeholder="Your school" {...register("school")} />
          {errors.school && <p className="text-xs text-red-500 mt-1">{errors.school.message}</p>}
        </div>
        <Button variant="gold" size="lg" className="sm:col-span-2 mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Apply for Scholarship Test"}
        </Button>
      </form>
    </Card>
  );
}
