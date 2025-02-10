import { tm } from '@/utils/tw-merge';
import { useEffect, useState } from 'react';

// 컴포넌트 마운트 여부
let isMounted = false;

// const icon = '⭐️';

// 순수성, 불변성, 투명성
function SideEffectDemo() {
  const [message, setMessage] = useState('');

  // 순수성 해침
  // 사이드 이펙트
  // message += icon;
  // icon += '✅';

  // 마운트 되기 전 1회만 로그
  if (!isMounted) {
    // 실제 DOM 노드 접근 시도
    // 사이드 이펙트 처리 (여기 위치하면 안됨!)
    const buttonElement = document.querySelector('button[title="🍏 추가"]');
    console.error('컴포넌트 몸체에서 DOM 노드 접근', buttonElement); // null
  }

  // 위와 같이 순수성, 투명성을 깨는 코드는 함수 컴포넌트 몸체에 작성되면 안됨
  // 그러므로 React.useEffect() 훅 함수를 사용해 사이드 이펙트 관리
  useEffect(() => {
    // console.log('이펙트 콜백 함수는 useEffect() 훅 함수의 첫번째 인수로 전달된다.');
    // console.log('이펙트 콜백 함수 내부에서는 사이드 이펙트 코드 작성이 허용된다.');

    const buttonElement = document.querySelector('button[title="🍏 추가"]');

    // 최초 렌더링 시 마운트 이후 실행되는 콜백 함수
    console.group('마운트 이후 1회 실행됨');
    console.log('componentDidMount 라이프 사이클 메서드와 유사');
    console.log('이펙트 콜백 함수 안에서 DOM 노드 접근', buttonElement); // <button>
    console.groupEnd();

    isMounted = true;
  }, []);

  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <div className="flex gap-3 items-center">
        <p>Console 패널을 열고 🧤 버튼을 눌러보세요.</p>
        <button
          type="button"
          title="🧤 추가"
          className={tm(
            'cursor-pointer select-none',
            'rounded-md py-0.5 px-1.5 border-2 border-react',
            'hover:bg-react/10 '
          )}
          // [이벤트 핸들러]
          // 사용자에 의한 액션에 의해 처리
          // 사이드 이펙트 처리
          onClick={() => {
            // [상태 업데이트 함수] 실행은 컴포넌트 외부에서 진행
            // 사이드 이펙트 처리
            console.group('상태 업데이트');
            console.log('[전]', message);
            setMessage((message) => message + '🧤');
            console.log('[후]', message);
            console.groupEnd();
            // 상태 업데이트 전/후 값이 동일한 이유
            // - 상태는 스냅샷처럼 작동하기 때문. 렌더링 중에는 변하지 않음
            // - 상태 업데이트는 컴포넌트 외부에서 React에 의해 상태 업데이트 되기 때문
          }}
        >
          🧤 <span className="sr-only">추가</span>
        </button>
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
