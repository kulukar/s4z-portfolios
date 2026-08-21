import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";
import { RevealImage } from "@/src/components/motion/reveal-image";
import { Stagger, StaggerItem } from "@/src/components/motion/stagger";

const skills = [
  "UI/UX Design",
  "Interaction Design",
  "Prototyping",
  "Design System",
  "Figma",
  "Front-end",
];

export function AboutSection() {
  return (
    <section
      id="about"
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
            md:grid-cols-12 md:items-end md:gap-8 md:pb-14
            lg:pb-20
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
                  md:mb-5
                "
              >
                02 / About
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
              <RevealText delay={0.05}>I care about</RevealText>

              <RevealText delay={0.1}>making things</RevealText>

              <RevealText delay={0.15}>
                <span className="text-white/35">feel simple.</span>
              </RevealText>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <FadeUp delay={0.18}>
              <p className="max-w-sm text-sm leading-6 text-white/45 md:ml-auto">
                Good design doesn&apos;t need to feel complicated. I like
                figuring out what matters and making everything else easier.
              </p>
            </FadeUp>
          </div>
        </div>

        <div
          className="
            grid gap-10
            pt-10
            sm:pt-12
            md:grid-cols-12 md:gap-8 md:pt-16
            lg:gap-16 lg:pt-24
          "
        >
          <div className="md:col-span-5">
            <RevealImage>
              <div
                className="
                  group relative
                  aspect-4/5
                  overflow-hidden
                  bg-[#101010]
                  sm:aspect-3/4
                "
              >
                <Image
                  src="/images/about/about-photo.jpeg"
                  alt="Sareh Azis Panegar"
                  fill
                  className="
                    object-cover
                    object-center
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                    group-hover:grayscale-0
                  "
                  sizes="(max-width: 767px) 100vw, 42vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10" />

                <div
                  className="
                    absolute inset-x-0 bottom-0
                    bg-linear-to-t
                    from-black/60
                    to-transparent
                    px-4 pb-4 pt-16
                    sm:px-5 sm:pb-5
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                      Based in Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </RevealImage>
          </div>

          <div
            className="
              flex flex-col
              md:col-span-7 md:pl-2
              lg:pl-10
            "
          >
            <div className="max-w-2xl">
              <FadeUp delay={0.08}>
                <p
                  className="
                    font-display
                    text-[clamp(2rem,8vw,2.75rem)]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                  "
                >
                  I&apos;m Sareh Azis Panegar,
                  <span className="text-white/35">
                    {" "}
                    a UI/UX Designer who likes figuring out how things should
                    work — not just how they should look.
                  </span>
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p
                  className="
                    mt-6 max-w-xl
                    text-sm leading-7
                    text-white/45
                    md:mt-7
                    lg:mt-8 lg:text-base
                  "
                >
                  I enjoy taking rough ideas, asking a lot of questions, and
                  slowly turning them into interfaces that feel clear and easy
                  to use. Sometimes that also means opening VS Code and seeing
                  how far I can take the design myself.
                </p>
              </FadeUp>
            </div>

            <div className="mt-12 border-t border-white/10 md:mt-14 lg:mt-auto">
              <FadeUp>
                <div className="py-4 md:py-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30 sm:text-[10px]">
                    Things I work with
                  </p>
                </div>
              </FadeUp>

              <Stagger stagger={0.06}>
                {skills.map((skill, index) => (
                  <StaggerItem key={skill}>
                    <div
                      className="
                        group/skill
                        flex items-center justify-between
                        border-t border-white/10
                        py-3.5
                        sm:py-4
                      "
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <span className="w-5 text-[9px] text-white/20 sm:text-[10px]">
                          0{index + 1}
                        </span>

                        <span
                          className="
                            text-sm text-white/60
                            transition-colors duration-300
                            group-hover/skill:text-white
                            lg:text-base
                          "
                        >
                          {skill}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={13}
                        className="
                          text-white/20
                          transition-all duration-300
                          group-hover/skill:-translate-y-0.5
                          group-hover/skill:translate-x-0.5
                          group-hover/skill:text-[#3B82F6]
                          md:text-white/0
                        "
                      />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
