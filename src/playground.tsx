import { useState } from 'react';
import Nav from '@/homework/components/nav';
import { getUIView, type UIView } from '@/homework/lib/ui-view';
import StateManagement from '@/homework/pages/state-management';
import SignInForm from '@/homework/pages/sign-in';
import SignUpForm from '@/homework/pages/sign-up';

const getViewComponent = (uiView: UIView) => {
  let viewElement: React.ReactElement | null = null;
  switch (uiView) {
    case 'signin': {
      viewElement = <SignInForm />;
      break;
    }
    case 'signup': {
      viewElement = <SignUpForm />;
      break;
    }
    case 'state-management': {
      viewElement = <StateManagement />;
      break;
    }
  }
  return viewElement;
};

function Playground() {
  const [uiView] = useState<UIView>(getUIView);

  const viewElement = getViewComponent(uiView);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {viewElement}
    </section>
  );
}

export default Playground;
