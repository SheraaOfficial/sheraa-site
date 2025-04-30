
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Import refactored components
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import { useScrollNavigation } from "./navigation/useScrollNavigation";
import {
  aboutLinks,
  programsLinks,
  resourcesLinks,
  eventsLinks,
  communityLinks
} from "./navigation/navigationData";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSticky } = useScrollNavigation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sheraa-navbar ${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 animate-fade-in' : ''}`}>
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-sheraa-primary">SHERAA</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Desktop Navigation */}
        <DesktopNavigation 
          aboutLinks={aboutLinks}
          programsLinks={programsLinks}
          resourcesLinks={resourcesLinks}
          eventsLinks={eventsLinks}
          communityLinks={communityLinks}
        />

        {/* Mobile Navigation - Overlay Menu */}
        <MobileNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleMenu={toggleMenu}
          aboutLinks={aboutLinks}
          programsLinks={programsLinks}
          resourcesLinks={resourcesLinks}
          eventsLinks={eventsLinks}
          communityLinks={communityLinks}
        />
      </div>
    </header>
  );
};

export default Navigation;
