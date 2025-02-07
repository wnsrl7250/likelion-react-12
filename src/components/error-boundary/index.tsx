import { Component, type ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: null | Error;
  errorInfo: null | ErrorInfo;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    hasError: false,
  };

  // 오류 감지하기 위한 라이프 사이클 메서드
  static getDerivedStateFromError(error: Error) {
    // 상태 업데이트
    return {
      hasError: true,
      error,
    };
  }
  // componentDidCatch(error, errorInfo)

  render() {
    // 오류가 있으면
    // 대체(fallback) 컴포넌트를 렌더링
    if (this.state.hasError) {
      const { error } = this.state;

      return (
        <div role="alert">
          <h2>{error?.name} 오류 발생!</h2>
          <p>{error?.message}</p>
        </div>
      );
    }

    // 오류가 없으면
    // 하위 컴포넌트 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
