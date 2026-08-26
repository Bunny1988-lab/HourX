// src/data/skills.js
// This file stores our mock skill data.
// In a full-stack app, this data would come from a backend database,
// but for our beginner React UI prototype, we keep it in a clean JavaScript array.

export const mockSkills = [
  {
    id: 1,
    name: "Python Fundamentals & Scripting",
    category: "Programming",
    level: "Beginner",
    teacher: "Rahul Sharma",
    teacherAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 28,
    creditsPerHour: 1.0,
    availability: "Mon, Wed, Fri (6:00 PM - 8:00 PM)",
    description: "Master variables, loops, data structures, and simple automation scripts in Python. Perfect for absolute beginners starting their coding journey.",
    learningOutcomes: [
      "Understand Python syntax and basic data types",
      "Write conditional statements and loops",
      "Build simple script automations",
      "Debug common beginner errors"
    ]
  },
  {
    id: 2,
    name: "UI/UX Design in Figma",
    category: "Design",
    level: "Intermediate",
    teacher: "Ananya Roy",
    teacherAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 34,
    creditsPerHour: 1.5,
    availability: "Tues, Thurs (4:00 PM - 6:00 PM)",
    description: "Learn how to create clean wireframes, interactive prototypes, and modern user interfaces using Figma best practices.",
    learningOutcomes: [
      "Figma frames, components, and auto-layout",
      "Color theory and typography hierarchy",
      "Designing responsive mobile & web screens",
      "Creating clickable prototypes"
    ]
  },
  {
    id: 3,
    name: "Acoustic Guitar Basics",
    category: "Music",
    level: "Beginner",
    teacher: "David Miller",
    teacherAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    rating: 4.95,
    reviewsCount: 19,
    creditsPerHour: 1.0,
    availability: "Weekends (11:00 AM - 1:00 PM)",
    description: "Learn essential guitar chords, strumming patterns, and basic fingerstyle to play your favorite popular songs.",
    learningOutcomes: [
      "Proper posture and hand positioning",
      "Open chords (C, G, D, Em, Am)",
      "Rhythm & strumming tempo",
      "Reading simple song chord sheets"
    ]
  },
  {
    id: 4,
    name: "Public Speaking & Pitching",
    category: "Soft Skills",
    level: "All Levels",
    teacher: "Priya Patel",
    teacherAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 4.85,
    reviewsCount: 42,
    creditsPerHour: 1.0,
    availability: "Wed, Sat (5:00 PM - 7:00 PM)",
    description: "Overcome stage fear, improve vocal delivery, and structure compelling college project pitches or seminar speeches.",
    learningOutcomes: [
      "Body language and eye contact techniques",
      "Structuring persuasive presentations",
      "Managing pre-speech anxiety",
      "Handling Q&A sessions with confidence"
    ]
  },
  {
    id: 5,
    name: "Excel & Data Analysis",
    category: "Business",
    level: "Intermediate",
    teacher: "Vikram Mehta",
    teacherAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 4.75,
    reviewsCount: 22,
    creditsPerHour: 1.5,
    availability: "Mon, Thurs (7:00 PM - 9:00 PM)",
    description: "Unlock VLOOKUP, XLOOKUP, Pivot Tables, conditional formatting, and data visualization tools for college reports.",
    learningOutcomes: [
      "Advanced lookup formulas (VLOOKUP/XLOOKUP)",
      "Building interactive Pivot Tables & Charts",
      "Data cleaning and formatting",
      "Automating basic calculations"
    ]
  },
  {
    id: 6,
    name: "Photoshop Photo Editing",
    category: "Design",
    level: "Beginner",
    teacher: "Siddharth Sen",
    teacherAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 15,
    creditsPerHour: 1.0,
    availability: "Everyday (8:00 PM - 9:30 PM)",
    description: "Learn photo retouching, background removal, layer masks, and color grading for creative poster design.",
    learningOutcomes: [
      "Understanding layers and masks",
      "Precise object selection tools",
      "Color correction and grading",
      "Exporting images for web & print"
    ]
  }
];
