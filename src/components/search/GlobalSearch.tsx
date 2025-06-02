
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, TrendingUp, Clock, Users, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'program' | 'startup' | 'event' | 'article' | 'resource';
  url: string;
  category?: string;
  relevance: number;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'S3 Incubator Program',
      description: 'Six-month equity-free incubator for tech-enabled startups',
      type: 'program',
      url: '/programs/s3-incubator',
      category: 'Programs',
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Sharjah Entrepreneurship Festival',
      description: 'Annual flagship event bringing together global entrepreneurs',
      type: 'event',
      url: '/events/sef-landing',
      category: 'Events',
      relevance: 0.9
    },
    {
      id: '3',
      title: 'Access Sharjah Challenge',
      description: 'Global competition for growth-stage startups',
      type: 'program',
      url: '/programs/access-sharjah-challenge',
      category: 'Programs',
      relevance: 0.85
    },
    {
      id: '4',
      title: 'Startup Dojo',
      description: 'Summer incubation program for student entrepreneurs',
      type: 'program',
      url: '/programs/startup-dojo',
      category: 'Programs',
      relevance: 0.8
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => b.relevance - a.relevance);

    setResults(filtered);
    setIsLoading(false);
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    performSearch(searchQuery);
  };

  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const newRecentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    
    navigate(result.url);
    onClose();
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'program': return <TrendingUp className="w-4 h-4" />;
      case 'event': return <Clock className="w-4 h-4" />;
      case 'startup': return <Users className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'program': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-purple-100 text-purple-800';
      case 'startup': return 'bg-green-100 text-green-800';
      case 'article': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-2xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <Card className="shadow-2xl border-0">
          <CardContent className="p-0">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search programs, events, startups, and more..."
                className="flex-1 border-0 focus-visible:ring-0 text-lg"
              />
              {isLoading && <Loader2 className="w-5 h-5 animate-spin text-sheraa-primary" />}
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {query && results.length > 0 && (
                <div className="p-2">
                  <div className="text-sm text-gray-500 mb-2 px-2">
                    {results.length} result{results.length !== 1 ? 's' : ''} found
                  </div>
                  {results.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900 truncate">
                              {result.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {query && results.length === 0 && !isLoading && (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-1">Try different keywords or browse our programs</p>
                </div>
              )}

              {!query && recentSearches.length > 0 && (
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Searches</h3>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleSearch(search)}
                      >
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{search}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!query && recentSearches.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Start typing to search</p>
                  <p className="text-sm mt-1">Find programs, events, startups, and resources</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
