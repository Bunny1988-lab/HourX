// src/context/AuthContext.jsx
// What this file does: Centralizes authentication state management and logic across the entire application using React Context API.
// React concepts: createContext, Provider, useContext, useState, useEffect, localStorage synchronization.

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Authentication Context with default contract
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => ({ success: false }),
  logout: () => {},
  signup: () => ({ success: false })
});

/**
 * Custom hook to consume the AuthContext safely and conveniently.
 * Throws an informative error if called outside an AuthProvider tree.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

/**
 * AuthProvider Component:
 * Wraps child components and provides shared authentication state and operations.
 * Integrates directly with localStorage for persistence across page refreshes.
 */
export function AuthProvider({ children }) {
  // 1. Initialize `isAuthenticated` state from localStorage ('isLoggedIn' === 'true')
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // 2. Initialize `user` state from localStorage if authenticated
  const [user, setUser] = useState(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) return null;

    const storedUser = localStorage.getItem('user');
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error('Error parsing stored user from localStorage:', error);
      return null;
    }
  });

  // 3. Side effect: Synchronize authentication state across browser tabs/windows
  useEffect(() => {
    function handleStorageChange(event) {
      if (event.key === 'isLoggedIn' || event.key === 'user') {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsAuthenticated(loggedIn);

        if (loggedIn) {
          const storedUser = localStorage.getItem('user');
          try {
            setUser(storedUser ? JSON.parse(storedUser) : null);
          } catch {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
    }

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  /**
   * Centralized login logic:
   * Verifies credentials against stored user data in localStorage,
   * updates React state, and sets 'isLoggedIn' in localStorage.
   */
  function login(email, password) {
    const storedUserStr = localStorage.getItem('user');

    if (!storedUserStr) {
      return { success: false, message: 'No account found. Please sign up first.' };
    }

    try {
      const storedUser = JSON.parse(storedUserStr);

      if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem('isLoggedIn', 'true');
        setIsAuthenticated(true);
        setUser(storedUser);
        return { success: true };
      }
    } catch (error) {
      console.error('Error parsing user data in login:', error);
      return { success: false, message: 'Corrupted account data. Please sign up again.' };
    }

    return { success: false, message: 'Invalid email or password.' };
  }

  /**
   * Centralized signup logic:
   * Persists new user account data into localStorage.
   */
  function signup(userData) {
    try {
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      console.error('Error saving user data during signup:', error);
      return { success: false, message: 'Failed to save account details.' };
    }
  }

  /**
   * Centralized logout logic:
   * Clears the 'isLoggedIn' persistence flag from localStorage and resets React state.
   * Preserves registered user data in localStorage so they can log back in.
   */
  function logout() {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    setUser(null);
  }

  // Provide only the required state and functions
  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
