// src/components/CreditBalance.jsx
// What this file does: Displays the user's current Time Credit balance either as a small Navbar badge or a featured card.
// React concepts: Components, Props, Conditional rendering based on props.

import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';

export default function CreditBalance({ credits, variant = 'badge' }) {
  // If variant is "card", render large interactive dashboard card
  if (variant === 'card') {
    return (
      <div className="credit-balance-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', opacity: 0.9, fontWeight: 600 }}>Your Balance</span>
          <div style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '6px 10px', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}>
            <TrendingUp size={14} /> Active Timebank
          </div>
        </div>

        <div className="balance-amount">{credits} Hours</div>
        <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
          Time Credits earned by teaching skills. 1 Credit = 1 Hour of Learning.
        </p>
      </div>
    );
  }

  // Default "badge" layout for Navbar header
  return (
    <div className="credit-balance-badge" title="Your current Time Credits balance">
      <Clock size={16} />
      <span>{credits} Hours Credit</span>
    </div>
  );
}
