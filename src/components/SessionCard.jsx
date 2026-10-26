// src/components/SessionCard.jsx
// What this file does: Renders an upcoming skill session with time details, teacher avatar, and a join meeting button.
// React concepts: Components, Props, Conditional rendering.

import React from 'react';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';

export default function SessionCard({ session }) {
  const { skillName, teacher, teacherAvatar, date, time, status, meetLink } = session;

  return (
    <div className="session-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img 
          src={teacherAvatar} 
          alt={teacher} 
          style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 2px 0' }}>{skillName}</h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>with {teacher}</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
            <Calendar size={14} color="#4f46e5" />
            <span>{date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
            <Clock size={13} />
            <span>{time}</span>
          </div>
        </div>

        <a 
          href={meetLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '8px 14px', fontSize: '0.85rem' }}
        >
          <Video size={16} /> Join Class
        </a>
      </div>
    </div>
  );
}
