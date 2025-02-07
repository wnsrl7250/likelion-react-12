import { Component, type ErrorInfo } from 'react';

interface State {
  error: null | Error;
  errorInfo: null | ErrorInfo;
  hasError: boolean;
}

class ErrorBoundary extends Component {
  state: State = {
    error: null,
    errorInfo: null,
    hasError: false,
  };

  render() {
    return (
      <div role="alert" lang="en">
        <h2>Error Boundary</h2>
      </div>
    );
  }
}

export default ErrorBoundary;
