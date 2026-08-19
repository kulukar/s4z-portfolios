"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/src/lib/auth/require-admin";
import { prisma } from "@/src/lib/prisma";
import {
  projectSchema,
  type ProjectSchema,
} from "@/src/schemas/project.schema";

export async function createProject(values: ProjectSchema) {
  await requireAdmin();

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
    const slugOwner = await prisma.project.findUnique({
      where: {
        slug: basic.slug,
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

    const project = await prisma.project.create({
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
    revalidatePath("/admin");
    revalidatePath("/admin/projects");

    return {
      success: true,
      message: "Project berhasil dibuat.",

      project: {
        id: project.id,
        slug: project.slug,
      },
    };
  } catch (error) {
    console.error("CREATE_PROJECT_ERROR:", error);

    return {
      success: false,
      message: "Gagal membuat project.",
    };
  }
}

export async function updateProject(id: string, values: ProjectSchema) {
  await requireAdmin();

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
    revalidatePath("/admin");
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

export async function deleteProject(id: string) {
  await requireAdmin();

  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        slug: true,
        order: true,
      },
    });

    if (!project) {
      return {
        success: false,
        message: "Project tidak ditemukan.",
      };
    }

    await prisma.$transaction(async (tx) => {
      await tx.project.delete({
        where: {
          id,
        },
      });

      const projectsToReorder = await tx.project.findMany({
        where: {
          order: {
            gt: project.order,
          },
        },

        orderBy: {
          order: "asc",
        },

        select: {
          id: true,
          order: true,
        },
      });

      for (const item of projectsToReorder) {
        await tx.project.update({
          where: {
            id: item.id,
          },

          data: {
            order: item.order - 1,
          },
        });
      }
    });

    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/admin/projects");
    revalidatePath(`/work/${project.slug}`);

    return {
      success: true,
      message: "Project berhasil dihapus.",
    };
  } catch (error) {
    console.error("DELETE_PROJECT_ERROR:", error);

    return {
      success: false,
      message: "Gagal menghapus project.",
    };
  }
}

export async function duplicateProject(id: string) {
  await requireAdmin();

  try {
    const sourceProject = await prisma.project.findUnique({
      where: {
        id,
      },

      include: {
        tags: {
          orderBy: {
            order: "asc",
          },
        },

        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });

    if (!sourceProject) {
      return {
        success: false,
        message: "Project tidak ditemukan.",
      };
    }

    const lastProject = await prisma.project.findFirst({
      orderBy: {
        order: "desc",
      },

      select: {
        order: true,
      },
    });

    const nextOrder = (lastProject?.order ?? 0) + 1;

    const projects = await prisma.project.findMany({
      select: {
        number: true,
      },
    });

    const highestNumber = projects.reduce((highest, project) => {
      const number = Number.parseInt(project.number, 10);

      if (Number.isNaN(number)) {
        return highest;
      }

      return Math.max(highest, number);
    }, 0);

    const nextNumber = String(highestNumber + 1).padStart(2, "0");

    const baseSlug = `${sourceProject.slug}-copy`;

    let slug = baseSlug;
    let counter = 2;

    while (
      await prisma.project.findUnique({
        where: {
          slug,
        },

        select: {
          id: true,
        },
      })
    ) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const duplicatedProject = await prisma.project.create({
      data: {
        number: nextNumber,

        title: `${sourceProject.title} Copy`,

        slug,

        category: sourceProject.category,

        description: sourceProject.description,

        coverImage: sourceProject.coverImage,

        role: sourceProject.role,

        context: sourceProject.context,

        platform: sourceProject.platform,

        year: sourceProject.year,

        readTime: sourceProject.readTime,

        order: nextOrder,

        featured: false,
        published: false,

        hero: sourceProject.hero ?? undefined,

        overview: sourceProject.overview ?? undefined,

        problemGoals: sourceProject.problemGoals ?? undefined,

        process: sourceProject.process ?? undefined,

        solution: sourceProject.solution ?? undefined,

        design: sourceProject.design ?? undefined,

        outcome: sourceProject.outcome ?? undefined,

        tags: {
          create: sourceProject.tags.map((tag) => ({
            name: tag.name,
            order: tag.order,
          })),
        },

        images: {
          create: sourceProject.images.map((image) => ({
            url: image.url,
            alt: image.alt,
            caption: image.caption,
            type: image.type,
            order: image.order,
          })),
        },
      },
    });

    revalidatePath("/");
    revalidatePath("/admin/projects");

    return {
      success: true,
      message: "Project berhasil diduplikasi.",

      project: {
        id: duplicatedProject.id,
        slug: duplicatedProject.slug,
      },
    };
  } catch (error) {
    console.error("DUPLICATE_PROJECT_ERROR:", error);

    return {
      success: false,
      message: "Gagal menduplikasi project.",
    };
  }
}

export async function toggleProjectPublished(id: string) {
  await requireAdmin();

  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        slug: true,
        published: true,
      },
    });

    if (!project) {
      return {
        success: false,
        message: "Project tidak ditemukan.",
      };
    }

    const updatedProject = await prisma.project.update({
      where: {
        id,
      },

      data: {
        published: !project.published,
      },

      select: {
        id: true,
        slug: true,
        published: true,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/admin/projects");
    revalidatePath(`/work/${project.slug}`);

    return {
      success: true,
      message: updatedProject.published
        ? "Project berhasil dipublish."
        : "Project dikembalikan menjadi draft.",

      published: updatedProject.published,
    };
  } catch (error) {
    console.error("TOGGLE_PROJECT_PUBLISHED_ERROR:", error);

    return {
      success: false,
      message: "Gagal mengubah status project.",
    };
  }
}

export async function toggleProjectFeatured(id: string) {
  await requireAdmin();

  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
        featured: true,
      },
    });

    if (!project) {
      return {
        success: false,
        message: "Project tidak ditemukan.",
      };
    }

    const updatedProject = await prisma.project.update({
      where: {
        id,
      },

      data: {
        featured: !project.featured,
      },

      select: {
        featured: true,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/admin/projects");

    return {
      success: true,
      message: updatedProject.featured
        ? "Project ditambahkan ke Featured."
        : "Project dihapus dari Featured.",

      featured: updatedProject.featured,
    };
  } catch (error) {
    console.error("TOGGLE_PROJECT_FEATURED_ERROR:", error);

    return {
      success: false,
      message: "Gagal mengubah Featured project.",
    };
  }
}
