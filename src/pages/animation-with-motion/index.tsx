import { Box } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import ReplayAnimation from './components/replay-animation';
import StaggerList from './components/stagger-list';
import MotionComponent from './components/declarative-animation';
import { useEffect, useRef } from 'react';

function AnimationWithMotionPage() {
  // 하위 컴포넌트 DOM 요소 참조를 위한 참조(ref) 객체
  const childDomRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const childDomButtonElement = childDomRef.current;
    if (childDomButtonElement) {
      childDomButtonElement.focus();
      childDomButtonElement.style.background = 'red';
    }
  });

  return (
    <section className="flex flex-col items-start gap-7">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <ReplayAnimation>
        <AnimationBox ref={childDomRef}>
          <Box size={48} />
        </AnimationBox>
      </ReplayAnimation>

      <ReplayAnimation>
        <StaggerList />
      </ReplayAnimation>

      <ReplayAnimation>
        <MotionComponent />
      </ReplayAnimation>
    </section>
  );
}

export default AnimationWithMotionPage;
