import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { Box, Redo } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import StaggerList from './components/stagger-list';

function AnimationWithMotionPage() {
  // 화면 업데이트를 위한 상태 선언
  const [replayKey, setReplayKey] = useState(0);

  // 상태 업데이트 감지해서 이펙트 처리
  // useEffect(() => {
  //   console.log({ replayKey });
  // }, [replayKey]);

  const handleReplay = () => {
    // const nextReplayKey = replayKey + 1; // 0, 1, 2, 3, ...
    // setReplayKey(nextReplayKey);
    // setReplayKey((replayKey) => {
    //   return replayKey + 1;
    // });

    // 리플레이 할 수도 있도록 키 증가
    setReplayKey((r) => r + 1);
  };

  return (
    <section className="flex flex-col items-start gap-7">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <button
        type="button"
        onClick={handleReplay}
        className={tm(
          'cursor-pointer',
          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg',
          'bg-react text-white text-sm font-semibold uppercase',
          'active:scale-95'
        )}
      >
        <Redo size={18} />
        Replay
      </button>

      <StaggerList key={replayKey} />

      {/* key 속성이 변경되면, 리액트 컴포넌트 초기화 */}
      {/* 초기화: 애니메이션을 다시 진행 */}
      <AnimationBox>
        <Box size={48} />
      </AnimationBox>
    </section>
  );
}

export default AnimationWithMotionPage;
