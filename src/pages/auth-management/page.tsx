import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';
import { useAuthStore } from '@/stores/auth';

function AuthManagementPage() {
  const signIn = useAuthStore((s) => s.signIn);

  const handleSignin = () => {
    const user = {
      name: '황수연',
      email: 'whangsy@dev.io',
      token: crypto.randomUUID(),
    };

    signIn(user);
  };

  return (
    <>
      <Title>앱 상태 관리</Title>

      <Section level={2} className="flex flex-col gap-4">
        <Heading className="text-2xl font-medium">사용자 관리</Heading>

        <form action={handleSignin}>
          <button type="submit" className="px-3 py-2 bg-black text-white">
            로그인
          </button>
        </form>
      </Section>
    </>
  );
}

export default AuthManagementPage;
