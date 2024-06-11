'use client';

import { ChildRoute, ParentRoute, ROUTE, ROUTE_PATH, gnbRootList, isParentRoute, routes } from '@/routes';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ParentGnbItem = ({ route, currentPath }: { route: ParentRoute; currentPath: ROUTE_PATH }) => {
  // 높이 지정을 해줘야 css가 부드럽게 됌.
  const open = routes[currentPath].link === currentPath;
  return (
    <li className={classNames('parent', `items-${route.children.length}`, { open: false })}>
      <Link href={'/test2'}>{route.name}</Link>
      <ul className='subRoutes'>
        {route.children.map((r) => (
          <GnbItem
            route={routes[r]}
            currentPath={currentPath}
          />
        ))}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({ route, currentPath }: { route: ChildRoute; currentPath: ROUTE_PATH }) => {
  return (
    <li className={classNames({ active: (route.link = currentPath) })}>
      <Link href={route.link}>{route.name}</Link>
    </li>
  );
};

const GnbItem = ({ route, currentPath }: { route: ROUTE; currentPath: ROUTE_PATH }) =>
  isParentRoute(route) ? (
    <ParentGnbItem
      route={route}
      currentPath={currentPath}
    />
  ) : (
    <ChildGnbItem
      route={route}
      currentPath={currentPath}
    />
  );

const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH;
  console.debug('currentPath:', currentPath);
  return (
    <aside>
      <h1>
        Side bar<sub>FE WS</sub>
      </h1>
      <ul className='mainRoutes'>
        {gnbRootList.map((route: ROUTE) => (
          <GnbItem
            route={route}
            currentPath={currentPath}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
