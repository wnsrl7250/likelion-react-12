/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react';
import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';
import Counter from './components/counter';
import Message from './components/message';

export const ColorContext = createContext('');

function OptimizationPage() {
  const [color] = useState('#000');

  const [stars, setStars] = useState('⭐️');
  const handleAddStar = () => setStars((s) => s + '⭐️');

  // 4. 값(요소 = 객체) 메모(memo)
  const messageElement = useMemo(
    () => <Message greeting="요소 최적화가 필요해요! 😳" />,
    // 종속성이 변경되지 않는 이상 다시 실행될 일은 없다.
    []
  );

  return (
    <>
      <Title>리액트 앱 성능 최적화</Title>

      <Section level={2}>
        <Heading className="text-2xl font-medium">성능 최적화</Heading>
        <hr className="my-8" />

        <div className="flex gap-5">
          <button type="button" onClick={handleAddStar}>
            ⭐️ 추가
          </button>

          <output>{stars}</output>
        </div>

        <hr className="my-8" />
        <ColorContext value={color}>
          <Counter messageElement={messageElement} />
        </ColorContext>
      </Section>
    </>
  );
}

export default OptimizationPage;
