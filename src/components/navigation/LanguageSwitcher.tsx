
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="text-gray-600 dark:text-gray-300 hover:text-sheraa-primary px-3 py-2 h-9 min-w-[70px]"
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'EN' : 'AR'}
      </span>
    </Button>
  );
};
