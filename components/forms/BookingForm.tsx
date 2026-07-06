"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { bookingSchema, type BookingValues } from "./schemas";
import { Input, Label, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courses } from "@/constants/courses";

export function BookingForm() {
  const [submitted, setSubmitted] = useState<BookingValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema) });

  async function onSubmit(values: BookingValues) {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-5" />
        <h3 className="font-display font-semibold text-2xl mb-2">Session Requested</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Thank you, {submitted.name}. We&apos;ve noted your request for a {submitted.mode.toLowerCase()}{" "}
          counselling session on {submitted.date} at {submitted.time}. Our team will call you at{" "}
          {submitted.phone} shortly to confirm.
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
          <Label htmlFor="mode">Mode</Label>
          <Select id="mode" {...register("mode")}>
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </Select>
          {errors.mode && <p className="text-xs text-red-500 mt-1">{errors.mode.message}</p>}
        </div>
        <div>
          <Label htmlFor="course">Course of Interest</Label>
          <Select id="course" {...register("course")}>
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.name}>{c.shortName}</option>
            ))}
          </Select>
          {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course.message}</p>}
        </div>
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Select id="time" {...register("time")}>
            <option value="">Select a slot</option>
            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
            <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
            <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
            <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
          </Select>
          {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time.message}</p>}
        </div>
        <Button variant="gold" size="lg" className="sm:col-span-2 mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book Counselling Session"}
        </Button>
      </form>
    </Card>
  );
}
