"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "problem-goals",
    label: "Problem & Goals",
  },
  {
    id: "process",
    label: "Process",
  },
  {
    id: "design",
    label: "Design",
  },
  {
    id: "outcome",
    label: "Outcome",
  },
  {
    id: "next-project",
    label: "Complete",
  },
];

export function CaseStudyProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Overview");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // =========================
  // READING PROGRESS
  // =========================

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const percentage = Math.min(100, Math.max(0, Math.round(latest * 100)));

    setProgress(percentage);
  });

  // =========================
  // SHOW AFTER HERO
  // =========================

  useMotionValueEvent(scrollY, "change", () => {
    const overview = document.getElementById("overview");

    if (!overview) return;

    const rect = overview.getBoundingClientRect();

    setHasStarted(rect.top < window.innerHeight * 0.8);
  });

  // =========================
  // ACTIVE SECTION
  // =========================

  useEffect(() => {
    const elements = sections
      .map((section) => {
        const element = document.getElementById(section.id);

        return {
          ...section,
          element,
        };
      })
      .filter(
        (
          section,
        ): section is {
          id: string;
          label: string;
          element: HTMLElement;
        } => section.element !== null,
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleEntries.length === 0) return;

        const currentId = visibleEntries[0].target.id;

        const currentSection = sections.find(
          (section) => section.id === currentId,
        );

        if (!currentSection) return;

        setActiveSection(currentSection.label);
        setIsComplete(currentId === "next-project");
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25],
      },
    );

    elements.forEach(({ element }) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {hasStarted && (
        <motion.aside
          initial={{
            opacity: 0,
            x: 12,
          }}
          animate={{
            opacity: isComplete ? 0.4 : 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 12,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            fixed
            right-5
            top-1/2
            z-40
            hidden
            -translate-y-1/2

            lg:block

            xl:right-7
            2xl:right-10
          "
          aria-hidden="true"
        >
          <div
            className="
              flex
              flex-col
              items-end
            "
          >
            {/* =========================
                SECTION LABEL
            ========================= */}

            <div className="mb-5 text-right">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSection}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    max-w-24
                    text-[8px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.18em]

                    ${isComplete ? "text-[#3B82F6]" : "text-white/30"}
                  `}
                >
                  {activeSection}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* =========================
                PROGRESS + NUMBER
            ========================= */}

            <div className="flex items-start gap-3">
              {/* Percentage */}

              <div className="flex items-start">
                <span
                  className="
                    font-display
                    text-2xl
                    font-medium
                    leading-none
                    tracking-[-0.05em]
                    text-white/50
                  "
                >
                  {String(isComplete ? 100 : progress).padStart(2, "0")}
                </span>

                <span
                  className="
                    ml-0.5
                    mt-0.5
                    text-[8px]
                    font-medium
                    text-[#3B82F6]
                  "
                >
                  %
                </span>
              </div>

              {/* Vertical Rail */}

              <div
                className="
                  relative
                  h-32
                  w-px
                  overflow-hidden
                  bg-white/10

                  xl:h-36
                "
              >
                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    w-full
                    bg-[#3B82F6]
                  "
                  animate={{
                    height: `${isComplete ? 100 : progress}%`,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>

            {/* =========================
                END MARKER
            ========================= */}

            <div
              className={`
                mt-3
                h-1.5
                w-1.5
                rounded-full
                transition-colors
                duration-300

                ${isComplete ? "bg-[#3B82F6]" : "bg-white/15"}
              `}
            />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
