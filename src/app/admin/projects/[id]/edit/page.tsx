import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectForm } from "@/src/components/admin/project-form/project-form";
import { getProjectById } from "@/src/lib/queries/project";
import type { ProjectSchema } from "@/src/schemas/project.schema";

type EditProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const sections = [
  {
    id: "basic",
    label: "Basic Info",
  },
  {
    id: "hero",
    label: "Hero",
  },
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
    id: "solution",
    label: "Solution",
  },
  {
    id: "outcome",
    label: "Outcome",
  },
];

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  const defaultValues: ProjectSchema = {
    basic: {
      number: project.number,
      title: project.title,
      slug: project.slug,
      category: project.category,
      description: project.description,

      coverImage: project.coverImage ?? "",

      role: project.role ?? "",
      context: project.context ?? "",
      platform: project.platform ?? "",
      year: project.year ?? "",
      readTime: project.readTime ?? "",

      order: project.order,

      featured: project.featured,
      published: project.published,
    },

    hero: (project.hero as ProjectSchema["hero"]) ?? {
      eyebrow: "",
      headline: "",
      description: "",
    },

    overview: (project.overview as ProjectSchema["overview"]) ?? {
      statement: "",
      statementHighlight: "",

      storyTitle: "",
      storyHighlight: "",

      storyParagraphs: [],

      tools: [],

      contributions: [],

      contributionTitle: "",
      contributionHighlight: "",
    },

    problemGoals: (project.problemGoals as ProjectSchema["problemGoals"]) ?? {
      heading: "",
      headingHighlight: "",

      challengeStatement: "",
      challengeStatementHighlight: "",

      challenges: [],

      goal: "",
      goalHighlight: "",
      goalDescription: "",

      principleTitle: "",
      principleLines: [],
    },

    process: (project.process as ProjectSchema["process"]) ?? {
      heading: "",
      headingHighlight: "",
      description: "",

      steps: [],

      information: {
        heading: "",
        headingHighlight: "",
        description: "",

        rawInformation: [],

        groups: [],

        priorityHeading: "",
        priorities: [],
      },

      structure: {
        heading: "",
        headingHighlight: "",
        description: "",

        image: "",
        imageAlt: "",

        directionTitle: "",
        directionDescription: "",

        principleLines: [],
      },

      refinement: {
        heading: "",
        headingHighlight: "",
        description: "",

        beforeImage: "",
        beforeImageAlt: "",

        afterImage: "",
        afterImageAlt: "",

        decisions: [],
      },

      closingText: "",
    },

    solution: (project.solution as ProjectSchema["solution"]) ?? {
      heading: "",
      headingHighlight: "",
      description: "",

      dashboard: {
        title: "",
        titleHighlight: "",
        description: "",

        image: "",
        imageAlt: "",
      },

      designDetails: [],

      monitoring: {
        title: "",
        titleHighlight: "",
        description: "",

        image: "",
        imageAlt: "",

        principle: "",
      },

      dataVisualization: {
        title: "",
        titleHighlight: "",
        description: "",

        image: "",
        imageAlt: "",
      },

      interfaceDetails: {
        title: "",
        titleHighlight: "",
        description: "",

        primaryImage: "",
        primaryImageAlt: "",

        secondaryImage: "",
        secondaryImageAlt: "",
      },

      result: {
        text: "",
        highlight: "",
        principle: "",
      },

      closingText: "",
    },

    outcome: (project.outcome as ProjectSchema["outcome"]) ?? {
      heading: "",
      headingHighlight: "",

      statement: "",
      statementHighlight: "",

      supportingPoints: [],

      takeawaysTitle: "",
      takeawaysDescription: "",

      takeaways: [],

      reflection: "",
      reflectionHighlight: "",

      endingLabel: "",
      endingTitle: "",
      endingHighlight: "",

      footerText: "",
    },
  };

  /* ====================================================
     RENDER
  ==================================================== */

  return (
    <main>
      {/* ==================================================
          BACK
      ================================================== */}

      <Link
        href="/admin"
        className="
          group
          inline-flex
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.18em]
          text-white/30
          transition-colors
          hover:text-white
        "
      >
        <ArrowLeft
          size={13}
          className="
            transition-transform
            group-hover:-translate-x-1
          "
        />
        Projects
      </Link>

      {/* ==================================================
          HEADER
      ================================================== */}

      <div
        className="
          mt-6
          flex
          flex-col
          gap-6
          border-b
          border-white/10
          pb-8

          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div>
          {/* STATUS */}

          <div className="flex items-center gap-3">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#3B82F6]
              "
            >
              Edit Project
            </p>

            <span className="h-1 w-1 rounded-full bg-white/15" />

            <div className="flex items-center gap-2">
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${project.published ? "bg-emerald-400" : "bg-white/20"}
                `}
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-white/30
                "
              >
                {project.published ? "Published" : "Draft"}
              </span>
            </div>
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-3
              font-display
              text-4xl
              font-medium
              tracking-[-0.045em]

              sm:text-5xl
            "
          >
            {project.title}
          </h1>

          {/* URL */}

          <p className="mt-3 text-xs text-white/25">/work/{project.slug}</p>
        </div>

        {/* VIEW PROJECT */}

        <Link
          href={`/work/${project.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/view
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            px-4
            py-2.5
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-white/40
            transition-all

            hover:border-white/25
            hover:text-white
          "
        >
          View Project
          <ArrowUpRight
            size={13}
            className="
              transition-transform
              group-hover/view:-translate-y-0.5
              group-hover/view:translate-x-0.5
            "
          />
        </Link>
      </div>

      {/* ==================================================
          EDITOR LAYOUT
      ================================================== */}

      <div
        className="
          mt-8
          grid
          gap-10

          lg:grid-cols-[220px_minmax(0,1fr)]
          lg:gap-12
        "
      >
        {/* ==================================================
            SECTION NAVIGATION
        ================================================== */}

        <aside>
          <div className="lg:sticky lg:top-28">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/20
              "
            >
              Case Study
            </p>

            <nav
              className="
                mt-4
                flex
                gap-2
                overflow-x-auto
                pb-2

                lg:block
                lg:space-y-1
                lg:overflow-visible
                lg:pb-0
              "
            >
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="
                    group/nav
                    flex
                    shrink-0
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-xs
                    text-white/35
                    transition-all

                    hover:bg-white/[0.04]
                    hover:text-white

                    lg:w-full
                  "
                >
                  <span
                    className="
                      font-display
                      text-[10px]
                      text-white/15
                      transition-colors

                      group-hover/nav:text-[#3B82F6]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ==================================================
            FORM
        ================================================== */}

        <div className="min-w-0">
          <ProjectForm projectId={project.id} defaultValues={defaultValues} />
        </div>
      </div>
    </main>
  );
}
