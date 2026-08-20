import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { getPublishedProjects } from "@/src/lib/queries/project";

import { FadeUp } from "@/src/components/motion/fade-up";
import { RevealText } from "@/src/components/motion/reveal-text";
import { RevealImage } from "@/src/components/motion/reveal-image";

export default async function WorkPage() {
  const projects = await getPublishedProjects();

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section
        className="
          px-6
          pb-16
          pt-28

          sm:pb-20
          sm:pt-32

          md:px-10
          md:pb-24
          md:pt-36

          lg:px-16
          lg:pb-32
          lg:pt-40
        "
      >
        <div className="mx-auto max-w-360">
          <FadeUp>
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-2

                text-[10px]
                uppercase
                tracking-[0.16em]
                text-white/30

                transition-colors

                hover:text-white
              "
            >
              <ArrowLeft
                size={13}
                strokeWidth={1.5}
                className="
                  transition-transform
                  group-hover:-translate-x-1
                "
              />
              Back Home
            </Link>
          </FadeUp>

          <div
            className="
              mt-12
              grid
              gap-8

              border-b
              border-white/10

              pb-12

              md:grid-cols-12
              md:items-end
              md:pb-16

              lg:mt-16
              lg:pb-20
            "
          >
            <div className="md:col-span-8">
              <FadeUp delay={0.05}>
                <p
                  className="
                    mb-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#3B82F6]

                    sm:text-xs
                  "
                >
                  Selected Work
                </p>
              </FadeUp>

              <h1
                className="
                  font-display

                  text-[clamp(3.5rem,14vw,5rem)]

                  font-medium
                  leading-[0.88]
                  tracking-[-0.06em]

                  sm:text-7xl
                  md:text-8xl
                  lg:text-9xl
                "
              >
                <RevealText delay={0.08}>All projects.</RevealText>
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <FadeUp delay={0.15}>
                <p
                  className="
                    max-w-sm
                    text-sm
                    leading-6
                    text-white/40

                    md:ml-auto
                  "
                >
                  A collection of projects, case studies, and products I&apos;ve
                  worked on across interface and product design.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          px-6
          pb-24

          md:px-10
          md:pb-32

          lg:px-16
          lg:pb-40
        "
      >
        <div className="mx-auto max-w-360">
          <FadeUp>
            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                pb-5
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                All Work
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                {String(projects.length).padStart(2, "0")} Projects
              </p>
            </div>
          </FadeUp>

          {projects.length > 0 ? (
            <div>
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="
                    grid
                    gap-6

                    border-b
                    border-white/10

                    py-10

                    md:grid-cols-12
                    md:items-center
                    md:gap-8
                    md:py-14

                    lg:py-16
                  "
                >
                  <FadeUp delay={0.03}>
                    <div className="md:col-span-1">
                      <span
                        className="
                          font-display
                          text-sm
                          text-white/25
                        "
                      >
                        {project.number}
                      </span>
                    </div>
                  </FadeUp>

                  <div
                    className="
                      md:col-span-5
                      lg:col-span-5
                    "
                  >
                    <RevealImage delay={(index % 2) * 0.05}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="
                          group/image
                          relative
                          block
                          aspect-16/10
                          overflow-hidden
                          bg-[#101010]
                        "
                      >
                        {project.coverImage ? (
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="
                              object-cover

                              transition-transform
                              duration-700
                              ease-out

                              group-hover/image:scale-[1.025]
                            "
                            sizes="
                              (max-width: 767px) 100vw,
                              45vw
                            "
                          />
                        ) : (
                          <div
                            className="
                              flex
                              h-full
                              items-center
                              justify-center

                              text-[10px]
                              uppercase
                              tracking-[0.15em]
                              text-white/15
                            "
                          >
                            No Image
                          </div>
                        )}

                        <div
                          className="
                            absolute
                            inset-0

                            bg-black/0

                            transition-colors
                            duration-500

                            group-hover/image:bg-black/10
                          "
                        />

                        <div
                          className="
                            absolute
                            right-4
                            top-4

                            flex
                            h-10
                            w-10
                            items-center
                            justify-center

                            rounded-full

                            bg-[#3B82F6]
                            text-white

                            opacity-0
                            translate-y-2

                            transition-all
                            duration-300

                            group-hover/image:translate-y-0
                            group-hover/image:opacity-100
                          "
                        >
                          <ArrowUpRight size={16} strokeWidth={1.5} />
                        </div>
                      </Link>
                    </RevealImage>
                  </div>

                  <div
                    className="
                      md:col-span-6
                      md:pl-4

                      lg:pl-8
                    "
                  >
                    <FadeUp delay={0.08}>
                      <div>
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-3
                            gap-y-2
                          "
                        >
                          <p
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#3B82F6]

                              sm:text-[10px]
                            "
                          >
                            {project.category}
                          </p>

                          {project.year && (
                            <>
                              <span className="h-px w-4 bg-white/15" />

                              <p
                                className="
                                  text-[9px]
                                  uppercase
                                  tracking-[0.16em]
                                  text-white/25

                                  sm:text-[10px]
                                "
                              >
                                {project.year}
                              </p>
                            </>
                          )}
                        </div>

                        <Link href={`/work/${project.slug}`}>
                          <h2
                            className="
                              mt-4

                              font-display

                              text-3xl
                              font-medium
                              leading-[0.95]
                              tracking-[-0.045em]

                              text-white/90

                              transition-colors

                              hover:text-[#3B82F6]

                              sm:text-4xl
                              lg:text-5xl
                            "
                          >
                            {project.title}
                          </h2>
                        </Link>

                        <p
                          className="
                            mt-4
                            max-w-xl

                            text-sm
                            leading-6
                            text-white/35
                          "
                        >
                          {project.description}
                        </p>

                        {project.role && (
                          <p
                            className="
                              mt-5

                              text-[9px]
                              uppercase
                              tracking-[0.15em]
                              text-white/20
                            "
                          >
                            Role · {project.role}
                          </p>
                        )}

                        <Link
                          href={`/work/${project.slug}`}
                          className="
                            group/link

                            mt-7
                            inline-flex
                            items-center
                            gap-2

                            border-b
                            border-white/15

                            pb-1.5

                            text-[10px]
                            uppercase
                            tracking-[0.16em]
                            text-white/50

                            transition-all

                            hover:border-[#3B82F6]
                            hover:text-white
                          "
                        >
                          View Case Study
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.5}
                            className="
                              transition-transform

                              group-hover/link:-translate-y-0.5
                              group-hover/link:translate-x-0.5
                            "
                          />
                        </Link>
                      </div>
                    </FadeUp>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="
                border-b
                border-white/10

                py-24
                text-center
              "
            >
              <p
                className="
                  font-display
                  text-3xl
                  tracking-[-0.04em]
                  text-white/50
                "
              >
                No projects yet.
              </p>

              <p className="mt-3 text-sm text-white/25">
                Published projects will appear here.
              </p>
            </div>
          )}

          <div
            className="
              mt-12
              flex
              items-center
              justify-between

              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/20
            "
          >
            <p>s4z.studio</p>

            <Link
              href="/"
              className="
                transition-colors
                hover:text-white
              "
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
