import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import PrintError from './components/error';
import Playground from './pages/palyground/page';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
