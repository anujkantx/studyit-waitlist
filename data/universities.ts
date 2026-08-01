// data/universities.ts
// University data for the campus interest selector.
// Separated from demo.ts so it can be used independently in forms.

import type { University } from "@/types";

export const universities: University[] = [
  { id: "dtu", name: "Delhi Technological University", shortName: "DTU", city: "New Delhi", state: "Delhi" },
  { id: "vtu", name: "Visvesvaraya Technological University", shortName: "VTU", city: "Belagavi", state: "Karnataka" },
  { id: "mu", name: "University of Mumbai", shortName: "MU", city: "Mumbai", state: "Maharashtra" },
  { id: "du", name: "Delhi University", shortName: "DU", city: "New Delhi", state: "Delhi" },
  { id: "iit-delhi", name: "IIT Delhi", shortName: "IIT Delhi", city: "New Delhi", state: "Delhi" },
  { id: "iit-bombay", name: "IIT Bombay", shortName: "IIT Bombay", city: "Mumbai", state: "Maharashtra" },
  { id: "iit-madras", name: "IIT Madras", shortName: "IIT Madras", city: "Chennai", state: "Tamil Nadu" },
  { id: "iit-kanpur", name: "IIT Kanpur", shortName: "IIT Kanpur", city: "Kanpur", state: "Uttar Pradesh" },
  { id: "nit-trichy", name: "NIT Tiruchirappalli", shortName: "NIT Trichy", city: "Tiruchirappalli", state: "Tamil Nadu" },
  { id: "nit-warangal", name: "NIT Warangal", shortName: "NIT Warangal", city: "Warangal", state: "Telangana" },
  { id: "bits-pilani", name: "BITS Pilani", shortName: "BITS Pilani", city: "Pilani", state: "Rajasthan" },
  { id: "anna-univ", name: "Anna University", shortName: "Anna Univ", city: "Chennai", state: "Tamil Nadu" },
  { id: "osmania", name: "Osmania University", shortName: "Osmania", city: "Hyderabad", state: "Telangana" },
  { id: "pu", name: "Panjab University", shortName: "PU", city: "Chandigarh", state: "Punjab" },
  { id: "bu", name: "Bangalore University", shortName: "BU", city: "Bengaluru", state: "Karnataka" },
  { id: "jntu", name: "JNTU Hyderabad", shortName: "JNTU-H", city: "Hyderabad", state: "Telangana" },
  { id: "sppu", name: "Savitribai Phule Pune University", shortName: "SPPU", city: "Pune", state: "Maharashtra" },
  { id: "ip", name: "Indraprastha University", shortName: "IPU", city: "New Delhi", state: "Delhi" },
  { id: "mdu", name: "Maharshi Dayanand University", shortName: "MDU", city: "Rohtak", state: "Haryana" },
  { id: "lpu", name: "Lovely Professional University", shortName: "LPU", city: "Phagwara", state: "Punjab" },
  { id: "amity", name: "Amity University", shortName: "Amity", city: "Noida", state: "Uttar Pradesh" },
  { id: "srm", name: "SRM Institute of Science and Technology", shortName: "SRM", city: "Chennai", state: "Tamil Nadu" },
  { id: "vit", name: "VIT University", shortName: "VIT", city: "Vellore", state: "Tamil Nadu" },
  { id: "kiit", name: "KIIT University", shortName: "KIIT", city: "Bhubaneswar", state: "Odisha" },
  { id: "manipal", name: "Manipal Academy of Higher Education", shortName: "Manipal", city: "Manipal", state: "Karnataka" },
  { id: "other", name: "Other University", shortName: "Other", city: "", state: "" },
];

export const popularUniversities = universities.slice(0, 8);
