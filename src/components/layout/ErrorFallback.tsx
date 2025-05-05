
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  onRetry?: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ onRetry }) => {
  return (
    <div className="py-6 text-center">
      {onRetry ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-600">There was a problem loading this content.</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 flex items-center gap-2"
            onClick={onRetry}
          >
            <RefreshCw size={16} className="mr-1" />
            Retry
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-gray-200 mb-6 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
