// src/store/store.js
// What this file does: Configures the centralized Redux store using Redux Toolkit configureStore.
// Redux concepts: configureStore, root reducer.

import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  }
});

export default store;
