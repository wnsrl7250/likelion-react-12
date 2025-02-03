import './nav.css';
import { useState } from 'react';
import { getUIView, type UIView } from '@/lib/ui-view';

function Nav() {
  const [uiView] = useState<UIView>(getUIView);
  const isSignInView = uiView.includes('signin');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a href="/?view=signin" className={isSignInView ? 'active' : undefined}>
        로그인
      </a>
      <a href="/?view=signup" className={!isSignInView ? 'active' : undefined}>
        회원가입
      </a>
    </nav>
  );
}

export default Nav;
