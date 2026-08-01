// data/roadmap.ts
// Roadmap phase data.

import type { RoadmapPhase } from "@/types";

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-01",
    number: "01",
    title: "Foundation",
    subtitle: "The academic data layer",
    status: "building",
    items: [
      { label: "University & program database", description: "Initial set of colleges and programs" },
      { label: "Subject & curriculum mapping", description: "Organizing subjects per semester" },
      { label: "Core question database", description: "Structured question storage model" },
      { label: "Platform architecture", description: "Next.js frontend + FastAPI backend" },
    ],
  },
  {
    id: "phase-02",
    number: "02",
    title: "Preparation",
    subtitle: "Everything students need before exams",
    status: "next",
    items: [
      { label: "PYQs — organized by year, exam & topic", description: "Previous year questions filterable by metadata" },
      { label: "Practice question banks", description: "Topic-based question practice" },
      { label: "Subject quizzes", description: "Quick self-testing and revision" },
      { label: "Notes & resources", description: "Structured study material by unit/topic" },
    ],
  },
  {
    id: "phase-03",
    number: "03",
    title: "Community",
    subtitle: "Students improving Studyit for students",
    status: "planned",
    items: [
      { label: "Student contributions", description: "Submit PYQs, questions and notes" },
      { label: "Contributor profiles", description: "Recognition for helpful students" },
      { label: "Campus contributors", description: "University-level community leaders" },
      { label: "Peer verification", description: "Community-driven quality control" },
    ],
  },
  {
    id: "phase-04",
    number: "04",
    title: "Intelligence",
    subtitle: "Preparation that knows you",
    status: "planned",
    items: [
      { label: "Personalized preparation", description: "Study plans based on your history" },
      { label: "Smart recommendations", description: "What to study, when to study it" },
      { label: "Progress insights", description: "Track your preparation over time" },
      { label: "Weak area identification", description: "Focus where it matters most" },
    ],
  },
];
