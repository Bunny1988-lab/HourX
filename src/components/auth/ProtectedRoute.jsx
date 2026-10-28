import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * ProtectedRoute component:
 * Guards private routes from unauthenticated access.
 * Currently checks localStorage for `isLoggedIn === 'true'`.
 * (Note: Teammate 2 will migrate this authentication check to Context API).
 * 
 * If the user is NOT authenticated:
 *   Redirects them to the /login page using <Navigate to="/login" replace />
 * If the user IS authenticated:
 *   Renders the requested child component or child routes (<Outlet />).
 */
export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
}