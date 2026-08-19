export type HeroData = {
  eyebrow?: string;
  headline?: string;
  description?: string;
};

export type OverviewData = {
  statement: string;
  statementHighlight?: string;

  storyTitle: string;
  storyHighlight?: string;

  storyParagraphs: string[];

  tools: string[];
  contributions: string[];

  contributionTitle?: string;
  contributionHighlight?: string;
};

export type ChallengeData = {
  title: string;
  description: string;
};

export type ProblemGoalsData = {
  heading: string;
  headingHighlight?: string;

  challengeStatement: string;
  challengeStatementHighlight?: string;

  challenges: ChallengeData[];

  goal: string;
  goalHighlight?: string;
  goalDescription: string;

  principleTitle?: string;
  principleLines: string[];
};

export type ProcessGroup = {
  title: string;
  description: string;
};

export type ProcessDecision = {
  title: string;
  description: string;
};

export type ProcessData = {
  heading: string;
  headingHighlight?: string;
  description: string;

  steps: string[];

  information: {
    heading: string;
    headingHighlight?: string;
    description: string;

    rawInformation: string[];

    groups: ProcessGroup[];

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

    decisions: ProcessDecision[];
  };

  closingText?: string;
};

export type SolutionDesignDetail = {
  label: string;
  title: string;
  description: string;
};

export type SolutionData = {
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

  designDetails: SolutionDesignDetail[];

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
};

export type OutcomeTakeaway = {
  id: string;
  title: string;
  description: string;
};

export type OutcomeData = {
  heading: string;
  headingHighlight?: string;

  statement: string;
  statementHighlight?: string;

  supportingPoints: string[];

  takeawaysTitle?: string;
  takeawaysDescription?: string;

  takeaways: OutcomeTakeaway[];

  reflection: string;
  reflectionHighlight?: string;

  endingLabel?: string;
  endingTitle: string;
  endingHighlight?: string;

  footerText?: string;
};
