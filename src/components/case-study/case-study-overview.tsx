"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type CaseStudyOverviewProps = {
  project: {
    title: string;
    role: string;
    platform: string;
    year: string;

    overview: {
      statement: string;
      statementHighlight?: string;

      storyTitle: string;
      storyHighlight?: string;

      storyParagraphs: string[];

      tools: string[];
      contributions: string[];

      contributionTitle?: string;
      contributionHighlight?: string;
    } | null;
  };
};

export function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  const overview = project.overview;

  const projectDetails = [
    {
      label: "Role",
      value: project.role,
    },
    {
      label: "Timeline",
      value: project.year,
    },
    {
      label: "Platform",
      value: project.platform,
    },
  ];

  const tools = overview?.tools ?? [];
  const contributions = overview?.contributions ?? [];

  const statement = overview?.statement ?? "Making technical data";

  const statementHighlight =
    overview?.statementHighlight ?? "easier to see, read, and understand.";

  const storyTitle = overview?.storyTitle ?? project.title;

  const storyHighlight = overview?.storyHighlight ?? "";

  const storyParagraphs = overview?.storyParagraphs ?? [];

  const contributionTitle =
    overview?.contributionTitle ?? "From early structure";

  const contributionHighlight =
    overview?.contributionHighlight ?? "to the final interface.";

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="
        relative overflow-hidden
        bg-[#080808]
        px-5 py-20
        text-white

        sm:px-6 sm:py-24
        md:px-10 md:py-28
        lg:px-16 lg:py-40
      "
    >
      {/* =========================================
          BACKGROUND DETAILS
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        {/* Ambient blue glow */}

        <div
          className="
            absolute
            -right-40 top-[6%]
            h-80 w-80
            rounded-full
            bg-[#3B82F6]/[0.025]
            blur-[100px]

            sm:h-100 sm:w-100
            sm:bg-[#3B82F6]/[0.03]
            sm:blur-[120px]

            md:-right-48
            md:h-140 md:w-140
            md:bg-[#3B82F6]/[0.035]
            md:blur-[140px]

            lg:h-175 lg:w-175
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            -left-52 top-[58%]
            hidden
            h-100 w-100
            rounded-full
            bg-white/[0.015]
            blur-[140px]

            sm:block

            md:-left-60
            md:h-125 md:w-125
            md:blur-[160px]
          "
        />

        {/* Editorial vertical line */}

        <div
          className="
            absolute
            bottom-0 right-10 top-0
            hidden w-px
            bg-white/[0.025]

            md:block
            lg:right-16
          "
        />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-360">
        {/* =========================================
            TOP
        ========================================= */}

        <div
          className="
            grid gap-8

            sm:gap-10

            md:grid-cols-12
            md:gap-8
          "
        >
          {/* Section label */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span
                className="
                  h-1.5 w-1.5
                  shrink-0 rounded-full
                  bg-[#3B82F6]
                "
              />

              <p
                className="
                  text-[9px]
                  font-medium uppercase
                  tracking-[0.18em]
                  text-[#3B82F6]

                  sm:text-[10px]
                  sm:tracking-[0.2em]

                  md:text-xs
                "
              >
                01 / Overview
              </p>
            </div>
          </motion.div>

          {/* Main statement */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-9
              lg:col-span-8
            "
          >
            <h2
              className="
                max-w-5xl
                font-display
                text-[clamp(2.65rem,12vw,4rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.05em]

                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
              "
            >
              {statement}

              <span className="text-white/30"> {statementHighlight}</span>
            </h2>
          </motion.div>
        </div>

        {/* =========================================
            BIG NUMBER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="
            relative
            mt-14
            flex items-end
            pb-5

            sm:mt-16
            sm:pb-6

            md:mt-20
            md:pb-8

            lg:mt-32
          "
        >
          <motion.span
            style={{ y: numberY }}
            className="
              font-display
              text-[clamp(5.5rem,26vw,9rem)]
              font-medium
              leading-[0.65]
              tracking-[-0.08em]
              text-white/[0.04]
              will-change-transform

              sm:text-[clamp(7rem,22vw,11rem)]

              md:text-[clamp(9rem,18vw,13rem)]

              lg:text-[clamp(10rem,18vw,15rem)]
            "
          >
            01
          </motion.span>

          {/* Project name */}

          <div
            className="
              ml-auto
              max-w-32
              pb-0.5
              text-right

              sm:max-w-none
              sm:pb-1

              md:pb-2
            "
          >
            <p
              className="
                text-[8px] uppercase
                leading-4
                tracking-[0.16em]
                text-white/25

                sm:text-[9px]
                sm:tracking-[0.2em]

                md:text-[10px]
              "
            >
              {project.title}
            </p>
          </div>

          {/* Animated divider */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0 left-0
              h-px w-full
              origin-left
              bg-white/10
            "
          />
        </motion.div>

        {/* =========================================
            PROJECT STORY
        ========================================= */}

        <div
          className="
            grid gap-7
            border-b border-white/10
            py-10

            sm:gap-8
            sm:py-12

            md:grid-cols-12
            md:gap-8
            md:py-16

            lg:py-20
          "
        >
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-3"
          >
            <p
              className="
                text-[9px] uppercase
                tracking-[0.18em]
                text-white/25

                sm:text-[10px]
              "
            >
              The project
            </p>
          </motion.div>

          {/* Story */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-9
              lg:col-span-8
            "
          >
            <p
              className="
                max-w-4xl
                font-display
                text-[1.7rem]
                font-medium
                leading-[1.13]
                tracking-[-0.035em]
                text-white/85

                sm:text-3xl
                sm:leading-[1.15]

                md:text-4xl

                lg:text-[2.75rem]
                lg:leading-[1.18]
              "
            >
              {storyTitle}

              {storyHighlight && (
                <span className="text-white/35"> {storyHighlight}</span>
              )}
            </p>

            {storyParagraphs.length > 0 && (
              <div
                className="
                  mt-6
                  max-w-2xl

                  sm:mt-8

                  md:ml-auto
                  md:mt-10
                "
              >
                {storyParagraphs.map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(0, 20)}`}
                    className={`
                      text-[13px]
                      leading-6
                      text-white/40

                      sm:text-sm
                      sm:leading-7

                      md:text-base
                      md:leading-8

                      ${index !== 0 ? "mt-4 sm:mt-5" : ""}
                    `}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* =========================================
            PROJECT DETAILS + CONTRIBUTIONS
        ========================================= */}

        <div
          className="
            grid gap-12
            pt-10

            sm:pt-12

            md:grid-cols-12
            md:gap-8
            md:pt-16

            lg:pt-20
          "
        >
          {/* =========================================
              PROJECT META
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-4
              lg:col-span-3
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
              Project details
            </p>

            <div
              className="
                mt-5
                grid grid-cols-2
                border-t border-white/10

                sm:mt-6

                md:block
              "
            >
              {projectDetails.map((item, index) => (
                <div
                  key={item.label}
                  className={`
                    min-w-0
                    border-b border-white/10
                    py-4

                    sm:py-5

                    md:py-5

                    ${
                      index % 2 === 1
                        ? "border-l border-white/10 pl-4 md:border-l-0 md:pl-0"
                        : ""
                    }

                    ${index === 2 ? "col-span-2 md:col-span-1" : ""}
                  `}
                >
                  <p
                    className="
                      text-[8px] uppercase
                      tracking-[0.16em]
                      text-white/25

                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className={`
                      mt-2

                      ${
                        index === 0
                          ? `
                            font-display
                            text-lg
                            font-medium
                            tracking-[-0.03em]
                            text-white/80

                            sm:text-xl

                            md:text-2xl
                          `
                          : `
                            text-[13px]
                            text-white/60

                            sm:text-sm
                          `
                      }
                    `}
                  >
                    {item.value}
                  </p>
                </div>
              ))}

              {/* Tools */}

              <div
                className="
                  col-span-2
                  py-4

                  sm:py-5

                  md:col-span-1
                "
              >
                <p
                  className="
                    text-[8px] uppercase
                    tracking-[0.16em]
                    text-white/25

                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  Tools
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="
                        border border-white/10
                        px-2.5 py-1.5
                        text-[9px]
                        text-white/45
                        transition-colors duration-300

                        hover:border-white/20
                        hover:text-white/70

                        sm:text-[10px]
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              CONTRIBUTIONS
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              md:col-span-8

              lg:col-start-5
              lg:col-span-8
            "
          >
            {/* Heading */}

            <div
              className="
                flex items-end
                justify-between
                gap-6
              "
            >
              <div>
                <p
                  className="
                    text-[9px] uppercase
                    tracking-[0.18em]
                    text-white/25

                    sm:text-[10px]
                  "
                >
                  What I worked on
                </p>

                <p
                  className="
                    mt-3
                    max-w-lg
                    font-display
                    text-[1.65rem]
                    font-medium
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-white/80

                    sm:text-3xl
                    sm:leading-[1.15]
                  "
                >
                  {contributionTitle}

                  <span className="text-white/30">
                    {" "}
                    {contributionHighlight}
                  </span>
                </p>
              </div>

              <span
                className="
                  hidden
                  font-display
                  text-5xl
                  tracking-[-0.06em]
                  text-white/[0.04]

                  lg:block
                "
              >
                {String(contributions.length).padStart(2, "0")}
              </span>
            </div>

            {/* Contribution list */}

            <div
              className="
                mt-6
                border-t border-white/10

                sm:mt-8
              "
            >
              {contributions.map((item, index) => (
                <motion.div
                  key={`${index}-${item}`}
                  initial={{
                    opacity: 0,
                    y: 10,
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
                    duration: 0.5,
                    delay: index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    flex items-center
                    justify-between
                    border-b border-white/10
                    py-3.5

                    sm:py-4

                    md:py-5
                  "
                >
                  <div
                    className="
                      flex min-w-0
                      items-center
                      gap-4

                      sm:gap-5

                      md:gap-8
                    "
                  >
                    <span
                      className="
                        w-5 shrink-0
                        text-[8px]
                        text-white/20

                        sm:text-[9px]

                        md:text-[10px]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        truncate
                        text-[13px]
                        text-white/55
                        transition-all duration-300

                        sm:text-sm

                        md:text-lg
                        md:group-hover:translate-x-1
                        md:group-hover:text-white
                      "
                    >
                      {item}
                    </span>
                  </div>

                  <div
                    className="
                      ml-4
                      flex shrink-0
                      items-center gap-4
                    "
                  >
                    <span
                      className="
                        hidden
                        text-[9px] uppercase
                        tracking-[0.15em]
                        text-white/0
                        transition-colors duration-300

                        lg:block
                        lg:group-hover:text-white/20
                      "
                    >
                      Contribution
                    </span>

                    <span
                      className="
                        h-1.5 w-1.5
                        shrink-0 rounded-full
                        bg-white/10
                        transition-all duration-300

                        md:group-hover:scale-125
                        md:group-hover:bg-[#3B82F6]
                      "
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
