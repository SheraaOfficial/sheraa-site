
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

interface SafeSuspenseProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export const SafeSuspense: React.FC<SafeSuspenseProps> = ({ children, fallback }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
