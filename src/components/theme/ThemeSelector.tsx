
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme, HomepageTheme } from '@/contexts/ThemeContext';
import { useThemeSelection } from '@/hooks/useThemeSelection';
import { Eye, Palette, Users, Zap, Camera, Play, Film, Sparkles, Grid, RotateCcw } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, isPreviewMode, setPreviewMode } = useTheme();
  const { resetThemeSelection } = useThemeSelection();

  const getThemeIcon = (themeId: HomepageTheme) => {
    switch (themeId) {
      case 'corporate':
        return <Users className="w-5 h-5" />;
      case 'dynamic':
        return <Zap className="w-5 h-5" />;
      case 'immersive':
        return <Camera className="w-5 h-5" />;
      case 'floating':
        return <Sparkles className="w-5 h-5" />;
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'cinematic':
        return <Film className="w-5 h-5" />;
      case 'ultimate':
        return <Grid className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  if (!isPreviewMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <Button
          onClick={() => setPreviewMode(true)}
          className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white shadow-lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview Themes
        </Button>
        <Button
          onClick={resetThemeSelection}
          variant="outline"
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Change Experience
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 max-w-xs"
    >
      <Card className="bg-white/95 backdrop-blur-lg border shadow-xl max-h-[80vh] overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Homepage Themes</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPreviewMode(false)}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
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
                <span className="ml-2 truncate">{theme.name}</span>
              </Button>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t">
            <Button
              onClick={resetThemeSelection}
              variant="outline"
              size="sm"
              className="w-full text-xs"
            >
              <RotateCcw className="w-3 h-3 mr-2" />
              Choose New Experience
            </Button>
          </div>
          
          <div className="mt-3 pt-3 border-t text-xs text-gray-600">
            <p className="font-medium">{availableThemes.find(t => t.id === currentTheme)?.name}</p>
            <p className="text-xs truncate">{availableThemes.find(t => t.id === currentTheme)?.targetAudience}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
