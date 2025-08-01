
import React from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error,
  resetErrorBoundary 
}) => {
  return (
    <div className="w-full p-6 bg-red-50 border border-red-200 rounded-lg text-center">
      <h3 className="text-lg font-medium text-red-700 mb-2">
        Something went wrong
      </h3>
      <p className="text-sm text-red-600 mb-4">
        {error.message}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};
