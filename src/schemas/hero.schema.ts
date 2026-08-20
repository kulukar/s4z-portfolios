import { z } from "zod";

const requiredText = z.string().trim().min(1, "Field wajib diisi");

export const heroHeadlineStyleSchema = z.enum(["primary", "muted", "accent"]);

export const heroHeadlineSchema = z.object({
  text: requiredText,
  style: heroHeadlineStyleSchema,
});

export const siteHeroSchema = z.object({
  eyebrow: requiredText,

  headlines: z
    .array(heroHeadlineSchema)
    .min(1, "Minimal harus ada satu headline"),

  description: requiredText,

  backgroundImage: requiredText,

  ctaLabel: requiredText,
  ctaUrl: requiredText,

  available: z.boolean(),
  availableText: requiredText,

  scrollLabel: requiredText,
  scrollUrl: requiredText,
});

export type HeroHeadlineStyle = z.infer<typeof heroHeadlineStyleSchema>;

export type HeroHeadlineSchema = z.infer<typeof heroHeadlineSchema>;

export type SiteHeroSchema = z.infer<typeof siteHeroSchema>;
