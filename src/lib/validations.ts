import { z } from "zod";

export const collaborationTypes = [
  "outdoorBrand",
  "tourism",
  "wildlife",
  "gear",
  "alpineExperience",
  "cinematicContent",
  "other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "nameRequired").max(100, "nameTooLong"),
  email: z.string().trim().email("emailInvalid").max(160, "emailTooLong"),
  organization: z.string().trim().max(120, "organizationTooLong").optional(),
  collaborationType: z.enum(collaborationTypes).optional(),
  message: z
    .string()
    .trim()
    .min(20, "messageShort")
    .max(3000, "messageTooLong"),
  privacy: z.boolean().refine((value) => value, "privacyRequired"),
  website: z.string().max(200, "spamDetected").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
