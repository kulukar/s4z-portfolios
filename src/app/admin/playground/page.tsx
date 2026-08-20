import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Plus } from "lucide-react";

import { PlaygroundActions } from "@/src/components/admin/playground/playground-actions";

import { getAllPlaygroundItems } from "@/src/lib/queries/playground";

export default async function AdminPlaygroundPage() {
  const items = await getAllPlaygroundItems();

  return (
    <main>
      <div
        className="
          flex flex-col gap-6
          border-b border-white/10
          pb-8

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
            Management
          </p>

          <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Playground
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
            Manage visual experiments, explorations, and unfinished ideas.
          </p>
        </div>

        <Link
          href="/admin/playground/new"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border border-white/10
            px-4 py-2.5

            text-[10px]
            uppercase
            tracking-[0.16em]
            text-white/50

            transition-all

            hover:border-[#3B82F6]
            hover:bg-[#3B82F6]
            hover:text-white
          "
        >
          <Plus
            size={14}
            strokeWidth={1.5}
            className="
              transition-transform
              group-hover:rotate-90
            "
          />
          New Item
        </Link>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          All Items
        </p>

        <p className="text-xs text-white/25">
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="mt-5 border-t border-white/10">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              grid gap-5
              border-b border-white/10
              py-6

              sm:grid-cols-12
              sm:items-center
            "
          >
            <div className="sm:col-span-1">
              <span className="font-display text-lg text-white/20">
                {item.number}
              </span>
            </div>

            <div className="sm:col-span-2">
              <div
                className="
                  relative
                  aspect-4/3
                  overflow-hidden
                  bg-[#101010]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="font-display text-xl font-medium tracking-tight text-white/85">
                {item.title}
              </p>

              <p className="mt-1 text-xs text-white/25">
                {item.category} · {item.year}
              </p>
            </div>

            <div className="sm:col-span-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                Order
              </p>

              <p className="mt-1 text-sm text-white/50">{item.order}</p>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center gap-2">
                <span
                  className={`
                    h-1.5 w-1.5
                    rounded-full

                    ${item.published ? "bg-emerald-400" : "bg-white/20"}
                  `}
                />

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                  {item.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            <div
              className="
                flex items-center gap-2

                sm:col-span-3
                sm:justify-end
              "
            >
              <PlaygroundActions
                itemId={item.id}
                itemTitle={item.title}
                published={item.published}
              />

              <Link
                href={`/admin/playground/${item.id}/edit`}
                className="
                  group/edit
                  flex h-9
                  items-center gap-2
                  rounded-full
                  border border-white/10
                  px-3

                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35

                  transition-all

                  hover:border-[#3B82F6]
                  hover:bg-[#3B82F6]
                  hover:text-white
                "
              >
                Edit
                <ArrowUpRight
                  size={12}
                  className="
                    transition-transform

                    group-hover/edit:-translate-y-0.5
                    group-hover/edit:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="border-b border-white/10 py-20 text-center">
          <p className="font-display text-2xl tracking-[-0.03em] text-white/50">
            No playground items yet.
          </p>

          <p className="mt-2 text-sm text-white/25">
            Add your first visual exploration.
          </p>

          <Link
            href="/admin/playground/new"
            className="
              mt-6
              inline-flex
              items-center gap-2
              rounded-full
              border border-white/10
              px-4 py-2.5

              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/40

              transition-all

              hover:border-[#3B82F6]
              hover:bg-[#3B82F6]
              hover:text-white
            "
          >
            <Plus size={13} />
            Create First Item
          </Link>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
          Portfolio CMS
        </p>

        <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
          {String(items.length).padStart(2, "0")} Items
        </p>
      </div>
    </main>
  );
}
