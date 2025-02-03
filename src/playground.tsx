import { useState } from 'react';

import Nav from '@/homework/components/nav';
import HomeworkSignInForm from '@/homework/pages/sign-in';
import HomeworkSignUpForm from '@/homework/pages/sign-up';
import { getUIView, type UIView } from '@/homework/lib/ui-view';

function Playground() {
  const [uiView] = useState<UIView>(getUIView);
  // 로그인 뷰(화면)인가요? 네(yes, true) or 아니오(no, false)
  // boolean type
  // const isSignInView = uiView.includes('signin');
  const isSignInView = uiView === 'signin';

  return (
    <div className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {isSignInView ? <HomeworkSignInForm /> : <HomeworkSignUpForm />}
    </div>
  );
}

export default Playground;
