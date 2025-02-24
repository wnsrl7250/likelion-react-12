import Container from '@/components/container';
import GlobalNav from '@/components/global-nav';
import { Outlet } from 'react-router';

function CommonLayout() {
  return (
    <>
      <GlobalNav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default CommonLayout;
