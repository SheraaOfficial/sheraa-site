import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";

interface MegaMenuProps {
  title: string;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const MegaMenuComponent: React.FC<MegaMenuProps> = ({ title, links }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-1">
          {links.map((link) => (
            <ListItem
              key={link.title}
              title={link.title}
              href={link.href}
            >
              {link.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sheraa-light hover:text-sheraa-primary focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const aboutLinks = [
    { title: "Introduction", href: "/about", description: "Learn about Sheraa's mission and values" },
    { title: "Our Approach", href: "/about/approach", description: "Discover our founder-first philosophy" },
    { title: "Our Vision", href: "/about/vision", description: "See our vision for Sharjah's future" },
    { title: "Our Impact", href: "/about/impact", description: "Explore our ecosystem's achievements" },
    { title: "Our Hubs", href: "/about/hubs", description: "Visit our strategic locations" },
    { title: "Our Leadership", href: "/about/leadership", description: "Meet our visionary leaders" },
    { title: "Our Board of Advisors", href: "/about/board", description: "Learn from our expert advisors" },
  ];

  const programsLinks = [
    { title: "Introduction", href: "/programs", description: "Overview of our startup support programs" },
    { title: "Program Pathway", href: "/programs", description: "Your journey from idea to scale" },
    { title: "Start Young", href: "/programs/start-young", description: "Programs for student entrepreneurs" },
    { title: "Startup Dojo", href: "/programs/startup-dojo", description: "Summer incubation program" },
    { title: "Startup Dojo+", href: "/programs/startup-dojo-plus", description: "Advanced startup program" },
    { title: "Grow Smart", href: "/programs/grow-smart", description: "Scale your startup" },
    { title: "S3 Incubator", href: "/programs/s3-incubator", description: "Sheraa Startup Studio" },
    { title: "Build Ventures", href: "/programs/build-ventures", description: "Growth stage program" },
    { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge", description: "Solve real industry challenges" },
    { title: "SME Support", href: "/programs/sme-support", description: "Support for established businesses" },
  ];

  const resourcesLinks = [
    { title: "Introduction", href: "/resources", description: "Access startup resources and tools" },
    { title: "Guides & Toolkits", href: "/resources/guides", description: "Practical startup guides" },
    { title: "Advisory Services", href: "/resources/advisory", description: "Expert guidance" },
    { title: "Articles & Insights", href: "/resources/articles", description: "Latest startup trends" },
    { title: "Impact Reports", href: "/resources/impact-reports", description: "Our ecosystem impact" },
  ];

  const eventsLinks = [
    { title: "Introduction", href: "/events", description: "Discover our events" },
    { title: "Sharjah Entrepreneurship Festival", href: "/events/sef", description: "Our flagship event" },
    { title: "SEF Agenda", href: "/events/sef/agenda", description: "Festival schedule" },
    { title: "SEF Registration", href: "/events/sef/registration", description: "Get your pass" },
    { title: "SEF FAQ", href: "/events/sef/faq", description: "Common questions" },
    { title: "Upcoming Events", href: "/events/upcoming", description: "Calendar of events" },
    { title: "News & Media", href: "/events/news", description: "Latest updates" },
  ];

  const communityLinks = [
    { title: "Introduction", href: "/community", description: "Join our ecosystem" },
    { title: "Join Our Community", href: "/community/join", description: "Membership benefits" },
    { title: "Our Startups Showcase", href: "/community/startups", description: "Success stories" },
    { title: "Partnership Opportunities", href: "/community/partnerships", description: "Collaborate with us" },
  ];

  return (
    <header className="sheraa-navbar">
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
            <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90" size="sm">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Overlay Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="container p-4">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
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
        )}
      </div>
    </header>
  );
};

interface MobileDropdownProps {
  title: string;
  items: { title: string; href: string }[];
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        className="flex w-full items-center justify-between py-2 text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-1 ml-4 space-y-2 border-l pl-4 border-gray-200">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-1 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
