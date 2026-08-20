import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PlaygroundForm } from "@/src/components/admin/playground/playground-form";
import { getNextPlaygroundMeta } from "@/src/lib/queries/playground";

export default async function NewPlaygroundPage() {
  const meta = await getNextPlaygroundMeta();

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
          Playground
        </p>

        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          New Item
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
          Add a new visual exploration to the playground.
        </p>
      </div>

      <div className="mt-10">
        <PlaygroundForm
          mode="create"
          defaultValues={{
            number: meta.number,

            title: "",

            category: "",

            image: "",

            year: String(new Date().getFullYear()),

            order: meta.order,

            published: false,
          }}
        />
      </div>
    </main>
  );
}
