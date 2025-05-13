
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop is a utility component that scrolls the window to the top
 * only when the route (pathname) changes, not on every scroll.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top ONLY when pathname changes, not on every scroll
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enable smooth scrolling for better UX
    });
  }, [pathname]); // This effect now properly runs only when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
