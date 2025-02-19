import { ErrorBoundary } from 'react-error-boundary';
import Playground from './playground';
import Section from './components/section';
import Heading from './components/heading';

function App() {
  return (
    <ErrorBoundary fallback={<p>이런... App에서 오류가 발생했습니다! 😥</p>}>
      <Section level={2}>
        <Heading>섹셔닝 콘텐츠 1</Heading>
        <Section tag="article">
          <Heading>섹셔닝 콘텐츠 11</Heading>
          <Heading>섹셔닝 콘텐츠 111</Heading>
          <Section>
            <Heading>섹셔닝 콘텐츠 1111</Heading>
          </Section>
        </Section>
      </Section>

      <Playground />
    </ErrorBoundary>
  );
}

export default App;
