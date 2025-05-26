
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  FallbackComponent: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
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

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: undefined });
  }
  
  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <this.props.FallbackComponent 
          error={this.state.error} 
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
