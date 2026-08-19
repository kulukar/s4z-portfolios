import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { playgroundItems } from "@/src/data/playground";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";
import { RevealImage } from "@/src/components/motion/reveal-image";

export function PlaygroundSection() {
  return (
    <section
      id="playground"
      className="
        bg-[#080808]
        px-6 py-20
        text-white
        sm:py-24
        md:px-10 md:py-28
        lg:px-16 lg:py-40
      "
    >
      <div className="mx-auto max-w-360">
        {/* ================= HEADER ================= */}

        <div
          className="
            grid gap-7
            border-b border-white/10
            pb-10
            md:grid-cols-12 md:items-end md:gap-8 md:pb-14
            lg:pb-20
          "
        >
          <div className="md:col-span-8">
            <FadeUp>
              <p
                className="
                  mb-4
                  text-[10px] font-medium uppercase
                  tracking-[0.18em]
                  text-[#3B82F6]
                  sm:text-xs
                  md:mb-5
                "
              >
                04 / Playground
              </p>
            </FadeUp>

            <h2
              className="
                font-display
                text-[clamp(3rem,13vw,4.5rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              <RevealText delay={0.05}>Things I make</RevealText>

              <RevealText delay={0.12}>
                <span className="text-white/35">just to explore.</span>
              </RevealText>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <FadeUp delay={0.18}>
              <p className="max-w-sm text-sm leading-6 text-white/45 md:ml-auto">
                Not everything needs a case study. Sometimes I just want to try
                an idea, play with a style, or see where it goes.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* ================= PLAYGROUND GRID ================= */}

        <div
          className="
            grid grid-cols-1
            gap-3
            pt-10
            sm:grid-cols-2 sm:gap-4 sm:pt-12
            md:grid-cols-12 md:pt-16
            lg:pt-20
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
                <RevealImage delay={(index % 2) * 0.08}>
                  <div
                    className={`
                      relative
                      overflow-hidden
                      bg-[#101010]
                      ${currentLayout.aspect}
                    `}
                  >
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

                    <div
                      className="
                        absolute inset-0
                        bg-linear-to-t
                        from-black/85
                        via-black/10
                        to-black/10
                        transition-colors duration-500
                        md:from-black/80
                      "
                    />

                    <span
                      className="
                        absolute left-4 top-4
                        text-[9px]
                        tracking-[0.15em]
                        text-white/50
                        sm:left-5 sm:top-5
                        sm:text-[10px]
                      "
                    >
                      {item.id}
                    </span>

                    <div
                      className="
                        absolute right-4 top-4
                        flex h-9 w-9
                        items-center justify-center
                        rounded-full
                        bg-[#3B82F6]
                        text-white
                        transition-all duration-300

                        sm:right-5 sm:top-5

                        md:h-10 md:w-10
                        md:translate-y-2
                        md:opacity-0

                        md:group-hover:translate-y-0
                        md:group-hover:opacity-100

                        lg:h-11 lg:w-11
                      "
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>

                    <div
                      className="
                        absolute inset-x-0 bottom-0
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
                              text-[9px] uppercase
                              tracking-[0.15em]
                              text-white/50
                              sm:mb-2
                              sm:text-[10px]
                            "
                          >
                            {item.category}
                          </p>

                          <h3
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
                          </h3>
                        </div>

                        <span className="shrink-0 text-[10px] text-white/40 sm:text-xs">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealImage>
              </article>
            );
          })}
        </div>

        <div
          className="
            mt-10
            flex
            border-t border-white/10
            pt-6
            sm:mt-12
            md:mt-16
            md:justify-end
            md:pt-8
          "
        >
          <FadeUp>
            <p
              className="
                max-w-sm
                text-xs leading-5
                text-white/25
                md:text-right
              "
            >
              Experiments, unfinished ideas, random screens — basically the
              stuff that doesn&apos;t fit anywhere else.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
