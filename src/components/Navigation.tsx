import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useScrollNavigation } from "./navigation/useScrollNavigation";
import { homeLinks, discoverLinks, growLinks, communityLinks, insightsLinks, applyLinks } from "./navigation/navigationData";

// Lazy load components
const DesktopNavigation = lazy(() => import("./navigation/DesktopNavigation"));
const MobileNavigation = lazy(() => import("./navigation/MobileNavigation"));
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isSticky
  } = useScrollNavigation();
  const [hydrated, setHydrated] = useState(false);

  // Mark as hydrated after initial render
  useEffect(() => {
    setHydrated(true);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`sheraa-navbar ${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-[100] transition-all duration-300 animate-fade-in' : 'relative z-[100]'}`}>
      <div className="container flex h-16 items-center px-4 sm:px-6 bg-stone-50">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <img alt="Sheraa Logo" style={{
            filter: "invert(14%) sepia(39%) saturate(3515%) hue-rotate(198deg) brightness(93%) contrast(101%)"
          }} src="/lovable-uploads/c685b8f9-faed-488e-aa6e-2d85cf6191f1.png" className="" />
            <span className="text-xl font-bold text-sheraa-primary">SHERAA</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden ml-auto" onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Desktop Navigation */}
        {hydrated && <Suspense fallback={<div className="hidden md:flex md:flex-1"></div>}>
            <DesktopNavigation homeLinks={homeLinks} discoverLinks={discoverLinks} growLinks={growLinks} communityLinks={communityLinks} insightsLinks={insightsLinks} applyLinks={applyLinks} />
          </Suspense>}

        {/* Mobile Navigation - Overlay Menu */}
        {hydrated && isMenuOpen && <Suspense fallback={null}>
            <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} homeLinks={homeLinks} discoverLinks={discoverLinks} growLinks={growLinks} communityLinks={communityLinks} insightsLinks={insightsLinks} applyLinks={applyLinks} />
          </Suspense>}
      </div>
    </header>;
};
export default Navigation;