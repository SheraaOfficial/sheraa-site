
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEFButtonProps {
  path: string;
}

export const SEFButton: React.FC<SEFButtonProps> = ({ path }) => {
  const { t } = useLanguage();
  
  return (
    <Link 
      to={path} 
      className="group flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-orange-400/30 hover:scale-105"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      
      {/* Icon */}
      <Calendar className="w-4 h-4" />
      
      {/* Text */}
      <span className="text-sm font-bold tracking-wide">
        {t('nav.sef')}
      </span>
    </Link>
  );
};
