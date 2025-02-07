import { tm } from '@/utils/tw-merge';
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
  // static getDerivedStateFromError(error: Error) {
  //   // 상태 업데이트
  //   return {
  //     hasError: true,
  //     error,
  //   };
  // }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      errorInfo,
      error,
    });
  }

  render() {
    // 오류가 있으면
    // 대체(fallback) 컴포넌트를 렌더링
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;

      return (
        <div
          role="alert"
          className={tm(
            'overflow-x-scroll',
            'flex flex-col gap-2',
            'border-4 border-red-600',
            'p-5',
            ' text-red-600'
          )}
        >
          <h2 className={tm('text-xl font-semibold')}>
            {error?.name} 오류 발생!
          </h2>
          <p className={tm('text-red-700 font-normal')}>{error?.message}</p>
          <pre className="-ml-8 text-xs leading-[2]">
            {errorInfo?.componentStack}
          </pre>
        </div>
      );
    }

    // 오류가 없으면
    // 하위 컴포넌트 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
