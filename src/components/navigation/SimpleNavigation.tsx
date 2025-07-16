import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SimpleNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Programs', path: '/programs' },
    { name: 'Startups Community', path: '/portfolio' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/sheraa-logo.png" 
              alt="Sheraa" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-[#A0826D] font-medium transition-colors ${
                  location.pathname === item.path ? 'text-[#A0826D]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Apply Now Button */}
          <Button
            className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white px-6 py-2"
            asChild
          >
            <Link to="/apply">Apply Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SimpleNavigation;