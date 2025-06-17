
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Simple homepage component without complex dependencies
const SimpleHomepage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}>
          Sheraa
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>
          Creating the Next Wave of Entrepreneurs
        </p>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Sharjah's Premier Startup Hub
          </h2>
          <p style={{ opacity: '0.8', lineHeight: '1.6' }}>
            Empowering founders from idea to global success. Join 180+ startups, 
            access expert mentorship, and world-class acceleration programs.
          </p>
        </div>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>180+</h3>
            <p>Startups Supported</p>
          </div>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>$248M+</h3>
            <p>Revenue Generated</p>
          </div>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1,900+</h3>
            <p>Jobs Created</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple App component without complex providers or error boundaries
const SimpleApp: React.FC = () => {
  console.log('SimpleApp: Rendering...');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SimpleHomepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SimpleApp;
