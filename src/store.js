import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  }
});

// Save wallet changes so credits and transaction history survive page refreshes.
store.subscribe(() => {
  try {
    localStorage.setItem('hourx_wallet', JSON.stringify(store.getState().wallet));
  } catch (error) {
    console.error('Could not save wallet:', error);
  }
});

export default store;
