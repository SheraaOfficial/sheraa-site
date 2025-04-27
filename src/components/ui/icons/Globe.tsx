
import React from 'react';
import { Globe as LucideGlobe } from 'lucide-react';

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className, ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <LucideGlobe className="w-full h-full" {...props} />
      {/* Golden/light blue glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300/30 to-blue-300/30 blur-xl -z-10 animate-pulse-slow"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/20 to-blue-200/20 blur-md -z-10"></div>
    </div>
  );
};

export default Globe;
