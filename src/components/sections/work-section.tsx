import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";
import { RevealImage } from "@/src/components/motion/reveal-image";
import { Stagger, StaggerItem } from "@/src/components/motion/stagger";

type WorkProject = {
  id: string;
  href: string;
  category: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

type WorkSectionProps = {
  projects: WorkProject[];
};

export function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section
      id="work"
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
        <div
          className="
            grid gap-7
            border-b border-white/10
            pb-10
            md:grid-cols-12 md:items-end md:gap-8 md:pb-12
            lg:pb-16
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
                "
              >
                01 / Selected Work
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
              <RevealText delay={0.05}>A few things</RevealText>

              <RevealText delay={0.12}>I&apos;ve worked on.</RevealText>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <FadeUp delay={0.18}>
              <p
                className="
                  max-w-sm
                  text-sm leading-6
                  text-white/45
                  md:ml-auto
                "
              >
                A mix of projects where I explored problems, tested ideas, and
                turned them into interfaces people can actually use.
              </p>
            </FadeUp>
          </div>
        </div>

        <div>
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <Link
                key={project.id}
                href={project.href}
                scroll={true}
                className="group block border-b border-white/10"
              >
                <article
                  className="
                    grid gap-y-6
                    py-10
                    sm:py-12
                    md:grid-cols-12 md:gap-x-6 md:gap-y-8 md:py-16
                    lg:gap-x-12 lg:py-24
                  "
                >
                  <div
                    className="
                      order-1
                      flex items-center justify-between
                      md:col-span-1 md:block md:self-start
                    "
                  >
                    <FadeUp>
                      <span className="font-display text-xs text-white/30 md:text-sm">
                        {project.id}
                      </span>
                    </FadeUp>

                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#3B82F6] md:hidden">
                      {project.category}
                    </span>
                  </div>

                  <div
                    className={`
                      order-2
                      md:col-span-7
                      ${isReversed ? "md:order-3" : "md:order-2"}
                    `}
                  >
                    <RevealImage>
                      <div className="relative aspect-16/10 overflow-hidden bg-[#101010]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="
                            object-cover
                            transition-all
                            duration-700
                            ease-out
                            group-hover:scale-[1.025]
                            group-hover:brightness-105
                            md:group-hover:scale-[1.035]
                          "
                          sizes="(max-width: 768px) 100vw, 58vw"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-black/5" />

                        <div
                          className="
                            absolute right-4 top-4
                            flex h-9 w-9
                            items-center justify-center
                            rounded-full
                            bg-black/40
                            backdrop-blur-sm
                            md:hidden
                          "
                        >
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="text-white"
                          />
                        </div>
                      </div>
                    </RevealImage>
                  </div>

                  <div
                    className={`
                      order-3
                      flex flex-col justify-center
                      md:col-span-4
                      ${
                        isReversed
                          ? "md:order-2 md:pr-4 lg:pr-8"
                          : "md:order-3 md:pl-4 lg:pl-8"
                      }
                    `}
                  >
                    <Stagger stagger={0.07}>
                      {/* Category */}
                      <StaggerItem>
                        <p className="mb-3 hidden text-xs uppercase tracking-[0.14em] text-[#3B82F6] md:block">
                          {project.category}
                        </p>
                      </StaggerItem>

                      {/* Title */}
                      <StaggerItem>
                        <div className="flex items-start justify-between gap-5">
                          <h3
                            className="
                              font-display
                              text-[clamp(2.25rem,10vw,3.25rem)]
                              font-medium
                              leading-[0.95]
                              tracking-tighter
                              sm:text-5xl
                              md:text-4xl
                              lg:text-5xl
                              xl:text-6xl
                              2xl:text-7xl
                            "
                          >
                            {project.title}
                          </h3>

                          <ArrowUpRight
                            size={26}
                            strokeWidth={1.5}
                            className="
                              mt-1 hidden shrink-0
                              text-white/30
                              transition-all duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:text-[#3B82F6]
                              md:block
                            "
                          />
                        </div>
                      </StaggerItem>

                      {/* Description */}
                      <StaggerItem>
                        <p
                          className="
                            mt-4 max-w-md
                            text-sm leading-6
                            text-white/45
                            md:mt-5
                            lg:mt-6
                            lg:text-base lg:leading-7
                          "
                        >
                          {project.description}
                        </p>
                      </StaggerItem>

                      {/* Tags */}
                      <StaggerItem>
                        <div className="mt-5 flex flex-wrap gap-2 md:mt-6 lg:mt-7">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                border border-white/15
                                px-2.5 py-1.5
                                text-[10px] text-white/55
                                transition-colors duration-300
                                group-hover:border-white/25
                                sm:px-3 sm:text-[11px]
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </StaggerItem>

                      {/* CTA */}
                      <StaggerItem>
                        <div
                          className="
                            mt-7 flex items-center gap-2
                            text-sm text-white/75
                            md:mt-8
                            lg:mt-10
                          "
                        >
                          <span className="relative">
                            View Case Study
                            <span
                              className="
                                absolute -bottom-1 left-0
                                h-px w-0
                                bg-[#3B82F6]
                                transition-all duration-300
                                group-hover:w-full
                              "
                            />
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="
                              transition-transform duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                            "
                          />
                        </div>
                      </StaggerItem>
                    </Stagger>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-start pt-8 sm:justify-end md:pt-10">
          <FadeUp>
            <Link
              href="/work"
              scroll={true}
              className="
                group inline-flex items-center gap-3
                text-sm text-white/50
                transition-colors duration-300
                hover:text-white
              "
            >
              See all projects
              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
