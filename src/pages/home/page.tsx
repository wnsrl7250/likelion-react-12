import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';

function HomePage() {
  return (
    <>
      <Title>홈</Title>
      <Section level={2}>
        <Heading>React Router를 활용해 싱글 페이지 앱 구현</Heading>
      </Section>
    </>
  );
}

export default HomePage;
