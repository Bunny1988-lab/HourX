// src/pages/Teach.jsx
// What this file does: Renders a controlled form to allow a user to offer a new skill and earn Time Credits.
// React concepts: Controlled Forms, useState, Events (onChange, onSubmit), Conditional Rendering, Props.

import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import Button from '../components/Button';

export default function Teach({ onAddSkill, onEarnCredit }) {
  // 1. useState hook for controlled form fields object
  const [formData, setFormData] = useState({
    name: '',
    category: 'Programming',
    level: 'Beginner',
    description: '',
    availability: ''
  });

  // 2. useState hook for submission success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Generic onChange handler for controlled inputs
  function handleChange(event) {
    const { name, value } = event.target;
    
    // Update local form state while preserving existing fields using spread operator
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  // 4. Form onSubmit handler
  function handleSubmit(event) {
    // Prevent standard browser page reload on form submission
    event.preventDefault();

    // Simple validation check
    if (!formData.name || !formData.description || !formData.availability) {
      alert('Please fill in all required fields!');
      return;
    }

    // Create new skill object
    const newSkill = {
      id: Date.now(), // Generate temporary unique numeric ID
      name: formData.name,
      category: formData.category,
      level: formData.level,
      teacher: 'Aarav Sharma', // Current user
      teacherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      rating: 5.0,
      reviewsCount: 1,
      creditsPerHour: 1.0,
      availability: formData.availability,
      description: formData.description,
      learningOutcomes: [
        'Fundamental concepts & practical hands-on examples',
        'Interactive 1-on-1 Q&A session',
        'Custom student learning resources'
      ]
    };

    // Add new skill to global state & grant +1 Time Credit reward
    onAddSkill(newSkill);
    onEarnCredit(1.0);

    // Reset form fields
    setFormData({
      name: '',
      category: 'Programming',
      level: 'Beginner',
      description: '',
      availability: ''
    });

    // Show success banner
    setIsSubmitted(true);
  }

  return (
    <div className="teach-page">
      <div className="header-banner" style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 32px auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          Teach a Skill & Earn Time Credits 🌟
        </h1>
        <p style={{ color: '#64748b' }}>
          Share your knowledge with fellow students. Every hour you teach earns you <strong>1 Time Credit</strong> to learn any skill you want!
        </p>
      </div>

      {/* Controlled React Form Component */}
      <div className="form-card">
        {/* Conditional Rendering for Success Banner */}
        {isSubmitted && (
          <div className="alert-success" style={{ marginBottom: '24px' }}>
            <CheckCircle2 size={24} color="#10b981" />
            <div>
              <strong>Skill Listed Successfully! 🎉</strong>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem' }}>
                Your skill has been added to the Discover directory and you earned <strong>+1 Time Credit</strong>!
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Skill Name Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">Skill Title *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="e.g. Python Scripting Basics, Guitar Strumming, Video Editing"
              value={formData.name}        // Controlled Value
              onChange={handleChange}      // Event listener
              required
            />
          </div>

          {/* Category & Level Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Music">Music</option>
                <option value="Soft Skills">Soft Skills</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="level">Target Level</label>
              <select
                id="level"
                name="level"
                className="form-select"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>
          </div>

          {/* Availability Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="availability">Your Availability *</label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="form-input"
              placeholder="e.g. Mon & Wed (5:00 PM - 7:00 PM)"
              value={formData.availability}
              onChange={handleChange}
              required
            />
          </div>

          {/* Skill Description Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="description">Skill Description *</label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              rows={4}
              placeholder="Explain what students will learn in your 1-on-1 session..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" fullWidth={true}>
            <PlusCircle size={18} /> Publish Skill & Earn +1 Credit
          </Button>
        </form>
      </div>
    </div>
  );
}
