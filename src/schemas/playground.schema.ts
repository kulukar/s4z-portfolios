import { z } from "zod";

const requiredText = z.string().trim().min(1, "Field wajib diisi");

export const playgroundSchema = z.object({
  number: requiredText,

  title: requiredText,

  category: requiredText,

  image: requiredText,

  year: requiredText,

  order: z
    .number({
      message: "Order harus berupa angka",
    })
    .int("Order harus berupa angka bulat")
    .min(1, "Order minimal 1"),

  published: z.boolean(),
});

export type PlaygroundSchema = z.infer<typeof playgroundSchema>;
