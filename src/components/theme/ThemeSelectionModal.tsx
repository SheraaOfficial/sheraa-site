
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme, HomepageTheme } from '@/contexts/ThemeContext';
import { themeMetadata } from '@/contexts/ThemeContext';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { 
  Users, Zap, Camera, Sparkles, Play, Film, Grid, 
  ArrowRight, Eye, CheckCircle, Star, Target
} from 'lucide-react';

interface ThemeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSelectionModal: React.FC<ThemeSelectionModalProps> = ({ isOpen, onClose }) => {
  const { currentTheme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<HomepageTheme>(currentTheme);
  const [, setHasSelectedTheme] = useLocalStorage('sheraa-theme-selected', false);
  const [hoveredTheme, setHoveredTheme] = useState<HomepageTheme | null>(null);

  const getThemeIcon = (themeId: HomepageTheme) => {
    switch (themeId) {
      case 'corporate': return Users;
      case 'dynamic': return Zap;
      case 'immersive': return Camera;
      case 'floating': return Sparkles;
      case 'video': return Play;
      case 'cinematic': return Film;
      case 'ultimate': return Grid;
      default: return Target;
    }
  };

  const getThemeColor = (themeId: HomepageTheme) => {
    switch (themeId) {
      case 'corporate': return 'from-blue-500 to-blue-600';
      case 'dynamic': return 'from-emerald-500 to-teal-600';
      case 'immersive': return 'from-purple-500 to-indigo-600';
      case 'floating': return 'from-pink-500 to-rose-600';
      case 'video': return 'from-orange-500 to-red-600';
      case 'cinematic': return 'from-gray-700 to-gray-900';
      case 'ultimate': return 'from-violet-500 to-purple-600';
      default: return 'from-sheraa-primary to-sheraa-secondary';
    }
  };

  const handleThemeSelect = (theme: HomepageTheme) => {
    setSelectedTheme(theme);
    setTheme(theme);
    setHasSelectedTheme(true);
    
    // Small delay for visual feedback then close
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleExploreAll = () => {
    setHasSelectedTheme(true);
    onClose();
    // Navigate to theme preview page
    window.location.href = '/themes/preview';
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-white via-sheraa-light/20 to-sheraa-light/40 border-0">
        <div className="p-8">
          <DialogHeader className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Choose Your Experience
              </DialogTitle>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sheraa offers different homepage experiences tailored for various audiences. 
                Select the one that best matches your needs and interests.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-sheraa-primary font-medium">
                <Star className="w-4 h-4" />
                <span>7 Unique Experiences Available</span>
              </div>
            </motion.div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-h-96 overflow-y-auto">
            {themeMetadata.map((theme, index) => {
              const IconComponent = getThemeIcon(theme.id);
              const isSelected = selectedTheme === theme.id;
              const isHovered = hoveredTheme === theme.id;
              
              return (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTheme(theme.id)}
                  onHoverEnd={() => setHoveredTheme(null)}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 h-full relative overflow-hidden ${
                      isSelected 
                        ? 'ring-2 ring-sheraa-primary shadow-lg scale-105' 
                        : 'hover:shadow-lg hover:scale-102'
                    }`}
                    onClick={() => handleThemeSelect(theme.id)}
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 z-10"
                      >
                        <CheckCircle className="w-6 h-6 text-sheraa-primary bg-white rounded-full" />
                      </motion.div>
                    )}
                    
                    <div className={`h-3 bg-gradient-to-r ${getThemeColor(theme.id)}`} />
                    
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getThemeColor(theme.id)} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{theme.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {theme.targetAudience.split(',')[0]}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {theme.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Key Features
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {theme.keyFeatures.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {theme.keyFeatures.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{theme.keyFeatures.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 text-xs text-gray-500">
                        {theme.useCase}
                      </div>
                    </CardContent>
                    
                    <AnimatePresence>
                      {(isHovered || isSelected) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-4 left-6 right-6"
                        >
                          <Button 
                            size="sm" 
                            className={`w-full bg-gradient-to-r ${getThemeColor(theme.id)} text-white border-0`}
                          >
                            {isSelected ? 'Selected!' : 'Choose This Experience'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleExploreAll}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Explore All Themes
            </Button>
            
            <div className="text-sm text-gray-500 text-center">
              You can always change your experience later via the theme selector
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
