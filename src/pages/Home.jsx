// src/pages/Home.jsx
// What this file does: Displays the student dashboard with credit balance, quick navigation buttons, recommended skills, and upcoming sessions.
// React concepts: Components, JSX, Props, map(), useState, React Router useNavigate.

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, PlusCircle, Sparkles, Calendar, ArrowRight, Code } from 'lucide-react';
import CreditBalance from '../components/CreditBalance';
import SkillCard from '../components/SkillCard';
import SessionCard from '../components/SessionCard';
import Button from '../components/Button';
import { mockSkills } from '../data/skills';
import { upcomingSessions } from '../data/sessions';

export default function Home({ credits }) {
  // useNavigate hook allows programmatic navigation (e.g. redirecting when a button is clicked)
  const navigate = useNavigate();

  // Pick the top 3 recommended skills from our mock data array
  const recommendedSkills = mockSkills.slice(0, 3);

  return (
    <div className="home-page">
      {/* Top Greeting Banner */}
      <div className="header-banner">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '4px' }}>
          Good afternoon 👋
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
          Welcome back to HourX. Exchange skills and learn from your college peers.
        </p>
      </div>

      {/* Credit Balance & Quick Action Hero Section */}
      <div className="grid-2" style={{ marginBottom: '40px' }}>
        {/* Credit Balance Card */}
        <CreditBalance credits={credits} variant="card" />

        {/* Quick Action Box */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '24px', 
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          justify: 'center',
          gap: '16px'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
            What would you like to do today?
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Spend your credits to learn a new skill, or host a class to earn more credits.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate('/discover')}>
              <Compass size={18} /> Learn Something
            </Button>

            <Button variant="secondary" onClick={() => navigate('/teach')}>
              <PlusCircle size={18} /> Teach a Skill
            </Button>
          </div>
        </div>
      </div>

      {/* Upcoming Session Section */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="section-title" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar color="#4f46e5" size={22} /> Upcoming Sessions
          </h2>
        </div>

        {/* Dynamic rendering of upcoming sessions list */}
        {upcomingSessions.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {upcomingSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ) : (
          <p style={{ color: '#64748b' }}>No upcoming sessions scheduled yet.</p>
        )}
      </div>

      {/* Recommended Skills Section */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="section-title" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles color="#d97706" size={22} /> Recommended Skills
          </h2>

          <Link to="/discover" style={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Render grid of SkillCard components using .map() */}
        <div className="grid-3">
          {recommendedSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      {/* Educational Virtual DOM Explanation Box for the College Project */}
      <div className="virtual-dom-footer">
        <h4><Code size={18} /> React Learning Concept: Virtual DOM & State Updates</h4>
        <p>
          When you click <strong>"Learn Something"</strong>, <code>navigate('/discover')</code> changes the current route state. 
          React creates a lightweight <strong>Virtual DOM</strong> tree representing the new view, compares (diffs) it with the previous tree, 
          and efficiently updates only the changed DOM elements without reloading the page!
        </p>
      </div>
    </div>
  );
}
