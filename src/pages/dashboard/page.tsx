import Heading from '@/components/heading';
import Section from '@/components/section';
import { useAuthStore } from '@/stores/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function DashboardPage() {
  // 인증되지 않은 사용자가 접근을 시도할 경우
  // [ useNavigate ] 훅을 사용하면 프로그래밍 방식으로 다른 페이지로 이동 시킬 수 있습니다.
  const navigate = useNavigate();
  const isSignin = useAuthStore((s) => s.isSignin);

  // 페이지가 로드된 상황에서 사용자와 상호작용 없이
  useEffect(() => {
    // 인증 상태를 확인한 후, 인증되지 않았을 경우 로그인 페이지로 이동 (리디렉션)
    if (!isSignin) {
      navigate('/dashboard/signin');
    }
  }, [isSignin, navigate]);

  const handleSignOut = () => {
    console.log('로그아웃');
    navigate('/');
  };

  return (
    <Section level={2} className="flex flex-col gap-2">
      <Heading className="text-2xl font-medium">대시보드</Heading>
      <p>인증된 사용자만 접근 가능한 페이지입니다.</p>
      <form>
        <button
          type="submit"
          className="py-1.5 px-3 bg-white text-black rounded-sm font-medium"
          formAction={handleSignOut}
        >
          로그아웃
        </button>
      </form>
    </Section>
  );
}

export default DashboardPage;
