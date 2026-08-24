import React, { useState } from 'react';

export default function Teach() {
  const [skillName, setSkillName] = useState('');
  const [category, setCategory] = useState('Programming');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [availability, setAvailability] = useState('');
  const [creditRate, setCreditRate] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if (!skillName || !description || !availability || !creditRate) {
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }

    // show success message
    setError('');
    setSuccess('Your skill has been listed successfully!');

    // optionally reset the form
    setSkillName('');
    setCategory('Programming');
    setDescription('');
    setExperience('Beginner');
    setAvailability('');
    setCreditRate(1);
  };

  return (
    <div className="teach-page" style={{ maxWidth: '650px', margin: '0 auto', padding: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          Teach a Skill
        </h1>
        <p style={{ color: '#64748b' }}>
          Share your skills with fellow learners and earn Time Credits to learn something new.
        </p>
      </div>

      <div className="form-card" style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        
        {error && (
          <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            {error}
          </div>
        )}

        {success && (
          <div className="alert-success" style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
            <strong>{success}</strong>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Skill Name *</label>
            <input
              type="text"
              className="form-input"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="What do you want to teach?"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            >
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Music">Music</option>
              <option value="Languages">Languages</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Skill Description *</label>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Describe what students will learn..."
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', resize: 'vertical' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Experience Level</label>
            <select
              className="form-select"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Availability *</label>
            <input
              type="text"
              className="form-input"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="e.g., Weekends 2-4 PM"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Time Credit Rate (per hour) *</label>
            <input
              type="number"
              className="form-input"
              value={creditRate}
              onChange={(e) => setCreditRate(e.target.value)}
              min="1"
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
              marginTop: '8px'
            }}
          >
            Submit / List Skill
          </button>
        </form>
      </div>
    </div>
  );
}
