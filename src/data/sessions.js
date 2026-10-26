// src/data/sessions.js
// Stores mock data for upcoming sessions and wallet transaction history.

export const upcomingSessions = [
  {
    id: "sess_01",
    skillName: "Python Fundamentals",
    teacher: "Rahul Sharma",
    teacherAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    date: "Today",
    time: "6:00 PM - 7:00 PM",
    status: "Confirmed",
    creditsCost: 1.0,
    meetLink: "https://meet.google.com/abc-defg-hij"
  },
  {
    id: "sess_02",
    skillName: "UI/UX Design in Figma",
    teacher: "Ananya Roy",
    teacherAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    date: "Tomorrow",
    time: "4:00 PM - 5:30 PM",
    status: "Confirmed",
    creditsCost: 1.5,
    meetLink: "https://meet.google.com/xyz-uvwx-rst"
  }
];

export const walletTransactions = [
  {
    id: "tx_101",
    type: "EARNED",
    amount: "+2.0 Hours",
    title: "Taught Photoshop Basics",
    student: "Siddharth Sen",
    date: "Yesterday at 3:30 PM"
  },
  {
    id: "tx_102",
    type: "SPENT",
    amount: "-1.0 Hour",
    title: "Learned Python Fundamentals",
    teacher: "Rahul Sharma",
    date: " Aug 18, 2026"
  },
  {
    id: "tx_103",
    type: "EARNED",
    amount: "+1.5 Hours",
    title: "Taught Excel Data Cleaning",
    student: "Priya Patel",
    date: "Aug 15, 2026"
  },
  {
    id: "tx_104",
    type: "SPENT",
    amount: "-1.0 Hour",
    title: "Learned Public Speaking Prep",
    teacher: "Priya Patel",
    date: "Aug 12, 2026"
  }
];
