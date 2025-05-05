
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Compass, TrendingUp, Users, Info, ArrowRight } from "lucide-react";
import MobileDropdown from "./MobileDropdown";
interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  homeLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
  discoverLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
  growLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
  communityLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
  insightsLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
  applyLinks: {
    title: string;
    href: string;
    description?: string;
  }[];
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  toggleMenu,
  homeLinks,
  discoverLinks,
  growLinks,
  communityLinks,
  insightsLinks,
  applyLinks
}) => {
  if (!isMenuOpen) return null;
  
  return <div className="md:hidden fixed inset-0 z-50 bg-white">
      <div className="container p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl font-bold text-sheraa-primary">SHERAA</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </Button>
        </div>
        <div className="space-y-4">
          <MobileDropdown title="Home" icon={Home} items={homeLinks} />
          <MobileDropdown title="Discover" icon={Compass} items={discoverLinks} />
          <MobileDropdown title="Grow" icon={TrendingUp} items={growLinks} />
          <MobileDropdown title="Community" icon={Users} items={communityLinks} />
          <MobileDropdown title="Insights" icon={Info} items={insightsLinks} />
          <div className="py-2">
            <Link to="/eligibility" className="flex items-center gap-2 py-2 text-base" onClick={() => setIsMenuOpen(false)}>
              <ArrowRight className="h-4 w-4" />
              <span>Apply</span>
            </Link>
          </div>
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
            <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90" asChild>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default MobileNavigation;
