
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { searchContent } from '@/lib/searchUtils';
import { SearchResult } from '@/types/search';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (debouncedQuery.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const searchResults = await searchContent(debouncedQuery);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery]);

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.path;
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="container mx-auto px-4 pt-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto bg-white dark:bg-sheraa-dark rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search programs, startups, events, insights..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-10 pr-10 py-3 text-lg border-0 bg-transparent focus:outline-none focus:ring-0"
                />
                <button
                  onClick={onClose}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-sheraa-primary" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Searching...</span>
                </div>
              )}

              {!isLoading && query.length >= 2 && results.length === 0 && (
                <div className="py-8 text-center text-gray-600 dark:text-gray-400">
                  No results found for "{query}"
                </div>
              )}

              {!isLoading && results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => (
                    <motion.button
                      key={`${result.type}-${result.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleResultClick(result)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <span className="ml-4 px-2 py-1 text-xs bg-sheraa-primary/10 text-sheraa-primary rounded-full shrink-0">
                          {result.type}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {query.length < 2 && (
                <div className="py-8 text-center text-gray-600 dark:text-gray-400">
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
