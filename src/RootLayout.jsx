import React from 'react';

export default function RootLayout({ children }) {
  return (
    <div style={{ 
      backgroundColor: '#090B1F',
      minHeight: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto'
    }}>
      {children}
    </div>
  );
}