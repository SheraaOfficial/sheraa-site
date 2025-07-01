
import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  FallbackComponent?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error.message);
    console.error("Component stack:", errorInfo.componentStack);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  }
  
  render() {
    if (this.state.hasError && this.state.error) {
      // Support both fallback and FallbackComponent props for compatibility
      const FallbackComponent = this.props.fallback || this.props.FallbackComponent;
      
      if (FallbackComponent) {
        return (
          <FallbackComponent 
            error={this.state.error} 
            resetError={this.resetError}
            resetErrorBoundary={this.resetError}
          />
        );
      }

      // Default fallback
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Something went wrong</h2>
            <p className="text-muted-foreground mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={this.resetError}>
                Try again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
              >
                Go home
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Theme-specific error fallback
export const ThemeErrorFallback: React.FC<{ 
  error: Error; 
  resetError: () => void;
  resetErrorBoundary?: () => void;
}> = ({ error, resetError, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center p-8 max-w-md">
      <h2 className="text-xl font-bold mb-3 text-foreground">Theme Loading Error</h2>
      <p className="text-muted-foreground mb-4 text-sm">
        Failed to load the selected theme. Switching to default theme.
      </p>
      <Button 
        onClick={() => {
          // Clear theme params and reset
          try {
            const url = new URL(window.location.href);
            url.searchParams.delete('theme');
            url.searchParams.delete('preview');
            window.history.replaceState({}, '', url.toString());
          } catch (e) {
            console.warn('Could not update URL:', e);
          }
          (resetError || resetErrorBoundary)?.();
        }}
        className="w-full"
      >
        Load Default Theme
      </Button>
    </div>
  </div>
);

export default ErrorBoundary;
