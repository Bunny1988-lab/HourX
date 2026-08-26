import React from "react";
import { Navigate } from "react-router-dom";

// Beginner React Component: ProtectedRoute
// Restricts access to pages so only logged-in users can view them.
// If the user is logged in (isLoggedIn === "true" in localStorage), render the child components.
// Otherwise, redirect the user to the login page ("/login").
function ProtectedRoute({ children }) {
  // Check if the user is authenticated in localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // If not logged in, redirect to the login page using React Router Navigate
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected child components
  return children;
}

export default ProtectedRoute;
