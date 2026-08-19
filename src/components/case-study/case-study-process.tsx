"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";

type ProcessItem = {
  title: string;
  description: string;
};

type CaseStudyProcessProps = {
  project: {
    title: string;

    process: {
      heading: string;
      headingHighlight?: string;
      description: string;

      steps: string[];

      information: {
        heading: string;
        headingHighlight?: string;
        description: string;

        rawInformation: string[];

        groups: ProcessItem[];

        priorityHeading: string;
        priorities: string[];
      };

      structure: {
        heading: string;
        headingHighlight?: string;
        description: string;

        image: string;
        imageAlt?: string;

        directionTitle: string;
        directionDescription: string;

        principleLines: string[];
      };

      refinement: {
        heading: string;
        headingHighlight?: string;
        description: string;

        beforeImage: string;
        beforeImageAlt?: string;

        afterImage: string;
        afterImageAlt?: string;

        decisions: ProcessItem[];
      };

      closingText?: string;
    } | null;
  };
};

export function CaseStudyProcess({ project }: CaseStudyProcessProps) {
  const process = project.process;

  const heading = process?.heading ?? "Figuring out what";

  const headingHighlight = process?.headingHighlight ?? "actually matters.";

  const description =
    process?.description ??
    "Before thinking about colors or components, I needed to understand what users should notice first — and what could stay in the background.";

  const processSteps = process?.steps ?? ["Understand", "Structure", "Refine"];

  const information = process?.information;

  const informationHeading = information?.heading ?? "Making sense";

  const informationHeadingHighlight =
    information?.headingHighlight ?? "of the data.";

  const informationDescription =
    information?.description ??
    "The system had multiple types of technical information competing for attention. Instead of treating every value equally, I started by grouping related information and defining its role in the monitoring experience.";

  const rawInformation = information?.rawInformation ?? [
    "Position",
    "Measurement",
    "Status",
    "Movement",
    "Sensor Data",
    "System State",
  ];

  const informationGroups = information?.groups ?? [
    {
      title: "Monitoring Data",
      description: "Measurements and values coming from the system.",
    },
    {
      title: "System Status",
      description: "Current conditions that need to be understood quickly.",
    },
    {
      title: "Movement",
      description: "Operational information related to position and activity.",
    },
  ];

  const priorityHeading =
    information?.priorityHeading ?? "What deserves attention first?";

  const designPriorities = information?.priorities ?? [
    "What needs attention first?",
    "What supports that information?",
    "What can stay secondary?",
  ];

  const structure = process?.structure;

  const structureHeading = structure?.heading ?? "Shaping the";

  const structureHeadingHighlight =
    structure?.headingHighlight ?? "experience.";

  const structureDescription =
    structure?.description ??
    "Once the information had a clearer structure, I could start exploring how that hierarchy would translate into an actual interface.";

  const structureImage =
    structure?.image ?? "/images/projects/ground-detector/wireframe.jpg";

  const structureImageAlt =
    structure?.imageAlt ?? `${project.title} early dashboard wireframe`;

  const directionTitle = structure?.directionTitle ?? "Started rough.";

  const directionDescription =
    structure?.directionDescription ??
    "At this stage, the focus wasn't visual polish. I was testing how the dashboard could organize different levels of information without making everything compete for attention.";

  const principleLines = structure?.principleLines ?? [
    "Structure first.",
    "Visual decisions later.",
  ];

  const refinement = process?.refinement;

  const refinementHeading = refinement?.heading ?? "From structure";

  const refinementHeadingHighlight =
    refinement?.headingHighlight ?? "to interface.";

  const refinementDescription =
    refinement?.description ??
    "The final direction came from refining the hierarchy rather than adding more elements — making the important information stronger and everything around it quieter.";

  const beforeImage =
    refinement?.beforeImage ??
    "/images/projects/ground-detector/wireframe-detail.jpg";

  const beforeImageAlt =
    refinement?.beforeImageAlt ?? `${project.title} wireframe`;

  const afterImage =
    refinement?.afterImage ??
    "/images/projects/ground-detector/final-dashboard.jpg";

  const afterImageAlt =
    refinement?.afterImageAlt ?? `${project.title} final dashboard`;

  const designDecisions = refinement?.decisions ?? [
    {
      title: "Structure",
      description: "Related information grouped into clearer sections.",
    },
    {
      title: "Hierarchy",
      description: "Important conditions given stronger visual priority.",
    },
    {
      title: "Clarity",
      description: "Visual noise reduced so the interface is easier to scan.",
    },
  ];

  const closingText =
    process?.closingText ?? "Information → Structure → Clarity";

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundNumberY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const railScale = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
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
            -right-48 top-[8%]
            h-80 w-80
            rounded-full
            bg-[#2563EB]/[0.025]
            blur-[100px]

            sm:h-100 sm:w-100
            sm:bg-[#2563EB]/[0.03]

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
            -left-52 top-[52%]
            hidden
            h-100 w-100
            rounded-full
            bg-[#2563EB]/[0.018]
            blur-[140px]

            sm:block

            md:-left-60
            md:h-125 md:w-125
            md:bg-[#2563EB]/[0.025]
            md:blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-60 bottom-[4%]
            hidden
            h-125 w-125
            rounded-full
            bg-white/[0.012]
            blur-[150px]

            md:block
          "
        />

        <motion.span
          style={{ y: backgroundNumberY }}
          className="
            absolute
            -right-8 top-[20%]
            hidden
            select-none
            font-display
            text-[20rem]
            font-medium
            leading-none
            tracking-[-0.09em]
            text-white/[0.012]
            will-change-transform

            lg:block
            xl:text-[24rem]
          "
        >
          03
        </motion.span>
      </div>

      {/* DESKTOP PROGRESS RAIL */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[8%] right-8 top-[10%]
          hidden w-px
          bg-white/[0.04]

          xl:block
        "
      >
        <motion.div
          style={{
            scaleY: railScale,
            transformOrigin: "top",
          }}
          className="h-full w-full bg-[#3B82F6]/60"
        />
      </div>

      {/* CONTENT */}

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
                03 / Process
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

            <div
              className="
                mt-6
                grid

                sm:mt-8

                md:mt-12
                md:grid-cols-8
              "
            >
              <div className="hidden md:col-span-2 md:block" />

              <p
                className="
                  max-w-xl
                  text-[13px] leading-6
                  text-white/40

                  sm:text-sm
                  sm:leading-7

                  md:col-span-6
                  md:text-base
                  md:leading-8
                "
              >
                {description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* PROCESS INDEX */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            grid
            border-y border-white/10

            sm:mt-16
            sm:grid-cols-3

            md:mt-20

            lg:mt-28
          "
        >
          {processSteps.map((label, index) => (
            <div
              key={`${index}-${label}`}
              className={`
                group
                flex items-center
                justify-between
                py-3.5

                sm:px-4
                sm:py-4

                md:px-6
                md:py-5

                ${
                  index !== processSteps.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[8px] text-[#3B82F6] sm:text-[9px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-white/35
                    transition-colors duration-300

                    sm:text-xs
                    sm:tracking-[0.16em]

                    md:group-hover:text-white/70
                  "
                >
                  {label}
                </span>
              </div>

              <span
                className="
                  h-1 w-1
                  rounded-full
                  bg-white/10
                  transition-colors duration-300

                  md:group-hover:bg-[#3B82F6]
                "
              />
            </div>
          ))}
        </motion.div>

        {/* 01 — INFORMATION */}

        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-36">
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
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-3"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px]">
                01 / Information
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-9 lg:col-span-8"
            >
              <h3
                className="
                  max-w-3xl
                  font-display
                  text-[clamp(2.3rem,10vw,3.5rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.045em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                {informationHeading}
                <span className="text-white/30">
                  {" "}
                  {informationHeadingHighlight}
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px] leading-6
                  text-white/40

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                  md:leading-8
                "
              >
                {informationDescription}
              </p>
            </motion.div>
          </div>

          {/* DATA FLOW */}

          <div className="relative mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[16%] right-[16%] top-7
                hidden h-px
                origin-left
                bg-white/10

                md:block
              "
            />

            <div
              className="
                relative
                grid gap-3
                sm:gap-4
                md:grid-cols-3
                md:gap-4
                lg:gap-5
              "
            >
              {/* RAW */}

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative overflow-hidden
                  border border-white/10
                  bg-[#0B0B0B]
                  p-5

                  sm:p-6

                  md:flex
                  md:min-h-92
                  md:flex-col
                  md:p-6

                  lg:min-h-105
                  lg:p-8
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      relative z-10
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-[#080808]

                      sm:h-12 sm:w-12
                      md:h-14 md:w-14
                    "
                  >
                    <span className="font-display text-xs text-white/30 sm:text-sm">
                      01
                    </span>
                  </div>

                  <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                    Raw information
                  </p>
                </div>

                <div
                  className="
                    mt-6
                    grid grid-cols-2
                    border-t border-white/10

                    sm:mt-8

                    md:mt-10
                    md:block
                  "
                >
                  {rawInformation.map((item, index) => (
                    <div
                      key={`${index}-${item}`}
                      className={`
                        group/item
                        flex items-center
                        justify-between
                        border-b border-white/10
                        py-3

                        md:py-3.5

                        ${index % 2 === 0 ? "pr-4 md:pr-0" : "pl-4 md:pl-0"}

                        ${
                          index % 2 === 0
                            ? "border-r border-white/10 md:border-r-0"
                            : ""
                        }
                      `}
                    >
                      <span
                        className="
                          text-xs
                          text-white/35
                          transition-colors duration-300

                          sm:text-sm
                          md:group-hover/item:text-white/60
                        "
                      >
                        {item}
                      </span>

                      <span className="hidden text-[9px] text-white/10 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-7 -right-2
                    font-display
                    text-[7rem]
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.018]

                    md:text-[9rem]
                  "
                >
                  01
                </span>
              </motion.div>

              {/* ORGANIZE */}

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative overflow-hidden
                  border border-white/10
                  bg-[#0B0B0B]
                  p-5

                  sm:p-6
                  md:min-h-92
                  md:p-6
                  lg:min-h-105
                  lg:p-8
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-[#080808]

                      sm:h-12 sm:w-12
                      md:h-14 md:w-14
                    "
                  >
                    <span className="font-display text-xs text-white/30 sm:text-sm">
                      02
                    </span>
                  </div>

                  <ArrowDownRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#3B82F6]"
                  />
                </div>

                <p className="mt-6 text-[8px] uppercase tracking-[0.16em] text-white/25 sm:mt-8 sm:text-[9px] sm:tracking-[0.18em]">
                  Organize
                </p>

                <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:space-y-6">
                  {informationGroups.map((item, index) => (
                    <div key={`${index}-${item.title}`} className="group/item">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="mt-1 text-[8px] text-[#3B82F6] sm:text-[9px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <p
                            className="
                              font-display
                              text-lg
                              tracking-[-0.03em]
                              text-white/65
                              transition-colors duration-300

                              sm:text-xl
                              md:group-hover/item:text-white
                            "
                          >
                            {item.title}
                          </p>

                          <p className="mt-1 max-w-xs text-[11px] leading-5 text-white/25 sm:text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* PRIORITIZE */}

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative overflow-hidden
                  border border-[#3B82F6]/25
                  bg-[#0B0B0B]
                  p-5

                  sm:p-6
                  md:min-h-92
                  md:p-6
                  lg:min-h-105
                  lg:p-8
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    bg-[#2563EB]/[0.07]
                    blur-[70px]

                    md:h-56 md:w-56
                    md:bg-[#2563EB]/10
                    md:blur-[80px]
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-[#3B82F6]/30
                        bg-[#080808]

                        sm:h-12 sm:w-12
                        md:h-14 md:w-14
                      "
                    >
                      <span className="font-display text-xs text-[#3B82F6] sm:text-sm">
                        03
                      </span>
                    </div>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                  </div>

                  <p className="mt-6 text-[8px] uppercase tracking-[0.16em] text-[#3B82F6] sm:mt-8 sm:text-[9px] sm:tracking-[0.18em]">
                    Prioritize
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-xs
                      font-display
                      text-[1.65rem]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.04em]

                      sm:mt-5
                      sm:text-3xl
                      md:text-[1.8rem]
                      lg:text-4xl
                    "
                  >
                    {priorityHeading}
                  </p>

                  <div className="mt-6 border-t border-white/10 sm:mt-8">
                    {designPriorities.map((item, index) => (
                      <div
                        key={`${index}-${item}`}
                        className="
                          flex gap-3
                          border-b border-white/10
                          py-3

                          sm:gap-4
                          sm:py-4
                        "
                      >
                        <span className="text-[8px] text-[#3B82F6]/60 sm:text-[9px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-[11px] leading-5 text-white/40 sm:text-xs">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-[#3B82F6]/60" />
              </motion.div>
            </div>
          </div>
        </div>

        <ProcessTransition from="Information" to="Structure" />

        {/* 02 — STRUCTURE */}

        <div className="mt-14 sm:mt-16 md:mt-20 lg:mt-28">
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-3"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px]">
                02 / Structure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-9 lg:col-span-8"
            >
              <h3
                className="
                  max-w-4xl
                  font-display
                  text-[clamp(2.3rem,10vw,3.5rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.045em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                {structureHeading}
                <span className="text-white/30">
                  {" "}
                  {structureHeadingHighlight}
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px] leading-6
                  text-white/40

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                  md:leading-8
                "
              >
                {structureDescription}
              </p>
            </motion.div>
          </div>

          {/* WIREFRAME */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              grid gap-6

              sm:mt-12

              md:mt-16
              md:grid-cols-12
              md:gap-8

              lg:mt-20
            "
          >
            <div className="md:col-span-8 lg:col-span-9">
              <div
                className="
                  group
                  relative
                  aspect-4/3
                  overflow-hidden
                  border border-white/10
                  bg-[#0D0D0D]

                  sm:aspect-16/10
                "
              >
                <Image
                  src={structureImage}
                  alt={structureImageAlt}
                  fill
                  className="
                    object-cover
                    grayscale
                    opacity-65
                    transition-all duration-1000

                    md:group-hover:scale-[1.012]
                    md:group-hover:opacity-90
                  "
                  sizes="(max-width: 768px) 100vw, 75vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10" />

                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0
                    h-1/3
                    bg-linear-to-t
                    from-[#080808]/50
                    to-transparent
                  "
                />

                <div className="absolute left-3 top-3 sm:left-6 sm:top-6">
                  <span
                    className="
                      border border-white/15
                      bg-black/30
                      px-2.5 py-1.5
                      text-[7px] uppercase
                      tracking-[0.14em]
                      text-white/45
                      backdrop-blur-sm

                      sm:px-3
                      sm:py-2
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Early Wireframe
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-7 sm:left-7">
                  <p className="text-[7px] uppercase tracking-[0.14em] text-white/30 sm:text-[9px] sm:tracking-[0.18em]">
                    Exploration / 01
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                flex flex-col
                justify-between

                md:col-span-4
                md:py-1

                lg:col-span-3
                lg:py-2
              "
            >
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                  <p className="text-[8px] uppercase tracking-[0.16em] text-white/20 sm:text-[9px] sm:tracking-[0.18em]">
                    Early direction
                  </p>
                </div>

                <p
                  className="
                    mt-4
                    font-display
                    text-2xl
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-white/75

                    sm:mt-5
                    md:text-3xl
                  "
                >
                  {directionTitle}
                </p>

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-[13px] leading-6
                    text-white/35

                    sm:mt-4
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {directionDescription}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">
                <p className="text-[8px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[9px] sm:tracking-[0.18em]">
                  Principle
                </p>

                <p
                  className="
                    mt-2
                    font-display
                    text-lg
                    leading-tight
                    tracking-[-0.025em]
                    text-white/55

                    sm:mt-3
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
          </motion.div>
        </div>

        <ProcessTransition from="Structure" to="Refine" />

        {/* 03 — REFINEMENT */}

        <div className="mt-14 sm:mt-16 md:mt-20 lg:mt-28">
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-3"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px]">
                03 / Refinement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-9 lg:col-span-8"
            >
              <h3
                className="
                  max-w-4xl
                  font-display
                  text-[clamp(2.3rem,10vw,3.5rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.045em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                {refinementHeading}
                <span className="text-white/30">
                  {" "}
                  {refinementHeadingHighlight}
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px] leading-6
                  text-white/40

                  sm:mt-6
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                  md:leading-8
                "
              >
                {refinementDescription}
              </p>
            </motion.div>
          </div>

          {/* BEFORE / AFTER */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              grid gap-6

              sm:mt-12

              md:mt-16
              md:grid-cols-[1fr_auto_1fr]
              md:items-center
              md:gap-4

              lg:mt-20
              lg:gap-5
            "
          >
            {/* BEFORE */}

            <div>
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                  01 / Early structure
                </p>

                <p className="text-[8px] text-white/15 sm:text-[9px]">
                  Wireframe
                </p>
              </div>

              <div
                className="
                  group
                  relative
                  aspect-4/3
                  overflow-hidden
                  border border-white/10
                  bg-[#0D0D0D]
                "
              >
                <Image
                  src={beforeImage}
                  alt={beforeImageAlt}
                  fill
                  className="
                    object-cover
                    grayscale
                    opacity-60
                    transition-all duration-700

                    md:group-hover:scale-[1.01]
                    md:group-hover:opacity-85
                  "
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* MOBILE TRANSITION */}

            <div className="flex items-center gap-3 md:hidden">
              <span className="h-px flex-1 bg-white/10" />

              <div
                className="
                  flex h-9 w-9
                  shrink-0 items-center
                  justify-center
                  rounded-full
                  border border-white/10
                  text-[#3B82F6]
                "
              >
                <ArrowDownRight size={14} strokeWidth={1.3} />
              </div>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* DESKTOP ARROW */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                hidden
                h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#080808]
                text-white/25

                md:flex

                lg:h-12 lg:w-12
              "
            >
              <ArrowRight size={16} strokeWidth={1.3} />
            </motion.div>

            {/* FINAL */}

            <div>
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <p className="text-[8px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[9px] sm:tracking-[0.18em]">
                  02 / Final direction
                </p>

                <p className="text-[8px] text-white/15 sm:text-[9px]">
                  Interface
                </p>
              </div>

              <div
                className="
                  group
                  relative
                  aspect-4/3
                  overflow-hidden
                  border border-[#3B82F6]/25
                  bg-[#0D0D0D]
                "
              >
                <Image
                  src={afterImage}
                  alt={afterImageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700

                    md:group-hover:scale-[1.015]
                  "
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-linear-to-t
                    from-[#2563EB]/[0.07]
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3 right-3
                    flex items-center gap-2
                    border border-[#3B82F6]/20
                    bg-[#080808]/60
                    px-2.5 py-1.5
                    backdrop-blur-md

                    sm:bottom-4
                    sm:right-4
                    sm:px-3
                    sm:py-2
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                  <span className="text-[7px] uppercase tracking-[0.14em] text-white/45 sm:text-[8px] sm:tracking-[0.16em]">
                    Final UI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DESIGN DECISIONS */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              border-y border-white/10

              sm:mt-12
              md:mt-16
            "
          >
            <div className="grid sm:grid-cols-3">
              {designDecisions.map((item, index) => (
                <div
                  key={`${index}-${item.title}`}
                  className={`
                    group
                    relative
                    overflow-hidden
                    py-5

                    sm:px-4
                    sm:py-6

                    md:px-6
                    md:py-8

                    lg:px-8
                    lg:py-10

                    ${
                      index !== designDecisions.length - 1
                        ? "border-b border-white/10 sm:border-b-0 sm:border-r"
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

                      md:group-hover:bg-white/[0.015]
                    "
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-[#3B82F6] sm:text-[9px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          h-1 w-1
                          rounded-full
                          bg-white/10
                          transition-colors duration-300

                          md:group-hover:bg-[#3B82F6]
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-5
                        font-display
                        text-xl
                        tracking-[-0.03em]
                        text-white/65
                        transition-colors duration-300

                        sm:mt-6

                        md:mt-8
                        md:group-hover:text-white
                        md:text-2xl
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-xs
                        text-[11px] leading-5
                        text-white/30

                        sm:text-xs

                        md:text-sm
                        md:leading-6
                      "
                    >
                      {item.description}
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
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CLOSING */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
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
            03
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
                text-[7px] uppercase
                leading-4
                tracking-[0.12em]
                text-white/20

                sm:text-[9px]
                sm:tracking-[0.18em]

                md:text-[10px]
              "
            >
              {closingText}
            </p>

            <p className="mt-1 hidden text-[9px] text-white/10 sm:block">
              {project.title} / Process
            </p>
          </div>

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

/* =========================================
   REUSABLE TRANSITION
========================================= */

function ProcessTransition({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="
        mt-12
        flex items-center gap-3

        sm:mt-16
        sm:gap-4

        md:mt-20
        md:gap-5

        lg:mt-28
      "
    >
      <span className="h-px min-w-0 flex-1 bg-white/10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
          {from}
        </span>

        <ArrowRight
          size={12}
          strokeWidth={1.3}
          className="text-[#3B82F6] sm:size-[13px]"
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
          {to}
        </span>
      </motion.div>

      <span className="h-px min-w-0 flex-1 bg-white/10" />
    </div>
  );
}
