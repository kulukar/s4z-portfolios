"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";

const capabilities = [
  {
    id: "01",
    title: "UI/UX Design",
    short: "Making interfaces clear, useful, and easy to navigate.",
    description:
      "I take ideas from early flows and wireframes into polished interfaces, while keeping the experience clear and easy to follow.",
    services: [
      "User Flow",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Responsive Design",
    ],
  },
  {
    id: "02",
    title: "UX & Product Thinking",
    short: "Figuring out what needs to work before making it look good.",
    description:
      "Before jumping into screens, I like understanding the problem, who I'm designing for, and what actually needs to be solved.",
    services: [
      "User Research",
      "User Journey",
      "Information Architecture",
      "Problem Mapping",
      "User Flows",
    ],
  },
  {
    id: "03",
    title: "Design Systems",
    short: "Keeping things consistent when the product starts growing.",
    description:
      "I like building reusable components and simple design rules that keep things consistent without having to reinvent every screen.",
    services: [
      "Components",
      "Design Tokens",
      "Typography",
      "Color System",
      "UI Guidelines",
    ],
  },
  {
    id: "04",
    title: "Design to Code",
    short: "Sometimes I like taking the design beyond Figma.",
    description:
      "I enjoy bringing interfaces into the browser too. It helps me see how my design decisions actually behave once they're part of a real product.",
    services: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "Front-end",
    ],
  },
];

export function CapabilitiesSection() {
  const [activeItem, setActiveItem] = useState<string | null>("01");

  const toggleItem = (id: string) => {
    setActiveItem((current) => (current === id ? null : id));
  };

  return (
    <section
      id="capabilities"
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
                03 / Capabilities
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
              <RevealText delay={0.05}>What I can</RevealText>

              <RevealText delay={0.12}>
                <span className="text-white/35">help with.</span>
              </RevealText>
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <FadeUp delay={0.18}>
              <p className="max-w-sm text-sm leading-6 text-white/45 md:ml-auto">
                From figuring out how things should work to making them look and
                feel right — and sometimes building them too.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* ================= CAPABILITIE ================= */}

        <div>
          {capabilities.map((capability, index) => {
            const isActive = activeItem === capability.id;

            return (
              <FadeUp key={capability.id} delay={index * 0.06}>
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleItem(capability.id)}
                    aria-expanded={isActive}
                    className="
                      group relative
                      w-full
                      py-7
                      text-left
                      sm:py-8
                      md:py-10
                      lg:py-12
                    "
                  >
                    <div
                      className="
                        grid items-start
                        gap-y-4
                        md:grid-cols-12 md:gap-x-6
                        lg:gap-x-8
                      "
                    >
                      <div className="md:col-span-1">
                        <span
                          className={`
                            font-display text-[10px]
                            transition-colors duration-300
                            sm:text-xs
                            ${
                              isActive
                                ? "text-[#3B82F6]"
                                : "text-white/25 group-hover:text-[#3B82F6]"
                            }
                          `}
                        >
                          {capability.id}
                        </span>
                      </div>

                      <div className="pr-12 md:col-span-6 md:pr-0">
                        <h3
                          className={`
                            font-display
                            text-[clamp(2.25rem,10vw,3.5rem)]
                            font-medium
                            leading-[0.95]
                            tracking-[-0.045em]
                            transition-colors duration-300
                            sm:text-5xl
                            md:text-4xl
                            lg:text-5xl
                            xl:text-6xl
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/55 group-hover:text-white"
                            }
                          `}
                        >
                          {capability.title}
                        </h3>
                      </div>

                      <div className="hidden md:col-span-4 md:block">
                        <p
                          className={`
                            max-w-sm
                            text-sm leading-6
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-white/60"
                                : "text-white/30 group-hover:text-white/50"
                            }
                          `}
                        >
                          {capability.short}
                        </p>
                      </div>

                      <div
                        className="
                          absolute right-0 top-7
                          flex
                          h-8 w-8
                          items-center justify-center
                          sm:top-8
                          md:static
                          md:col-span-1
                          md:h-auto md:w-auto
                          md:justify-end
                        "
                      >
                        {isActive ? (
                          <ArrowDownRight
                            size={20}
                            strokeWidth={1.5}
                            className="text-[#3B82F6] md:h-5.5 md:w-5.5"
                          />
                        ) : (
                          <ArrowUpRight
                            size={20}
                            strokeWidth={1.5}
                            className="
                              text-white/25
                              transition-all duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:text-[#3B82F6]
                              md:h-5.5 md:w-5.5
                            "
                          />
                        )}
                      </div>
                    </div>

                    <p
                      className={`
                        mt-4 max-w-sm
                        pr-6
                        text-sm leading-6
                        transition-colors duration-300
                        md:hidden
                        ${isActive ? "text-white/55" : "text-white/35"}
                      `}
                    >
                      {capability.short}
                    </p>

                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-out
                        ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            grid gap-6
                            pt-6
                            sm:pt-8
                            md:grid-cols-12
                            md:gap-8 md:pt-10
                          "
                        >
                          <div className="hidden md:block md:col-span-1" />

                          <div className="md:col-span-6">
                            <p
                              className="
                                max-w-xl
                                text-sm leading-7
                                text-white/50
                                sm:text-base
                                md:text-base
                                lg:text-lg lg:leading-8
                              "
                            >
                              {capability.description}
                            </p>
                          </div>

                          <div className="md:col-span-5">
                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {capability.services.map((service) => (
                                <span
                                  key={service}
                                  className="
                                    border border-white/15
                                    px-2.5 py-1.5
                                    text-[10px] text-white/50
                                    transition-colors duration-300
                                    hover:border-[#3B82F6]/60
                                    hover:text-white
                                    sm:px-3 sm:py-2 sm:text-[11px]
                                  "
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="flex pt-7 sm:justify-end md:pt-10">
          <FadeUp delay={0.1}>
            <p
              className="
                max-w-xs
                text-left text-[11px] leading-5
                text-white/25
                sm:text-right sm:text-xs
              "
            >
              Still learning, still experimenting, and definitely still
              rearranging pixels.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
