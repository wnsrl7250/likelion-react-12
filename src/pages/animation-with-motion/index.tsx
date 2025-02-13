import { Box } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import ReplayAnimation from './components/replay-animation';
import StaggerList from './components/stagger-list';
import MotionComponent from './components/declarative-animation';

function AnimationWithMotionPage() {
  return (
    <section className="flex flex-col items-start gap-7">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <ReplayAnimation>
        <MotionComponent />
      </ReplayAnimation>

      <ReplayAnimation>
        <StaggerList />
      </ReplayAnimation>

      <ReplayAnimation>
        <AnimationBox>
          <Box size={48} />
        </AnimationBox>
      </ReplayAnimation>
    </section>
  );
}

export default AnimationWithMotionPage;
