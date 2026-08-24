import React from "react";
import { useNavigate } from "react-router-dom";

// Beginner React Component: Home Dashboard for HourX
function Home() {
  const navigate = useNavigate();

  // Safely retrieve user data from localStorage
  let userName = "";
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      userName = user.name || "";
    }
  } catch (err) {
    // If parsing fails, fall back to empty name without crashing
    userName = "";
  }

  // Local sample data for Recommended Skills
  const recommendedSkills = [
    {
      id: 1,
      title: "React & Modern Web Development",
      category: "Programming",
      instructor: "Alex Chen",
      credits: "1 Credit / hr",
      rating: "4.9 ★",
    },
    {
      id: 2,
      title: "Spanish Conversation Practice",
      category: "Languages",
      instructor: "Maria Garcia",
      credits: "1 Credit / hr",
      rating: "4.8 ★",
    },
    {
      id: 3,
      title: "Digital Photography Basics",
      category: "Creative Arts",
      instructor: "David Miller",
      credits: "1 Credit / hr",
      rating: "5.0 ★",
    },
  ];

  // Local sample data for Upcoming Sessions
  const upcomingSessions = [
    {
      id: 101,
      topic: "Intro to UI/UX Design",
      partner: "Sarah Johnson",
      date: "Tomorrow, 3:00 PM",
      type: "Learning",
    },
    {
      id: 102,
      topic: "Basic Guitar Chords",
      partner: "James Wilson",
      date: "Friday, 5:00 PM",
      type: "Teaching",
    },
  ];

  // Navigation handlers
  const handleExplore = () => {
    navigate("/discover");
  };

  const handleTeach = () => {
    navigate("/teach");
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        {/* 1. Welcome Section */}
        <div style={heroHeaderStyle}>
          <div>
            <h1 style={titleStyle}>
              {userName ? `Welcome back, ${userName}!` : "Welcome back!"}
            </h1>
            <p style={subtitleStyle}>
              Continue learning, teaching, and connecting with the HourX community.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div style={actionButtonsGroupStyle}>
            <button onClick={handleExplore} style={primaryButtonStyle}>
              Explore Skills
            </button>
            <button onClick={handleTeach} style={secondaryButtonStyle}>
              Teach a Skill
            </button>
          </div>
        </div>

        {/* 2. Time Credit Balance Card */}
        <div style={balanceCardStyle}>
          <div style={balanceInfoStyle}>
            <span style={balanceLabelStyle}>TIME CREDIT BALANCE</span>
            <div style={balanceValueStyle}>
              <span style={balanceNumberStyle}>5</span>
              <span style={balanceUnitStyle}>Time Credits</span>
            </div>
            <p style={balanceDescStyle}>
              Earn credits by teaching skills to others, or spend them to learn something new!
            </p>
          </div>
          <div style={badgeIconStyle}>⏱️</div>
        </div>

        {/* 3. Recommended Skills Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Recommended Skills</h2>
            <button onClick={handleExplore} style={textLinkButtonStyle}>
              View All →
            </button>
          </div>

          <div style={gridStyle}>
            {recommendedSkills.map((skill) => (
              <div key={skill.id} style={cardStyle}>
                <span style={categoryTagStyle}>{skill.category}</span>
                <h3 style={cardTitleStyle}>{skill.title}</h3>
                <p style={instructorStyle}>Instructor: {skill.instructor}</p>
                <div style={cardFooterStyle}>
                  <span style={creditsBadgeStyle}>{skill.credits}</span>
                  <span style={ratingStyle}>{skill.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Upcoming Sessions Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Upcoming Sessions</h2>
          </div>

          <div style={sessionListStyle}>
            {upcomingSessions.map((session) => (
              <div key={session.id} style={sessionCardStyle}>
                <div>
                  <h3 style={sessionTopicStyle}>{session.topic}</h3>
                  <p style={sessionDetailStyle}>
                    With <strong>{session.partner}</strong> • {session.date}
                  </p>
                </div>
                <span
                  style={
                    session.type === "Learning"
                      ? learningTagStyle
                      : teachingTagStyle
                  }
                >
                  {session.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Styles for clean, modern dashboard layout
const containerStyle = {
  minHeight: "100vh",
  backgroundColor: "#f8fafc",
  padding: "32px 20px",
  boxSizing: "border-box",
};

const contentWrapperStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

const heroHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  backgroundColor: "#ffffff",
  padding: "28px 32px",
  borderRadius: "16px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#0f172a",
  margin: "0 0 6px 0",
};

const subtitleStyle = {
  fontSize: "15px",
  color: "#64748b",
  margin: 0,
};

const actionButtonsGroupStyle = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  backgroundColor: "#aa3bff",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  backgroundColor: "#f1f5f9",
  color: "#334155",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
};

const balanceCardStyle = {
  background: "linear-gradient(135deg, #aa3bff 0%, #7e22ce 100%)",
  color: "#ffffff",
  padding: "28px 32px",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 10px 20px -5px rgba(170, 59, 255, 0.3)",
};

const balanceInfoStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const balanceLabelStyle = {
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1px",
  opacity: 0.9,
};

const balanceValueStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
};

const balanceNumberStyle = {
  fontSize: "42px",
  fontWeight: "800",
};

const balanceUnitStyle = {
  fontSize: "20px",
  fontWeight: "600",
  opacity: 0.95,
};

const balanceDescStyle = {
  fontSize: "14px",
  opacity: 0.9,
  margin: "4px 0 0 0",
};

const badgeIconStyle = {
  fontSize: "56px",
  opacity: 0.85,
};

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const sectionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const sectionTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#0f172a",
  margin: 0,
};

const textLinkButtonStyle = {
  background: "none",
  border: "none",
  color: "#aa3bff",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
};

const categoryTagStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#aa3bff",
  backgroundColor: "rgba(170, 59, 255, 0.1)",
  padding: "4px 10px",
  borderRadius: "20px",
  width: "fit-content",
};

const cardTitleStyle = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#0f172a",
  margin: 0,
};

const instructorStyle = {
  fontSize: "14px",
  color: "#64748b",
  margin: 0,
};

const cardFooterStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "6px",
  paddingTop: "10px",
  borderTop: "1px solid #f1f5f9",
};

const creditsBadgeStyle = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#334155",
};

const ratingStyle = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#eab308",
};

const sessionListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const sessionCardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "18px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
};

const sessionTopicStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#0f172a",
  margin: "0 0 4px 0",
};

const sessionDetailStyle = {
  fontSize: "14px",
  color: "#64748b",
  margin: 0,
};

const learningTagStyle = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#2563eb",
  backgroundColor: "#eff6ff",
  padding: "6px 14px",
  borderRadius: "20px",
};

const teachingTagStyle = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#16a34a",
  backgroundColor: "#f0fdf4",
  padding: "6px 14px",
  borderRadius: "20px",
};

export default Home;
