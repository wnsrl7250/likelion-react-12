import { useState } from 'react';
import Nav from './homework/components/nav';
import HomeworkSignIn from './homework/pages/sign-in';
import HomeworkSignUpForm from './homework/pages/sign-up';

const getUIView = () => {
  const searchParams = new URLSearchParams(location.search);
  const uiView = searchParams.get('view') ?? 'signin';
  return uiView as UIView;
};

type UIView = 'signin' | 'signup';

function Playground() {
  const [uiView] = useState<UIView>(getUIView);
  const isSignInView = uiView.includes('signin');

  return (
    <div className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {isSignInView ? <HomeworkSignIn /> : <HomeworkSignUpForm />}
    </div>
  );
}

export default Playground;
