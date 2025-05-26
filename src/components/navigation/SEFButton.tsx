
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
      className="group flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 border border-orange-400/30 hover:scale-105 text-sm"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-md blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      
      {/* Icon */}
      <Calendar className="w-3.5 h-3.5" />
      
      {/* Text */}
      <span className="text-xs font-bold tracking-wide">
        SEF
      </span>
    </Link>
  );
};
