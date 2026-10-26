// src/components/SkillCard.jsx
// What this file does: Renders an individual skill card showing the skill title, category, teacher avatar, rating, and cost per hour.
// React concepts: Components, Props, React Router Link for dynamic route navigation (/skill/:id).

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function SkillCard({ skill }) {
  // Destructure properties from the skill object prop for cleaner JSX
  const { id, name, category, teacher, teacherAvatar, rating, creditsPerHour, level } = skill;

  return (
    <div className="skill-card">
      <div>
        {/* Top badge for category & level */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="skill-card-badge">{category}</span>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{level}</span>
        </div>

        {/* Skill Title */}
        <h3 className="skill-card-title">{name}</h3>

        {/* Teacher Info */}
        <div className="skill-card-teacher">
          <img 
            src={teacherAvatar} 
            alt={teacher} 
            className="teacher-avatar" 
          />
          <span className="teacher-name">{teacher}</span>
        </div>
      </div>

      {/* Card Footer: Rating, Cost & View Details Button */}
      <div>
        <div className="skill-card-footer">
          <div className="skill-rating">
            <Star size={16} fill="#d97706" color="#d97706" />
            <span>{rating}</span>
          </div>

          <div className="skill-cost" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={15} color="#4f46e5" />
            <span>{creditsPerHour} Credit / hr</span>
          </div>
        </div>

        <div style={{ marginTop: '14px' }}>
          {/* Link to dynamic SkillDetails route /skill/:id */}
          <Link to={`/skill/${id}`} style={{ width: '100%', display: 'block' }}>
            <Button variant="outline" fullWidth={true}>
              View Details <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
