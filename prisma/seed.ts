import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* ======================================================
   OVERVIEW
====================================================== */

const overviewData = {
  statement: "Making technical data",
  statementHighlight: "easier to see, read, and understand.",

  storyTitle:
    "Ground Detector is a monitoring dashboard designed to bring technical and operational information",

  storyHighlight: "into one clear view.",

  storyParagraphs: [
    "The challenge wasn't simply putting data on a screen. It was figuring out how different information could be organized and prioritized so users could quickly understand the current condition of the system.",

    "My focus was on creating a visual hierarchy that makes important information easier to notice, while keeping the overall monitoring experience structured and straightforward.",
  ],

  tools: ["Figma", "FigJam"],

  contributions: [
    "UX Exploration",
    "User Flow",
    "Wireframing",
    "UI Design",
    "Prototyping",
    "Dashboard Design",
  ],

  contributionTitle: "From early structure",

  contributionHighlight: "to the final interface.",
};

/* ======================================================
   PROBLEM & GOALS
====================================================== */

const problemGoalsData = {
  heading: "A lot to monitor.",
  headingHighlight: "Not a lot of room for confusion.",

  challengeStatement:
    "The interface needed to show enough technical information to be useful,",

  challengeStatementHighlight:
    "without forcing users to process everything at once.",

  challenges: [
    {
      title: "Too much information",

      description:
        "Multiple technical values needed to be visible without making the interface feel overloaded.",
    },
    {
      title: "Different priorities",

      description:
        "Not every piece of information carries the same importance, so users needed a clear way to recognize what deserves attention first.",
    },
    {
      title: "Hard to scan",

      description:
        "Raw technical data can take time to interpret when everything is presented with the same visual weight.",
    },
  ],

  goal: "Make the condition",

  goalHighlight: "easy to understand at a glance.",

  goalDescription:
    "Keep the technical detail available, but use structure, hierarchy, and visual priority to make the monitoring experience faster to read.",

  principleTitle: "Design principle",

  principleLines: ["Clear first.", "Detailed second."],
};

/* ======================================================
   PROCESS
====================================================== */

const processData = {
  heading: "Figuring out what",
  headingHighlight: "actually matters.",

  description:
    "Before thinking about colors or components, I needed to understand what users should notice first — and what could stay in the background.",

  steps: ["Understand", "Structure", "Refine"],

  information: {
    heading: "Making sense",
    headingHighlight: "of the data.",

    description:
      "The system had multiple types of technical information competing for attention. Instead of treating every value equally, I started by grouping related information and defining its role in the monitoring experience.",

    rawInformation: [
      "Position",
      "Measurement",
      "Status",
      "Movement",
      "Sensor Data",
      "System State",
    ],

    groups: [
      {
        title: "Monitoring Data",

        description: "Measurements and values coming from the system.",
      },
      {
        title: "System Status",

        description: "Current conditions that need to be understood quickly.",
      },
      {
        title: "Movement",

        description:
          "Operational information related to position and activity.",
      },
    ],

    priorityHeading: "What deserves attention first?",

    priorities: [
      "What needs attention first?",
      "What supports that information?",
      "What can stay secondary?",
    ],
  },

  structure: {
    heading: "Shaping the",
    headingHighlight: "experience.",

    description:
      "Once the information had a clearer structure, I could start exploring how that hierarchy would translate into an actual interface.",

    image: "/images/projects/ground-detector/wireframe.jpg",

    imageAlt: "Ground Detector early dashboard wireframe",

    directionTitle: "Started rough.",

    directionDescription:
      "At this stage, the focus wasn't visual polish. I was testing how the dashboard could organize different levels of information without making everything compete for attention.",

    principleLines: ["Structure first.", "Visual decisions later."],
  },

  refinement: {
    heading: "From structure",
    headingHighlight: "to interface.",

    description:
      "The final direction came from refining the hierarchy rather than adding more elements — making the important information stronger and everything around it quieter.",

    beforeImage: "/images/projects/ground-detector/wireframe-detail.jpg",

    beforeImageAlt: "Ground Detector wireframe",

    afterImage: "/images/projects/ground-detector/final-dashboard.jpg",

    afterImageAlt: "Ground Detector final dashboard",

    decisions: [
      {
        title: "Structure",

        description: "Related information grouped into clearer sections.",
      },
      {
        title: "Hierarchy",

        description: "Important conditions given stronger visual priority.",
      },
      {
        title: "Clarity",

        description: "Visual noise reduced so the interface is easier to scan.",
      },
    ],
  },

  closingText: "Information → Structure → Clarity",
};

/* ======================================================
   SOLUTION
====================================================== */

