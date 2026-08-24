import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);
  
  // Form states
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [interests, setInterests] = useState('');
  
  // Feedback states
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load user data on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        if (parsedUser.name) setName(parsedUser.name);
      } catch (e) {
        // Handle parsing error silently
      }
    }
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    // Basic validation
    if (!name.trim()) {
      setError('Name is required.');
      setSuccess('');
      return;
    }

    // Show success message (UI mock only)
    setError('');
    setSuccess('Profile updated successfully!');
    
    // In a real application, we would save the data to a backend 
    // or update localStorage here. For this UI prototype, 
    // we only show the success feedback message.
  };

  return (
    <div className="profile-page" style={{ maxWidth: '650px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          My Profile
        </h1>
        <p style={{ color: '#64748b' }}>
          Manage your personal information and learning interests.
        </p>
      </div>

      {/* Profile Form Card */}
      <div className="form-card" style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        
        {/* Error Message */}
        {error && (
          <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="alert-success" style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            <strong>{success}</strong>
          </div>
        )}

        {/* User Avatar & Email display */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#64748b', fontWeight: 'bold' }}>
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1e293b' }}>{name || 'User'}</h2>
            <p style={{ margin: 0, color: '#64748b' }}>{user?.email || 'user@example.com'}</p>
          </div>
        </div>

        {/* Edit Profile Form */}
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="3"
              placeholder="Tell others a bit about yourself..."
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', resize: 'vertical' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Learning Interests</label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., UI Design, Python, Guitar"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '16px'
            }}
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
