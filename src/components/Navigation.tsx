import React, { useState, useEffect } from "react";
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
import { Menu, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10">
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
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutLinks = [
    { title: "Introduction", href: "/about" },
    { title: "Our Approach", href: "/about/approach" },
    { title: "Our Vision", href: "/about/vision" },
    { title: "Our Impact", href: "/about/impact" },
    { title: "Our Hubs", href: "/about/hubs" },
    { title: "Our Leadership", href: "/about/leadership" },
    { title: "Our Board of Advisors", href: "/about/board" },
  ];

  const programsLinks = [
    { title: "Program Pathway", href: "/programs" },
    { title: "Start Young", href: "/programs/start-young" },
    { title: "Startup Dojo", href: "/programs/startup-dojo" },
    { title: "Startup Dojo+", href: "/programs/startup-dojo-plus" },
    { title: "Grow Smart", href: "/programs/grow-smart" },
    { title: "S3 Incubator", href: "/programs/s3-incubator" },
    { title: "Build Ventures", href: "/programs/build-ventures" },
    { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge" },
    { title: "SME Support", href: "/programs/sme-support" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-black/50 backdrop-blur-lg shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center px-4 sm:px-6">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">
                <span className="text-[#9b87f5]">SH</span>
                <span className="text-white">ERAA</span>
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto text-white hover:bg-white/10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <NavigationMenu className="mx-6">
            <NavigationMenuList className="text-white">
              <MegaMenuComponent title="About Us" links={aboutLinks} />
              <MegaMenuComponent title="Programs" links={programsLinks} />
              <MegaMenuComponent title="Resources" links={[
                { title: "Introduction", href: "/resources" },
                { title: "Guides & Toolkits", href: "/resources/guides" },
                { title: "Advisory Services", href: "/resources/advisory" },
                { title: "Articles & Insights", href: "/resources/articles" },
                { title: "Impact Reports", href: "/resources/impact-reports" },
              ]} />
              <MegaMenuComponent title="Events & Media" links={[
                { title: "Introduction", href: "/events" },
                { title: "Sharjah Entrepreneurship Festival", href: "/events/sef" },
                { title: "Upcoming Events & Workshops", href: "/events/upcoming" },
                { title: "News & Media", href: "/events/news" },
              ]} />
              <MegaMenuComponent title="Community & Partnerships" links={[
                { title: "Introduction", href: "/community" },
                { title: "Join Our Community", href: "/community/join" },
                { title: "Our Startups Showcase", href: "/community/startups" },
                { title: "Partnership Opportunities", href: "/community/partnerships" },
              ]} />
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] text-white" size="sm">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Overlay Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container p-4">
                <div className="flex items-center justify-between mb-10 pt-4">
                  <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-2xl font-bold text-white">
                      <span className="text-[#9b87f5]">SH</span>
                      <span className="text-white">ERAA</span>
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <MobileDropdown title="About Us" items={aboutLinks} />
                  <MobileDropdown title="Programs" items={programsLinks} />
                  <MobileDropdown title="Resources" items={[
                    { title: "Introduction", href: "/resources" },
                    { title: "Guides & Toolkits", href: "/resources/guides" },
                    { title: "Advisory Services", href: "/resources/advisory" },
                    { title: "Articles & Insights", href: "/resources/articles" },
                    { title: "Impact Reports", href: "/resources/impact-reports" },
                  ]} />
                  <MobileDropdown title="Events & Media" items={[
                    { title: "Introduction", href: "/events" },
                    { title: "Sharjah Entrepreneurship Festival", href: "/events/sef" },
                    { title: "Upcoming Events & Workshops", href: "/events/upcoming" },
                    { title: "News & Media", href: "/events/news" },
                  ]} />
                  <MobileDropdown title="Community & Partnerships" items={[
                    { title: "Introduction", href: "/community" },
                    { title: "Join Our Community", href: "/community/join" },
                    { title: "Our Startups Showcase", href: "/community/startups" },
                    { title: "Partnership Opportunities", href: "/community/partnerships" },
                  ]} />
                  <div className="py-2 border-t border-white/10 my-4">
                    <Link
                      to="/contact"
                      className="block py-3 text-base text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                      Login
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] text-white">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
        className="flex w-full items-center justify-between py-3 text-base text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 ml-4 space-y-2 border-l pl-4 border-white/20">
              {items.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.href}
                    className="block py-2 text-sm text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
