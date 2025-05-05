
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
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
    <div className="py-4 md:py-6 text-center px-3 bg-red-50 dark:bg-red-950/20 rounded-md border border-red-200 dark:border-red-800">
      <p className="text-sm md:text-base text-red-800 dark:text-red-300 mb-3">
        {message}
      </p>
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline"
          size={isMobile ? "sm" : "default"}
          className="bg-white dark:bg-gray-800 text-red-600 border-red-300 hover:bg-red-50"
        >
          <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
      )}
    </div>
  );
};
