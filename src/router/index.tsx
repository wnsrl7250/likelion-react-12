import MemoryComponentDataPage from '@/pages/memory-component-data/page';
import AnimationWithMotionPage from '@/pages/animation-with-motion/page';
import StateManagement from '@/pages/state-management/page';
import ErrorBoundaryDemo from '@/pages/error-boundary/page';
import DataFetchingPage from '@/pages/data-fetching/page';
import SuspenseUsePage from '@/pages/suspense-use/page';
import CustomHookPage from '@/pages/custom-hook/page';
import SideEffectDemo from '@/pages/side-effect/page';
import SearchListPage from '@/pages/search-list/page';
import AccessDOMPage from '@/pages/access-dom/page';
import LifecycleDemo from '@/pages/lifecycle/page';
import MemoListPage from '@/pages/memo-list/page';
import TicTacToe from '@/pages/tic-tac-toe/page';
import SignInForm from '@/pages/sign-in/page';
import SignUpForm from '@/pages/sign-up/page';
import NotFound from '@/pages/not-found/page';

// --------------------------------------------------------------------------
// 내비게이션 리스트 데이터

export const navList = [
  {
    path: 'streaming',
    text: '스트리밍',
    element: <SuspenseUsePage />,
  },
  {
    path: 'react-custom-hook',
    text: '로직 재사용',
    element: <CustomHookPage />,
  },
  {
    path: 'supabase-memo-list',
    text: '메모 리스트 (with Supabase)',
    element: <MemoListPage />,
  },
  {
    path: 'data-fetching',
    text: '데이터 쿼리/뮤테이션',
    element: <DataFetchingPage />,
  },
  {
    path: 'animation',
    text: '모션 애니메이션',
    element: <AnimationWithMotionPage />,
  },
  {
    path: 'accessing-dom',
    text: 'DOM 접근/조작',
    element: <AccessDOMPage />,
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
