import Title from '@/components/title';
import GrandParent from './components/grand-parent';
import { createContext, useState } from 'react';
import AnotherParent from './components/another-parent';

// 컨텍스트 생성
const GreetingContext = createContext('안녕! 난 그리팅 컨텍스트야!');

// 컨텍스트.프로바이더(공급자) => 값 공급
// 컨텍스트.컨서머(수요자) <== 공급된 값을 수요 (사용 권장 안함: 오래된 예전 방식)
// 컨텍스트 공급된 값 = useContext(컨텍스트)

function UsingContextPage() {
  const [message, setMessage] = useState('안녕! Grand Parent');

  return (
    <>
      <Title>컨텍스트를 사용한 상태 공유</Title>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-medium">컨텍스트 활용</h2>
        <GrandParent />
        <hr />
        <AnotherParent />
      </section>
    </>
  );
}

export default UsingContextPage;
