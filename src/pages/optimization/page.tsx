import Heading from '@/components/heading';
import Section from '@/components/section';
import Counter from './components/counter';

function OptimizationPage() {
  return (
    <Section level={2}>
      <Heading>성능 최적화</Heading>
      <hr className="my-8" />
      <Counter />
    </Section>
  );
}

export default OptimizationPage;
