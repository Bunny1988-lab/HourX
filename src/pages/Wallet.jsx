// src/pages/Wallet.jsx
// What this file does: Renders the Time Credits wallet dashboard showing total credit balance and transaction history.
// React concepts: Components, Props, Lists & .map(), Conditional Rendering.

import React from 'react';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock, ShieldCheck, History } from 'lucide-react';
import CreditBalance from '../components/CreditBalance';
import { walletTransactions } from '../data/sessions';

export default function Wallet({ credits, transactions = walletTransactions }) {
  return (
    <div className="wallet-page" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div className="header-banner">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px' }}>
          Time Credits Wallet 💳
        </h1>
        <p style={{ color: '#64748b' }}>
          HourX operates on a 1:1 timebanking system. 1 Hour of teaching = 1 Time Credit.
        </p>
      </div>

      {/* Main Balance Overview Header Card */}
      <div style={{ marginBottom: '32px' }}>
        <CreditBalance credits={credits} variant="card" />
      </div>

      {/* Transaction History Section */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <History size={20} color="#4f46e5" /> Transaction History
          </h2>
          <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
            {transactions.length} Total Activity
          </span>
        </div>

        {/* List rendering using .map() */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {transactions.map((tx) => {
            const isEarned = tx.type === 'EARNED';
            
            return (
              <div 
                key={tx.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  border: '1px solid #f1f5f9',
                  backgroundColor: '#f8fafc'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Icon badge: Green arrow up for EARNED, Red arrow down for SPENT */}
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justify: 'center',
                    backgroundColor: isEarned ? '#ecfdf5' : '#fff1f2',
                    color: isEarned ? '#10b981' : '#f43f5e'
                  }}>
                    {isEarned ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                  </div>

                  <div>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '0.95rem', fontWeight: 700 }}>{tx.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{tx.date}</p>
                  </div>
                </div>

                {/* Amount Display */}
                <div style={{ 
                  fontWeight: 800, 
                  fontSize: '1rem', 
                  color: isEarned ? '#059669' : '#e11d48' 
                }}>
                  {tx.amount}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
