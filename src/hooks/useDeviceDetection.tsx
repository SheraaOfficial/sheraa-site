
import React, { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if window exists (browser environment)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkIfMobile();

      // Listen for resize events
      window.addEventListener("resize", checkIfMobile);

      // Clean up
      return () => window.removeEventListener("resize", checkIfMobile);
    }

    // Default to false in non-browser environments
    return () => {};
  }, []);

  return isMobile;
}
