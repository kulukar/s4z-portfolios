"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";

type Takeaway = {
  id: string;
  title: string;
  description: string;
};

type CaseStudyOutcomeProps = {
  project: {
    title: string;
    year: string;

    outcome: {
      heading: string;
      headingHighlight?: string;

      statement: string;
      statementHighlight?: string;

      supportingPoints: string[];

      takeawaysTitle?: string;
      takeawaysDescription?: string;
      takeaways: Takeaway[];

      reflection: string;
      reflectionHighlight?: string;

      endingLabel?: string;
      endingTitle: string;
      endingHighlight?: string;

      footerText?: string;
    } | null;
  };
};

export function CaseStudyOutcome({ project }: CaseStudyOutcomeProps) {
  const outcome = project.outcome;

  const heading = outcome?.heading ?? "Less about showing data.";

  const headingHighlight =
    outcome?.headingHighlight ?? "More about making it understandable.";

  const statement =
    outcome?.statement ??
    "A clearer monitoring experience where users can understand";

  const statementHighlight =
    outcome?.statementHighlight ??
    "the overall condition before diving into the details.";

  const supportingPoints = outcome?.supportingPoints ?? [
    "Information no longer competes for the same level of attention.",
    "Hierarchy, grouping, and status guide users toward what matters first.",
  ];

  const takeawaysTitle = outcome?.takeawaysTitle ?? "What I learned";

  const takeawaysDescription =
    outcome?.takeawaysDescription ??
    "Three principles I'd carry into the next product.";

  const takeaways = outcome?.takeaways ?? [
    {
      id: "01",
      title: "Clarity before decoration.",
      description:
        "With technical information, deciding what deserves attention matters more than adding more visual elements.",
    },
    {
      id: "02",
      title: "Context makes data useful.",
      description:
        "Status, hierarchy, and supporting context help users understand what the numbers actually mean.",
    },
    {
      id: "03",
      title: "Design the system, not just screens.",
      description:
        "Reusable patterns and clear relationships create a more consistent experience across the product.",
    },
  ];

  const reflection =
    outcome?.reflection ??
    "Good monitoring design isn't about showing everything.";

  const reflectionHighlight =
    outcome?.reflectionHighlight ??
    "It's about helping people know what to look at first.";

  const endingLabel = outcome?.endingLabel ?? "End of case study";

  const endingTitle = outcome?.endingTitle ?? "One project done.";

  const endingHighlight = outcome?.endingHighlight ?? "A few lessons kept.";

  const footerText = outcome?.footerText ?? `Case Study / ${project.year}`;

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundNumberY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="outcome"
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
      {/* BACKGROUND */}

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
            -right-40 top-[18%]
            h-80 w-80
            rounded-full
            bg-[#2563EB]/[0.025]
            blur-[100px]

            sm:h-100 sm:w-100

            md:-right-60
            md:h-150 md:w-150
            md:bg-[#2563EB]/[0.04]
            md:blur-[170px]
          "
        />

        <motion.span
          style={{ y: backgroundNumberY }}
          className="
            absolute
            -right-8 top-[8%]
            hidden
            select-none
            font-display
            text-[22rem]
            font-medium
            leading-none
            tracking-[-0.09em]
            text-white/[0.012]
            will-change-transform

            lg:block
            xl:text-[26rem]
          "
        >
          05
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto max-w-360">
        {/* HEADER */}

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
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />

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
                05 / Outcome
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

              <span className="text-white/30"> {headingHighlight}</span>
            </h2>
          </motion.div>
        </div>

        {/* OUTCOME STATEMENT */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            border-y border-white/10
            py-9

            sm:mt-16
            sm:py-10

            md:mt-20
            md:py-14

            lg:mt-28
            lg:py-16
          "
        >
          <div
            className="
              grid gap-6

              sm:gap-8

              md:grid-cols-12
              md:gap-8
            "
          >
            <div className="md:col-span-3">
              <p
                className="
                  text-[9px] uppercase
                  tracking-[0.16em]
                  text-white/25

                  sm:text-[10px]
                  sm:tracking-[0.18em]
                "
              >
                The outcome
              </p>
            </div>

            <div
              className="
                md:col-span-9
                lg:col-span-8
              "
            >
              <p
                className="
                  max-w-4xl
                  font-display
                  text-2xl
                  font-medium
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-white/85

                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {statement}

                <span className="text-white/30"> {statementHighlight}</span>
              </p>

              <div
                className="
                  mt-7
                  grid gap-6

                  sm:mt-9
                  sm:grid-cols-2

                  md:mt-10
                "
              >
                {supportingPoints.map((point, index) => (
                  <div key={`${index}-${point}`}>
                    <span
                      className={`
                        block h-px w-8
                        ${index === 0 ? "bg-[#3B82F6]" : "bg-white/15"}
                      `}
                    />

                    <p
                      className="
                        mt-3
                        max-w-sm
                        text-[13px] leading-6
                        text-white/35

                        sm:mt-4
                        sm:text-sm
                        sm:leading-7

                        md:text-base
                      "
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* TAKEAWAYS */}

        <div
          className="
            mt-16

            sm:mt-20
            md:mt-24
            lg:mt-32
          "
        >
          <div
            className="
              grid gap-7

              sm:gap-8

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
              <p
                className="
                  text-[9px] uppercase
                  tracking-[0.16em]
                  text-white/25

                  sm:text-[10px]
                  sm:tracking-[0.18em]
                "
              >
                {takeawaysTitle}
              </p>

              <p
                className="
                  mt-3
                  max-w-xs
                  text-[12px] leading-5
                  text-white/30

                  sm:mt-4
                  sm:text-sm
                  sm:leading-6
                "
              >
                {takeawaysDescription}
              </p>
            </motion.div>

            <div
              className="
                md:col-span-9
                lg:col-span-8
              "
            >
              <div className="border-t border-white/10">
                {takeaways.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      grid gap-3
                      border-b border-white/10
                      py-5

                      sm:grid-cols-12
                      sm:gap-5
                      sm:py-6

                      md:gap-6
                      md:py-8
                    "
                  >
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

                    <div className="sm:col-span-2">
                      <span
                        className="
                          font-display
                          text-base
                          tracking-[-0.03em]
                          text-white/15
                          transition-colors duration-300

                          sm:text-lg

                          md:group-hover:text-[#3B82F6]
                        "
                      >
                        {item.id}
                      </span>
                    </div>

                    <div className="sm:col-span-5">
                      <h3
                        className="
                          max-w-md
                          font-display
                          text-xl
                          font-medium
                          leading-[1.08]
                          tracking-[-0.035em]
                          text-white/75
                          transition-colors duration-300

                          sm:text-2xl

                          md:text-3xl
                          md:group-hover:text-white
                        "
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="sm:col-span-5">
                      <p
                        className="
                          max-w-md
                          text-[12px] leading-6
                          text-white/35

                          sm:text-sm
                          sm:leading-7

                          md:text-base
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FINAL REFLECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-20

            sm:mt-24
            md:mt-28
            lg:mt-36
          "
        >
          <div
            className="
              relative
              overflow-hidden
              border-y border-white/10
              py-10

              sm:py-12
              md:py-16
              lg:py-20
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-[35%] top-1/2
                h-52 w-52
                -translate-y-1/2
                rounded-full
                bg-[#2563EB]/[0.035]
                blur-[90px]

                md:h-72
                md:w-72
                md:bg-[#2563EB]/[0.045]
                md:blur-[110px]
              "
            />

            <div
              className="
                relative
                grid gap-6

                sm:gap-8

                md:grid-cols-12
              "
            >
              <div className="md:col-span-3">
                <p
                  className="
                    text-[9px] uppercase
                    tracking-[0.16em]
                    text-white/25

                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Reflection
                </p>
              </div>

              <div
                className="
                  md:col-span-9
                  lg:col-span-8
                "
              >
                <p
                  className="
                    max-w-4xl
                    font-display
                    text-[clamp(2rem,9vw,3rem)]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.04em]
                    text-white/80

                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  {reflection}

                  <span className="text-white/25"> {reflectionHighlight}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ENDING */}

        <motion.div
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
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16

            sm:mt-20
            md:mt-24
            lg:mt-32
          "
        >
          <div
            className="
              flex flex-col
              gap-7

              sm:gap-10

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[8px] uppercase
                  tracking-[0.18em]
                  text-[#3B82F6]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                {endingLabel}
              </p>

              <p
                className="
                  mt-4
                  max-w-4xl
                  font-display
                  text-[clamp(2.65rem,12vw,4rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white/85

                  sm:mt-5
                  sm:text-5xl

                  md:text-6xl
                  lg:text-7xl
                "
              >
                {endingTitle}

                <br />

                <span className="text-white/20">{endingHighlight}</span>
              </p>
            </div>

            <ArrowDownRight
              strokeWidth={0.8}
              className="
                h-9 w-9
                shrink-0
                text-[#3B82F6]

                sm:h-10 sm:w-10

                md:h-14
                md:w-14

                lg:h-16
                lg:w-16
              "
            />
          </div>

          {/* BIG NUMBER */}

          <div
            className="
              mt-14
              flex items-end
              border-b border-white/10
              pb-5

              sm:mt-16
              md:mt-20
              lg:mt-24
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
              05
            </span>

            <div
              className="
                ml-auto
                max-w-40
                pb-0.5
                text-right

                sm:max-w-none
                sm:pb-1
              "
            >
              <p
                className="
                  text-[8px] uppercase
                  tracking-[0.14em]
                  text-white/20

                  sm:text-[9px]
                  sm:tracking-[0.18em]

                  md:text-[10px]
                "
              >
                {project.title}
              </p>

              <p
                className="
                  mt-1
                  hidden
                  text-[9px]
                  text-white/10

                  sm:block
                "
              >
                {footerText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
