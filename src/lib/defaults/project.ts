import type { ProjectSchema } from "@/src/schemas/project.schema";

export const defaultProjectValues: ProjectSchema = {
  basic: {
    number: "",
    title: "",
    slug: "",
    category: "",
    description: "",
    coverImage: "",
    role: "",
    context: "",
    platform: "",
    year: "",
    readTime: "",
    order: 1,
    featured: false,
    published: false,
  },

  hero: {
    eyebrow: "",
    headline: "",
    description: "",
  },

  overview: {
    statement: "",
    statementHighlight: "",

    storyTitle: "",
    storyHighlight: "",

    storyParagraphs: [""],

    tools: [""],

    contributions: [""],

    contributionTitle: "",
    contributionHighlight: "",
  },

  problemGoals: {
    heading: "",
    headingHighlight: "",

    challengeStatement: "",
    challengeStatementHighlight: "",

    challenges: [
      {
        title: "",
        description: "",
      },
    ],

    goal: "",
    goalHighlight: "",
    goalDescription: "",

    principleTitle: "",

    principleLines: [""],
  },

  process: {
    heading: "",
    headingHighlight: "",
    description: "",

    steps: [""],

    information: {
      heading: "",
      headingHighlight: "",
      description: "",

      rawInformation: [""],

      groups: [
        {
          title: "",
          description: "",
        },
      ],

      priorityHeading: "",

      priorities: [""],
    },

    structure: {
      heading: "",
      headingHighlight: "",

      description: "",

      image: "",
      imageAlt: "",

      directionTitle: "",
      directionDescription: "",

      principleLines: [""],
    },

    refinement: {
      heading: "",
      headingHighlight: "",

      description: "",

      beforeImage: "",
      beforeImageAlt: "",

      afterImage: "",
      afterImageAlt: "",

      decisions: [
        {
          title: "",
          description: "",
        },
      ],
    },

    closingText: "",
  },

  solution: {
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

    designDetails: [
      {
        label: "",
        title: "",
        description: "",
      },
    ],

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

  outcome: {
    heading: "",
    headingHighlight: "",

    statement: "",
    statementHighlight: "",

    supportingPoints: [""],

    takeawaysTitle: "",
    takeawaysDescription: "",

    takeaways: [
      {
        id: "01",
        title: "",
        description: "",
      },
    ],

    reflection: "",
    reflectionHighlight: "",

    endingLabel: "",
    endingTitle: "",
    endingHighlight: "",

    footerText: "",
  },
};
