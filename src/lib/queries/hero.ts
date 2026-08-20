import { prisma } from "@/src/lib/prisma";

import { siteHeroSchema, type SiteHeroSchema } from "@/src/schemas/hero.schema";

export const defaultHero: SiteHeroSchema = {
  eyebrow: "- UI/UX Designer",

  headlines: [
    {
      text: "I make interfaces",
      style: "primary",
    },
    {
      text: "look good",
      style: "muted",
    },
    {
      text: "and make sense.",
      style: "muted",
    },
  ],

  description:
    "I'm a UI/UX Designer based in Indonesia. I turn ideas and messy problems into interfaces that feel clear, simple, and easy to use.",

  backgroundImage: "/images/hero/hero-photo.jpeg",

  ctaLabel: "View My Work",
  ctaUrl: "#work",

  available: true,
  availableText: "Available for work",

  scrollLabel: "Scroll to explore",
  scrollUrl: "#work",
};

export async function getSiteHero(): Promise<SiteHeroSchema> {
  const hero = await prisma.siteHero.findUnique({
    where: {
      id: "hero",
    },
  });

  if (!hero) {
    return defaultHero;
  }

  const result = siteHeroSchema.safeParse({
    eyebrow: hero.eyebrow,
    headlines: hero.headlines,
    description: hero.description,
    backgroundImage: hero.backgroundImage,
    ctaLabel: hero.ctaLabel,
    ctaUrl: hero.ctaUrl,
    available: hero.available,
    availableText: hero.availableText,
    scrollLabel: hero.scrollLabel,
    scrollUrl: hero.scrollUrl,
  });

  if (!result.success) {
    console.error("INVALID_SITE_HERO_DATA:", result.error.flatten());

    return defaultHero;
  }

  return result.data;
}
