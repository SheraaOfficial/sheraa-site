import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Target, Users, Trophy, MapPin, MessageCircle } from "lucide-react";

const YoungEntrepreneurNavigation = () => {
  const location = useLocation();
  
  const navigationItems = [
    {
      path: "/v3/young",
      icon: Home,
      label: "Hub",
      description: "Start here"
    },
    {
      path: "/v3/young/idea-validator",
      icon: Target,
      label: "Idea Validator",
      description: "Test your ideas"
    },
    {
      path: "/v3/young/founders",
      icon: Users,
      label: "Founder Stories",
      description: "Get inspired"
    },
    {
      path: "/v3/young/challenges",
      icon: Trophy,
      label: "Challenges",
      description: "Compete & win"
    },
    {
      path: "/v3/young/hubs",
      icon: MapPin,
      label: "Find Your Hub",
      description: "Campus community"
    },
    {
      path: "/v3/young/peer-matching",
      icon: MessageCircle,
      label: "Peer Matching",
      description: "Find co-founders"
    }
  ];

  const currentPage = navigationItems.find(item => item.path === location.pathname);

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Link to="/v3/young" className="hover:text-purple-600 transition-colors">
            Young Entrepreneurs
          </Link>
          {currentPage && (
            <>
              <span>/</span>
              <span className="text-gray-900 font-medium">{currentPage.label}</span>
            </>
          )}
        </div>

        {/* Quick Navigation */}
        <div className="flex items-center justify-between">
          <Link to="/v3/young">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Hub
            </Button>
          </Link>

          {/* Quick Access Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navigationItems.slice(1).map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 ${isActive ? 'young-gradient-dopamine text-white' : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Quick Menu */}
          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="px-3 py-1 rounded-md border border-gray-300 text-sm"
            >
              {navigationItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Indicator */}
        {currentPage && (
          <div className="mt-3">
            <Card className="border-0 young-dopamine-shadow">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 young-gradient-dopamine rounded-full flex items-center justify-center">
                    <currentPage.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{currentPage.label}</h3>
                    <p className="text-sm text-gray-600">{currentPage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoungEntrepreneurNavigation;