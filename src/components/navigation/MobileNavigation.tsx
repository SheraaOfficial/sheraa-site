
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Compass, TrendingUp, Users, Info, ArrowRight, User, FileText, Calendar, Sun, Moon, Sparkles } from "lucide-react";
import MobileDropdown from "./MobileDropdown";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "@/hooks/use-toast";
import { NavigationLink } from "./types";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  homeLinks: NavigationLink[];
  discoverLinks: NavigationLink[];
  growLinks: NavigationLink[];
  communityLinks: NavigationLink[];
  insightsLinks: NavigationLink[];
  eventsLinks: NavigationLink[];
  applyLinks: NavigationLink[];
  perfumeLinks: NavigationLink[];
  sefLink: NavigationLink;
  isLoggedIn?: boolean;
  theme: string;
  toggleTheme: () => void;
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
  eventsLinks,
  applyLinks,
  perfumeLinks,
  sefLink,
  isLoggedIn = false,
  theme,
  toggleTheme
}) => {
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const { toast } = useToast();
  
  const handleLogout = () => {
    setLoggedInUser(null);
    setIsMenuOpen(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };
  
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-zinc-900">
      <div className="container p-4 bg-white dark:bg-zinc-900 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl font-bold text-sheraa-primary dark:text-white">SHERAA</span>
          </Link>
          <div className="flex items-center gap-2">
            {/* Theme toggle button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-sheraa-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pb-6">
          <MobileDropdown title="Home" icon={Home} items={homeLinks} />
          <MobileDropdown title="Discover" icon={Compass} items={discoverLinks} />
          <MobileDropdown title="Grow" icon={TrendingUp} items={growLinks} />
          <MobileDropdown title="Community" icon={Users} items={communityLinks} />
          <MobileDropdown title="Insights" icon={Info} items={insightsLinks} />
          <MobileDropdown title="Events" icon={Calendar} items={eventsLinks} />
          <MobileDropdown title="Sharjah Perfume" icon={Sparkles} items={perfumeLinks} />
          
          <div className="py-2">
            <Link to="/eligibility" className="flex items-center gap-2 py-2 text-base hover:text-sheraa-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              <ArrowRight className="h-4 w-4" />
              <span>Apply</span>
            </Link>
          </div>
          
          {/* SEF link with enhanced glow effect */}
          <div className="py-2">
            <Link 
              to={sefLink.href} 
              className="flex items-center gap-2 py-2 text-base" 
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2 relative">
                <Calendar className="h-4 w-4" />
                <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent font-bold">
                  {sefLink.title}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-orange-500/20 blur-sm animate-pulse"></div>
              </div>
            </Link>
          </div>
          
          {isLoggedIn && (
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Account</h3>
              <Link to="/profile" className="flex items-center gap-2 py-2 text-base hover:text-sheraa-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                <User className="h-4 w-4" />
                <span>My Profile</span>
              </Link>
              <Link to="/feed" className="flex items-center gap-2 py-2 text-base hover:text-sheraa-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                <FileText className="h-4 w-4" />
                <span>My Feed</span>
              </Link>
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-2 py-2 text-base text-red-500 hover:text-red-600 transition-colors w-full text-left"
              >
                Log out
              </button>
            </div>
          )}
          
          {!isLoggedIn && (
            <div className="pt-6 space-y-3 border-t border-gray-100 dark:border-gray-800 mt-4">
              <Button variant="outline" className="w-full dark:border-gray-700 dark:text-white" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-sm" asChild>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
