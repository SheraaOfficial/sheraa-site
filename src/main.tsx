
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/mobile-optimizations.css';
import './index.css';

console.log('React version:', React.version);
console.log('React object:', React);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
