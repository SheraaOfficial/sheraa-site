
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme, themeMetadata } from '@/contexts/ThemeContext';
import { Users, Zap, Eye, Download, BarChart, Camera, Play, Film, Sparkles, Grid } from 'lucide-react';

export const ThemeShowcase: React.FC = () => {
  const { setTheme } = useTheme();

  const getThemeIcon = (themeId: string) => {
    switch (themeId) {
      case 'corporate':
        return <Users className="w-8 h-8 text-sheraa-primary" />;
      case 'dynamic':
        return <Zap className="w-8 h-8 text-sheraa-teal" />;
      case 'immersive':
        return <Camera className="w-8 h-8 text-sheraa-orange" />;
      case 'floating':
        return <Sparkles className="w-8 h-8 text-purple-500" />;
      case 'video':
        return <Play className="w-8 h-8 text-red-500" />;
      case 'cinematic':
        return <Film className="w-8 h-8 text-blue-500" />;
      case 'ultimate':
        return <Grid className="w-8 h-8 text-green-500" />;
      default:
        return <Eye className="w-8 h-8 text-gray-500" />;
    }
  };

  const previewTheme = (themeId: string) => {
    const url = new URL(window.location.origin);
    url.searchParams.set('theme', themeId);
    url.searchParams.set('preview', 'true');
    window.open(url.toString(), '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Homepage Theme <span className="text-sheraa-primary">Library</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Choose from our comprehensive collection of homepage experiences. Each theme is carefully 
          designed for specific audiences and use cases, ensuring you have the perfect layout for any situation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart className="w-4 h-4" />
            Theme Analytics
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Comparison
          </Button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {themeMetadata.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {getThemeIcon(theme.id)}
                </div>
                <CardTitle className="text-xl">{theme.name}</CardTitle>
                <p className="text-gray-600 text-sm">{theme.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" />
                    Target Audience
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {theme.targetAudience}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                  <div className="space-y-1">
                    {theme.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1 text-sm">Use Case</h4>
                  <p className="text-xs text-gray-600">{theme.useCase}</p>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    onClick={() => previewTheme(theme.id)}
                    size="sm"
                    className="flex-1 bg-sheraa-primary hover:bg-sheraa-primary/90"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Preview
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTheme(theme.id as any);
                      window.location.href = '/';
                    }}
                    className="flex-1"
                  >
                    Set Default
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">All Your Work Preserved</h3>
            <p className="text-gray-600 mb-6">
              Every homepage layout you've created is now available as a selectable theme. 
              Switch between them instantly or preview them for different audiences and occasions.
            </p>
            <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Eye className="w-4 h-4 mr-2" />
              Start Previewing Themes
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
