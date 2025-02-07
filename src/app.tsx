import ErrorBoundary from '@/components/error-boundary';
import Playground from './playground';

function App() {
  return (
    <ErrorBoundary>
      <Playground />
    </ErrorBoundary>
  );
}

export default App;
