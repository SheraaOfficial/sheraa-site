
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme, HomepageTheme } from '@/contexts/ThemeContext';
import { Eye, Palette, Users, Zap } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, isPreviewMode, setPreviewMode } = useTheme();

  const getThemeIcon = (themeId: HomepageTheme) => {
    switch (themeId) {
      case 'corporate':
        return <Users className="w-5 h-5" />;
      case 'dynamic':
        return <Zap className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  if (!isPreviewMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setPreviewMode(true)}
          className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white shadow-lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview Themes
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <Card className="bg-white/95 backdrop-blur-lg border shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Theme Preview</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPreviewMode(false)}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>
          
          <div className="space-y-2">
            {availableThemes.map((theme) => (
              <Button
                key={theme.id}
                variant={currentTheme === theme.id ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme(theme.id)}
                className={`w-full justify-start text-xs ${
                  currentTheme === theme.id 
                    ? 'bg-sheraa-primary text-white' 
                    : 'hover:bg-sheraa-primary/10'
                }`}
              >
                {getThemeIcon(theme.id)}
                <span className="ml-2">{theme.name}</span>
              </Button>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t text-xs text-gray-600">
            <p className="font-medium">{availableThemes.find(t => t.id === currentTheme)?.name}</p>
            <p className="text-xs">{availableThemes.find(t => t.id === currentTheme)?.targetAudience}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
