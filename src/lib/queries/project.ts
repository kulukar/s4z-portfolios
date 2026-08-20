import { prisma } from "@/src/lib/prisma";

export async function getNextProjectMeta() {
  const lastProject = await prisma.project.findFirst({
    orderBy: {
      order: "desc",
    },

    select: {
      order: true,
    },
  });

  const order = (lastProject?.order ?? 0) + 1;

  return {
    order,
    number: String(order).padStart(2, "0"),
  };
}

export async function getAllProjects() {
  return prisma.project.findMany({
    orderBy: {
      order: "asc",
    },
  });
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({
    where: {
      id,
    },

    include: {
      tags: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });
}

export async function getFeaturedProjects() {
  const projects = await prisma.project.findMany({
    where: {
      published: true,
      featured: true,
    },

    include: {
      tags: {
        orderBy: {
          order: "asc",
        },
      },
    },

    orderBy: {
      order: "asc",
    },
  });

  return projects.map((project) => ({
    id: project.number,
    href: `/work/${project.slug}`,
    category: project.category,
    image: project.coverImage ?? "/images/projects/placeholder.jpg",
    title: project.title,
    description: project.description,
    tags: project.tags.map((tag) => tag.name),
  }));
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({
    where: {
      slug,
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
}

export async function getNextProject(currentOrder: number) {
  const nextProject = await prisma.project.findFirst({
    where: {
      published: true,
      order: {
        gt: currentOrder,
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  if (nextProject) {
    return nextProject;
  }

  return prisma.project.findFirst({
    where: {
      published: true,
    },
    orderBy: {
      order: "asc",
    },
  });
}

export async function getPublishedProjectCount() {
  return prisma.project.count({
    where: {
      published: true,
    },
  });
}

export async function getPublishedProjects() {
  return prisma.project.findMany({
    where: {
      published: true,
    },

    orderBy: {
      order: "asc",
    },

    select: {
      id: true,
      number: true,
      title: true,
      slug: true,
      category: true,
      description: true,
      coverImage: true,
      role: true,
      year: true,
      order: true,
    },
  });
}
