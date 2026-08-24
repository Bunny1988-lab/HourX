import React, { useState, useEffect } from 'react';

export default function Wallet() {
  const [user, setUser] = useState(null);

  // Read user from localStorage as requested (optional enhancement)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        // Handle JSON parse error silently
      }
    }
  }, []);

  // Mock data for the wallet
  const balance = 120;
  const earned = 160;
  const spent = 40;

  const transactions = [
    { id: 1, title: 'Taught JavaScript Basics', amount: '+10', type: 'earned' },
    { id: 2, title: 'Learned UI Design', amount: '-5', type: 'spent' },
    { id: 3, title: 'Taught React Fundamentals', amount: '+15', type: 'earned' },
    { id: 4, title: 'Learned Advanced Python', amount: '-20', type: 'spent' },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
          Time Credit Wallet
        </h1>
        <p style={{ color: '#64748b' }}>
          {user ? `Welcome back, ${user.name || user.email || 'User'}! ` : ''}
          Here is your current Time Credit overview.
        </p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        
        {/* Current Balance Card */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>Current Balance</h2>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4f46e5' }}>{balance}</div>
          <div style={{ color: '#64748b', marginTop: '4px' }}>Time Credits</div>
        </div>
        
        {/* Credits Earned Card */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>Credits Earned</h2>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{earned}</div>
          <div style={{ color: '#64748b', marginTop: '4px' }}>earned</div>
        </div>

        {/* Credits Spent Card */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>Credits Spent</h2>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{spent}</div>
          <div style={{ color: '#64748b', marginTop: '4px' }}>spent</div>
        </div>
      </div>

      {/* Action Buttons (UI Only) */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
        <button style={{ padding: '12px 24px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', minWidth: '150px' }}>
          Earn Credits
        </button>
        <button style={{ padding: '12px 24px', backgroundColor: '#fff', color: '#4f46e5', border: '2px solid #4f46e5', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', minWidth: '150px' }}>
          Use Credits
        </button>
      </div>

      {/* Recent Transactions List */}
      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
          Recent Transactions
        </h2>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {transactions.map((tx) => (
            <li key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{tx.title}</span>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: tx.type === 'earned' ? '#10b981' : '#ef4444' }}>
                {tx.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
