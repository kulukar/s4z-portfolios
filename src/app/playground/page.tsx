import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { getPublishedPlaygroundItems } from "@/src/lib/queries/playground";

export default async function PlaygroundPage() {
  const playgroundItems = await getPublishedPlaygroundItems();

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div
        className="
          mx-auto
          max-w-360
          px-6
          pb-20
          pt-8

          md:px-10
          md:pb-28
          md:pt-10

          lg:px-16
          lg:pb-40
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-6
          "
        >
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-2

              text-[10px]
              uppercase
              tracking-[0.16em]
              text-white/35

              transition-colors
              hover:text-white
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
            Back Home
          </Link>

          <Link
            href="/"
            className="
              font-display
              text-sm
              font-medium
              tracking-[-0.03em]
              text-white/60

              transition-colors
              hover:text-white
            "
          >
            S4Z
          </Link>
        </div>

        <header
          className="
            grid
            gap-8

            border-b
            border-white/10

            pb-12
            pt-16

            md:grid-cols-12
            md:items-end
            md:pb-16
            md:pt-24

            lg:pb-20
            lg:pt-32
          "
        >
          <div className="md:col-span-8">
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#3B82F6]

                sm:text-xs
              "
            >
              Playground / Archive
            </p>

            <h1
              className="
                mt-5
                max-w-5xl

                font-display
                text-[clamp(3.5rem,13vw,6rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]

                md:text-[clamp(5rem,8vw,8rem)]
              "
            >
              Things I make
              <span className="block text-white/30">just to explore.</span>
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <p
              className="
                max-w-sm
                text-sm
                leading-6
                text-white/40

                md:ml-auto
              "
            >
              A collection of interface experiments, visual studies, unfinished
              ideas, and explorations that don&apos;t need a full case study.
            </p>
          </div>
        </header>

        <div
          className="
            flex
            items-center
            justify-between

            py-7

            md:py-9
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            Visual Archive
          </p>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            {String(playgroundItems.length).padStart(2, "0")} Explorations
          </p>
        </div>

        {/* ================= GALLERY ================= */}

        {playgroundItems.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
              sm:gap-4

              md:grid-cols-12
            "
          >
            {playgroundItems.map((item, index) => {
              const layouts = [
                {
                  column: "sm:col-span-2 md:col-span-7 lg:col-span-8",
                  aspect: "aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10]",
                },
                {
                  column: "sm:col-span-1 md:col-span-5 lg:col-span-4",
                  aspect: "aspect-[4/3] sm:aspect-[4/5]",
                },
                {
                  column: "sm:col-span-1 md:col-span-5 lg:col-span-4",
                  aspect: "aspect-[4/3] sm:aspect-[4/5]",
                },
                {
                  column: "sm:col-span-2 md:col-span-7 lg:col-span-8",
                  aspect: "aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10]",
                },
              ];

              const currentLayout = layouts[index % layouts.length];

              return (
                <article
                  key={item.id}
                  className={`
                    group
                    ${currentLayout.column}
                  `}
                >
                  <div
                    className={`
                      relative
                      overflow-hidden
                      bg-[#101010]

                      ${currentLayout.aspect}
                    `}
                  >
                    {/* IMAGE */}

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover

                        transition-all
                        duration-700
                        ease-out

                        group-hover:scale-[1.03]
                        group-hover:brightness-105
                      "
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 767px) 50vw,
                        (max-width: 1023px) 60vw,
                        70vw
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-linear-to-t
                        from-black/85
                        via-black/10
                        to-black/10
                      "
                    />

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        left-4
                        top-4

                        text-[9px]
                        tracking-[0.15em]
                        text-white/50

                        sm:left-5
                        sm:top-5
                        sm:text-[10px]
                      "
                    >
                      {item.number}
                    </span>

                    {/* ARROW */}

                    <div
                      className="
                        absolute
                        right-4
                        top-4

                        flex
                        h-9
                        w-9
                        items-center
                        justify-center

                        rounded-full

                        bg-[#3B82F6]
                        text-white

                        transition-all
                        duration-300

                        sm:right-5
                        sm:top-5

                        md:h-10
                        md:w-10
                        md:translate-y-2
                        md:opacity-0

                        md:group-hover:translate-y-0
                        md:group-hover:opacity-100

                        lg:h-11
                        lg:w-11
                      "
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>

                    {/* CONTENT */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0

                        p-4

                        sm:p-5
                        md:p-6
                        lg:p-7
                      "
                    >
                      <div className="flex items-end justify-between gap-4 md:gap-6">
                        <div className="min-w-0">
                          <p
                            className="
                              mb-1.5

                              text-[9px]
                              uppercase
                              tracking-[0.15em]
                              text-white/50

                              sm:mb-2
                              sm:text-[10px]
                            "
                          >
                            {item.category}
                          </p>

                          <h2
                            className="
                              font-display

                              text-[clamp(1.5rem,7vw,2rem)]
                              font-medium
                              leading-[0.95]
                              tracking-[-0.04em]

                              sm:text-2xl
                              md:text-3xl
                              lg:text-4xl
                            "
                          >
                            {item.title}
                          </h2>
                        </div>

                        <span
                          className="
                            shrink-0
                            text-[10px]
                            text-white/40

                            sm:text-xs
                          "
                        >
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */

          <div
            className="
              border-y
              border-white/10

              py-24

              text-center
            "
          >
            <p
              className="
                font-display
                text-3xl
                tracking-[-0.04em]
                text-white/40
              "
            >
              Nothing here yet.
            </p>

            <p className="mt-3 text-sm text-white/25">
              New explorations will appear here.
            </p>
          </div>
        )}

        {/* ================= FOOTER ================= */}

        <footer
          className="
            mt-16

            flex
            flex-col
            gap-5

            border-t
            border-white/10

            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between

            md:mt-24
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/20
            "
          >
            S4Z Studio / Playground
          </p>

          <Link
            href="/#work"
            className="
              group
              inline-flex
              items-center
              gap-2

              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/30

              transition-colors
              hover:text-white
            "
          >
            Explore Selected Work
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </footer>
      </div>
    </main>
  );
}
