/// <reference types="vite/client" />

// Google Analytics Global Site Tag (gtag.js) - GA4
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
