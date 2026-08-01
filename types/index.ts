// types/index.ts
// Shared TypeScript types across the coming soon website.

// ============================================================
// Waitlist / Early Access
// ============================================================

export interface WaitlistFormData {
  name?: string;
  email: string;
  university: string;
}

export type WaitlistStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error"
  | "already_registered";

// ============================================================
// Campus Interest
// ============================================================

export interface CampusInterestFormData {
  name: string;
  email: string;
  university: string;
  program: string;
  wantsToContribute: boolean;
  wantsToBeAmbassador: boolean;
}

export type CampusFormStatus = "idle" | "submitting" | "success" | "error";

// ============================================================
// Analytics
// ============================================================

export type AnalyticsEvent =
  | "landing_page_view"
  | "hero_join_clicked"
  | "hero_explore_clicked"
  | "early_access_started"
  | "early_access_success"
  | "early_access_duplicate"
  | "early_access_demo_submitted"
  | "campus_interest_submitted"
  | "campus_interest_demo_submitted"
  | "university_requested"
  | "contributor_interest"
  | "campus_ambassador_interest"
  | "share_whatsapp"
  | "share_linkedin"
  | "share_x"
  | "copy_share_link"
  | "faq_opened"
  | "roadmap_viewed"
  | "product_demo_tab_changed"
  | "university_selector_changed"
  | "build_in_public_cta_clicked";

export interface AnalyticsProperties {
  [key: string]: string | number | boolean | undefined;
}

// ============================================================
// Demo / Product Data
// ============================================================

export interface DemoQuestion {
  id: string;
  text: string;
  year: number;
  examType: string;
  marks: number;
  difficulty: "Easy" | "Medium" | "Hard";
  topic?: string;
}

export interface DemoResource {
  id: string;
  title: string;
  type: "PDF" | "Notes" | "Slides" | "Video";
  unit: string;
  topic: string;
  uploadedBy: string;
}

export interface DemoSubject {
  id: string;
  name: string;
  code?: string;
  pyqCount: number;
  practiceCount: number;
  notesCount: number;
  quizCount: number;
  questions: DemoQuestion[];
  resources: DemoResource[];
  practiceTopics: string[];
}

export interface DemoSemester {
  id: string;
  label: string;
  subjects: DemoSubject[];
}

export interface DemoProgram {
  id: string;
  name: string;
  shortName: string;
  semesters: DemoSemester[];
}

export interface DemoUniversity {
  id: string;
  name: string;
  shortName: string;
  city: string;
  programs: DemoProgram[];
}

// ============================================================
// Roadmap
// ============================================================

export type RoadmapStatus = "building" | "next" | "planned" | "done";

export interface RoadmapItem {
  label: string;
  description?: string;
}

export interface RoadmapPhase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: RoadmapStatus;
  items: RoadmapItem[];
}

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ============================================================
// University (for selectors)
// ============================================================

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
}
