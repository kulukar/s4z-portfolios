"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type CaseStudyNextProjectProps = {
  currentProject: {
    number: string;
  };

  nextProject: {
    number: string;
    total: string;
    title: string;
    category: string;
    year: string;
    href: string;
    image: string;
  };
};

export function CaseStudyNextProject({
  currentProject,
  nextProject,
}: CaseStudyNextProjectProps) {
  const titleWords = nextProject.title.split(" ");

  return (
    <section
      id="next-project"
      className="
        relative overflow-hidden
        bg-[#080808]
        px-6 pb-8 pt-16
        text-white

        sm:pt-20
        md:px-10 md:pt-24
        lg:px-16 lg:pt-28
      "
    >
      {/* ================= BACKGROUND WORD ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2 top-[50%]
          -translate-x-1/2 -translate-y-1/2
          select-none
          whitespace-nowrap

          font-display
          text-[clamp(10rem,28vw,28rem)]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-white/[0.012]
        "
      >
        NEXT
      </div>

      <div className="relative z-10 mx-auto max-w-360">
        {/* ================= TOP LINE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex items-center justify-between
            border-t border-white/10
            pt-5

            md:pt-6
          "
        >
          <p
            className="
              text-[9px] uppercase
              tracking-[0.2em]
              text-white/25

              sm:text-[10px]
            "
          >
            End / {currentProject.number}
          </p>

          <p
            className="
              text-[9px] uppercase
              tracking-[0.2em]
              text-white/25

              sm:text-[10px]
            "
          >
            Next / {nextProject.number}
          </p>
        </motion.div>

        {/* ================= HANDOFF ================= */}

        <div
          className="
            grid gap-12
            py-12

            sm:gap-14
            sm:py-16

            md:grid-cols-12
            md:items-end
            md:gap-8
            md:py-20

            lg:py-24
          "
        >
          {/* ================= CURRENT PROJECT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-4
              lg:col-span-4
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

              <p
                className="
                  text-[9px] uppercase
                  tracking-[0.2em]
                  text-white/30

                  sm:text-[10px]
                "
              >
                Continue exploring
              </p>
            </div>

            <p
              className="
                mt-6
                max-w-xs
                font-display
                text-2xl
                font-medium
                leading-[1.05]
                tracking-[-0.035em]
                text-white/55

                sm:text-3xl
                md:text-3xl
                lg:text-4xl
              "
            >
              Another project,
              <br />
              <span className="text-white/20">another problem to solve.</span>
            </p>

            <p
              className="
                mt-5
                max-w-xs
                text-sm leading-6
                text-white/30
              "
            >
              Continue to the next selected project.
            </p>
          </motion.div>

          {/* ================= NEXT PROJECT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-7
              md:col-start-6

              lg:col-span-6
              lg:col-start-7
            "
          >
            {/* Small header */}

            <div className="flex items-center justify-between">
              <p
                className="
                  text-[10px] font-medium uppercase
                  tracking-[0.2em]
                  text-[#3B82F6]

                  sm:text-xs
                "
              >
                Up next
              </p>

              <span
                className="
                  font-display
                  text-xs
                  text-white/20

                  sm:text-sm
                "
              >
                {nextProject.number} / {nextProject.total}
              </span>
            </div>

            {/* Title */}

            <Link
              href={nextProject.href}
              className="
                group/title
                mt-5 block

                sm:mt-6
                md:mt-8
              "
            >
              <h3
                className="
                  font-display
                  text-[clamp(3.4rem,12vw,5rem)]
                  font-medium
                  leading-[0.84]
                  tracking-[-0.06em]

                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-[6.5rem]
                "
              >
                {titleWords.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className={`
                      block
                      transition-colors duration-500
                      ${
                        index === 0
                          ? "text-white"
                          : "text-white/30 group-hover/title:text-white/60"
                      }
                    `}
                  >
                    {word}
                  </span>
                ))}
              </h3>
            </Link>

            {/* Metadata / CTA */}

            <div
              className="
                mt-7
                flex items-end justify-between
                gap-5
                border-t border-white/10
                pt-5

                sm:mt-8

                md:mt-10
                md:pt-6
              "
            >
              <div>
                <p
                  className="
                    max-w-45
                    text-[9px] uppercase
                    leading-5
                    tracking-[0.18em]
                    text-white/25

                    sm:max-w-none
                    sm:text-[10px]
                  "
                >
                  {nextProject.category}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-white/35

                    sm:mt-2
                    sm:text-sm
                  "
                >
                  {nextProject.year}
                </p>
              </div>

              <Link
                href={nextProject.href}
                aria-label={`View ${nextProject.title} case study`}
                className="
                  group/link
                  flex shrink-0 items-center gap-3
                  text-[9px] uppercase
                  tracking-[0.16em]
                  text-white/40
                  transition-colors duration-300

                  hover:text-white

                  sm:text-[10px]
                "
              >
                <span className="hidden sm:inline">View project</span>

                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/15
                    transition-all duration-300

                    group-hover/link:border-[#3B82F6]
                    group-hover/link:bg-[#3B82F6]

                    sm:h-11 sm:w-11
                  "
                >
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform duration-300

                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= IMAGE AREA ================= */}

        <div
          className="
            relative
            pb-14

            sm:pb-16
            md:pb-20
            lg:pb-24
          "
        >
          {/* Decorative label */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              flex items-center gap-4

              md:mb-0
              md:absolute
              md:left-0
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <span
              className="
                font-display
                text-4xl
                font-medium
                tracking-[-0.055em]
                text-white/[0.05]

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {nextProject.number}
            </span>

            <span
              className="
                hidden h-px
                w-12
                bg-white/10

                md:block
                lg:w-20
              "
            />
          </motion.div>

          {/* Preview */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:ml-auto
              md:w-[76%]

              lg:w-[74%]
            "
          >
            <Link
              href={nextProject.href}
              aria-label={`View ${nextProject.title} case study`}
              className="
                group/image
                relative block
                aspect-4/3
                overflow-hidden
                bg-[#101010]

                transition-transform
                duration-500
                ease-out

                hover:-translate-y-1

                sm:aspect-16/10
                lg:aspect-video
              "
            >
              <Image
                src={nextProject.image}
                alt={`${nextProject.title} preview`}
                fill
                className="
                  object-cover
                  object-top
                  transition-transform
                  duration-1000
                  ease-out

                  group-hover/image:scale-[1.018]
                "
                sizes="
                  (max-width: 767px) 100vw,
                  76vw
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-black/10
                  transition-colors duration-500

                  group-hover/image:bg-black/0
                "
              />

              <div
                className="
                  absolute left-4 top-4

                  sm:left-5 sm:top-5
                  md:left-6 md:top-6
                "
              >
                <p
                  className="
                    text-[9px] uppercase
                    tracking-[0.18em]
                    text-white/55

                    sm:text-[10px]
                  "
                >
                  Project / {nextProject.number}
                </p>
              </div>

              <div
                className="
                  absolute
                  bottom-4 right-4

                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-black

                  transition-all duration-300

                  group-hover/image:rotate-[-8deg]
                  group-hover/image:bg-[#3B82F6]
                  group-hover/image:text-white

                  sm:bottom-5 sm:right-5
                  sm:h-11 sm:w-11

                  md:bottom-6 md:right-6
                  md:h-12 md:w-12
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform duration-300

                    group-hover/image:-translate-y-0.5
                    group-hover/image:translate-x-0.5
                  "
                />
              </div>
            </Link>

            {/* Image footer */}

            <div
              className="
                mt-4
                flex items-center justify-between

                sm:mt-5
              "
            >
              <p
                className="
                  text-[9px] uppercase
                  tracking-[0.18em]
                  text-white/25

                  sm:text-[10px]
                "
              >
                {nextProject.title}
              </p>

              <p
                className="
                  text-[9px] uppercase
                  tracking-[0.18em]
                  text-white/20

                  sm:text-[10px]
                "
              >
                {nextProject.year}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= FOOTER NAV ================= */}

        <div
          className="
            flex items-center justify-between
            border-y border-white/10
            py-5

            md:py-6
          "
        >
          <Link
            href="/#work"
            className="
              group/back
              inline-flex items-center gap-2.5
              text-[9px] uppercase
              tracking-[0.18em]
              text-white/25
              transition-colors duration-300

              hover:text-white

              sm:text-[10px]
            "
          >
            <ArrowLeft
              size={13}
              className="
                transition-transform duration-300
                group-hover/back:-translate-x-1
              "
            />
            Selected Work
          </Link>

          <Link
            href={nextProject.href}
            className="
              group/next
              inline-flex items-center gap-2.5
              text-[9px] uppercase
              tracking-[0.18em]
              text-white/25
              transition-colors duration-300

              hover:text-white

              sm:text-[10px]
            "
          >
            {nextProject.number} / {nextProject.total}
            <ArrowUpRight
              size={13}
              className="
                transition-transform duration-300

                group-hover/next:-translate-y-0.5
                group-hover/next:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
