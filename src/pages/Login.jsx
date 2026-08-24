import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Beginner React Component: Login Page for HourX
function Login() {
  // State for form inputs and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Navigation hook from React Router
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent the default browser page refresh on form submit
    event.preventDefault();
    setError("");

    // Retrieve user data stored in localStorage during Signup
    const storedUser = localStorage.getItem("user");

    // Check if a user account exists in localStorage
    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Parse the JSON string back into a JavaScript object
    const user = JSON.parse(storedUser);

    // Compare entered credentials with stored user details
    if (user.email === email && user.password === password) {
      // Set login state in localStorage and redirect to Home/Dashboard
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      // Display error if email or password does not match
      setError("Invalid email or password.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* HourX Branding & Heading */}
        <h1 style={logoStyle}>HourX</h1>
        <h2 style={headingStyle}>Welcome Back</h2>
        <p style={subheadingStyle}>Log in to manage your time credits & skills</p>

        {/* Display error message if present */}
        {error && <div style={errorStyle}>{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={formStyle}>
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
              required
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>

        {/* Link to Signup page */}
        <div style={footerStyle}>
          <span>Don't have an account? </span>
          <Link to="/signup" style={linkStyle}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple Inline Styles for clean centered card layout
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

export default Login;
