import { z } from "zod";

const requiredText = z.string().trim().min(1, "Field wajib diisi");

const optionalText = z.string().trim().optional();

export const heroSchema = z.object({
  eyebrow: optionalText,
  headline: optionalText,
  description: optionalText,
});

export type HeroSchema = z.infer<typeof heroSchema>;

export const overviewSchema = z.object({
  statement: requiredText,
  statementHighlight: optionalText,

  storyTitle: requiredText,
  storyHighlight: optionalText,

  storyParagraphs: z.array(requiredText),

  tools: z.array(requiredText),

  contributions: z.array(requiredText),

  contributionTitle: optionalText,
  contributionHighlight: optionalText,
});

export type OverviewSchema = z.infer<typeof overviewSchema>;

const challengeSchema = z.object({
  title: requiredText,
  description: requiredText,
});

export const problemGoalsSchema = z.object({
  heading: requiredText,
  headingHighlight: optionalText,

  challengeStatement: requiredText,
  challengeStatementHighlight: optionalText,

  challenges: z.array(challengeSchema),

  goal: requiredText,
  goalHighlight: optionalText,
  goalDescription: requiredText,

  principleTitle: optionalText,

  principleLines: z.array(requiredText),
});

export type ProblemGoalsSchema = z.infer<typeof problemGoalsSchema>;

const processGroupSchema = z.object({
  title: requiredText,
  description: requiredText,
});

const processDecisionSchema = z.object({
  title: requiredText,
  description: requiredText,
});

export const processSchema = z.object({
  heading: requiredText,
  headingHighlight: optionalText,
  description: requiredText,

  steps: z.array(requiredText),

  information: z.object({
    heading: requiredText,
    headingHighlight: optionalText,

    description: requiredText,

    rawInformation: z.array(requiredText),

    groups: z.array(processGroupSchema),

    priorityHeading: requiredText,

    priorities: z.array(requiredText),
  }),

  structure: z.object({
    heading: requiredText,
    headingHighlight: optionalText,

    description: requiredText,

    image: requiredText,
    imageAlt: optionalText,

    directionTitle: requiredText,
    directionDescription: requiredText,

    principleLines: z.array(requiredText),
  }),

  refinement: z.object({
    heading: requiredText,
    headingHighlight: optionalText,

    description: requiredText,

    beforeImage: requiredText,
    beforeImageAlt: optionalText,

    afterImage: requiredText,
    afterImageAlt: optionalText,

    decisions: z.array(processDecisionSchema),
  }),

  closingText: optionalText,
});

export type ProcessSchema = z.infer<typeof processSchema>;

const solutionDesignDetailSchema = z.object({
  label: requiredText,
  title: requiredText,
  description: requiredText,
});

export const solutionSchema = z.object({
  heading: requiredText,
  headingHighlight: optionalText,

  description: requiredText,

  dashboard: z.object({
    title: requiredText,
    titleHighlight: optionalText,

    description: requiredText,

    image: requiredText,
    imageAlt: optionalText,
  }),

  designDetails: z.array(solutionDesignDetailSchema),

  monitoring: z.object({
    title: requiredText,
    titleHighlight: optionalText,

    description: requiredText,

    image: requiredText,
    imageAlt: optionalText,

    principle: optionalText,
  }),

  dataVisualization: z.object({
    title: requiredText,
    titleHighlight: optionalText,

    description: requiredText,

    image: requiredText,
    imageAlt: optionalText,
  }),

  interfaceDetails: z.object({
    title: requiredText,
    titleHighlight: optionalText,

    description: requiredText,

    primaryImage: requiredText,
    primaryImageAlt: optionalText,

    secondaryImage: requiredText,
    secondaryImageAlt: optionalText,
  }),

  result: z.object({
    text: requiredText,
    highlight: optionalText,
    principle: optionalText,
  }),

  closingText: optionalText,
});

export type SolutionSchema = z.infer<typeof solutionSchema>;

const outcomeTakeawaySchema = z.object({
  id: requiredText,
  title: requiredText,
  description: requiredText,
});

export const outcomeSchema = z.object({
  heading: requiredText,
  headingHighlight: optionalText,

  statement: requiredText,
  statementHighlight: optionalText,

  supportingPoints: z.array(requiredText),

  takeawaysTitle: optionalText,
  takeawaysDescription: optionalText,

  takeaways: z.array(outcomeTakeawaySchema),

  reflection: requiredText,
  reflectionHighlight: optionalText,

  endingLabel: optionalText,
  endingTitle: requiredText,
  endingHighlight: optionalText,

  footerText: optionalText,
});

export type OutcomeSchema = z.infer<typeof outcomeSchema>;

export const projectBasicSchema = z.object({
  number: requiredText,

  title: requiredText,

  slug: requiredText
    .toLowerCase()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug hanya boleh menggunakan huruf kecil, angka, dan tanda -",
    ),

  category: requiredText,

  description: requiredText,

  coverImage: requiredText,

  role: requiredText,

  context: requiredText,

  platform: requiredText,

  year: requiredText,

  readTime: requiredText,

  order: z
    .number({
      message: "Order harus berupa angka",
    })
    .int("Order harus berupa angka bulat")
    .min(1, "Order minimal 1"),

  featured: z.boolean(),

  published: z.boolean(),
});

export type ProjectBasicSchema = z.infer<typeof projectBasicSchema>;

export const projectSchema = z.object({
  basic: projectBasicSchema,

  hero: heroSchema,

  overview: overviewSchema,

  problemGoals: problemGoalsSchema,

  process: processSchema,

  solution: solutionSchema,

  outcome: outcomeSchema,
});

export type ProjectSchema = z.infer<typeof projectSchema>;
