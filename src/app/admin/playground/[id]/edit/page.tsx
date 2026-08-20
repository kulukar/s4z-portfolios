import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { PlaygroundForm } from "@/src/components/admin/playground/playground-form";
import { getPlaygroundItemById } from "@/src/lib/queries/playground";

type EditPlaygroundPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPlaygroundPage({
  params,
}: EditPlaygroundPageProps) {
  const { id } = await params;

  const item = await getPlaygroundItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <Link
        href="/admin/playground"
        className="
          inline-flex
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-white/30
          transition-colors

          hover:text-white
        "
      >
        <ArrowLeft size={13} />
        Back to Playground
      </Link>

      <div className="mt-8 border-b border-white/10 pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
          Playground / {item.number}
        </p>

        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          Edit Item
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
          {item.title}
        </p>
      </div>

      <div className="mt-10">
        <PlaygroundForm
          mode="edit"
          itemId={item.id}
          defaultValues={{
            number: item.number,

            title: item.title,

            category: item.category,

            image: item.image,

            year: item.year,

            order: item.order,

            published: item.published,
          }}
        />
      </div>
    </main>
  );
}
