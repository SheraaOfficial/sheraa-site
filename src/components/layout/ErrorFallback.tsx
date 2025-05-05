
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
    <div className="py-6 md:py-8 text-center px-4 md:px-6 bg-red-50 dark:bg-red-950/30 rounded-md border-2 border-red-300 dark:border-red-700 shadow-sm mt-4 mb-4">
      <div className="flex flex-col items-center gap-2">
        <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400 mb-1" />
        <p className="text-sm md:text-base font-medium text-red-800 dark:text-red-300 mb-3">
          {message}
        </p>
        {onRetry && (
          <Button 
            onClick={onRetry}
            variant="outline"
            size={isMobile ? "sm" : "default"}
            className="bg-white dark:bg-gray-800 text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700 transition-colors"
          >
            <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        )}
      </div>
    </div>
  );
};
