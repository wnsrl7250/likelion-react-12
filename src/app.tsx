import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
