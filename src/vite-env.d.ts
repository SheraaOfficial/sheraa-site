/// <reference types="vite/client" />

// Google Analytics Global Site Tag (gtag.js) - GA4
declare global {
  interface Window {
    gtag: (command: string, targetId?: string, config?: any) => void;
    dataLayer: any[];
  }
}

export {};
