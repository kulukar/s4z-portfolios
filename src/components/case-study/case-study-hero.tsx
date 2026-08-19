"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

type CaseStudyHeroProps = {
  project: {
    title: string;
    category: string;
    coverImage: string | null;

    role: string;
    context: string;
    platform: string;
    year: string;
    readTime: string;

    hero: {
      eyebrow?: string;
      headline?: string;
      description?: string;
    } | null;
  };
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const projectInfo = [
    {
      label: "Role",
      value: project.role,
    },
    {
      label: "Context",
      value: project.context,
    },
    {
      label: "Platform",
      value: project.platform,
    },
    {
      label: "Year",
      value: project.year,
    },
    {
      label: "Read Time",
      value: project.readTime,
    },
  ];

  const titleWords = project.title.trim().split(/\s+/);

  const firstTitleWord = titleWords[0];
  const remainingTitleWords = titleWords.slice(1).join(" ");

  const heroEyebrow = project.hero?.eyebrow ?? project.category;
  const heroHeadline = project.hero?.headline ?? project.title;
  const heroDescription = project.hero?.description ?? "";
  const heroImage = project.coverImage ?? "/images/projects/placeholder.jpg";

  return (
    <section
      id="case-study-hero"
      className="
        relative overflow-hidden
        bg-[#080808]
        px-5 pb-12 pt-20
        text-white

        sm:px-6 sm:pb-16 sm:pt-24

        md:px-10 md:pb-20 md:pt-28

        lg:px-16 lg:pb-24 lg:pt-36
      "
    >
      <div className="mx-auto max-w-360">
        {/* =========================================
            TOP NAVIGATION
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex items-center justify-between
            gap-4
            border-b border-white/10
            pb-4

            sm:pb-5
          "
        >
          <Link
            href="/#work"
            className="
              group
              inline-flex shrink-0 items-center
              gap-2
              text-[9px] uppercase
              tracking-[0.14em]
              text-white/40
              transition-colors duration-300

              hover:text-white

              sm:gap-2.5
              sm:text-[10px]
              sm:tracking-[0.16em]

              md:text-xs
            "
          >
            <ArrowLeft
              size={13}
              className="
                transition-transform duration-300
                group-hover:-translate-x-1

                sm:h-3.5 sm:w-3.5
              "
            />
            Back to work
          </Link>

          <p
            className="
              shrink-0
              text-[8px] uppercase
              tracking-[0.14em]
              text-[#3B82F6]

              sm:text-[10px]
              sm:tracking-[0.18em]

              md:text-xs
            "
          >
            01 / Case Study
          </p>
        </motion.div>

        {/* =========================================
            PROJECT TITLE
        ========================================= */}

        <div
          className="
            pt-9

            sm:pt-12
            md:pt-16
            lg:pt-20
          "
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span
                className="
                  h-1.5 w-1.5
                  shrink-0 rounded-full
                  bg-[#3B82F6]
                "
              />

              <p
                className="
                  text-[9px] font-medium uppercase
                  tracking-[0.16em]
                  text-[#3B82F6]

                  sm:text-[10px]
                  sm:tracking-[0.2em]

                  md:text-xs
                "
              >
                {heroEyebrow}
              </p>
            </motion.div>
          </div>

          <h1
            className="
              mt-4
              font-display
              text-[clamp(3.8rem,17vw,6rem)]
              font-medium uppercase
              leading-[0.8]
              tracking-[-0.06em]

              min-[420px]:text-[clamp(4.25rem,17vw,6.5rem)]

              sm:mt-5
              sm:text-[clamp(5.5rem,14vw,8rem)]
              sm:leading-[0.78]
              sm:tracking-[-0.065em]

              md:text-[clamp(7rem,12vw,11rem)]

              lg:text-[clamp(8rem,11vw,12rem)]
            "
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {firstTitleWord}
              </motion.span>
            </span>

            {remainingTitleWords && (
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-white/30"
                >
                  {remainingTitleWords}
                </motion.span>
              </span>
            )}
          </h1>
        </div>

        {/* =========================================
            PROJECT INTRO
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            grid

            sm:mt-12

            md:mt-14
            md:grid-cols-12

            lg:mt-16
          "
        >
          <div
            className="
              hidden

              md:col-span-4
              md:block

              lg:col-span-6
            "
          />

          <div
            className="
              md:col-span-8

              lg:col-span-6
            "
          >
            <p
              className="
                max-w-2xl
                font-display
                text-[1.75rem]
                font-medium
                leading-[1.08]
                tracking-[-0.035em]
                text-white/90

                sm:text-3xl
                sm:leading-[1.1]

                md:text-4xl

                lg:text-5xl
                lg:leading-[1.08]
              "
            >
              {heroHeadline}
            </p>

            {heroDescription && (
              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px]
                  leading-6
                  text-white/40

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                "
              >
                {heroDescription}
              </p>
            )}
          </div>
        </motion.div>

        {/* =========================================
            PROJECT INFO
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            border-y border-white/10

            sm:mt-14
            md:mt-16
            lg:mt-20
          "
        >
          <div
            className="
              grid grid-cols-2

              md:grid-cols-3

              lg:grid-cols-5
            "
          >
            {projectInfo.map((item, index) => (
              <div
                key={item.label}
                className={`
                  min-w-0
                  px-0 py-4

                  sm:py-5

                  md:px-6
                  md:py-6

                  lg:px-8
                  lg:py-7

                  ${index % 2 === 1 ? "border-l border-white/10 pl-4 sm:pl-5" : ""}

                  ${index >= 2 ? "border-t border-white/10" : ""}

                  ${
                    index === 4
                      ? `
                        col-span-2
                        border-l-0
                        pl-0

                        md:col-span-1
                        md:border-l
                        md:pl-6

                        lg:pl-8
                      `
                      : ""
                  }

                  ${
                    index === 3
                      ? `
                        md:border-l-0
                      `
                      : ""
                  }

                  lg:col-span-1
                  lg:border-t-0

                  ${index !== 0 ? "lg:border-l lg:border-white/10" : ""}
                `}
              >
                <p
                  className="
                    truncate
                    text-[8px] uppercase
                    tracking-[0.16em]
                    text-white/25

                    sm:text-[9px]

                    md:text-[10px]
                    md:tracking-[0.18em]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1.5
                    text-[12px]
                    leading-5
                    text-white/75

                    sm:mt-2
                    sm:text-sm

                    md:text-base
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            HERO IMAGE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.58,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group relative
            mt-8
            aspect-[4/3.4]
            overflow-hidden
            bg-[#101010]

            sm:mt-10
            sm:aspect-4/3

            md:mt-14
            md:aspect-16/10

            lg:mt-16
            lg:aspect-video
          "
        >
          <Image
            src={heroImage}
            alt={`${project.title} project preview`}
            fill
            priority
            className="
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out

              md:group-hover:scale-[1.015]
            "
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 95vw,
              90vw
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-black/5" />

          {/* =========================================
              IMAGE META
          ========================================= */}

          <div
            className="
              absolute
              left-3.5 top-3.5

              sm:left-5 sm:top-5

              md:left-7 md:top-7
            "
          >
            <p
              className="
                text-[8px] uppercase
                tracking-[0.16em]
                text-white/45

                sm:text-[9px]

                md:text-[10px]
                md:tracking-[0.18em]
              "
            >
              {project.title} / {project.platform}
            </p>
          </div>

          {/* =========================================
              SCROLL INDICATOR
          ========================================= */}

          <a
            href="#overview"
            aria-label="Scroll to project overview"
            className="
              group/scroll
              absolute
              bottom-3.5 right-3.5

              flex h-9 w-9
              items-center justify-center

              rounded-full
              border border-white/20
              bg-black/25
              text-white
              backdrop-blur-sm

              transition-all duration-300

              hover:border-[#3B82F6]
              hover:bg-[#3B82F6]

              sm:bottom-5 sm:right-5
              sm:h-10 sm:w-10

              md:bottom-7 md:right-7
              md:h-12 md:w-12
            "
          >
            <ArrowDown
              size={14}
              className="
                transition-transform duration-300

                group-hover/scroll:translate-y-1

                md:h-4 md:w-4
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
