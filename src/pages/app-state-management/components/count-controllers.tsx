import { useCountStore } from '@/stores/count';
import { tm } from '@/utils/tw-merge';
import { Minus, Plus, Redo } from '@mynaui/icons-react';
import { memo } from 'react';

function CountControllers() {
  // 셀렉터 함수를 사용하지 않은 경우, 상태가 변경되면
  // CountControllers 컴포넌트는 항상 리-렌더링됩니다.
  // const storeData = useCountStore(); // { count }
  // const { increment, decrement, reset } = useCountStore(); // { count }

  // 액션 함수만 가지고 왔습니다.
  // 상태 변경을 요청하는 함수이지, 변경된 상태가 아니므로
  // CountControllers 컴포넌트는 리-렌더링 될 이유가 없습니다.

  const increment = useCountStore((s) => s.increment);
  const decrement = useCountStore((s) => s.decrement);
  const reset = useCountStore((s) => s.reset);

  return (
    <div className="flex gap-1">
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full',
          ' bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={increment}
      >
        <Plus size={24} />
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full',
          ' bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={decrement}
      >
        <Minus size={24} />
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full',
          ' bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={reset}
      >
        <Redo size={24} />
      </button>
    </div>
  );
}

export default memo(CountControllers);
