export const NAV = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "work",       label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

export interface Project {
  id: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  stack: string[];
  role: string;
  status: "ongoing" | "shipped" | "archived";
  placeholder: string;
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Upcoming project",
    tag: "Sample Filter",
    year: "202x",
    blurb: "O... This is a project! It does things and solves problems. It's really cool and I'm proud of it.",
    stack: ["O.O"],
    role: "Solo",
    status: "ongoing",
    placeholder: "cool-project.mp4",
  },
];

export const FILTERS = ["All", "Sample Filter"];

export interface TimelineEntry {
  kind: "role" | "lesson" | "milestone" | "moment";
  when: string;
  where: string;
  role: string;
  body: string;
  photo?: string; // filename in public/timeline/, e.g. "uipath-onsite.jpg"
}

export const TIMELINE: TimelineEntry[] = [
  {
    kind: "role",
    when: "Sep 2025 — Present",
    where: "UiPath",
    role: "Software Engineer I",
    body: "Engineering solutions for Governance, a platform-wide policy management and distribution service for UiPath products.",
  },
  {
    kind: "role",
    when: "June 2024 - Sep 2025",
    where: "Personal Robotics Lab, UW",
    role: "Research Intern",
    body: "My intro to robotics -- started with building the camera calibration to building task environments and teleoperation for robots to learn household task through sim."
  },
  {
    kind: "moment",
    when: "March 2025",
    where: "UW Graduation",
    role: "B.S. Computer Science and Mathematics Minor",
    body: "",
    photo: "uw-grad.png",
  },
];