const solutionData = {
  heading: "Turning complex monitoring",
  headingHighlight: "into a clearer experience.",

  description:
    "The final interface brings the structure explored earlier into a monitoring experience where important information is easier to find, compare, and understand.",

  dashboard: {
    title: "Everything starts",
    titleHighlight: "with the overview.",

    description:
      "One place to understand the current system condition before moving into more detailed information.",

    image: "/images/projects/ground-detector/dashboard-overview.jpg",

    imageAlt: "Ground Detector dashboard overview",
  },

  designDetails: [
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
  ],

  monitoring: {
    title: "Designed for",
    titleHighlight: "quick scanning.",

    description:
      "Monitoring information is grouped around what users need to notice first. Clear labels, spacing, and visual hierarchy reduce the effort needed to understand the current condition.",

    image: "/images/projects/ground-detector/monitoring.jpg",

    imageAlt: "Ground Detector monitoring interface",

    principle: "Scan → Understand → Act",
  },

  dataVisualization: {
    title: "Numbers become",
    titleHighlight: "something readable.",

    description:
      "Charts and supporting values provide context instead of presenting isolated numbers, making changes and patterns easier to recognize over time.",

    image: "/images/projects/ground-detector/data-visualization.jpg",

    imageAlt: "Ground Detector data visualization",
  },

  interfaceDetails: {
    title: "Small decisions,",
    titleHighlight: "consistent experience.",

    description:
      "A consistent visual language across components keeps different parts of the monitoring system connected and predictable.",

    primaryImage: "/images/projects/ground-detector/detail-01.jpg",

    primaryImageAlt: "Ground Detector monitoring interface detail",

    secondaryImage: "/images/projects/ground-detector/detail-02.jpg",

    secondaryImageAlt: "Ground Detector interface component detail",
  },

  result: {
    text: "Technical information stays visible",

    highlight: "without making the experience feel technical.",

    principle: "Clarity over complexity",
  },

  closingText: "Structure → Interface",
};

const outcomeData = {
  heading: "Less about showing data.",
  headingHighlight: "More about making it understandable.",

  statement: "A clearer monitoring experience where users can understand",

  statementHighlight: "the overall condition before diving into the details.",

  supportingPoints: [
    "Information no longer competes for the same level of attention.",
    "Hierarchy, grouping, and status guide users toward what matters first.",
  ],

  takeawaysTitle: "What I learned",

  takeawaysDescription: "Three principles I'd carry into the next product.",

  takeaways: [
    {
      id: "01",
      title: "Clarity before decoration.",
      description:
        "With technical information, deciding what deserves attention matters more than adding more visual elements.",
    },
    {
      id: "02",
      title: "Context makes data useful.",
      description:
        "Status, hierarchy, and supporting context help users understand what the numbers actually mean.",
    },
    {
      id: "03",
      title: "Design the system, not just screens.",
      description:
        "Reusable patterns and clear relationships create a more consistent experience across the product.",
    },
  ],

  reflection: "Good monitoring design isn't about showing everything.",

  reflectionHighlight: "It's about helping people know what to look at first.",

  endingLabel: "End of case study",

  endingTitle: "One project done.",

  endingHighlight: "A few lessons kept.",

  footerText: "Case Study / 2025",
};

/* ======================================================
   MAIN
====================================================== */

async function main() {
  const groundDetector = await prisma.project.upsert({
    where: {
      slug: "ground-detector",
    },

    /* ==================================================
       UPDATE
    ================================================== */

    update: {
      number: "01",

      title: "Ground Detector",

      category: "Monitoring System / UI/UX Design",

      description:
        "A monitoring dashboard designed to bring sensor data, system conditions, and operational information into one clear interface.",

      coverImage: "/images/projects/ground-detector/hero.jpg",

      role: "UI/UX Designer",

      context: "Railway Monitoring",

      platform: "Web Dashboard",

      year: "2025",

      readTime: "7–10 Min",

      featured: true,

      published: true,

      order: 1,

      /* ===============================================
         HERO
      =============================================== */

      hero: {
        eyebrow: "Monitoring System / UI/UX Design",

        headline:
          "Turning technical railway monitoring data into something easier to read at a glance.",

        description:
          "A monitoring dashboard designed to bring sensor data, system conditions, and operational information into one clear interface — making it easier to understand what's happening without digging through raw technical data.",
      },

      /* ===============================================
         OVERVIEW
      =============================================== */

      overview: overviewData,

      /* ===============================================
         PROBLEM & GOALS
      =============================================== */

      problemGoals: problemGoalsData,

      /* ===============================================
         PROCESS
      =============================================== */

      process: processData,

      /* ===============================================
         SOLUTION
      =============================================== */

      solution: solutionData,

      outcome: outcomeData,
    },

    /* ==================================================
       CREATE
    ================================================== */

    create: {
      slug: "ground-detector",

      number: "01",

      title: "Ground Detector",

      category: "Monitoring System / UI/UX Design",

      description:
        "A monitoring dashboard designed to bring sensor data, system conditions, and operational information into one clear interface.",

      coverImage: "/images/projects/ground-detector/hero.jpg",

      role: "UI/UX Designer",

      context: "Railway Monitoring",

      platform: "Web Dashboard",

      year: "2025",

      readTime: "7–10 Min",

      featured: true,

      published: true,

      order: 1,

      /* ===============================================
         HERO
      =============================================== */

      hero: {
        eyebrow: "Monitoring System / UI/UX Design",

        headline:
          "Turning technical railway monitoring data into something easier to read at a glance.",

        description:
          "A monitoring dashboard designed to bring sensor data, system conditions, and operational information into one clear interface — making it easier to understand what's happening without digging through raw technical data.",
      },

      /* ===============================================
         OVERVIEW
      =============================================== */

      overview: overviewData,

      /* ===============================================
         PROBLEM & GOALS
      =============================================== */

      problemGoals: problemGoalsData,

      /* ===============================================
         PROCESS
      =============================================== */

      process: processData,

      /* ===============================================
         SOLUTION
      =============================================== */

      solution: solutionData,

      outcome: outcomeData,

      /* ===============================================
         TAGS
      =============================================== */

      tags: {
        create: [
          {
            name: "UI/UX Design",
            order: 1,
          },
          {
            name: "Dashboard",
            order: 2,
          },
          {
            name: "Monitoring System",
            order: 3,
          },
        ],
      },
    },
  });

  console.log(`Seeded project: ${groundDetector.title}`);
}

/* ======================================================
   RUN
====================================================== */

main()
  .catch((error) => {
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
