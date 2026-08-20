"use server";

import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";

import { requireAdmin } from "@/src/lib/auth/require-admin";
import { prisma } from "@/src/lib/prisma";

import {
  playgroundSchema,
  type PlaygroundSchema,
} from "@/src/schemas/playground.schema";

function revalidatePlayground() {
  revalidatePath("/");
  revalidatePath("/playground");
  revalidatePath("/admin");
  revalidatePath("/admin/playground");
}

async function deleteBlobIfUnused(imageUrl: string) {
  const imageStillUsed = await prisma.playground.findFirst({
    where: {
      image: imageUrl,
    },

    select: {
      id: true,
    },
  });

  if (imageStillUsed) {
    return;
  }

  try {
    await del(imageUrl);
  } catch (error) {
    console.error("DELETE_PLAYGROUND_BLOB_ERROR:", error);
  }
}

export async function createPlaygroundItem(values: PlaygroundSchema) {
  await requireAdmin();

  const result = playgroundSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Data playground tidak valid.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const item = await prisma.playground.create({
      data: result.data,
    });

    revalidatePlayground();

    return {
      success: true,
      message: "Playground berhasil dibuat.",

      item: {
        id: item.id,
      },
    };
  } catch (error) {
    console.error("CREATE_PLAYGROUND_ERROR:", error);

    return {
      success: false,
      message: "Gagal membuat playground.",
    };
  }
}

export async function updatePlaygroundItem(
  id: string,
  values: PlaygroundSchema,
) {
  await requireAdmin();

  const result = playgroundSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Data playground tidak valid.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const existingItem = await prisma.playground.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        image: true,
      },
    });

    if (!existingItem) {
      return {
        success: false,
        message: "Playground tidak ditemukan.",
      };
    }

    const item = await prisma.playground.update({
      where: {
        id,
      },

      data: result.data,
    });

    if (existingItem.image && existingItem.image !== item.image) {
      await deleteBlobIfUnused(existingItem.image);
    }

    revalidatePlayground();
    revalidatePath(`/admin/playground/${id}/edit`);

    return {
      success: true,
      message: "Playground berhasil diperbarui.",

      item: {
        id: item.id,
      },
    };
  } catch (error) {
    console.error("UPDATE_PLAYGROUND_ERROR:", error);

    return {
      success: false,
      message: "Gagal memperbarui playground.",
    };
  }
}

export async function togglePlaygroundPublished(id: string) {
  await requireAdmin();

  try {
    const item = await prisma.playground.findUnique({
      where: {
        id,
      },

      select: {
        published: true,
      },
    });

    if (!item) {
      return {
        success: false,
        message: "Playground tidak ditemukan.",
      };
    }

    const updatedItem = await prisma.playground.update({
      where: {
        id,
      },

      data: {
        published: !item.published,
      },

      select: {
        published: true,
      },
    });

    revalidatePlayground();

    return {
      success: true,

      message: updatedItem.published
        ? "Playground berhasil dipublish."
        : "Playground dikembalikan menjadi draft.",

      published: updatedItem.published,
    };
  } catch (error) {
    console.error("TOGGLE_PLAYGROUND_PUBLISHED_ERROR:", error);

    return {
      success: false,
      message: "Gagal mengubah status playground.",
    };
  }
}

export async function duplicatePlaygroundItem(id: string) {
  await requireAdmin();

  try {
    const sourceItem = await prisma.playground.findUnique({
      where: {
        id,
      },
    });

    if (!sourceItem) {
      return {
        success: false,
        message: "Playground tidak ditemukan.",
      };
    }

    const items = await prisma.playground.findMany({
      select: {
        number: true,
        order: true,
      },
    });

    const highestNumber = items.reduce((highest, item) => {
      const number = Number.parseInt(item.number, 10);

      if (Number.isNaN(number)) {
        return highest;
      }

      return Math.max(highest, number);
    }, 0);

    const highestOrder = items.reduce(
      (highest, item) => Math.max(highest, item.order),
      0,
    );

    const duplicatedItem = await prisma.playground.create({
      data: {
        number: String(highestNumber + 1).padStart(2, "0"),

        title: `${sourceItem.title} Copy`,

        category: sourceItem.category,

        image: sourceItem.image,

        year: sourceItem.year,

        order: highestOrder + 1,

        published: false,
      },
    });

    revalidatePlayground();

    return {
      success: true,
      message: "Playground berhasil diduplikasi.",

      item: {
        id: duplicatedItem.id,
      },
    };
  } catch (error) {
    console.error("DUPLICATE_PLAYGROUND_ERROR:", error);

    return {
      success: false,
      message: "Gagal menduplikasi playground.",
    };
  }
}

export async function deletePlaygroundItem(id: string) {
  await requireAdmin();

  try {
    const item = await prisma.playground.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        image: true,
      },
    });

    if (!item) {
      return {
        success: false,
        message: "Playground tidak ditemukan.",
      };
    }

    await prisma.playground.delete({
      where: {
        id,
      },
    });

    if (item.image) {
      await deleteBlobIfUnused(item.image);
    }

    revalidatePlayground();

    return {
      success: true,
      message: "Playground berhasil dihapus.",
    };
  } catch (error) {
    console.error("DELETE_PLAYGROUND_ERROR:", error);

    return {
      success: false,
      message: "Gagal menghapus playground.",
    };
  }
}
