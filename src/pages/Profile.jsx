// src/pages/Profile.jsx
// What this file does: Displays the user's personal profile, skills taught, skills desired, and student reviews.
// React concepts: Components, Props, Lists & .map(), Reusable UI layout.

import React from 'react';
import { Star, Award, BookOpen, MessageSquare, Plus, Check } from 'lucide-react';
import UserCard from '../components/UserCard';
import { currentUser } from '../data/users';

export default function Profile() {
  const storedUser = localStorage.getItem('user');
  const signedUpUser = storedUser ? JSON.parse(storedUser) : null;
  const profileUser = {
    ...currentUser,
    name: signedUpUser?.name || currentUser.name,
    email: signedUpUser?.email || ''
  };

  return (
    <div className="profile-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="header-banner">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px' }}>
          Student Profile 👤
        </h1>
        <p style={{ color: '#64748b' }}>
          Manage your skill-sharing reputation, taught topics, and learning bucket list.
        </p>
      </div>

      {/* User Overview Component */}
      <div style={{ marginBottom: '32px' }}>
        <UserCard user={profileUser} />
      </div>

      {/* Grid containing Skills Taught & Skills Desired */}
      <div className="grid-2" style={{ marginBottom: '32px' }}>
        {/* Skills I Teach */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} color="#10b981" /> Skills I Teach ({currentUser.skillsITeach.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentUser.skillsITeach.map((skill) => (
              <div 
                key={skill.id} 
                style={{ 
                  padding: '12px 16px', 
                  borderRadius: '10px', 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 2px 0', fontSize: '0.95rem', fontWeight: 700 }}>{skill.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{skill.students} Students Taught</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#d97706', fontWeight: 700, fontSize: '0.85rem' }}>
                  <Star size={14} fill="#d97706" color="#d97706" /> {skill.rating}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills I Want to Learn */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} color="#4f46e5" /> Skills I Want to Learn
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {currentUser.skillsIWantToLearn.map((skillName, index) => (
              <span 
                key={index} 
                style={{ 
                  backgroundColor: '#eeeffe', 
                  color: '#4f46e5', 
                  fontWeight: 600, 
                  fontSize: '0.85rem', 
                  padding: '8px 14px', 
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Plus size={14} /> {skillName}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare size={20} color="#4f46e5" /> Peer Student Reviews ({currentUser.reviews.length})
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {currentUser.reviews.map((review) => (
            <div 
              key={review.id} 
              style={{ 
                padding: '16px', 
                borderRadius: '12px', 
                backgroundColor: '#f8fafc', 
                border: '1px solid #f1f5f9' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={review.studentAvatar} alt={review.studentName} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>{review.studentName}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{review.date}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#d97706', fontWeight: 700, fontSize: '0.85rem' }}>
                  <Star size={15} fill="#d97706" color="#d97706" /> {review.rating} / 5
                </div>
              </div>

              <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
