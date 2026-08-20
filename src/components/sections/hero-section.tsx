"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { SiteHeroSchema } from "@/src/schemas/hero.schema";

const ease = [0.22, 1, 0.36, 1] as const;

type HeroSectionProps = {
  hero: SiteHeroSchema;
};

const headlineStyles = {
  primary: "text-white",
  muted: "text-white/40",
  accent: "text-[#7D8BFF]",
} as const;

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-[#080808]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease,
        }}
      >
        <Image
          src={hero.backgroundImage}
          alt="Sareh Azis Panegar"
          fill
          priority
          className="
            object-cover
            object-[58%_center]
            sm:object-[55%_center]
            md:object-center
          "
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-black/95
          via-black/60
          to-black/20
          md:from-black/90
          md:via-black/45
          md:to-black/10
        "
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#080808]/95 via-transparent to-black/20" />

      <div
        className="
          relative z-10 mx-auto
          flex min-h-svh max-w-360 flex-col
          px-6 pb-7 pt-24
          sm:pb-8
          md:px-10 md:pb-10 md:pt-32
          lg:px-16 lg:pt-36
        "
      >
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-190">
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease,
              }}
              className="
                mb-4
                text-[10px] font-medium uppercase
                tracking-[0.18em]
                text-[#7D8BFF]
                sm:text-xs
                md:mb-5 md:text-sm
              "
            >
              {hero.eyebrow}
            </motion.p>

            <h1
              className="
                font-display
                text-[clamp(3rem,14vw,5rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.055em]
                sm:text-[clamp(3.5rem,10vw,5.5rem)]
                md:text-[clamp(4.5rem,7vw,7rem)]
              "
            >
              {hero.headlines.map((headline, index) => (
                <span
                  key={`${headline.text}-${index}`}
                  className={`
                    block overflow-hidden pb-[0.08em]
                    ${index === 1 ? "mt-2" : ""}
                  `}
                >
                  <motion.span
                    className={`block ${headlineStyles[headline.style]}`}
                    initial={{
                      y: "110%",
                    }}
                    animate={{
                      y: "0%",
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.22 + index * 0.08,
                      ease,
                    }}
                  >
                    {headline.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.55,
                ease,
              }}
              className="
                mt-6 max-w-md
                text-sm leading-6
                text-white/60
                md:mt-8 md:max-w-115
                md:text-base md:leading-7
              "
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.65,
                ease,
              }}
            >
              <a
                href={hero.ctaUrl}
                className="
                  group mt-7 inline-flex
                  items-center gap-7
                  border border-white/25
                  px-5 py-3
                  text-sm text-white
                  transition-all duration-300

                  hover:border-[#2563EB]
                  hover:bg-[#2563EB]

                  active:scale-[0.98]

                  md:mt-8
                  md:gap-8
                  md:px-6 md:py-3.5
                "
              >
                {hero.ctaLabel}

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease,
          }}
          className="
            flex items-end justify-between
            border-t border-white/10
            pt-4
            md:pt-5
          "
        >
          {hero.available ? (
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.15em] text-white/50 sm:text-[10px] md:text-xs">
                {hero.availableText}
              </span>
            </div>
          ) : (
            <div />
          )}

          <a
            href={hero.scrollUrl}
            className="
              group hidden items-center gap-3
              text-[10px] uppercase
              tracking-[0.15em]
              text-white/40
              transition-colors
              hover:text-white
              sm:flex
            "
          >
            {hero.scrollLabel}

            <ArrowDown
              size={14}
              className="
                transition-transform duration-300
                group-hover:translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
