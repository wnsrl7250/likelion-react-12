import Title from '@/components/title';
import Pokemon from './components/pokemon';

function SuspenseUsePage() {
  return (
    <>
      <Title>스트리밍(Streaming)</Title>
      <section className="flex flex-col gap-8">
        <h2 className="font-medium text-2xl">
          Suspense 컴포넌트와 use() 훅 함수 활용
        </h2>
        <Pokemon />
      </section>
    </>
  );
}

export default SuspenseUsePage;
