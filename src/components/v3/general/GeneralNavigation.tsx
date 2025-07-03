
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, ArrowRight } from "lucide-react";

const GeneralNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/v3", label: "Entrepreneurs" },
    { path: "/v3/young", label: "Students" },
    { path: "/v3/stakeholders", label: "Stakeholders" },
    { path: "/v3/general", label: "Community" },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/sheraa-logo.png" alt="Sheraa" className="h-8 w-auto" />
          </Link>

          {/* Navigation Tabs */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "text-[#A0826D] bg-[#A0826D]/10 font-semibold"
                    : "text-gray-600 hover:text-[#A0826D] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side CTAs */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
            >
              <Bell className="h-4 w-4 mr-2" />
              Join Newsletter
            </Button>
            <Button
              size="sm"
              className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GeneralNavigation;
