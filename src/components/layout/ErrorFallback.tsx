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
  return <div className="">
      <div className="">
        <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400 mb-1" />
        <p className="text-sm md:text-base font-medium text-red-800 dark:text-red-300 mb-3">
          {message}
        </p>
        {onRetry && <Button onClick={onRetry} variant="outline" size={isMobile ? "sm" : "default"} className="">
            <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>}
      </div>
    </div>;
};