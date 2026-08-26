// src/components/UserCard.jsx
// What this file does: Displays detailed information about a user/teacher including avatar, name, bio, and stats.
// React concepts: Components, Props, Lists & .map() for badges.

import React from 'react';
import { Star, Award, BookOpen, Clock, MapPin } from 'lucide-react';

export default function UserCard({ user }) {
  const { name, title, avatar, bio, location, hoursTaught, hoursLearned, rating } = user;

  return (
    <div className="user-card">
      <img 
        src={avatar} 
        alt={name} 
        style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #eeeffe' }} 
      />

      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2px' }}>{name}</h2>
        <p style={{ color: '#4f46e5', fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px' }}>{title}</p>
        
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '14px' }}>{bio}</p>

        {/* User stats summary grid */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} color="#64748b" /> {location}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={14} fill="#d97706" color="#d97706" /> {rating} Rating
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Award size={14} color="#10b981" /> {hoursTaught} hrs Taught
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BookOpen size={14} color="#4f46e5" /> {hoursLearned} hrs Learned
          </span>
        </div>
      </div>
    </div>
  );
}
