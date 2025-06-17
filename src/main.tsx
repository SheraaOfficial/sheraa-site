
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log('=== REACT INITIALIZATION DEBUG ===');
console.log('React version:', React.version);
console.log('React object available:', !!React);
console.log('React.useState available:', !!(React && React.useState));
console.log('React.useEffect available:', !!(React && React.useEffect));
console.log('React.createElement available:', !!(React && React.createElement));

// Comprehensive React availability check
const performReactHealthCheck = () => {
  const requiredFeatures = [
    'useState', 'useEffect', 'useContext', 'createElement', 
    'Fragment', 'Component', 'StrictMode'
  ];
  
  const availableFeatures = requiredFeatures.filter(feature => 
    React && typeof React[feature as keyof typeof React] !== 'undefined'
  );
  
  const missingFeatures = requiredFeatures.filter(feature => 
    !React || typeof React[feature as keyof typeof React] === 'undefined'
  );
  
  console.log('Available React features:', availableFeatures);
  console.log('Missing React features:', missingFeatures);
  
  if (missingFeatures.length > 0) {
    throw new Error(`Critical React features missing: ${missingFeatures.join(', ')}`);
  }
  
  return true;
};

// Ensure we have a root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

console.log('Root element found:', !!rootElement);

// Progressive app loading function
const initializeApp = async () => {
  try {
    console.log('=== STARTING APP INITIALIZATION ===');
    
    // Step 1: Verify React health
    performReactHealthCheck();
    console.log('✅ React health check passed');
    
    // Step 2: Test minimal React rendering
    console.log('🧪 Testing minimal React component...');
    const { default: MinimalApp } = await import('./MinimalApp');
    
    const root = createRoot(rootElement);
    
    // Step 3: Render minimal app first
    root.render(
      <StrictMode>
        <MinimalApp />
      </StrictMode>
    );
    
    console.log('✅ Minimal app rendered successfully');
    
    // Step 4: Wait a moment then try to load full app
    setTimeout(async () => {
      try {
        console.log('🚀 Attempting to load full application...');
        const { default: App } = await import('./App');
        
        root.render(
          <StrictMode>
            <App />
          </StrictMode>
        );
        
        console.log('✅ Full application loaded successfully');
      } catch (fullAppError) {
        console.error('❌ Full app failed to load:', fullAppError);
        console.log('🔄 Staying with minimal app');
      }
    }, 2000);
    
  } catch (error) {
    console.error('❌ Critical initialization error:', error);
    
    // Emergency fallback
    rootElement.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center; font-family: system-ui, -apple-system, sans-serif; background: #f8fafc;">
        <div style="background: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); max-width: 500px;">
          <h1 style="color: #dc2626; margin-bottom: 16px; font-size: 24px;">Application Initialization Failed</h1>
          <p style="color: #64748b; margin-bottom: 16px;">React failed to initialize properly.</p>
          <details style="text-align: left; margin-bottom: 16px;">
            <summary style="cursor: pointer; font-weight: 500; margin-bottom: 8px;">Error Details</summary>
            <pre style="background: #f1f5f9; padding: 12px; border-radius: 6px; font-size: 12px; overflow: auto;">${error}</pre>
          </details>
          <button onclick="window.location.reload()" style="background: #3b82f6; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
            Reload Application
          </button>
        </div>
      </div>
    `;
  }
};

// Initialize the application
initializeApp();
