// src/pages/Signup.jsx
// What this file does: Renders the Signup registration page using controlled components, comprehensive input validation, and auth context.
// React concepts: Controlled components, useState, value, onChange, onSubmit, event.preventDefault(), validation, conditional error rendering.

import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  // 1. Controlled component states: each input is bound to a dedicated piece of React state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 2. State for validation errors
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { signup } = useAuth();

  // 3. Validation helper for signup inputs
  function validateForm() {
    const validationErrors = {};

    // Validate full name
    if (!name.trim()) {
      validationErrors.name = 'Full name is required.';
    } else if (name.trim().length < 2) {
      validationErrors.name = 'Name must be at least 2 characters long.';
    }

    // Validate email format and check for existing registered account
    if (!email.trim()) {
      validationErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email address (e.g. name@college.edu).';
    } else {
      // Check existing-user / account condition in localStorage
      const storedUserStr = localStorage.getItem('user');
      if (storedUserStr) {
        try {
          const storedUser = JSON.parse(storedUserStr);
          if (storedUser.email && storedUser.email.toLowerCase() === email.trim().toLowerCase()) {
            validationErrors.email = 'An account with this email already exists. Please log in.';
          }
        } catch (e) {
          console.error('Error reading stored user', e);
        }
      }
    }

    // Validate password minimum length
    if (!password) {
      validationErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long.';
    }

    // Validate password confirmation match
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    return validationErrors;
  }

  // 4. Input change handlers to update state and clear field-specific errors
  function handleNameChange(event) {
    setName(event.target.value);
    if (errors.name || errors.general) {
      setErrors((prev) => ({ ...prev, name: '', general: '' }));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (errors.email || errors.general) {
      setErrors((prev) => ({ ...prev, email: '', general: '' }));
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (errors.password || errors.confirmPassword || errors.general) {
      setErrors((prev) => ({ ...prev, password: '', confirmPassword: '', general: '' }));
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    if (errors.confirmPassword || errors.general) {
      setErrors((prev) => ({ ...prev, confirmPassword: '', general: '' }));
    }
  }

  // 5. Submit handler
  function handleSubmit(event) {
    // Stop the browser from reloading the page
    event.preventDefault();

    // Client-side validation check
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Delegate account persistence to Auth Context
    const result = signup({
      name: name.trim(),
      email: email.trim(),
      password
    });

    if (result.success) {
      setErrors({});
      navigate('/login');
      return;
    }

    setErrors({ general: result.message || 'Failed to create account.' });
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
          <p className="login-eyebrow">Make time work both ways</p>
          <h1>Share what you know.</h1>
          <p className="login-description">
            Join a community where every hour you teach helps you discover something new to learn.
          </p>
        </div>
      </section>

      <section className="login-card">
        <div className="login-card-heading">
          <p className="login-eyebrow">Get started with HourX</p>
          <h2>Create your account</h2>
          <p>Start learning and sharing with your college peers.</p>
        </div>

        {/* Controlled Form with custom validation */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="e.g. Aarav Sharma"
            />
            {errors.name && (
              <p className="login-error" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-email">Email</label>
            <input
              className="form-input"
              type="email"
              id="signup-email"
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
            <label className="form-label" htmlFor="signup-password">Password</label>
            <input
              className="form-input"
              type="password"
              id="signup-password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Minimum 6 characters"
            />
            {errors.password && (
              <p className="login-error" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {errors.password}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Re-enter password"
            />
            {errors.confirmPassword && (
              <p className="login-error" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {errors.general && <p className="login-error">{errors.general}</p>}

          <button className="btn btn-primary btn-full login-submit" type="submit">
            Sign Up
          </button>
        </form>

        <p className="login-signup">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </div>
  );
}