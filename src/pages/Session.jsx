import React from 'react';

export default function Session() {
  // Mock data for a booked learning session
  const sessionData = {
    id: 101,
    title: 'JavaScript Basics 1-on-1',
    teacher: 'Aarav Sharma',
    date: 'Oct 24, 2026',
    time: '5:00 PM - 6:00 PM',
    status: 'Upcoming',
    meetingLink: 'https://zoom.us/j/mocklink123'
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          Your Session
        </h1>
        <p style={{ color: '#64748b' }}>
          Review the details for your upcoming learning session.
        </p>
      </div>

      <div className="form-card" style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1e293b' }}>{sessionData.title}</h2>
          <span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600' }}>
            {sessionData.status}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '4px' }}>Instructor</div>
            <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{sessionData.teacher}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '4px' }}>Date & Time</div>
            <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{sessionData.date} at {sessionData.time}</div>
          </div>
        </div>

        <button 
          onClick={() => alert(`Redirecting to ${sessionData.meetingLink}`)}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          Join Meeting
        </button>
      </div>
    </div>
  );
}
