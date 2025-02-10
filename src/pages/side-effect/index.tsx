import { useEffect, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import Button from './button';

function SideEffectDemo() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('[state 변경 감지]\nSideEffectDemo 컴포넌트 내부\n', {
      message,
    });
  }, [message]);

  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <div className="flex gap-3 items-center">
        <p>Console 패널을 열고 🧤 버튼을 눌러보세요.</p>
        <Button message={message} onMessage={setMessage} />
      </div>

      <p
        className={tm(
          'select-none',
          'text-5xl mt-5 leading-tight text-lime-700'
        )}
      >
        {message}
      </p>
    </section>
  );
}

export default SideEffectDemo;
