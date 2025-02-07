import { tm } from '@/utils/tw-merge';

function ErrorBoundaryDemo() {
  return (
    <section className={tm('flex flex-col gap-2 mt-6')}>
      <h2 className={tm('text-2xl')}>오류 경계 (Error Boundary)</h2>
      <p className={tm('text-sm')}>
        오류 경계는 함수 컴포넌트로 구현 불가능! 오직 클래스 컴포넌트로만 구현
        가능
      </p>
    </section>
  );
}

export default ErrorBoundaryDemo;
