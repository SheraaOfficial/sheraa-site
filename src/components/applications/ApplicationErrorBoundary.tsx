
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ApplicationErrorBoundaryProps {
  children: React.ReactNode;
}

interface ApplicationErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ApplicationErrorBoundary extends React.Component<
  ApplicationErrorBoundaryProps,
  ApplicationErrorBoundaryState
> {
  constructor(props: ApplicationErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application Error Boundary caught an error:', error.message);
    console.error('Component stack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Error
                </h2>
                <p className="text-gray-600 mb-4">
                  We encountered an error while loading your application. Please try again.
                </p>
                {this.state.error && (
                  <details className="text-left bg-gray-50 rounded p-3 mb-4">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700">
                      Error Details
                    </summary>
                    <pre className="text-xs text-red-600 mt-2 whitespace-pre-wrap break-words">
                      {this.state.error.message}
                    </pre>
                  </details>
                )}
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={() => this.setState({ hasError: false })} 
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'} 
                  className="w-full"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
