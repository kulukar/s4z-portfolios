"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";

type DesignDetail = {
  label: string;
  title: string;
  description: string;
};

type CaseStudySolutionProps = {
  project: {
    title: string;

    solution: {
      heading: string;
      headingHighlight?: string;
      description: string;

      dashboard: {
        title: string;
        titleHighlight?: string;
        description: string;
        image: string;
        imageAlt?: string;
      };

      designDetails: DesignDetail[];

      monitoring: {
        title: string;
        titleHighlight?: string;
        description: string;
        image: string;
        imageAlt?: string;
        principle?: string;
      };

      dataVisualization: {
        title: string;
        titleHighlight?: string;
        description: string;
        image: string;
        imageAlt?: string;
      };

      interfaceDetails: {
        title: string;
        titleHighlight?: string;
        description: string;

        primaryImage: string;
        primaryImageAlt?: string;

        secondaryImage: string;
        secondaryImageAlt?: string;
      };

      result: {
        text: string;
        highlight?: string;
        principle?: string;
      };

      closingText?: string;
    } | null;
  };
};

export function CaseStudySolution({ project }: CaseStudySolutionProps) {
  const solution = project.solution;

  const heading = solution?.heading ?? "Turning complex monitoring";

  const headingHighlight =
    solution?.headingHighlight ?? "into a clearer experience.";

  const description =
    solution?.description ??
    "The final interface brings the structure explored earlier into a monitoring experience where important information is easier to find, compare, and understand.";

  const dashboard = solution?.dashboard;

  const dashboardTitle = dashboard?.title ?? "Everything starts";

  const dashboardTitleHighlight =
    dashboard?.titleHighlight ?? "with the overview.";

  const dashboardDescription =
    dashboard?.description ??
    "One place to understand the current system condition before moving into more detailed information.";

  const dashboardImage =
    dashboard?.image ??
    "/images/projects/ground-detector/dashboard-overview.jpg";

  const dashboardImageAlt =
    dashboard?.imageAlt ?? `${project.title} dashboard overview`;

  const designDetails = solution?.designDetails ?? [
    {
      label: "Hierarchy",
      title: "Important information comes first.",
      description:
        "Primary conditions stay visually dominant, while supporting information remains available without competing for attention.",
    },
    {
      label: "Status",
      title: "Conditions are easier to recognize.",
      description:
        "Status treatments make normal states, warnings, and changes easier to distinguish beyond reading the numbers alone.",
    },
    {
      label: "Structure",
      title: "Different data, one system.",
      description:
        "Cards, charts, labels, and supporting information follow the same visual logic across the monitoring experience.",
    },
  ];

  const monitoring = solution?.monitoring;

  const monitoringTitle = monitoring?.title ?? "Designed for";

  const monitoringTitleHighlight =
    monitoring?.titleHighlight ?? "quick scanning.";

  const monitoringDescription =
    monitoring?.description ??
    "Monitoring information is grouped around what users need to notice first. Clear labels, spacing, and visual hierarchy reduce the effort needed to understand the current condition.";

  const monitoringImage =
    monitoring?.image ?? "/images/projects/ground-detector/monitoring.jpg";

  const monitoringImageAlt =
    monitoring?.imageAlt ?? `${project.title} monitoring interface`;

  const monitoringPrinciple =
    monitoring?.principle ?? "Scan → Understand → Act";

  const dataVisualization = solution?.dataVisualization;

  const dataVisualizationTitle = dataVisualization?.title ?? "Numbers become";

  const dataVisualizationTitleHighlight =
    dataVisualization?.titleHighlight ?? "something readable.";

  const dataVisualizationDescription =
    dataVisualization?.description ??
    "Charts and supporting values provide context instead of presenting isolated numbers, making changes and patterns easier to recognize over time.";

  const dataVisualizationImage =
    dataVisualization?.image ??
    "/images/projects/ground-detector/data-visualization.jpg";

  const dataVisualizationImageAlt =
    dataVisualization?.imageAlt ?? `${project.title} data visualization`;

  const interfaceDetails = solution?.interfaceDetails;

  const interfaceDetailsTitle = interfaceDetails?.title ?? "Small decisions,";

  const interfaceDetailsTitleHighlight =
    interfaceDetails?.titleHighlight ?? "consistent experience.";

  const interfaceDetailsDescription =
    interfaceDetails?.description ??
    "A consistent visual language across components keeps different parts of the monitoring system connected and predictable.";

  const primaryImage =
    interfaceDetails?.primaryImage ??
    "/images/projects/ground-detector/detail-01.jpg";

  const primaryImageAlt =
    interfaceDetails?.primaryImageAlt ??
    `${project.title} monitoring interface detail`;

  const secondaryImage =
    interfaceDetails?.secondaryImage ??
    "/images/projects/ground-detector/detail-02.jpg";

  const secondaryImageAlt =
    interfaceDetails?.secondaryImageAlt ??
    `${project.title} interface component detail`;

  const result = solution?.result;

  const resultText = result?.text ?? "Technical information stays visible";

  const resultHighlight =
    result?.highlight ?? "without making the experience feel technical.";

  const resultPrinciple = result?.principle ?? "Clarity over complexity";

  const closingText = solution?.closingText ?? "Structure → Interface";

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundNumberY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="solution"
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
            -right-48 top-[5%]
            h-80 w-80
            rounded-full
            bg-[#2563EB]/[0.025]
            blur-[100px]

            sm:h-100 sm:w-100

            md:-right-60
            md:h-150 md:w-150
            md:bg-[#2563EB]/[0.04]
            md:blur-[150px]

            lg:-right-70
            lg:h-175 lg:w-175
            lg:blur-[170px]
          "
        />

        <div
          className="
            absolute
            -left-60 top-[55%]
            hidden
            h-125 w-125
            rounded-full
            bg-[#2563EB]/[0.025]
            blur-[160px]

            md:block
          "
        />

        <motion.span
          style={{ y: backgroundNumberY }}
          className="
            absolute
            -right-8 top-[17%]
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
            xl:text-[25rem]
          "
        >
          04
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
                04 / Design Solution
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
            className="md:col-span-9 lg:col-span-8"
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
                mt-6 grid
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
                  sm:text-sm sm:leading-7
                  md:col-span-6
                  md:text-base md:leading-8
                "
              >
                {description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* MAIN DASHBOARD */}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 sm:mt-16 md:mt-20 lg:mt-28"
        >
          <div
            className="
              mb-5 grid gap-4
              sm:mb-6
              md:grid-cols-12
              md:items-end
              md:gap-8
            "
          >
            <div className="md:col-span-7">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[8px] text-[#3B82F6] sm:text-[9px]">
                  01
                </span>

                <span className="h-px w-6 bg-[#3B82F6]/40 sm:w-8" />

                <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[10px] sm:tracking-[0.18em]">
                  Dashboard Overview
                </p>
              </div>

              <h3
                className="
                  mt-3
                  max-w-2xl
                  font-display
                  text-2xl
                  font-medium
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-white/80
                  sm:mt-4
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {dashboardTitle}
                <span className="text-white/30">
                  {" "}
                  {dashboardTitleHighlight}
                </span>
              </h3>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <p
                className="
                  max-w-sm
                  text-[12px] leading-5
                  text-white/30
                  sm:text-sm sm:leading-6
                  md:text-right
                "
              >
                {dashboardDescription}
              </p>
            </div>
          </div>

          <div
            className="
              group relative
              overflow-hidden
              border border-white/10
              bg-[#0B0B0B]
              p-1.5
              sm:p-2
              md:p-3
              lg:p-4
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2 top-0
                h-48 w-2/3
                -translate-x-1/2
                bg-[#2563EB]/[0.04]
                blur-[80px]
                md:h-64
                md:bg-[#2563EB]/[0.06]
                md:blur-[100px]
              "
            />

            <div
              className="
                relative
                aspect-4/3
                overflow-hidden
                bg-[#101010]
                sm:aspect-16/10
                lg:aspect-video
              "
            >
              <Image
                src={dashboardImage}
                alt={dashboardImageAlt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  md:group-hover:scale-[1.008]
                "
                sizes="100vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/[0.015]" />

              <div
                className="
                  absolute
                  bottom-3 left-3
                  flex items-center gap-2
                  border border-white/10
                  bg-[#080808]/70
                  px-2.5 py-1.5
                  backdrop-blur-md
                  sm:bottom-4 sm:left-4
                  sm:px-3 sm:py-2
                  md:bottom-6 md:left-6
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                <span className="text-[7px] uppercase tracking-[0.14em] text-white/45 sm:text-[8px] sm:tracking-[0.18em]">
                  Final Interface
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-3 sm:mt-4 sm:pt-4">
            <p className="text-[7px] uppercase tracking-[0.14em] text-white/15 sm:text-[8px] sm:tracking-[0.18em]">
              {project.title} / Dashboard
            </p>

            <ArrowDownRight
              size={13}
              strokeWidth={1.3}
              className="text-white/15"
            />
          </div>
        </motion.div>

        {/* DESIGN DECISIONS */}

        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div
            className="
              grid gap-6
              border-t border-white/10
              pt-6
              sm:gap-8 sm:pt-8
              md:grid-cols-12 md:pt-10
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
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/25 sm:text-[10px] sm:tracking-[0.18em]">
                Design decisions
              </p>
            </motion.div>

            <div className="md:col-span-9 lg:col-span-8">
              {designDetails.map((item, index) => (
                <motion.div
                  key={`${index}-${item.label}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
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
                    sm:gap-5 sm:py-6
                    md:gap-6 md:py-8
                  "
                >
                  <div
                    className="
                      absolute
                      bottom-0 left-0
                      hidden h-px w-0
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
                        text-white/15
                        transition-colors duration-300
                        sm:text-lg
                        md:group-hover:text-[#3B82F6]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="sm:col-span-5">
                    <p className="mb-1.5 text-[8px] uppercase tracking-[0.16em] text-[#3B82F6] sm:mb-2 sm:text-[9px] sm:tracking-[0.18em]">
                      {item.label}
                    </p>

                    <h3
                      className="
                        max-w-md
                        font-display
                        text-xl
                        font-medium
                        leading-[1.1]
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
                        sm:text-sm sm:leading-7
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

        {/* MONITORING */}

        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div
            className="
              grid gap-7
              sm:gap-8
              md:grid-cols-12
              md:items-end
              md:gap-8
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                md:col-span-4
                md:pb-5
                lg:col-span-3
                lg:pb-8
              "
            >
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[10px] sm:tracking-[0.18em]">
                02 / Monitoring
              </p>

              <h3
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-medium
                  leading-[1.04]
                  tracking-[-0.04em]
                  sm:mt-5 sm:text-4xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {monitoringTitle}
                <span className="text-white/30">
                  {" "}
                  {monitoringTitleHighlight}
                </span>
              </h3>

              <p
                className="
                  mt-4
                  text-[13px] leading-6
                  text-white/40
                  sm:mt-5
                  sm:text-sm sm:leading-7
                  md:text-base md:leading-8
                "
              >
                {monitoringDescription}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 sm:mt-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                  {monitoringPrinciple}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                md:col-span-8
                lg:col-start-5
                lg:col-span-8
              "
            >
              <div
                className="
                  group relative
                  aspect-4/3
                  overflow-hidden
                  bg-[#101010]
                  sm:aspect-16/10
                "
              >
                <Image
                  src={monitoringImage}
                  alt={monitoringImageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    md:group-hover:scale-[1.012]
                  "
                  sizes="(max-width: 767px) 100vw, 70vw"
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0
                    h-1/4
                    bg-linear-to-t
                    from-[#080808]/30
                    to-transparent
                  "
                />

                <div className="absolute bottom-4 right-4 md:bottom-7 md:right-7">
                  <span className="text-[8px] uppercase tracking-[0.16em] text-white/30 sm:text-[9px] sm:tracking-[0.18em]">
                    Monitoring / 02
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DATA VISUALIZATION */}

        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div
            className="
              grid gap-7
              sm:gap-8
              md:grid-cols-12
              md:items-start
              md:gap-8
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                order-2
                md:order-1
                md:col-span-8
                lg:col-span-8
              "
            >
              <div
                className="
                  group relative
                  aspect-4/3
                  overflow-hidden
                  bg-[#101010]
                  sm:aspect-16/10
                "
              >
                <Image
                  src={dataVisualizationImage}
                  alt={dataVisualizationImageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    md:group-hover:scale-[1.012]
                  "
                  sizes="(max-width: 767px) 100vw, 70vw"
                />

                <div className="absolute left-3 top-3 sm:left-5 sm:top-5 md:left-7 md:top-7">
                  <span
                    className="
                      border border-white/10
                      bg-[#080808]/60
                      px-2.5 py-1.5
                      text-[7px] uppercase
                      tracking-[0.14em]
                      text-white/35
                      backdrop-blur-md
                      sm:px-3 sm:py-2
                      sm:text-[8px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Data Visualization
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                order-1
                md:order-2
                md:col-span-4
                md:pt-8
                lg:col-start-10
                lg:col-span-3
                lg:pt-16
              "
            >
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[10px] sm:tracking-[0.18em]">
                03 / Data Visualization
              </p>

              <h3
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-medium
                  leading-[1.04]
                  tracking-[-0.04em]
                  sm:mt-5 sm:text-4xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {dataVisualizationTitle}
                <span className="text-white/30">
                  {" "}
                  {dataVisualizationTitleHighlight}
                </span>
              </h3>

              <p
                className="
                  mt-4
                  text-[13px] leading-6
                  text-white/40
                  sm:mt-5
                  sm:text-sm sm:leading-7
                  md:text-base md:leading-8
                "
              >
                {dataVisualizationDescription}
              </p>
            </motion.div>
          </div>
        </div>

        {/* INTERFACE DETAILS */}

        <div
          className="
            mt-16
            border-t border-white/10
            pt-7
            sm:mt-20 sm:pt-8
            md:mt-24 md:pt-10
            lg:mt-32 lg:pt-14
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              grid gap-5
              sm:gap-8
              md:grid-cols-12
              md:items-end
            "
          >
            <div className="md:col-span-7 lg:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[10px] sm:tracking-[0.18em]">
                04 / Interface Details
              </p>

              <h3
                className="
                  mt-4
                  max-w-3xl
                  font-display
                  text-3xl
                  font-medium
                  leading-[1.04]
                  tracking-[-0.04em]
                  sm:mt-5 sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                {interfaceDetailsTitle}
                <span className="text-white/30">
                  {" "}
                  {interfaceDetailsTitleHighlight}
                </span>
              </h3>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end lg:col-span-4">
              <p
                className="
                  max-w-sm
                  text-[13px] leading-6
                  text-white/35
                  sm:text-sm sm:leading-7
                  md:text-base
                "
              >
                {interfaceDetailsDescription}
              </p>
            </div>
          </motion.div>

          <div
            className="
              mt-8 grid gap-5
              sm:mt-10
              md:mt-14
              md:grid-cols-12
              md:gap-5
              lg:mt-16
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-7"
            >
              <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                  01 / Monitoring components
                </p>

                <span className="text-[8px] text-white/10 sm:text-[9px]">
                  Detail
                </span>
              </div>

              <div
                className="
                  group relative
                  aspect-4/3
                  overflow-hidden
                  bg-[#101010]
                  sm:aspect-16/10
                "
              >
                <Image
                  src={primaryImage}
                  alt={primaryImageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    md:group-hover:scale-[1.01]
                  "
                  sizes="(max-width: 767px) 100vw, 60vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                md:col-span-5
                md:pt-12
                lg:pt-20
              "
            >
              <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                <p className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px] sm:tracking-[0.18em]">
                  02 / Interface language
                </p>

                <span className="text-[8px] text-white/10 sm:text-[9px]">
                  Detail
                </span>
              </div>

              <div
                className="
                  group relative
                  aspect-4/3
                  overflow-hidden
                  bg-[#101010]
                  md:aspect-square
                "
              >
                <Image
                  src={secondaryImage}
                  alt={secondaryImageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    md:group-hover:scale-[1.01]
                  "
                  sizes="(max-width: 767px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RESULT */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-20
            border-y border-white/10
            py-10
            sm:mt-24 sm:py-12
            md:mt-28 md:py-16
            lg:mt-36 lg:py-20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-[25%] top-1/2
              h-48 w-48
              -translate-y-1/2
              rounded-full
              bg-[#2563EB]/[0.035]
              blur-[80px]
              md:h-64 md:w-64
              md:bg-[#2563EB]/[0.045]
              md:blur-[100px]
            "
          />

          <div className="relative grid gap-6 sm:gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/25 sm:text-[10px] sm:tracking-[0.18em]">
                The result
              </p>
            </div>

            <div className="md:col-span-9 lg:col-span-8">
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
                {resultText}
                <span className="text-white/30"> {resultHighlight}</span>
              </p>

              <div className="mt-7 flex items-center gap-3 sm:mt-10 sm:gap-4">
                <span className="h-px w-8 bg-[#3B82F6] sm:w-10" />

                <p className="text-[8px] uppercase tracking-[0.16em] text-[#3B82F6] sm:text-[9px] sm:tracking-[0.2em]">
                  {resultPrinciple}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            flex items-end
            border-b border-white/10
            pb-5
            sm:mt-20
            md:mt-24
            lg:mt-32
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
            04
          </span>

          <div className="ml-auto max-w-40 pb-0.5 text-right sm:max-w-none sm:pb-1">
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
              {project.title} / Design Solution
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
