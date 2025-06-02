
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { ModernButton } from '@/components/ui/modern-button';

export const SearchButton: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <ModernButton
        variant="ghost"
        size="sm"
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center gap-2"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
      </ModernButton>
      
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};
