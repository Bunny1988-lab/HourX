import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  function handleSubmit(event) {
    // Stop the browser from reloading the page when the form is submitted.
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Delegate account persistence to Auth Context
    const result = signup({ name, email, password });

    if (result.success) {
      navigate('/login');
      return;
    }

    setErrorMessage(result.message || 'Failed to create account.');
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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-email">Email</label>
            <input
              className="form-input"
              type="email"
              id="signup-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-password">Password</label>
            <input
              className="form-input"
              type="password"
              id="signup-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="login-error">{errorMessage}</p>}

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