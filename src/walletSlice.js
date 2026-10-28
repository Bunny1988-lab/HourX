import { createSlice } from '@reduxjs/toolkit';
import { walletTransactions } from '../../data/sessions';

function loadWalletState() {
  try {
    const savedWallet = localStorage.getItem('hourx_wallet');
    if (savedWallet) {
      const parsed = JSON.parse(savedWallet);
      if (typeof parsed.credits === 'number' && Array.isArray(parsed.transactions)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Could not load saved wallet:', error);
  }

  return { credits: 4.5, transactions: walletTransactions };
}

const initialState = loadWalletState();

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    deductCredits: (state, action) => {
      const cost = typeof action.payload === 'object' ? action.payload.cost : action.payload;
      const title = (typeof action.payload === 'object' && action.payload.title) || 'Booked Skill Session';

      state.credits = Math.max(0, parseFloat((state.credits - cost).toFixed(1)));
      state.transactions.unshift({
        id: `tx_${Date.now()}`,
        type: 'SPENT',
        amount: `-${cost} Hour`,
        title: title,
        date: 'Just Now'
      });
    },

    addCredits: (state, action) => {
      const amount = typeof action.payload === 'object' ? action.payload.amount : action.payload;
      const title = (typeof action.payload === 'object' && action.payload.title) || 'Taught New Skill Class';

      state.credits = parseFloat((state.credits + amount).toFixed(1));
      state.transactions.unshift({
        id: `tx_${Date.now()}`,
        type: 'EARNED',
        amount: `+${amount} Hour`,
        title: title,
        date: 'Just Now'
      });
    }
  }
});

export const { deductCredits, addCredits } = walletSlice.actions;

export default walletSlice.reducer;
