import { NavLink } from 'react-router';
import HomeLink from '../home-link';
import S from './style.module.css';
import clsx from 'clsx';

function GlobalNav() {
  return (
    <nav>
      <h2 className="sr-only">페이지 탐색</h2>
      <ul className="p-4 flex gap-5 bg-black items-center">
        <li>
          <HomeLink />
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              const baseClasses = 'p-2 bg-black text-white';

              return clsx(baseClasses, { [S.active]: isActive });
            }}
            to="/playground"
          >
            플레이그라운드
          </NavLink>
        </li>
        <li>
          <NavLink className="p-2 bg-black text-white" to="/dashboard">
            대시보드
          </NavLink>
        </li>
        <li>
          <NavLink className="p-2 bg-black text-white" to="/dashboard/signin">
            로그인
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
