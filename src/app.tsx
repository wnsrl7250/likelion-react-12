import { ErrorBoundary } from 'react-error-boundary';
import Playground from './playground';

function App() {
  return (
    <ErrorBoundary fallback={<p>이런... App에서 오류가 발생했습니다! 😥</p>}>
      <Playground />
    </ErrorBoundary>
  );
}

export default App;
