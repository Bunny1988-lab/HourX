// src/pages/Login.jsx
// What this file does: Renders the Login page using controlled form components, client-side validation, and authentication context integration.
// React concepts: Controlled components, useState, value, onChange, onSubmit, event.preventDefault(), conditional rendering.

import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  // 1. Controlled component state: React state is the single source of truth for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. State for field-level and general form validation errors
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { login } = useAuth();

  // 3. Validation helper: verifies required fields and email/password formats
  function validateForm() {
    const validationErrors = {};

    // Validate email field
    if (!email.trim()) {
      validationErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email address (e.g. user@college.edu).';
    }

    // Validate password field
    if (!password) {
      validationErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters.';
    }

    return validationErrors;
  }

  // 4. Input change handlers: update state and clear field-specific error as user types
  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (errors.email || errors.general) {
      setErrors((prev) => ({ ...prev, email: '', general: '' }));
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (errors.password || errors.general) {
      setErrors((prev) => ({ ...prev, password: '', general: '' }));
    }
  }

  // 5. Submit handler: prevents default page reload, performs validation, and delegates auth to Context
  function handleSubmit(event) {
    // Prevent default browser form submission (page reload)
    event.preventDefault();

    // Perform client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Attempt login through Context API
    const result = login(email.trim(), password);

    if (result.success) {
      // Clear errors and navigate to home dashboard
      setErrors({});
      navigate('/');
      return;
    }

    // Display authentication failure error returned from Context
    setErrors({ general: result.message || 'Invalid email or password.' });
  }

  return (
    <div className="login-page">
      <section className="login-intro">
        <div className="login-brand">
          <div className="login-brand-icon">
            <Clock size={22} />
          </div>
          <span>HourX</span>
        </div>
        <div>
          <p className="login-eyebrow">Skill exchange, measured in time</p>
          <h1>Give an hour. Gain a skill.</h1>
          <p className="login-description">
            Teach what you know, learn from your college peers, and use Time Credits to make every hour count.
          </p>
        </div>
      </section>

      <section className="login-card">
        <div className="login-card-heading">
          <p className="login-eyebrow">Welcome to HourX</p>
          <h2>Welcome back</h2>
          <p>Log in to continue learning and sharing.</p>
        </div>

        {/* Form element with onSubmit and noValidate for custom React validation */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="e.g. aarav@hourx.com"
            />
            {errors.email && (
              <p className="login-error" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="login-error" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {errors.password}
              </p>
            )}
          </div>

          {/* Conditional rendering of general auth error */}
          {errors.general && <p className="login-error">{errors.general}</p>}

          <button className="btn btn-primary btn-full login-submit" type="submit">
            Log In
          </button>
        </form>

        <p className="login-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </div>
  );
}