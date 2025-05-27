
import React, { useEffect, useState, useCallback } from "react";
import { ErrorFallback } from "../layout/ErrorFallback";
import { useIsMobile } from "@/hooks/useDeviceDetection";

interface LazyComponentProps {
  component: React.ComponentType<any>;
  priority?: 'high' | 'medium' | 'low';
  [key: string]: any;
}

const LazyComponent = ({ 
  component: Component, 
  priority = 'medium',
  ...props 
}: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(0);
  const isMobile = useIsMobile();
  
  const ref = React.useRef<HTMLDivElement>(null);
  
  // Calculate rootMargin based on priority and device
  const getRootMargin = useCallback(() => {
    if (isMobile) {
      return priority === 'high' ? "50px" : priority === 'medium' ? "10px" : "0px";
    }
    return priority === 'high' ? "200px" : priority === 'medium' ? "100px" : "50px";
  }, [priority, isMobile]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: getRootMargin(),
        threshold: 0.1
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [getRootMargin]);
  
  const handleRetry = () => {
    setHasError(false);
    setKey(k => k + 1);
  };
  
  return (
    <div 
      ref={ref} 
      style={{ minHeight: isMobile ? 60 : 100 }}
      className="overflow-hidden"
    >
      {isVisible && (
        hasError ? (
          <ErrorFallback 
            error={new Error("Failed to load component")} 
            resetErrorBoundary={handleRetry} 
          />
        ) : (
          <React.Suspense fallback={<div className="min-h-[60px]" />}>
            <ErrorCatcher onError={() => setHasError(true)} key={key}>
              <Component {...props} />
            </ErrorCatcher>
          </React.Suspense>
        )
      )}
    </div>
  );
};

// Simple error boundary component
class ErrorCatcher extends React.Component<{ 
  children: React.ReactNode; 
  onError: () => void 
}> {
  componentDidCatch() {
    this.props.onError();
  }
  
  render() {
    return this.props.children;
  }
}

export default LazyComponent;
