import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Beginner React Component: Signup Page for HourX
function Signup() {
  // State variables for form inputs and error message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Navigation hook from React Router
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent default browser form refresh
    event.preventDefault();
    setError("");

    // Validate that all fields are filled
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Create user object (excluding confirmPassword)
    const user = {
      name: name.trim(),
      email: email.trim(),
      password: password,
    };

    // Store user object as a JSON string in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the login page after successful signup
    navigate("/login");
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* HourX Branding & Heading */}
        <h1 style={logoStyle}>HourX</h1>
        <h2 style={headingStyle}>Create Account</h2>
        <p style={subheadingStyle}>
          Join HourX to share skills and earn time credits
        </p>

        {/* Display error message if present */}
        {error && <div style={errorStyle}>{error}</div>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        {/* Link to Login page */}
        <div style={footerStyle}>
          <span>Already have an account? </span>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple Inline Styles matching Login component design
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  padding: "20px",
  boxSizing: "border-box",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e4e7",
  borderRadius: "12px",
  padding: "36px 32px",
  maxWidth: "420px",
  width: "100%",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
  textAlign: "center",
  boxSizing: "border-box",
};

const logoStyle = {
  color: "#aa3bff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
};

const headingStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#08060d",
  margin: "0 0 6px 0",
};

const subheadingStyle = {
  fontSize: "14px",
  color: "#6b6375",
  marginBottom: "24px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  textAlign: "left",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#08060d",
};

const inputStyle = {
  padding: "10px 14px",
  borderRadius: "6px",
  border: "1px solid #e5e4e7",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
  width: "100%",
};

const buttonStyle = {
  backgroundColor: "#aa3bff",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  padding: "12px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "8px",
};

const errorStyle = {
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  border: "1px solid #fecaca",
  padding: "10px 12px",
  borderRadius: "6px",
  fontSize: "14px",
  marginBottom: "16px",
  textAlign: "left",
};

const footerStyle = {
  marginTop: "24px",
  fontSize: "14px",
  color: "#6b6375",
};

const linkStyle = {
  color: "#aa3bff",
  fontWeight: "600",
  textDecoration: "none",
};

export default Signup;
