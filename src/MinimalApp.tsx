
import React from 'react';

// Absolute minimal React component for testing initialization
const MinimalApp: React.FC = () => {
  console.log('MinimalApp: Rendering successfully');
  
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: '#2563eb', marginBottom: '16px' }}>
        Sheraa - React Test
      </h1>
      <p style={{ color: '#64748b', marginBottom: '16px' }}>
        React is working correctly! 🎉
      </p>
      <div style={{ 
        background: '#f1f5f9', 
        padding: '12px', 
        borderRadius: '8px',
        fontSize: '14px',
        color: '#475569'
      }}>
        Build Status: ✅ Successful
      </div>
    </div>
  );
};

export default MinimalApp;
