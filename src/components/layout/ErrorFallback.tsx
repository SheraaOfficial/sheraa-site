
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  onRetry?: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ onRetry }) => {
  return (
    <div className="py-4 md:py-6 text-center px-3">
      {onRetry ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-600 text-sm md:text-base">There was a problem loading this content.</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 flex items-center gap-2 text-xs md:text-sm"
            onClick={onRetry}
          >
            <RefreshCw size={14} className="mr-1" />
            Retry
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-12 md:w-16 h-1 bg-gray-200 mb-4 md:mb-6 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
