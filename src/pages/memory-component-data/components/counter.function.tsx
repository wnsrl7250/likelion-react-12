import { tm } from '@/utils/tw-merge';
import { useRef, useState } from 'react';

function CounterFunction() {
  // 리액트가 반응하는 데이터
  const [count, setCount] = useState(9);

  // 상태 업데이트 요청 (무한 루프 -> 컴퓨터 다운)
  // setCount(count + 1);

  // 렌더링과 무관한 데이터 값 기억
  // 참조(ref) 객체의 현재(current) 값을 수정해도
  // 리액트는 반응하지 않는다. (반응성 데이터가 아니기 때문)
  const prevCountValueRef = useRef(count); // { current: 9 }

  // 현재 count 값을 prevCount 변수에 할당해도
  // 다음 렌더링에 prevCount 변수는 초기화 됨
  let prevCount = count;

  // 결과적으로 prevCount, count는 항상 값이 동일
  console.log('prevCountValueRef.current = ', prevCountValueRef.current);
  console.log('prevCount = ', prevCount);
  console.log('현재 count = ', count);

  const handleIncrease = () => {
    // 다음 렌더링에서 이전 count 값 기억 (실패)
    prevCount = count;

    // 참조(ref) 객체의 현재(current) 값 수정 (기억 성공!)
    prevCountValueRef.current = count;

    // 다음 렌더링에 사용될 상태 값 업데이트
    setCount(count + 1);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleIncrease}
        className={tm(
          'cursor-pointer opacity-90',
          'grid place-content-center',
          'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
          'hover:opacity-100'
        )}
      >
        {count}
      </button>

      <dl className="border-4 rounded-md p-4 my-4 w-102 flex flex-col gap-2">
        <div className="flex justify-between">
          <dt className="text-slate-900">이전 count 값 (prevCount)</dt>
          <dd className="font-black">{prevCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-900">
            이전 count 값 (prevCountValueRef.current)
          </dt>
          <dd className="font-black">{prevCountValueRef.current}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-900">현재 count 값</dt>
          <dd className="font-black">{count}</dd>
        </div>
      </dl>
    </>
  );
}

export default CounterFunction;
