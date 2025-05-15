
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useScrollNavigation } from "./navigation/useScrollNavigation";
import { homeLinks, discoverLinks, growLinks, communityLinks, insightsLinks, applyLinks, sefLink } from "./navigation/navigationData";
import { useLocalStorage } from "@/hooks/use-local-storage";
import UserAvatar from "./user/UserAvatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Lazy load components
const DesktopNavigation = lazy(() => import("./navigation/DesktopNavigation"));
const MobileNavigation = lazy(() => import("./navigation/MobileNavigation"));

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSticky, isScrolled } = useScrollNavigation();
  const [hydrated, setHydrated] = useState(false);
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  // Mark as hydrated after initial render
  useEffect(() => {
    setHydrated(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sheraa-navbar ${
        isSticky 
          ? 'fixed top-0 left-0 w-full bg-white shadow-md z-[100] transition-all duration-300 animate-fade-in dark:bg-zinc-900' 
          : 'relative z-[100]'
      }`}
    >
      <div className={`container flex h-16 items-center sm:px-6 px-0 my-0 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-zinc-900' : 'bg-stone-50 dark:bg-zinc-800'}`}>
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-sheraa-primary mx-[39px] dark:text-white">SHERAA</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden ml-auto" onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </Button>

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
              isLoggedIn={!!loggedInUser}
            />
          </Suspense>
        )}

        {/* Theme Toggle - Added to the navigation bar */}
        <div className="ml-2 mr-2">
          <ThemeToggle className="hidden md:flex" />
        </div>

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
              isLoggedIn={!!loggedInUser}
            />
          </Suspense>
        )}
      </div>
    </header>
  );
};

export default Navigation;
