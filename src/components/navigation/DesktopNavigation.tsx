
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MegaMenuComponent from "./MegaMenuComponent";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";

interface DesktopNavigationProps {
  aboutLinks: { title: string; href: string; description?: string }[];
  programsLinks: { title: string; href: string; description?: string }[];
  resourcesLinks: { title: string; href: string; description?: string }[];
  eventsLinks: { title: string; href: string; description?: string }[];
  communityLinks: { title: string; href: string; description?: string }[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  aboutLinks,
  programsLinks,
  resourcesLinks,
  eventsLinks,
  communityLinks,
}) => {
  return (
    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
      <NavigationMenu className="mx-6">
        <NavigationMenuList>
          <MegaMenuComponent title="About Us" links={aboutLinks} />
          <MegaMenuComponent title="Programs" links={programsLinks} />
          <MegaMenuComponent title="Resources" links={resourcesLinks} />
          <MegaMenuComponent title="Events & Media" links={eventsLinks} />
          <MegaMenuComponent title="Community & Partnerships" links={communityLinks} />
          <NavigationMenuItem>
            <Link to="/contact" className={navigationMenuTriggerStyle()}>
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Login
        </Button>
        <GradientButton size="sm">
          Get Started
        </GradientButton>
      </div>
    </div>
  );
};

export default DesktopNavigation;
