import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(event) {
    // Stop the browser from reloading the page when the form is submitted.
    event.preventDefault();

    const result = login(email, password);

    if (result.success) {
      navigate('/');
      return;
    }

    setErrorMessage(result.message || 'Invalid email or password.');
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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="login-error">{errorMessage}</p>}

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