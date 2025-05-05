
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  FallbackComponent: React.ComponentType;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch() {
    // Handle the error here
  }
  
  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent />;
    }
    return this.props.children;
  }
}

// Also export as default for backwards compatibility
export default ErrorBoundary;
