
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { useIsMobile } from '@/hooks/useDeviceDetection';

interface ErrorFallbackProps {
  onRetry?: () => void;
  message?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  onRetry,
  message = 'Something went wrong loading this component.'
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full py-4 my-2">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
        <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400 mb-2" />
        <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-3">
          {message}
        </p>
        {onRetry && (
          <Button 
            onClick={onRetry} 
            variant="outline" 
            size="sm"
            className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-xs px-3 py-1 h-auto"
          >
            <RefreshCcw className="mr-1 h-3 w-3" /> Try Again
          </Button>
        )}
      </div>
    </div>
  );
};
