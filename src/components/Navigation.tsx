
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useScrollNavigation } from "./navigation/useScrollNavigation";
import { homeLinks, discoverLinks, growLinks, communityLinks, insightsLinks, applyLinks } from "./navigation/navigationData";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSticky } = useScrollNavigation();

  // Main navigation items for the tubelight nav
  const mainNavItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Programs', url: '/programs', icon: Briefcase },
    { name: 'Resources', url: '/resources', icon: FileText }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sheraa-navbar ${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-[100] transition-all duration-300 animate-fade-in' : 'relative z-[100]'}`}>
      <div className="container flex h-16 items-center sm:px-6 bg-stone-50 px-0 my-0">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-sheraa-primary mx-[39px]">SHERAA</span>
          </Link>
        </div>

        {/* Main Navigation using TubeLight NavBar */}
        <div className="flex-1 flex justify-center">
          <NavBar items={mainNavItems} className="relative sm:static bottom-auto left-auto transform-none z-[110] mb-0 sm:pt-0" />
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Login/Get Started Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation - Overlay Menu (simplified for now) */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-sheraa-primary">SHERAA</span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </div>
            <div className="space-y-4">
              {mainNavItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.url} 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                  onClick={toggleMenu}
                >
                  {React.createElement(item.icon, { size: 18 })}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
