// src/components/Button.jsx
// What this file does: A reusable button component that supports different styles (primary, secondary, outline) and handles click events.
// React concepts: Components, Props, children prop, Events (onClick).

import React from 'react';

export default function Button({ 
  children,           // The content inside the button tag, e.g. text or icons
  onClick,            // Event handler passed from parent
  variant = 'primary',// Default styling variant: 'primary' | 'secondary' | 'outline'
  fullWidth = false,  // Boolean to make button take full container width
  type = 'button',    // HTML button type: 'button' | 'submit'
  disabled = false    // Disable button state
}) {
  // Construct dynamic CSS class name based on props
  const className = `btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`;

  return (
    <button 
      type={type} 
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
