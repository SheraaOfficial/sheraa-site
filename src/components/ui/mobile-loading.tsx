
import React from 'react';
import { Loader2 } from 'lucide-react';

interface MobileLoadingProps {
  message?: string;
  showSpinner?: boolean;
  className?: string;
}

export const MobileLoading: React.FC<MobileLoadingProps> = ({
  message = 'Loading...',
  showSpinner = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      {showSpinner && (
        <Loader2 className="w-8 h-8 animate-spin text-sheraa-primary mb-4" />
      )}
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
};

export const MobileLoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-32 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};
