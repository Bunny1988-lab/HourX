// src/App.jsx
// What this file does: Top-level application component configuring React Router routing and page structure.
// React concepts: BrowserRouter, Routes, Route, Link, useNavigate, Navigate, ProtectedRoute, useState, useEffect.

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Layout & Authentication Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Page Views
import Home from './pages/Home';
import Discover from './pages/Discover';
import SkillDetails from './pages/SkillDetails';
import Teach from './pages/Teach';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Mock Data Initializers
import { mockSkills } from './data/skills';

/**
 * Main App Component
 * Runs inside Redux <Provider> and wraps the application with <AuthProvider> and <BrowserRouter>.
 */
export default function App() {
  // Read wallet state directly from Redux Toolkit store
  const credits = useSelector((state) => state.wallet.credits);
  const transactions = useSelector((state) => state.wallet.transactions);

  // Skills directory state
  const [skills, setSkills] = useState(mockSkills);

  // Side effect: sync document title with current credit balance from Redux
  useEffect(() => {
    document.title = `HourX (${credits} Hours Credit) - Skill Exchange`;
  }, [credits]);

  // Handler: add a new skill offered by user
  function handleAddSkill(newSkill) {
    setSkills((prevSkills) => [newSkill, ...prevSkills]);
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <AppContent
            credits={credits}
            skills={skills}
            transactions={transactions}
            onAddSkill={handleAddSkill}
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

/**
 * AppContent Component:
 * Runs inside <BrowserRouter> context, giving it access to router hooks like useLocation.
 * Configures the public and protected routes for the application.
 */
function AppContent({ credits, skills, transactions, onAddSkill }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Show navigation bar only on protected/application pages, not on login/signup */}
      {!isAuthPage && <Navbar />}

      <main className="main-content">
        <Routes>
          {/* =========================================
              PUBLIC ROUTES (Accessible without auth)
             ========================================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* =========================================
              PROTECTED APPLICATION ROUTES
              (Guarded by ProtectedRoute component)
             ========================================= */}
          {/* 1. Home Dashboard */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* 2. Discover Skills Directory */}
          <Route
            path="/discover"
            element={
              <ProtectedRoute>
                <Discover skills={skills} />
              </ProtectedRoute>
            }
          />

          {/* 3. Dynamic Skill Details Route (:id parameter) */}
          <Route
            path="/skill/:id"
            element={
              <ProtectedRoute>
                <SkillDetails
                  skills={skills}
                />
              </ProtectedRoute>
            }
          />

          {/* 4. Teach a Skill Form */}
          <Route
            path="/teach"
            element={
              <ProtectedRoute>
                <Teach
                  onAddSkill={onAddSkill}
                />
              </ProtectedRoute>
            }
          />

          {/* 5. Time Credits Wallet */}
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />

          {/* 6. User Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Fallback wildcard route: redirects unknown paths to home (or login if unauthenticated) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
