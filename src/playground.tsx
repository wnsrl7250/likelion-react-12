import { useState } from 'react';
import { getView } from '@/router/manage-view';
import { tm } from '@/utils/tw-merge';
import Nav from '@/components/nav';
import Router from '@/router';

function Playground() {
  const logoSize = 24;
  const [route, setRoute] = useState(getView);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1 lang="en" className="flex items-center gap-2 font-normal text-react">
        <span className="relative">
          <img
            src="/react.svg"
            alt="React"
            height={logoSize}
            width={logoSize}
          />
          <img
            role="presentation"
            className={tm(
              'absolute inset-0 animate-[ping_2s_ease-out_3s_infinite] opacity-45',
              'hover:animate-none'
            )}
            src="/react.svg"
            alt=""
            height={logoSize}
            width={logoSize}
          />
        </span>{' '}
        Playground
      </h1>
      <Nav onChangeRoute={setRoute} />
      <Router route={route} />
    </section>
  );
}

export default Playground;
