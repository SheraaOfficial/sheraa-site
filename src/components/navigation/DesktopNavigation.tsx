
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Home, Compass, TrendingUp, Users, Info, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MegaMenuComponent from "./MegaMenuComponent";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";

interface DesktopNavigationProps {
  homeLinks: { title: string; href: string; description?: string }[];
  discoverLinks: { title: string; href: string; description?: string }[];
  growLinks: { title: string; href: string; description?: string }[];
  communityLinks: { title: string; href: string; description?: string }[];
  insightsLinks: { title: string; href: string; description?: string }[];
  applyLinks: { title: string; href: string; description?: string }[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  homeLinks,
  discoverLinks,
  growLinks,
  communityLinks,
  insightsLinks,
  applyLinks,
}) => {
  return (
    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
      <NavigationMenu className="mx-6">
        <NavigationMenuList>
          <MegaMenuComponent title="Home" icon={Home} links={homeLinks} />
          <MegaMenuComponent title="Discover" icon={Compass} links={discoverLinks} />
          <MegaMenuComponent title="Grow" icon={TrendingUp} links={growLinks} />
          <MegaMenuComponent title="Community" icon={Users} links={communityLinks} />
          <MegaMenuComponent title="Insights" icon={Info} links={insightsLinks} />
          <NavigationMenuItem>
            <Link to="/eligibility" className={navigationMenuTriggerStyle()}>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <span>Apply</span>
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Login
        </Button>
        <GradientButton size="sm" className="mr-2">
          Get Started
        </GradientButton>
      </div>
    </div>
  );
};

export default DesktopNavigation;
