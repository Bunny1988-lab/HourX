import React from 'react';

export default function Skills() {
  // Mock data for available skills
  const skillsList = [
    {
      id: 1,
      title: 'UI/UX Design Fundamentals',
      teacher: 'Sarah Jenkins',
      category: 'Design',
      level: 'Beginner',
      cost: 2, // Time Credits
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      teacher: 'Aarav Sharma',
      category: 'Programming',
      level: 'Advanced',
      cost: 3,
    },
    {
      id: 3,
      title: 'Conversational Spanish',
      teacher: 'Maria Garcia',
      category: 'Languages',
      level: 'Beginner',
      cost: 1,
    },
    {
      id: 4,
      title: 'Digital Marketing 101',
      teacher: 'James Smith',
      category: 'Business',
      level: 'Intermediate',
      cost: 2,
    }
  ];

  return (
    <div className="skills-page" style={{ maxWidth: '900px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          Explore Skills
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Discover new things to learn and spend your Time Credits.
        </p>
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {skillsList.map((skill) => (
          <div key={skill.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', display: 'flex', flexDirection: 'column' }}>
            
            {/* Category Badge */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{ backgroundColor: '#e0e7ff', color: '#4f46e5', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                {skill.category}
              </span>
            </div>
            
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
              {skill.title}
            </h2>
            
            <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px', flexGrow: 1 }}>
              Taught by <strong>{skill.teacher}</strong> &bull; {skill.level}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <div style={{ fontWeight: 'bold', color: '#10b981' }}>
                {skill.cost} Credits
              </div>
              <button 
                onClick={() => alert(`Request sent to learn ${skill.title}!`)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Learn
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
