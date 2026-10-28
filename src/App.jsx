// src/App.jsx
// What this file does: Top-level application component configuring React Router routing and page structure.
// React concepts: BrowserRouter, Routes, Route, Link, useNavigate, Navigate, ProtectedRoute, useState, useEffect.

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout & Authentication Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';

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
import { walletTransactions } from './data/sessions';

/**
 * Main App Component
 * Wraps the entire application with <BrowserRouter> to enable client-side routing.
 */
export default function App() {
  // Top-level states preserved from the previous phase
  const [credits, setCredits] = useState(4.5);
  const [skills, setSkills] = useState(mockSkills);
  const [transactions, setTransactions] = useState(walletTransactions);

  // Side effect: sync document title with current credit balance
  useEffect(() => {
    document.title = `HourX (${credits} Hours Credit) - Skill Exchange`;
  }, [credits]);

  // Handler: deduct credits when a session is booked
  function handleBookSession(cost) {
    setCredits((prevCredits) => Math.max(0, prevCredits - cost));
    const newTx = {
      id: `tx_${Date.now()}`,
      type: 'SPENT',
      amount: `-${cost} Hour`,
      title: 'Booked Skill Session',
      date: 'Just Now'
    };
    setTransactions((prevTx) => [newTx, ...prevTx]);
  }

  // Handler: add a new skill offered by user
  function handleAddSkill(newSkill) {
    setSkills((prevSkills) => [newSkill, ...prevSkills]);
  }

  // Handler: reward user with credits for teaching a skill
  function handleEarnCredit(amount) {
    setCredits((prevCredits) => prevCredits + amount);
    const newTx = {
      id: `tx_${Date.now()}`,
      type: 'EARNED',
      amount: `+${amount} Hour`,
      title: 'Taught New Skill Class',
      date: 'Just Now'
    };
    setTransactions((prevTx) => [newTx, ...prevTx]);
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <AppContent
          credits={credits}
          skills={skills}
          transactions={transactions}
          onBookSession={handleBookSession}
          onAddSkill={handleAddSkill}
          onEarnCredit={handleEarnCredit}
        />
      </div>
    </BrowserRouter>
  );
}

/**
 * AppContent Component:
 * Runs inside <BrowserRouter> context, giving it access to router hooks like useLocation.
 * Configures the public and protected routes for the application.
 */
function AppContent({ credits, skills, transactions, onBookSession, onAddSkill, onEarnCredit }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Show navigation bar only on protected/application pages, not on login/signup */}
      {!isAuthPage && <Navbar credits={credits} />}

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
                <Home credits={credits} />
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
                  userCredits={credits}
                  onBookSession={onBookSession}
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
                  onEarnCredit={onEarnCredit}
                />
              </ProtectedRoute>
            }
          />

          {/* 5. Time Credits Wallet */}
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet
                  credits={credits}
                  transactions={transactions}
                />
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
