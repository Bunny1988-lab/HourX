// src/components/Navbar.jsx
// What this file does: Renders the top navigation header with logo, page links, and credit balance.
// React concepts: Components, JSX, Props, React Router Link & useLocation.

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Clock, Compass, PlusCircle, Wallet, User, BookOpen } from 'lucide-react';
import CreditBalance from './CreditBalance';

export default function Navbar({ credits }) {
  // useLocation gives us the current URL pathname (e.g. "/discover")
  // We use this to highlight the active link in the navigation menu.
  const location = useLocation();

  // Helper function to check if a route is currently active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo - Uses React Router <Link> instead of normal <a href> */}
        <Link to="/" className="nav-brand">
          <div className="nav-brand-icon">
            <Clock size={20} />
          </div>
          <span>HourX</span>
        </Link>

        {/* Navigation Menu Links */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <BookOpen size={18} />
            <span>Home</span>
          </Link>

          <Link 
            to="/discover" 
            className={`nav-link ${isActive('/discover') ? 'active' : ''}`}
          >
            <Compass size={18} />
            <span>Discover</span>
          </Link>

          <Link 
            to="/teach" 
            className={`nav-link ${isActive('/teach') ? 'active' : ''}`}
          >
            <PlusCircle size={18} />
            <span>Teach</span>
          </Link>

          <Link 
            to="/wallet" 
            className={`nav-link ${isActive('/wallet') ? 'active' : ''}`}
          >
            <Wallet size={18} />
            <span>Wallet</span>
          </Link>

          <Link 
            to="/profile" 
            className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
          >
            <User size={18} />
            <span>Profile</span>
          </Link>
        </div>

        {/* Right side: Reusable CreditBalance Badge Component */}
        <div className="nav-right">
          <CreditBalance credits={credits} variant="badge" />
        </div>
      </div>
    </nav>
  );
}
