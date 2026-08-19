"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type CaseStudyProblemGoalsProps = {
  project: {
    problemGoals: {
      heading: string;
      headingHighlight?: string;

      challengeStatement: string;
      challengeStatementHighlight?: string;

      challenges: {
        title: string;
        description: string;
      }[];

      goal: string;
      goalHighlight?: string;
      goalDescription: string;

      principleTitle?: string;
      principleLines: string[];
    } | null;
  };
};

export function CaseStudyProblemGoals({ project }: CaseStudyProblemGoalsProps) {
  const problemGoals = project.problemGoals;

  const heading = problemGoals?.heading ?? "A lot to monitor.";

  const headingHighlight =
    problemGoals?.headingHighlight ?? "Not a lot of room for confusion.";

  const challengeStatement =
    problemGoals?.challengeStatement ??
    "The interface needed to show enough technical information to be useful,";

  const challengeStatementHighlight =
    problemGoals?.challengeStatementHighlight ??
    "without forcing users to process everything at once.";

  const challenges = problemGoals?.challenges ?? [];

  const goal = problemGoals?.goal ?? "Make the condition";

  const goalHighlight =
    problemGoals?.goalHighlight ?? "easy to understand at a glance.";

  const goalDescription =
    problemGoals?.goalDescription ??
    "Keep the technical detail available, but use structure, hierarchy, and visual priority to make the monitoring experience faster to read.";

  const principleTitle = problemGoals?.principleTitle ?? "Design principle";

  const principleLines = problemGoals?.principleLines ?? [
    "Clear first.",
    "Detailed second.",
  ];

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <section
      ref={sectionRef}
      id="problem-goals"
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
          BACKGROUND
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-48 top-[15%]
            h-80 w-80
            rounded-full
            bg-[#2563EB]/[0.025]
            blur-[100px]

            sm:h-100 sm:w-100
            sm:bg-[#2563EB]/[0.03]
            sm:blur-[120px]

            md:-right-56
            md:h-150 md:w-150
            md:bg-[#2563EB]/[0.04]
            md:blur-[150px]

            lg:-right-60
            lg:h-200 lg:w-200
            lg:blur-[160px]
          "
        />

        <div
          className="
            absolute
            -left-52 top-[68%]
            hidden
            h-100 w-100
            rounded-full
            bg-white/[0.012]
            blur-[140px]

            sm:block

            md:-left-60
            md:h-125 md:w-125
            md:bg-white/[0.015]
            md:blur-[160px]
          "
        />

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

        <motion.span
          style={{ y: numberY }}
          className="
            absolute
            -right-6 top-[31%]
            hidden
            select-none
            font-display
            text-[18rem]
            font-medium
            leading-none
            tracking-[-0.09em]
            text-white/[0.012]
            will-change-transform

            lg:block
            xl:text-[22rem]
          "
        >
          02
        </motion.span>
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-360">
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className="
            grid gap-8

            sm:gap-10

            md:grid-cols-12
            md:gap-8
          "
        >
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
                02 / Problem & Goal
              </p>
            </div>
          </motion.div>

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
              {heading}
              <br />
              <span className="text-white/30">{headingHighlight}</span>
            </h2>
          </motion.div>
        </div>

        {/* =========================================
            PROBLEM INTRO
        ========================================= */}

        <div
          className="
            relative
            mt-14
            grid gap-7
            pt-10

            sm:mt-16
            sm:gap-8
            sm:pt-12

            md:mt-20
            md:grid-cols-12
            md:gap-8
            md:pt-14

            lg:mt-32
            lg:pt-16
          "
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0 top-0
              h-px w-full
              origin-left
              bg-white/10
            "
          />

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
              The challenge
            </p>
          </motion.div>

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
              {challengeStatement}
              <span className="text-white/35">
                {" "}
                {challengeStatementHighlight}
              </span>
            </p>
          </motion.div>
        </div>

        {/* =========================================
            CHALLENGES
        ========================================= */}

        <div
          className="
            mt-10
            grid
            border-y border-white/10

            sm:mt-12

            md:mt-16
            md:grid-cols-3

            lg:mt-24
          "
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={`${index}-${challenge.title}`}
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                relative
                overflow-hidden
                py-6

                sm:py-7

                md:flex
                md:min-h-64
                md:flex-col
                md:px-5
                md:py-7

                lg:min-h-80
                lg:px-9
                lg:py-10

                ${
                  index !== challenges.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-white/0
                  transition-colors duration-500

                  md:group-hover:bg-white/[0.018]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24 -top-24
                  hidden
                  h-52 w-52
                  rounded-full
                  bg-[#3B82F6]/0
                  blur-[80px]
                  transition-colors duration-700

                  md:block
                  md:group-hover:bg-[#3B82F6]/[0.055]
                "
              />

              <div
                className="
                  relative z-10
                  flex items-center
                  justify-between
                "
              >
                <span
                  className="
                    font-display
                    text-[10px]
                    text-white/20
                    transition-colors duration-300

                    sm:text-xs

                    md:group-hover:text-[#3B82F6]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
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

              <div
                className="
                  relative z-10
                  mt-8

                  sm:mt-10

                  md:mt-auto
                  md:pt-12

                  lg:pt-16
                "
              >
                <h3
                  className="
                    max-w-xs
                    font-display
                    text-[1.65rem]
                    font-medium
                    leading-[1]
                    tracking-[-0.04em]
                    text-white/80
                    transition-colors duration-300

                    sm:text-3xl

                    md:text-[1.7rem]
                    md:group-hover:text-white

                    lg:text-4xl
                  "
                >
                  {challenge.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-[13px]
                    leading-6
                    text-white/35
                    transition-colors duration-300

                    sm:mt-4
                    sm:text-sm

                    md:leading-7
                    md:group-hover:text-white/45
                  "
                >
                  {challenge.description}
                </p>
              </div>

              <div
                className="
                  absolute
                  bottom-0 left-0
                  hidden
                  h-px w-0
                  bg-[#3B82F6]
                  transition-all duration-500

                  md:block
                  md:group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>

        {/* =========================================
            PROBLEM → DIRECTION
        ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            flex items-center gap-3

            sm:mt-16
            sm:gap-4

            md:mt-20
            md:gap-5

            lg:mt-24
          "
        >
          <span className="h-px min-w-0 flex-1 bg-white/10" />

          <div
            className="
              flex shrink-0
              items-center gap-2.5

              sm:gap-3
            "
          >
            <span
              className="
                text-[7px] uppercase
                tracking-[0.14em]
                text-white/20

                sm:text-[9px]
                sm:tracking-[0.18em]

                md:text-[10px]
                md:tracking-[0.2em]
              "
            >
              From problem
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                h-px w-5
                origin-left
                bg-[#3B82F6]

                sm:w-8
              "
            />

            <span
              className="
                text-[7px] uppercase
                tracking-[0.14em]
                text-[#3B82F6]

                sm:text-[9px]
                sm:tracking-[0.18em]

                md:text-[10px]
                md:tracking-[0.2em]
              "
            >
              To direction
            </span>
          </div>

          <span className="h-px min-w-0 flex-1 bg-white/10" />
        </motion.div>

        {/* =========================================
            GOAL
        ========================================= */}

        <div
          className="
            mt-12
            grid gap-7

            sm:mt-16
            sm:gap-8

            md:mt-20
            md:grid-cols-12
            md:gap-8

            lg:mt-28
          "
        >
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
                  text-[9px] uppercase
                  tracking-[0.18em]
                  text-[#3B82F6]

                  sm:text-[10px]
                "
              >
                The goal
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
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
            <p
              className="
                max-w-5xl
                font-display
                text-[clamp(2.35rem,11vw,3.5rem)]
                font-medium
                leading-[1]
                tracking-[-0.045em]
                text-white/90

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              {goal}

              <span className="text-white/30"> {goalHighlight}</span>
            </p>

            <div
              className="
                mt-8
                grid gap-8
                border-t border-white/10
                pt-6

                sm:mt-10
                sm:pt-7

                md:mt-12
                md:grid-cols-12
                md:gap-8
                md:pt-8
              "
            >
              <p
                className="
                  max-w-xl
                  text-[13px]
                  leading-6
                  text-white/40

                  sm:text-sm
                  sm:leading-7

                  md:col-span-7
                  md:text-base
                  md:leading-8
                "
              >
                {goalDescription}
              </p>

              <div
                className="
                  md:col-span-5
                  md:flex
                  md:justify-end
                "
              >
                <div
                  className="
                    relative
                    max-w-xs
                    border-l border-[#3B82F6]/50
                    pl-4

                    sm:pl-5
                  "
                >
                  <p
                    className="
                      text-[8px] uppercase
                      tracking-[0.16em]
                      text-white/20

                      sm:text-[10px]
                      sm:tracking-[0.18em]
                    "
                  >
                    {principleTitle}
                  </p>

                  <p
                    className="
                      mt-2
                      font-display
                      text-lg
                      font-medium
                      leading-tight
                      tracking-[-0.025em]
                      text-white/65

                      sm:text-xl
                    "
                  >
                    {principleLines.map((line, index) => (
                      <span key={`${index}-${line}`} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            SECTION END
        ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            mt-16
            flex items-end
            pb-5

            sm:mt-20

            md:mt-24

            lg:mt-36
          "
        >
          <span
            className="
              font-display
              text-[clamp(5.5rem,26vw,9rem)]
              font-medium
              leading-[0.65]
              tracking-[-0.08em]
              text-white/[0.025]

              sm:text-[clamp(7rem,22vw,11rem)]

              md:text-[clamp(9rem,18vw,12rem)]

              lg:text-[clamp(10rem,18vw,14rem)]
            "
          >
            02
          </span>

          <p
            className="
              ml-auto
              max-w-32
              pb-0.5
              text-right
              text-[8px] uppercase
              leading-4
              tracking-[0.14em]
              text-white/20

              sm:max-w-none
              sm:pb-1
              sm:text-[9px]
              sm:tracking-[0.18em]

              md:text-[10px]
            "
          >
            Problem → Direction
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
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
      </div>
    </section>
  );
}
