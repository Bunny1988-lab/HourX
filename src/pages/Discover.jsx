// src/pages/Discover.jsx
// What this file does: Renders the search & category filter discovery page for exploring skills.
// React concepts: useState, Events (onChange, onClick), JS .filter(), Lists & .map(), Conditional Rendering.

import React, { useState } from 'react';
import { Search, SlidersHorizontal, BookOpen, AlertCircle } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { mockSkills } from '../data/skills';

export default function Discover() {
  // 1. useState Hook for search query input
  const [searchTerm, setSearchTerm] = useState('');

  // 2. useState Hook for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // List of category options for filter pills
  const categories = ['All', 'Programming', 'Design', 'Music', 'Soft Skills', 'Business'];

  // 3. Event Handler for text input change
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // 4. JavaScript Array Filtering logic
  // We filter mockSkills dynamically based on searchTerm and selectedCategory state
  const filteredSkills = mockSkills.filter((skill) => {
    // Check if skill name or teacher matches the search input (case insensitive)
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if category matches or if "All" is selected
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="discover-page">
      <div className="header-banner">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px' }}>
          Discover Skills to Learn 🚀
        </h1>
        <p style={{ color: '#64748b' }}>
          Explore skills taught by college students. Use your Time Credits to book 1-on-1 sessions.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by skill name, topic, or teacher..."
            value={searchTerm}          // Controlled Input: bound to state
            onChange={handleSearchChange} // Event: fires on every keystroke
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="category-pills">
        {categories.map((category) => (
          <button
            key={category}
            className={`pill ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)} // Event: sets category state on click
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count & Section Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
          Available Skills ({filteredSkills.length})
        </h2>
      </div>

      {/* Conditional Rendering: Show grid if matches found, else show Empty State message */}
      {filteredSkills.length > 0 ? (
        <div className="grid-3">
          {/* List rendering using .map() */}
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <AlertCircle size={40} color="#64748b" style={{ marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>No skills found matching "{searchTerm}"</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '6px' }}>
            Try searching for a different keyword or selecting "All" categories.
          </p>
        </div>
      )}
    </div>
  );
}
