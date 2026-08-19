export type PlaygroundItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "large" | "small";
};

export const playgroundItems: PlaygroundItem[] = [
  {
    id: "01",
    title: "Dashboard Exploration",
    category: "UI Exploration",
    year: "2026",
    image: "/images/playground/dashboard.jpg",
    size: "large",
  },
  {
    id: "02",
    title: "Mobile App Concept",
    category: "Mobile UI",
    year: "2026",
    image: "/images/playground/mobile.jpg",
    size: "small",
  },
  {
    id: "03",
    title: "Landing Page",
    category: "Web Design",
    year: "2026",
    image: "/images/playground/landing.jpg",
    size: "small",
  },
  {
    id: "04",
    title: "Component Exploration",
    category: "Interaction Design",
    year: "2026",
    image: "/images/playground/components.jpg",
    size: "large",
  },
];
