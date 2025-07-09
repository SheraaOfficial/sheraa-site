import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
  retryCount: number;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  maxRetries?: number;
}

export class ComprehensiveErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }
  
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ComprehensiveErrorBoundary caught error:", error);
    console.error("Component stack:", errorInfo.componentStack);
    
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);
    
    // Auto-retry for certain recoverable errors
    const maxRetries = this.props.maxRetries || 3;
    if (this.state.retryCount < maxRetries && this.isRecoverableError(error)) {
      this.scheduleRetry();
    }
  }

  private isRecoverableError(error: Error): boolean {
    const recoverableMessages = [
      'Loading chunk',
      'Loading CSS chunk',
      'Loading script',
      'Network request failed',
      'Failed to fetch'
    ];
    
    return recoverableMessages.some(msg => 
      error.message.includes(msg) || error.stack?.includes(msg)
    );
  }

  private scheduleRetry = () => {
    this.retryTimeoutId = setTimeout(() => {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }, 2000 + (this.state.retryCount * 1000)); // Exponential backoff
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  resetError = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      retryCount: 0 
    });
  }
  
  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback;
      
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      // Default comprehensive fallback
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center max-w-md w-full">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-3 text-destructive">
                Something went wrong
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              
              {this.state.retryCount > 0 && (
                <p className="text-xs text-muted-foreground mb-4">
                  Retry attempts: {this.state.retryCount}/{this.props.maxRetries || 3}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={this.resetError} size="sm">
                  Try again
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/'}
                >
                  Go home
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.location.reload()}
                >
                  Reload page
                </Button>
              </div>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="text-left bg-muted p-3 rounded text-xs">
                <summary className="cursor-pointer font-medium mb-2">
                  Error Details (Development)
                </summary>
                <pre className="whitespace-pre-wrap overflow-auto">
                  {this.state.error?.stack}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Specialized fallback for lazy loading errors
export const LazyLoadingErrorFallback: React.FC<{ 
  error: Error; 
  resetError: () => void;
}> = ({ error, resetError }) => (
  <div className="flex items-center justify-center min-h-[200px] bg-muted/30 rounded-lg border border-dashed">
    <div className="text-center p-6">
      <h3 className="font-semibold mb-2">Failed to load component</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {error.message.includes('Loading') ? 'Network error loading content' : 'Component error'}
      </p>
      <Button onClick={resetError} size="sm" variant="outline">
        Retry
      </Button>
    </div>
  </div>
);

export default ComprehensiveErrorBoundary;