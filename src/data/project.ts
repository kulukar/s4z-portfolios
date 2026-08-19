export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Ground Detector",
    category: "Train Platform",
    description:
      "A Dashboard redesigned to make it easier for users to track their locomotive.",
    image: "/images/projects/ground-detector.png",
    href: "/work/ground-detector",
    tags: ["UI/UX Design", "Dashboard App"],
  },
  {
    id: "02",
    title: "Kaigo LMS",
    category: "Learning Management System",
    description:
      "A learning platform designed to help users study, practice, and keep track of their progress.",
    image: "/images/projects/lms-kaigo.png",
    href: "/work/lms-kaigo",
    tags: ["UI/UX Design", "Mobile App"],
  },
  {
    id: "03",
    title: "Ride Index",
    category: "Ride Index App",
    description:
      "A connected locomotive app that allows users to track their rides and monitor their performance.",
    image: "/images/projects/ride-index.png",
    href: "/work/ride-index",
    tags: ["UI/UX Design", "Dashboard App"],
  },
];
