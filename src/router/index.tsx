import MemoryComponentDataPage from '@/pages/memory-component-data';
import AnimationWithMotionPage from '@/pages/animation-with-motion';
import StateManagement from '@/pages/state-management';
import ErrorBoundaryDemo from '@/pages/error-boundary';
import DataFetchingPage from '@/pages/data-fetching';
import SideEffectDemo from '@/pages/side-effect';
import SearchListPage from '@/pages/search-list';
import AccessDOMPage from '@/pages/access-dom';
import LifecycleDemo from '@/pages/lifecycle';
import TicTacToe from '@/pages/tic-tac-toe';
import SignInForm from '@/pages/sign-in';
import SignUpForm from '@/pages/sign-up';
import NotFound from '@/pages/not-found';

// --------------------------------------------------------------------------
// 내비게이션 리스트 데이터

export const navList = [
  {
    path: 'data-fetching',
    text: '데이터 쿼리/뮤테이션',
    element: <DataFetchingPage />,
  },
  {
    path: 'accessing-dom',
    text: 'DOM 접근/조작',
    element: <AccessDOMPage />,
  },
  {
    path: 'animation',
    text: '애니메이션',
    element: <AnimationWithMotionPage />,
  },
  {
    path: 'memory-component-data',
    text: '데이터 메모리',
    element: <MemoryComponentDataPage />,
  },
  { path: 'search-list', text: '검색 리스트', element: <SearchListPage /> },
  { path: 'side-effect', text: '이펙트 처리', element: <SideEffectDemo /> },
  {
    path: 'error-boundary',
    text: '에러 바운더리',
    element: <ErrorBoundaryDemo />,
  },
  { path: 'lifecycles', text: '라이프 사이클', element: <LifecycleDemo /> },
  { path: 'tic-tac-toe', text: '틱택토', element: <TicTacToe /> },
  {
    path: 'state-management',
    text: '상태 관리 전략',
    element: <StateManagement />,
  },
  { path: 'signup', text: '회원가입', element: <SignUpForm /> },
  { path: 'signin', text: '로그인', element: <SignInForm /> },
];

// --------------------------------------------------------------------------
// 라우터 컴포넌트

function Router({ route }: { route: string }) {
  return navList.find(({ path }) => path === route)?.element ?? <NotFound />;
}

export default Router;
