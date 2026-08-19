"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/src/lib/prisma";
import {
  projectSchema,
  type ProjectSchema,
} from "@/src/schemas/project.schema";

export async function updateProject(id: string, values: ProjectSchema) {
  const result = projectSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Data project tidak valid.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { basic, hero, overview, problemGoals, process, solution, outcome } =
    result.data;

  try {
    const existingProject = await prisma.project.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        slug: true,
      },
    });

    if (!existingProject) {
      return {
        success: false,
        message: "Project tidak ditemukan.",
      };
    }

    const slugOwner = await prisma.project.findFirst({
      where: {
        slug: basic.slug,

        NOT: {
          id,
        },
      },

      select: {
        id: true,
      },
    });

    if (slugOwner) {
      return {
        success: false,
        message: "Slug sudah digunakan oleh project lain.",
      };
    }

    const updatedProject = await prisma.project.update({
      where: {
        id,
      },

      data: {
        number: basic.number,

        title: basic.title,

        slug: basic.slug,

        category: basic.category,

        description: basic.description,

        coverImage: basic.coverImage,

        role: basic.role,

        context: basic.context,

        platform: basic.platform,

        year: basic.year,

        readTime: basic.readTime,

        order: basic.order,

        featured: basic.featured,

        published: basic.published,

        hero,

        overview,

        problemGoals,

        process,

        solution,

        outcome,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin/projects");

    revalidatePath(`/work/${existingProject.slug}`);

    revalidatePath(`/work/${updatedProject.slug}`);

    revalidatePath(`/admin/projects/${id}/edit`);

    return {
      success: true,
      message: "Project berhasil diperbarui.",
      project: {
        id: updatedProject.id,
        slug: updatedProject.slug,
      },
    };
  } catch (error) {
    console.error("UPDATE_PROJECT_ERROR:", error);

    return {
      success: false,
      message: "Gagal memperbarui project.",
    };
  }
}
