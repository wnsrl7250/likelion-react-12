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

  // 내비게이션 리스트
  const navList = [
    { id: 'item-1', content: '로그인', href: 'signin', isActive: isSignInView },
    {
      id: 'item-2',
      content: '회원가입',
      href: 'signup',
      isActive: isSignUpView,
    },
    {
      id: 'item-3',
      content: '상태 관리 전략',
      href: 'state-management',
      isActive: isStateManagementView,
    },
  ];

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      {navList.map((navItem) => (
        <NavLink
          key={navItem.id}
          href={navItem.href}
          isActive={navItem.isActive}
        >
          {navItem.content}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
