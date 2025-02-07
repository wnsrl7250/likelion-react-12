import { getView, setView } from '@/router/manage-view';
import { tm } from '@/utils/tw-merge';

type WithoutHref = Omit<React.ComponentProps<'a'>, 'href'>;
type OnChangeRoute = React.Dispatch<React.SetStateAction<string>>;

type NavLinkProps = WithoutHref & {
  href: string;
  onChangeRoute: OnChangeRoute;
  activeClassName?: string;
};

function NavLink({
  href,
  onChangeRoute,
  activeClassName = 'active',
  children,
  className,
  ...restProps
}: NavLinkProps) {
  const view = getView();
  const isActive = view.includes(href);

  const handleRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(href);
    setView(href);
  };

  return (
    <a
      href={`/?view=${href}`}
      onClick={handleRoute}
      className={tm({ [activeClassName]: isActive }, className)}
      aria-current={isActive ? 'page' : undefined}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default NavLink;
