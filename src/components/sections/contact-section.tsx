import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sareh-azis-panegar/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/sarehazispanegar",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/sarehazispanegar",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#080808]
        px-6 pt-20
        text-white
        sm:pt-24
        md:px-10 md:pt-28
        lg:px-16 lg:pt-36
      "
    >
      <div className="mx-auto max-w-360">
        <div
          className="
            relative
            pb-20
            sm:pb-24
            md:min-h-[80vh] md:pb-28
            lg:min-h-[82vh]
          "
        >
          <FadeUp>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-6 bg-[#3B82F6] sm:w-8" />

              <p
                className="
                  text-[9px] font-medium uppercase
                  tracking-[0.24em]
                  text-white/45
                  sm:text-[10px]
                  md:text-xs md:tracking-[0.28em]
                "
              >
                Connect with me
              </p>
            </div>
          </FadeUp>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2
              className="
                font-display
                max-w-312.5
                text-[clamp(3.5rem,15vw,5.5rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.055em]
                sm:text-[clamp(4.5rem,11vw,7rem)]
                md:text-[clamp(5rem,9vw,9rem)]
              "
            >
              <RevealText delay={0.05}>Let&apos;s make</RevealText>

              <RevealText delay={0.12}>something</RevealText>

              <RevealText delay={0.19}>
                <span>
                  <span className="text-white/30">worth</span> using.
                </span>
              </RevealText>
            </h2>
          </div>

          <div
            className="
              mt-12
              grid gap-10
              sm:mt-14
              md:mt-20 md:grid-cols-12 md:items-end
            "
          >
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <p
                  className="
                    max-w-md
                    text-sm leading-7
                    text-white/45
                    sm:text-base
                    md:text-lg md:leading-8
                  "
                >
                  Got a project, an idea, or something you&apos;re still
                  figuring out? I&apos;m always down to talk.
                </p>
              </FadeUp>

              <FadeUp delay={0.26}>
                <a
                  href="mailto:sarehazispanegar@gmail.com"
                  className="
                    group mt-7
                    inline-flex items-center
                    gap-6
                    rounded-full
                    border border-white/15
                    px-4 py-2.5
                    text-sm text-white
                    transition-all duration-300

                    hover:border-[#3B82F6]
                    hover:bg-[#3B82F6]

                    sm:mt-8
                    sm:gap-8
                    sm:px-5 sm:py-3

                    md:gap-10
                    md:px-6 md:py-3.5
                  "
                >
                  Send me an email
                  <span
                    className="
                      flex h-8 w-8
                      shrink-0 items-center justify-center
                      rounded-full
                      bg-white text-black
                      transition-transform duration-300
                      group-hover:rotate-[-15deg]
                    "
                  >
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </span>
                </a>
              </FadeUp>
            </div>

            <div className="hidden md:col-span-7 md:flex md:justify-end">
              <FadeUp delay={0.28}>
                <a
                  href="mailto:sarehazispanegar@gmail.com"
                  aria-label="Send me an email"
                  className="
                    group
                    flex h-28 w-28
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/20
                    transition-all duration-500

                    hover:rotate-12
                    hover:border-[#3B82F6]
                    hover:bg-[#3B82F6]
                    hover:text-white

                    lg:h-40 lg:w-40
                  "
                >
                  <ArrowUpRight
                    strokeWidth={0.8}
                    className="
                      h-11 w-11
                      transition-transform duration-500

                      group-hover:-translate-y-2
                      group-hover:translate-x-2

                      lg:h-16 lg:w-16
                    "
                  />
                </a>
              </FadeUp>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/15">
          <FadeUp>
            <div
              className="
                grid gap-8
                py-8
                sm:grid-cols-2
                md:grid-cols-12 md:items-center
                md:gap-10 md:py-10
              "
            >
              <div className="sm:col-span-1 md:col-span-4">
                <Link
                  href="/"
                  className="
                    font-display
                    text-2xl font-medium
                    tracking-tighter
                  "
                >
                  S4Z
                </Link>

                <p className="mt-2 text-[11px] text-white/25 sm:text-xs">
                  UI/UX Designer · Indonesia
                </p>
              </div>

              <div
                className="
                  flex flex-wrap
                  gap-x-6 gap-y-3

                  sm:col-span-1
                  sm:justify-end

                  md:col-span-5
                  md:justify-center
                  md:gap-x-7
                "
              >
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      flex items-center gap-1.5
                      text-sm text-white/45
                      transition-colors duration-300
                      hover:text-white
                    "
                  >
                    {social.label}

                    <ArrowUpRight
                      size={11}
                      className="
                        text-white/25
                        transition-all duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-white

                        md:opacity-0
                        md:group-hover:opacity-100
                      "
                    />
                  </a>
                ))}
              </div>

              <div
                className="
                  sm:col-span-2
                  md:col-span-3
                  md:flex md:justify-end
                "
              >
                <a
                  href="#home"
                  className="
                    group
                    inline-flex items-center gap-3
                    text-[10px] uppercase
                    tracking-[0.15em]
                    text-white/35
                    transition-colors duration-300
                    hover:text-white
                    sm:text-xs
                  "
                >
                  Back to top
                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-white/15
                      transition-all duration-300

                      group-hover:border-[#3B82F6]
                      group-hover:bg-[#3B82F6]

                      sm:h-10 sm:w-10
                    "
                  >
                    <ArrowUp
                      size={15}
                      className="
                        transition-transform duration-300
                        group-hover:-translate-y-0.5
                      "
                    />
                  </span>
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div
              className="
                flex flex-col
                gap-3
                border-t border-white/10
                py-5
                text-[9px] uppercase
                tracking-widest
                text-white/20

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:text-[10px]
                sm:tracking-[0.12em]
              "
            >
              <p>© 2026 Sareh Azis Panegar</p>

              <div className="flex flex-wrap items-center gap-2">
                <span>Designed & built by me</span>

                <ArrowRight size={10} className="shrink-0" />

                <span>Still tweaking it</span>
              </div>
            </div>
          </FadeUp>
        </footer>
      </div>
    </section>
  );
}
