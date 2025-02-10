import { useEffect, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import Button from './button';

function SideEffectDemo() {
  // --------------------------------------------------------------------------

  const [message, setMessage] = useState('');

  const handleConfirmStateChange = () => {
    console.group('상태 변경 요청');
    console.log('[전]', { message });
    const nextMessage = message + '🎩';
    setMessage(nextMessage);

    console.log('[후]', { message: nextMessage });
    console.groupEnd();
  };

  useEffect(() => {
    console.log('이펙트 함수 콜백', { message });
  }, [message]);

  // --------------------------------------------------------------------------

  const [count, setCount] = useState(0);

  const handleChangeCount = () => setCount((c) => c + 1);

  useEffect(() => {
    console.log({ count });
  }, [count]);

  // --------------------------------------------------------------------------

  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <button type="button" onClick={handleConfirmStateChange}>
        상태 변경 (요청)
      </button>
      <hr />
      <button type="button" onClick={handleChangeCount}>
        {count}
      </button>
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
