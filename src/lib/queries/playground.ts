import { prisma } from "@/src/lib/prisma";

/* ======================================================
   ALL PLAYGROUND — ADMIN
====================================================== */

export async function getAllPlaygroundItems() {
  return prisma.playground.findMany({
    orderBy: {
      order: "asc",
    },
  });
}

/* ======================================================
   PUBLISHED PLAYGROUND — PUBLIC ARCHIVE
====================================================== */

export async function getPublishedPlaygroundItems() {
  return prisma.playground.findMany({
    where: {
      published: true,
    },

    orderBy: {
      order: "asc",
    },
  });
}

/* ======================================================
   PLAYGROUND PREVIEW — HOMEPAGE
====================================================== */

export async function getPlaygroundPreview() {
  return prisma.playground.findMany({
    where: {
      published: true,
    },

    orderBy: {
      order: "asc",
    },

    take: 4,
  });
}

/* ======================================================
   SINGLE PLAYGROUND
====================================================== */

export async function getPlaygroundItemById(id: string) {
  return prisma.playground.findUnique({
    where: {
      id,
    },
  });
}

export async function getNextPlaygroundMeta() {
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

  return {
    number: String(highestNumber + 1).padStart(2, "0"),
    order: highestOrder + 1,
  };
}
