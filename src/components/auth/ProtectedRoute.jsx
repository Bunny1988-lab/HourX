import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

/**
 * ProtectedRoute component:
 * Guards private routes from unauthenticated access using shared AuthContext.
 * 
 * If the user is NOT authenticated:
 *   Redirects them to the /login page using <Navigate to="/login" replace />
 * If the user IS authenticated:
 *   Renders the requested child component or child routes (<Outlet />).
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
}
