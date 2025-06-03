
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme, themeMetadata } from '@/contexts/ThemeContext';
import { Users, Zap, Eye, Download, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThemeShowcase: React.FC = () => {
  const { setTheme } = useTheme();

  const getThemeIcon = (themeId: string) => {
    switch (themeId) {
      case 'corporate':
        return <Users className="w-8 h-8 text-sheraa-primary" />;
      case 'dynamic':
        return <Zap className="w-8 h-8 text-sheraa-teal" />;
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
          Homepage Theme <span className="text-sheraa-primary">Showcase</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the perfect homepage experience for your target audience. Each theme is designed 
          for specific user groups and business objectives.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart className="w-4 h-4" />
            Analytics Report
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Comparison
          </Button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {themeMetadata.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {getThemeIcon(theme.id)}
                </div>
                <CardTitle className="text-2xl">{theme.name}</CardTitle>
                <p className="text-gray-600">{theme.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Target Audience
                  </h4>
                  <Badge variant="secondary" className="text-sm">
                    {theme.targetAudience}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {theme.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Best Use Case</h4>
                  <p className="text-sm text-gray-600">{theme.useCase}</p>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={() => previewTheme(theme.id)}
                    className="flex-1 bg-sheraa-primary hover:bg-sheraa-primary/90"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setTheme(theme.id as any);
                      window.location.href = '/';
                    }}
                    className="flex-1"
                  >
                    Set as Default
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
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Need Custom Themes?</h3>
            <p className="text-gray-600 mb-6">
              We can create department-specific themes or seasonal variations 
              tailored to your unique requirements and brand guidelines.
            </p>
            <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              Request Custom Theme
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
