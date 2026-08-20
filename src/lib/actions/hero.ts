"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/src/lib/auth/require-admin";
import { prisma } from "@/src/lib/prisma";

import { siteHeroSchema, type SiteHeroSchema } from "@/src/schemas/hero.schema";

export async function updateSiteHero(values: SiteHeroSchema) {
  await requireAdmin();

  const result = siteHeroSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Data hero tidak valid.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const data = result.data;

  try {
    await prisma.siteHero.upsert({
      where: {
        id: "hero",
      },

      create: {
        id: "hero",

        eyebrow: data.eyebrow,

        headlines: data.headlines,

        description: data.description,

        backgroundImage: data.backgroundImage,

        ctaLabel: data.ctaLabel,
        ctaUrl: data.ctaUrl,

        available: data.available,
        availableText: data.availableText,

        scrollLabel: data.scrollLabel,
        scrollUrl: data.scrollUrl,
      },

      update: {
        eyebrow: data.eyebrow,

        headlines: data.headlines,

        description: data.description,

        backgroundImage: data.backgroundImage,

        ctaLabel: data.ctaLabel,
        ctaUrl: data.ctaUrl,

        available: data.available,
        availableText: data.availableText,

        scrollLabel: data.scrollLabel,
        scrollUrl: data.scrollUrl,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/admin/hero");

    return {
      success: true,
      message: "Hero berhasil diperbarui.",
    };
  } catch (error) {
    console.error("UPDATE_SITE_HERO_ERROR:", error);

    return {
      success: false,
      message: "Gagal memperbarui hero.",
    };
  }
}
