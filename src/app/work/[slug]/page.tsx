import { notFound } from "next/navigation";

import { CaseStudyHero } from "@/src/components/case-study/case-study-hero";
import { CaseStudyNextProject } from "@/src/components/case-study/case-study-next-project";
import { CaseStudyOutcome } from "@/src/components/case-study/case-study-outcome";
import { CaseStudyOverview } from "@/src/components/case-study/case-study-overview";
import { CaseStudyProblemGoals } from "@/src/components/case-study/case-study-problem-goals";
import { CaseStudyProcess } from "@/src/components/case-study/case-study-process";
import { CaseStudyProgress } from "@/src/components/case-study/case-study-progress";
import { CaseStudySolution } from "@/src/components/case-study/case-study-solution";
import {
  getNextProject,
  getProjectBySlug,
  getPublishedProjectCount,
} from "@/src/lib/queries/project";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project || !project.published) {
    notFound();
  }

  const [nextProjectData, totalProjects] = await Promise.all([
    getNextProject(project.order),
    getPublishedProjectCount(),
  ]);

  const hero = project.hero as {
    eyebrow?: string;
    headline?: string;
    description?: string;
  } | null;

  const heroProject = {
    title: project.title,
    category: project.category,
    coverImage: project.coverImage,

    role: project.role ?? "—",
    context: project.context ?? "—",
    platform: project.platform ?? "—",
    year: project.year ?? "—",
    readTime: project.readTime ?? "—",

    hero,
  };

  const overview = project.overview as {
    statement: string;
    statementHighlight?: string;

    storyTitle: string;
    storyHighlight?: string;

    storyParagraphs: string[];

    tools: string[];
    contributions: string[];

    contributionTitle?: string;
    contributionHighlight?: string;
  } | null;

  const overviewProject = {
    title: project.title,

    role: project.role ?? "—",
    platform: project.platform ?? "—",
    year: project.year ?? "—",

    overview,
  };

  const problemGoals = project.problemGoals as {
    heading: string;
    headingHighlight?: string;

    challengeStatement: string;
    challengeStatementHighlight?: string;

    challenges: {
      title: string;
      description: string;
    }[];

    goal: string;
    goalHighlight?: string;
    goalDescription: string;

    principleTitle?: string;
    principleLines: string[];
  } | null;

  const problemGoalsProject = {
    problemGoals,
  };

  const process = project.process as {
    heading: string;
    headingHighlight?: string;
    description: string;

    steps: string[];

    information: {
      heading: string;
      headingHighlight?: string;
      description: string;

      rawInformation: string[];

      groups: {
        title: string;
        description: string;
      }[];

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

      decisions: {
        title: string;
        description: string;
      }[];
    };

    closingText?: string;
  } | null;

  const processProject = {
    title: project.title,
    process,
  };

  const solution = project.solution as {
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

    designDetails: {
      label: string;
      title: string;
      description: string;
    }[];

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

  const solutionProject = {
    title: project.title,
    solution,
  };

  const outcome = project.outcome as {
    heading: string;
    headingHighlight?: string;

    statement: string;
    statementHighlight?: string;

    supportingPoints: string[];

    takeawaysTitle?: string;
    takeawaysDescription?: string;

    takeaways: {
      id: string;
      title: string;
      description: string;
    }[];

    reflection: string;
    reflectionHighlight?: string;

    endingLabel?: string;
    endingTitle: string;
    endingHighlight?: string;

    footerText?: string;
  } | null;

  const outcomeProject = {
    title: project.title,
    year: project.year ?? "—",
    outcome,
  };

  const nextProject = nextProjectData
    ? {
        number: nextProjectData.number,
        total: String(totalProjects).padStart(2, "0"),

        title: nextProjectData.title,
        category: nextProjectData.category,

        year: nextProjectData.year ?? "—",

        href: `/work/${nextProjectData.slug}`,

        image: nextProjectData.coverImage ?? "/images/projects/placeholder.jpg",
      }
    : null;

  return (
    <main className="bg-[#080808]">
      <CaseStudyProgress />

      <CaseStudyHero project={heroProject} />

      <CaseStudyOverview project={overviewProject} />

      <CaseStudyProblemGoals project={problemGoalsProject} />

      <CaseStudyProcess project={processProject} />

      <CaseStudySolution project={solutionProject} />

      <CaseStudyOutcome project={outcomeProject} />

      {nextProject && (
        <CaseStudyNextProject
          currentProject={{
            number: project.number,
          }}
          nextProject={nextProject}
        />
      )}
    </main>
  );
}
