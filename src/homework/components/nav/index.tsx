import { useState } from 'react';
import { getUIView, type UIView } from '@/homework/lib/ui-view';
import NavLink from './nav-link';
import './style.css';

function Nav() {
  // 상태
  const [uiView] = useState<UIView>(getUIView);

  // 파생된 상태
  const isSignInView = uiView.includes('signin');
  const isSignUpView = uiView.includes('signup');
  const isStateManagementView = uiView.includes('state-management');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <NavLink href="signin" isActive={isSignInView}>
        로그인
      </NavLink>
      <NavLink href="signup" isActive={isSignUpView}>
        회원가입
      </NavLink>
      <NavLink href="state-management" isActive={isStateManagementView}>
        상태 관리 전략
      </NavLink>
    </nav>
  );
}

export default Nav;
