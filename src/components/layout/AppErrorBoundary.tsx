
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppErrorBoundaryProps {
  children: React.ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error.message);
    console.error('Component stack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <AppErrorFallback error={this.state.error} onReset={() => this.setState({ hasError: false })} />;
    }

    return this.props.children;
  }
}

interface AppErrorFallbackProps {
  error?: Error;
  onReset: () => void;
}

const AppErrorFallback: React.FC<AppErrorFallbackProps> = ({ error, onReset }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    onReset();
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We encountered an unexpected error. Don't worry, we're working to fix it.
            </p>
            {error && (
              <details className="text-left bg-gray-50 rounded p-3 mb-4">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details
                </summary>
                <pre className="text-xs text-red-600 mt-2 whitespace-pre-wrap break-words">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
          
          <div className="space-y-3">
            <Button onClick={handleReload} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reload Page
            </Button>
            <Button variant="outline" onClick={handleGoHome} className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
