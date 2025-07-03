import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Target, Users, Trophy, MapPin, MessageCircle, Menu, X } from "lucide-react";

const YoungEntrepreneurNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        const currentIndex = navigationItems.findIndex(item => item.path === location.pathname);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          e.preventDefault();
          navigate(navigationItems[currentIndex - 1].path);
        } else if (e.key === 'ArrowRight' && currentIndex < navigationItems.length - 1) {
          e.preventDefault();
          navigate(navigationItems[currentIndex + 1].path);
        } else if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          navigate('/v3/young');
        }
      }
      
      // Escape to close mobile menu
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname, navigate]);
  
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
    <>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <nav 
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 mobile-optimized"
        role="navigation"
        aria-label="Young entrepreneur navigation"
      >
        <div className="container mx-auto px-4 py-3">
          {/* Keyboard shortcuts hint */}
          <div className="sr-only">
            Press Alt + Left/Right arrows to navigate between pages, Alt + H for home
          </div>
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Link 
              to="/v3/young" 
              className="hover:text-purple-600 transition-colors focus-visible"
              aria-label="Go to Young Entrepreneurs hub"
            >
              Young Entrepreneurs
            </Link>
            {currentPage && (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-gray-900 font-medium" aria-current="page">
                  {currentPage.label}
                </span>
              </>
            )}
          </nav>

          {/* Quick Navigation */}
          <div className="flex items-center justify-between">
            <Link to="/v3/young">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 tap-target focus-visible"
                aria-label="Go back to Young Entrepreneurs hub"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Back to Hub</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>

            {/* Desktop Quick Access Menu */}
            <div className="hidden md:flex items-center gap-2" role="menubar">
              {navigationItems.slice(1).map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`gap-2 tap-target focus-visible ${isActive ? 'young-gradient-dopamine text-white' : ''}`}
                      aria-current={isActive ? "page" : undefined}
                      aria-label={`${item.label} - ${item.description}`}
                      role="menuitem"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden lg:inline">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="tap-target focus-visible"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="grid grid-cols-2 gap-2 mt-4">
                {navigationItems.slice(1).map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <Link 
                      key={item.path} 
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant={isActive ? "default" : "outline"}
                        className={`w-full text-left justify-start gap-3 p-4 h-auto tap-target focus-visible ${
                          isActive ? 'young-gradient-dopamine text-white' : ''
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        role="menuitem"
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        <div className="text-left">
                          <div className="font-medium">{item.label}</div>
                          <div className={`text-xs opacity-80 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                            {item.description}
                          </div>
                        </div>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          {currentPage && (
            <div className="mt-3">
              <Card className="border-0 young-dopamine-shadow mobile-optimized">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 young-gradient-dopamine rounded-full flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <currentPage.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="font-bold text-gray-900 text-lg">{currentPage.label}</h1>
                      <p className="text-sm text-gray-600">{currentPage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default YoungEntrepreneurNavigation;