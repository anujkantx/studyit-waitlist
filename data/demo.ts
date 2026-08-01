// data/demo.ts
// All demonstration data for the interactive product preview.
// This is clearly demo/illustration content — NOT real platform data.

import type { DemoUniversity } from "@/types";

export const demoUniversities: DemoUniversity[] = [
  {
    id: "dtu",
    name: "Delhi Technological University",
    shortName: "DTU",
    city: "New Delhi",
    programs: [
      {
        id: "btech-cs",
        name: "B.Tech Computer Science",
        shortName: "B.Tech CS",
        semesters: [
          {
            id: "sem3",
            label: "Semester 3",
            subjects: [
              {
                id: "dsa",
                name: "Data Structures & Algorithms",
                code: "CS301",
                pyqCount: 128,
                practiceCount: 240,
                notesCount: 34,
                quizCount: 20,
                practiceTopics: [
                  "Arrays & Strings",
                  "Linked Lists",
                  "Stacks & Queues",
                  "Trees & BST",
                  "Graph Algorithms",
                  "Dynamic Programming",
                  "Sorting & Searching",
                  "Hashing",
                ],
                questions: [
                  {
                    id: "q1",
                    text: "Explain the time complexity of binary search and derive its recurrence relation.",
                    year: 2025,
                    examType: "End Semester",
                    marks: 5,
                    difficulty: "Medium",
                    topic: "Searching",
                  },
                  {
                    id: "q2",
                    text: "Write and analyze the algorithm for merge sort. Compare it with quick sort in terms of space and time complexity.",
                    year: 2024,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "Sorting",
                  },
                  {
                    id: "q3",
                    text: "Define a balanced binary search tree. Explain AVL rotations with examples.",
                    year: 2025,
                    examType: "Mid Semester",
                    marks: 5,
                    difficulty: "Medium",
                    topic: "Trees & BST",
                  },
                  {
                    id: "q4",
                    text: "Implement Dijkstra's shortest path algorithm and analyze its time complexity for dense graphs.",
                    year: 2024,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "Graph Algorithms",
                  },
                  {
                    id: "q5",
                    text: "Explain the concept of hashing. What are collision resolution techniques?",
                    year: 2023,
                    examType: "End Semester",
                    marks: 5,
                    difficulty: "Easy",
                    topic: "Hashing",
                  },
                ],
                resources: [
                  {
                    id: "r1",
                    title: "Graph Algorithms — Complete Notes",
                    type: "PDF",
                    unit: "Unit 04",
                    topic: "Graph Algorithms",
                    uploadedBy: "Student, DTU",
                  },
                  {
                    id: "r2",
                    title: "Dynamic Programming Patterns",
                    type: "Notes",
                    unit: "Unit 05",
                    topic: "Dynamic Programming",
                    uploadedBy: "Student, DTU",
                  },
                  {
                    id: "r3",
                    title: "Sorting Algorithms Comparison",
                    type: "Slides",
                    unit: "Unit 02",
                    topic: "Sorting",
                    uploadedBy: "Student, DTU",
                  },
                  {
                    id: "r4",
                    title: "Tree Traversal Methods",
                    type: "Notes",
                    unit: "Unit 03",
                    topic: "Trees & BST",
                    uploadedBy: "Student, DTU",
                  },
                ],
              },
              {
                id: "math3",
                name: "Engineering Mathematics III",
                code: "MA301",
                pyqCount: 96,
                practiceCount: 180,
                notesCount: 22,
                quizCount: 15,
                practiceTopics: [
                  "Differential Equations",
                  "Laplace Transforms",
                  "Fourier Series",
                  "Complex Analysis",
                  "Numerical Methods",
                ],
                questions: [
                  {
                    id: "mq1",
                    text: "Find the Laplace transform of f(t) = t²e^{-2t} using the first shifting theorem.",
                    year: 2025,
                    examType: "End Semester",
                    marks: 5,
                    difficulty: "Medium",
                    topic: "Laplace Transforms",
                  },
                  {
                    id: "mq2",
                    text: "Expand f(x) = x² in Fourier series in the interval (-π, π).",
                    year: 2024,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "Fourier Series",
                  },
                ],
                resources: [
                  {
                    id: "mr1",
                    title: "Laplace Transforms Quick Reference",
                    type: "PDF",
                    unit: "Unit 02",
                    topic: "Laplace Transforms",
                    uploadedBy: "Student, DTU",
                  },
                ],
              },
            ],
          },
          {
            id: "sem4",
            label: "Semester 4",
            subjects: [
              {
                id: "os",
                name: "Operating Systems",
                code: "CS401",
                pyqCount: 112,
                practiceCount: 200,
                notesCount: 28,
                quizCount: 18,
                practiceTopics: [
                  "Process Management",
                  "Scheduling Algorithms",
                  "Memory Management",
                  "File Systems",
                  "Deadlocks",
                  "Virtual Memory",
                ],
                questions: [
                  {
                    id: "oq1",
                    text: "Explain the Banker's Algorithm for deadlock avoidance with an example.",
                    year: 2025,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "Deadlocks",
                  },
                  {
                    id: "oq2",
                    text: "Compare Round Robin and Priority Scheduling with advantages and disadvantages.",
                    year: 2024,
                    examType: "Mid Semester",
                    marks: 5,
                    difficulty: "Medium",
                    topic: "Scheduling Algorithms",
                  },
                ],
                resources: [
                  {
                    id: "or1",
                    title: "Scheduling Algorithms Solved Examples",
                    type: "PDF",
                    unit: "Unit 02",
                    topic: "Scheduling Algorithms",
                    uploadedBy: "Student, DTU",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "vtu",
    name: "Visvesvaraya Technological University",
    shortName: "VTU",
    city: "Belagavi",
    programs: [
      {
        id: "btech-ec",
        name: "B.E. Electronics & Communication",
        shortName: "B.E. ECE",
        semesters: [
          {
            id: "sem3-vtu",
            label: "Semester 3",
            subjects: [
              {
                id: "analog",
                name: "Analog Electronics",
                code: "21EC32",
                pyqCount: 88,
                practiceCount: 150,
                notesCount: 20,
                quizCount: 12,
                practiceTopics: [
                  "BJT Amplifiers",
                  "FET Circuits",
                  "Op-Amp Applications",
                  "Feedback Amplifiers",
                  "Oscillators",
                ],
                questions: [
                  {
                    id: "aq1",
                    text: "Derive the expression for voltage gain of a common-emitter BJT amplifier with emitter bypass capacitor.",
                    year: 2024,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "BJT Amplifiers",
                  },
                ],
                resources: [
                  {
                    id: "ar1",
                    title: "Op-Amp Circuits Summary Notes",
                    type: "PDF",
                    unit: "Unit 03",
                    topic: "Op-Amp Applications",
                    uploadedBy: "Student, VTU",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mu",
    name: "University of Mumbai",
    shortName: "MU",
    city: "Mumbai",
    programs: [
      {
        id: "btech-it",
        name: "B.Tech Information Technology",
        shortName: "B.Tech IT",
        semesters: [
          {
            id: "sem5-mu",
            label: "Semester 5",
            subjects: [
              {
                id: "dbms",
                name: "Database Management Systems",
                code: "IT501",
                pyqCount: 104,
                practiceCount: 190,
                notesCount: 26,
                quizCount: 16,
                practiceTopics: [
                  "SQL Queries",
                  "Normalization",
                  "Transaction Management",
                  "Indexing & Hashing",
                  "Query Optimization",
                  "NoSQL Basics",
                ],
                questions: [
                  {
                    id: "dbq1",
                    text: "Explain BCNF normalization with an example. When is a relation in BCNF but not in 3NF?",
                    year: 2025,
                    examType: "End Semester",
                    marks: 10,
                    difficulty: "Hard",
                    topic: "Normalization",
                  },
                ],
                resources: [
                  {
                    id: "dbr1",
                    title: "SQL Joins — Illustrated Guide",
                    type: "Notes",
                    unit: "Unit 01",
                    topic: "SQL Queries",
                    uploadedBy: "Student, MU",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Current active demo (used in ProductPreview as default)
export const defaultDemo = {
  universityId: "dtu",
  programId: "btech-cs",
  semesterId: "sem3",
  subjectId: "dsa",
};
