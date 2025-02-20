import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import Playground from './playground';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <Playground />
    </ErrorBoundary>
  );
}

export default App;
