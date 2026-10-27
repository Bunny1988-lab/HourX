// src/components/Navbar.jsx
// What this file does: Renders the top navigation header with logo, page links, credit balance, and logout.
// React concepts: Components, JSX, Props, React Router Link, useLocation, and useNavigate.

import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Clock, Compass, PlusCircle, Wallet, User, BookOpen, LogOut } from 'lucide-react';
import CreditBalance from './CreditBalance';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ credits: propCredits }) {
  // Read credits directly from Redux store, falling back to prop if provided
  const reduxCredits = useSelector((state) => state.wallet.credits);
  const credits = propCredits !== undefined ? propCredits : reduxCredits;

  const { logout } = useAuth();
  // useLocation gives us the current URL pathname (e.g. "/discover")
  // We use this to highlight the active link in the navigation menu.
  const location = useLocation();
  // useNavigate hook allows programmatic navigation (e.g. redirecting after logout)
  const navigate = useNavigate();

  // Helper function to check if a route is currently active
  const isActive = (path) => location.pathname === path;

  // Logout handler: Calls centralized logout via Context and redirects to /login
  function handleLogout() {
    logout();
    navigate('/login');
  }

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

        {/* Right side: Reusable CreditBalance Badge & Logout Button */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CreditBalance credits={credits} variant="badge" />
          <button 
            type="button"
            onClick={handleLogout} 
            className="btn btn-outline" 
            style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            title="Log out of HourX"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
