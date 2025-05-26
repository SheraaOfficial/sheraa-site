
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Home, Compass, TrendingUp, Users, Info, ArrowRight, Calendar, Sun, Moon, Sparkles } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MegaMenuComponent from "./MegaMenuComponent";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Sparkles as SparklesComponent } from "@/components/ui/sparkles";
import { NavigationLink } from "./types";

interface DesktopNavigationProps {
  homeLinks: NavigationLink[];
  discoverLinks: NavigationLink[];
  growLinks: NavigationLink[];
  communityLinks: NavigationLink[];
  insightsLinks: NavigationLink[];
  eventsLinks: NavigationLink[];
  applyLinks: NavigationLink[];
  sefLink: NavigationLink;
  perfumeLinks: NavigationLink[];
  isLoggedIn?: boolean;
  theme: string;
  toggleTheme: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = memo(({
  homeLinks,
  discoverLinks,
  growLinks,
  communityLinks,
  insightsLinks,
  eventsLinks,
  perfumeLinks,
  sefLink,
  isLoggedIn = false,
  theme,
  toggleTheme
}) => {
  return (
    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
      <NavigationMenu className="mx-6">
        <NavigationMenuList>
          <MegaMenuComponent title="Home" icon={Home} links={homeLinks} />
          <MegaMenuComponent title="Discover" icon={Compass} links={discoverLinks} />
          <MegaMenuComponent title="Programs" icon={TrendingUp} links={growLinks} />
          <MegaMenuComponent title="Community" icon={Users} links={communityLinks} />
          <MegaMenuComponent title="Insights" icon={Info} links={insightsLinks} />
          <MegaMenuComponent title="Events" icon={Calendar} links={eventsLinks} />
          <MegaMenuComponent title="Sharjah Perfume" icon={Sparkles} links={perfumeLinks} />
          
          {/* SEF link with enhanced sparkles effect */}
          <NavigationMenuItem>
            <Link 
              to={sefLink.href} 
              className="group flex items-center gap-2 relative px-4 py-2 mx-1 rounded-md text-sm font-medium"
              aria-label={sefLink.description || sefLink.title}
            >
              <SparklesComponent colors={["#9b87f5", "#FF6600", "#D946EF", "#F97316"]} count={20}>
                <div className="flex items-center gap-2 relative z-10 transition-all group-hover:scale-105">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent font-bold">
                    {sefLink.title}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sheraa-sef-primary/30 to-sheraa-sef-accent/30 blur-sm group-hover:opacity-100 opacity-80 transition-opacity animate-pulse"></div>
              </SparklesComponent>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to="/eligibility" 
              className={navigationMenuTriggerStyle()}
              aria-label="Apply to Sheraa programs"
            >
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span>Apply</span>
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        {/* Theme toggle button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white rounded-full"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>

        {!isLoggedIn && (
          <>
            <Button variant="outline" size="sm" asChild className="border-sheraa-primary/30 text-sheraa-primary dark:text-white">
              <Link to="/login">Login</Link>
            </Button>
            <GradientButton size="sm" asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/signup">Get Started</Link>
            </GradientButton>
          </>
        )}
      </div>
    </div>
  );
});

DesktopNavigation.displayName = "DesktopNavigation";

export default DesktopNavigation;
