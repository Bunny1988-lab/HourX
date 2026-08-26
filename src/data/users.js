export const currentUser = {
  id: "usr_101",
  name: "Aarav Sharma",
  title: "Computer Science Student & Tech Enthusiast",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  bio: "Passionate about Web Development, UI/UX, and learning new tools. Believer in time-banking and skill exchange!",
  location: "Delhi Technological University",
  creditBalance: 4.5,
  hoursTaught: 12.5,
  hoursLearned: 8.0,
  rating: 4.9,
  skillsITeach: [
    { id: 1, name: "Web Development (HTML/CSS/JS)", rating: 4.9, students: 14 },
    { id: 2, name: "Basic Video Editing (Premiere Pro)", rating: 4.8, students: 8 }
  ],
  skillsIWantToLearn: [
    "Python Data Science",
    "Figma Auto Layout",
    "Guitar Fingerstyle",
    "Public Speaking"
  ],
  reviews: [
    {
      id: 1,
      studentName: "Neha Gupta",
      studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 days ago",
      comment: "Aarav is an amazing teacher! He explained CSS Grid so clearly in just 1 hour."
    },
    {
      id: 2,
      studentName: "Rohan Verma",
      studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      rating: 4.8,
      date: "1 week ago",
      comment: "Great session on Premiere Pro shortcuts. Very patient and knowledgeable."
    }
  ]
};
