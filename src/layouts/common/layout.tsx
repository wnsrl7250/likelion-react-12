import GlobalNav from '@/components/global-nav';
import { Outlet } from 'react-router';

function CommonLayout() {
  return (
    <>
      <GlobalNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default CommonLayout;
