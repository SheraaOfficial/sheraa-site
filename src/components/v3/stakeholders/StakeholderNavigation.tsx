import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Mail, ArrowRight } from "lucide-react";

const StakeholderNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/v3", label: "Entrepreneurs" },
    { path: "/v3/young", label: "Students" },
    { path: "/v3/general", label: "Community" },
    { path: "/v3/stakeholders", label: "Investors & Partners" },
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
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
                    ? "text-[#1E293B] bg-[#F59E0B]/10 font-semibold border border-[#F59E0B]/20"
                    : "text-gray-600 hover:text-[#1E293B] hover:bg-gray-50"
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
              className="hidden sm:flex items-center border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B]/5"
            >
              <Mail className="h-4 w-4 mr-2" />
              Executive Brief
            </Button>
            <Button
              size="sm"
              className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white"
            >
              <Crown className="h-4 w-4 mr-2" />
              Partner Portal
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default StakeholderNavigation;