// src/main.jsx
// What this file does: Entry point of our React application that mounts the App component into the HTML DOM root element.
// React concepts: ReactDOM.createRoot, React.StrictMode, rendering root JSX.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App.jsx';
import './index.css';

// Create React Root and render top-level App component wrapped in Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
