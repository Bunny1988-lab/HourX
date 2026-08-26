// src/pages/SkillDetails.jsx
// What this file does: Displays detailed information about a single skill and handles booking interactive state.
// React concepts: React Router useParams, useState, Props, Conditional Rendering, Lists & .map(), Events (onClick).

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Calendar, CheckCircle2, ArrowLeft, User, Sparkles, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { mockSkills } from '../data/skills';

export default function SkillDetails({ userCredits, onBookSession }) {
  // 1. useParams hook extracts dynamic URL parameter from /skill/:id
  const { id } = useParams();

  // 2. Local useState hook to track booking status in this component
  const [isBooked, setIsBooked] = useState(false);

  // Find the skill matching the ID from URL parameters
  // Note: id from useParams is a String, so we convert s.id to String or use parseInt
  const skill = mockSkills.find((s) => String(s.id) === String(id));

  // If skill not found (e.g. invalid URL), display error fallback view
  if (!skill) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Skill Not Found 😕</h2>
        <p style={{ color: '#64748b', margin: '12px 0 24px 0' }}>The skill ID #{id} does not exist.</p>
        <Link to="/discover">
          <Button><ArrowLeft size={16} /> Back to Discover</Button>
        </Link>
      </div>
    );
  }

  // Event handler for booking a session
  function handleBookSession() {
    if (userCredits < skill.creditsPerHour) {
      alert("You don't have enough Time Credits! Teach a skill to earn more credits.");
      return;
    }

    // Call parent handler function passed via props to deduct credits in App state
    onBookSession(skill.creditsPerHour);
    
    // Update local state to show booking confirmation UI
    setIsBooked(true);
  }

  return (
    <div className="skill-details-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Back Button Link */}
      <Link to="/discover" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#64748b', fontWeight: 600, marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Back to Discover
      </Link>

      {/* Conditional Rendering: Success Banner when session is booked */}
      {isBooked && (
        <div className="alert-success">
          <CheckCircle2 size={24} color="#10b981" />
          <div>
            <strong>Session booked successfully 🎉</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem' }}>
              You booked <strong>{skill.name}</strong> with {skill.teacher}! Check your Home page for meeting link details.
            </p>
          </div>
        </div>
      )}

      {/* Main Detail Header Card */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="skill-card-badge">{skill.category}</span>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, margin: '8px 0 12px 0' }}>{skill.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={skill.teacherAvatar} alt={skill.teacher} className="teacher-avatar" style={{ width: '36px', height: '36px' }} />
                <span style={{ fontWeight: 600 }}>Taught by {skill.teacher}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#d97706', fontWeight: 700 }}>
                <Star size={18} fill="#d97706" color="#d97706" />
                <span>{skill.rating} ({skill.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', minWidth: '220px' }}>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Session Price</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4f46e5', margin: '4px 0 14px 0' }}>
              {skill.creditsPerHour} Credit / hr
            </div>

            <Button 
              variant="primary" 
              fullWidth={true} 
              onClick={handleBookSession}
              disabled={isBooked}
            >
              {isBooked ? 'Session Booked ✅' : 'Book 1-on-1 Session'}
            </Button>
          </div>
        </div>
      </div>

      {/* Learning Details & Schedule Grid */}
      <div className="grid-2">
        {/* Left Column: Description & Outcomes */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} color="#4f46e5" /> About this Skill
          </h3>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
            {skill.description}
          </p>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#d97706" /> What You Will Learn:
          </h4>
          <ul style={{ paddingLeft: '20px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {skill.learningOutcomes.map((outcome, index) => (
              <li key={index} style={{ fontSize: '0.95rem' }}>{outcome}</li>
            ))}
          </ul>
        </div>

        {/* Right Column: Availability & Teacher Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={20} color="#4f46e5" /> Class Availability
            </h3>
            <p style={{ fontSize: '0.95rem', background: '#eeeffe', padding: '12px 16px', borderRadius: '8px', fontWeight: 600, color: '#4f46e5' }}>
              {skill.availability}
            </p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={20} color="#4f46e5" /> Teacher Information
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={skill.teacherAvatar} alt={skill.teacher} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: 0, fontWeight: 700 }}>{skill.teacher}</h4>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Verified Peer Mentor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
