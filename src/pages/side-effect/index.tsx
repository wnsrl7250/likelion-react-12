import { useEffect, useState } from 'react';
import { tm } from '@/utils/tw-merge';
import Button from './button';

function SideEffectDemo() {
  // 상태 변경 흐름
  // 개발자가 작성한 상태 업데이트 코드는 즉시 상태 값을 바꾸지 않는다.
  // setMessage('new message')
  // 그럼 누가 언제 바꾸나? (즉시가 아니라, 나중에 언젠가...)
  const [message, setMessage] = useState('');

  // 상태 값이 변경 (컴포넌트 리-렌더링 === 함수 다시 실행)
  // 함수의 다른 지역 변수에 그 값을 저장 (함수 다시 실행시 초기화)
  // 상태 값이 변경된 이후에 그 값에 접근하려면 어떻게 해야 할까요?
  // 이펙트 함수의 역할 중 하나는 종속성 배열에 추가된 상태 변경 이후에 콜백
  useEffect(() => {
    console.log('이펙트 함수 콜백', { message });
  }, [message]);

  const handleConfirmStateChange = () => {
    console.group('상태 변경 요청');
    console.log('[전]', { message });
    setMessage((m) => m + '🎩');
    // 상태 값 변경 요청이 즉시 이루어지지 않는다.
    console.log('[후]', { message });
    console.groupEnd();
  };

  // 리액트에 상태 변경 요청
  // 리액트는 렌더링 (상태 변경함)
  // [화면 업데이트] 리액트 돔이 실제 DOM 반영(추가, 수정, 삭제)
  // 화면 업데이트 이후에 이펙트 콜백 실행 <- 여기서 실행!!
  // useEffect(() => {
  //   // 상태가 리액트에 의해 변경되었음을 보장
  //   // 그러므로 개발자는 안심하고 상태가 변경되었기 때문에 무언가 처리
  //   console.log('[state 변경 감지]\nSideEffectDemo 컴포넌트 내부\n', {
  //     message,
  //   });
  // }, [message]);

  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <button type="button" onClick={handleConfirmStateChange}>
        상태 변경 (요청)
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
