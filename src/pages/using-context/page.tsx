import Title from '@/components/title';
import GrandParent from './components/grand-parent';
import { useState } from 'react';

function UsingContextPage() {
  const [message, setMessage] = useState('안녕! Grand Parent');

  return (
    <>
      <Title>컨텍스트를 사용한 상태 공유</Title>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-medium">컨텍스트 활용</h2>
        <GrandParent message={message} setMessage={setMessage} />
      </section>
    </>
  );
}

export default UsingContextPage;
