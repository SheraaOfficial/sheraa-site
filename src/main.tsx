
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import AppWrapper from './AppWrapper.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppWrapper />
    </StrictMode>
  );
}
