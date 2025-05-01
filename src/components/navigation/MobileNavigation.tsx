
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileDropdown from "./MobileDropdown";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  aboutLinks: { title: string; href: string; description?: string }[];
  programsLinks: { title: string; href: string; description?: string }[];
  resourcesLinks: { title: string; href: string; description?: string }[];
  eventsLinks: { title: string; href: string; description?: string }[];
  communityLinks: { title: string; href: string; description?: string }[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  toggleMenu,
  aboutLinks,
  programsLinks,
  resourcesLinks,
  eventsLinks,
  communityLinks,
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-white">
      <div className="container p-4">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png" 
              alt="Sheraa Logo" 
              className="h-6 w-auto mr-2" 
              style={{ filter: "invert(14%) sepia(39%) saturate(3515%) hue-rotate(198deg) brightness(93%) contrast(101%)" }}
            />
            <span className="text-xl font-bold text-sheraa-primary">SHERAA</span>
          </Link>
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
          <MobileDropdown title="About Us" items={aboutLinks} />
          <MobileDropdown title="Programs" items={programsLinks} />
          <MobileDropdown title="Resources" items={resourcesLinks} />
          <MobileDropdown title="Events & Media" items={eventsLinks} />
          <MobileDropdown title="Community & Partnerships" items={communityLinks} />
          <div className="py-2">
            <Link
              to="/contact"
              className="block py-2 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
