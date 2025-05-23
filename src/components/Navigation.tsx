import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useScrollNavigation } from "./navigation/useScrollNavigation";
import { 
  homeLinks, 
  discoverLinks, 
  growLinks, 
  communityLinks, 
  insightsLinks, 
  applyLinks, 
  sefLink,
  perfumeLinks 
} from "./navigation/navigationData";
import { useLocalStorage } from "@/hooks/use-local-storage";
import UserAvatar from "./user/UserAvatar";
import { useTheme } from "@/contexts/ThemeContext";
import ImmersiveNavbar from "./ImmersiveNavbar";

// Lazy load components
const DesktopNavigation = lazy(() => import("./navigation/DesktopNavigation"));
const MobileNavigation = lazy(() => import("./navigation/MobileNavigation"));

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSticky, isScrolled } = useScrollNavigation();
  const [hydrated, setHydrated] = useState(false);
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const { theme, setTheme } = useTheme();
  const [useImmersiveNavbar, setUseImmersiveNavbar] = useState(false);

  // Mark as hydrated after initial render
  useEffect(() => {
    setHydrated(true);
    // Determine which navbar to use based on the path
    const path = window.location.pathname;
    // Use immersive navbar on homepage or major landing pages
    if (path === "/" || path.includes("/sef-landing")) {
      setUseImmersiveNavbar(true);
    } else {
      setUseImmersiveNavbar(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Use the immersive navbar when specified
  if (useImmersiveNavbar && hydrated) {
    return <ImmersiveNavbar />;
  }

  // Otherwise use the regular navbar
  return (
    <header 
      className={`sheraa-navbar ${
        isSticky 
          ? 'fixed top-0 left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-md z-[999] transition-all duration-300 animate-fade-in' 
          : 'absolute top-0 left-0 w-full z-[999] bg-transparent'
      }`}
    >
      <div className={`container flex h-16 items-center sm:px-6 px-4 my-0 transition-colors duration-300 ${isScrolled ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-sheraa-primary mx-2 md:mx-[39px] dark:text-white">SHERAA</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="hover:bg-gray-100/20 dark:hover:bg-gray-800/20"
          >
            <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        {hydrated && (
          <Suspense fallback={<div className="hidden md:flex md:flex-1"></div>}>
            <DesktopNavigation 
              homeLinks={homeLinks} 
              discoverLinks={discoverLinks} 
              growLinks={growLinks} 
              communityLinks={communityLinks} 
              insightsLinks={insightsLinks} 
              applyLinks={applyLinks}
              sefLink={sefLink}
              perfumeLinks={perfumeLinks}
              isLoggedIn={!!loggedInUser}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Suspense>
        )}

        {/* User Avatar (when logged in) */}
        {hydrated && loggedInUser && (
          <div className="ml-2">
            <UserAvatar />
          </div>
        )}

        {/* Mobile Navigation - Overlay Menu */}
        {hydrated && isMenuOpen && (
          <Suspense fallback={null}>
            <MobileNavigation 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
              toggleMenu={toggleMenu} 
              homeLinks={homeLinks} 
              discoverLinks={discoverLinks} 
              growLinks={growLinks} 
              communityLinks={communityLinks} 
              insightsLinks={insightsLinks} 
              applyLinks={applyLinks}
              sefLink={sefLink}
              perfumeLinks={perfumeLinks}
              isLoggedIn={!!loggedInUser}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Suspense>
        )}
      </div>
    </header>
  );
};

export default Navigation;
