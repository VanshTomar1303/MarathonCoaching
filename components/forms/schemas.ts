import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  course: z.enum(["Engineering", "Medical", "Foundation"]),
  message: z.string().optional(),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  mode: z.enum(["Online", "Offline"]),
  course: z.string().min(1, "Please select a course"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
});
export type BookingValues = z.infer<typeof bookingSchema>;

export const scholarshipSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  grade: z.string().min(1, "Please select your class"),
  school: z.string().min(2, "Please enter your school name"),
});
export type ScholarshipValues = z.infer<typeof scholarshipSchema>;

export const partnershipSchema = z.object({
  organisation: z.string().min(2, "Please enter your organisation name"),
  contactName: z.string().min(2, "Please enter a contact name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Please tell us a bit about the partnership you have in mind"),
});
export type PartnershipValues = z.infer<typeof partnershipSchema>;

export const referralSchema = z.object({
  referrerName: z.string().min(2, "Please enter your name"),
  referrerPhone: z.string().min(10, "Please enter a valid phone number"),
  friendName: z.string().min(2, "Please enter your friend's name"),
  friendPhone: z.string().min(10, "Please enter a valid phone number"),
});
export type ReferralValues = z.infer<typeof referralSchema>;

export const careerSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  role: z.string().min(1, "Please select a role"),
  message: z.string().optional(),
});
export type CareerValues = z.infer<typeof careerSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  branch: z.string().min(1, "Please select a branch"),
  message: z.string().min(5, "Please tell us how we can help"),
});
export type ContactValues = z.infer<typeof contactSchema>;
