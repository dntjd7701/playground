'use client';

import { ChildRoute, ParentRoute, ROUTE, ROUTE_PATH, gnbRootList, isParentRoute, routes } from '@/routes';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import './gnb.scss';

const ParentGnbItem = ({ route }: { route: ParentRoute }) => {
  const { item = [] } = useParams();
  console.debug('item:', item);
  const parentRoot = item.length > 0 ? routes[`/${item[0]}` as ROUTE_PATH] : routes['/'];
  console.debug('parentRoot:', parentRoot);
  const currentPath = ['', ...item].join('/') as ROUTE_PATH;
  console.debug('currentPath:', currentPath);

  return (
    <li
      className={classNames('parent', `items-${parentRoot.children?.length}`, {
        open: route.link === currentPath,
      })}>
      <Link href={route.link}>{route.name}</Link>
      <ul className='subRoutes'>
        {route.children.map((r) => (
          <GnbItem route={routes[r]} />
        ))}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({ route }: { route: ChildRoute }) => {
  const { item = [] } = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH;

  return (
    <li className={classNames({ active: route.link === currentPath })}>
      <Link href={route.link}>{route.name}</Link>
    </li>
  );
};

const GnbItem = ({ route }: { route: ROUTE }) => (isParentRoute(route) ? <ParentGnbItem route={route} /> : <ChildGnbItem route={route} />);

const Gnb = () => {
  return (
    <aside>
      <Link href={routes['/'].link}>
        <h1>
          Side bar<sub>FE WS</sub>
        </h1>
      </Link>

      <ul className='mainRoutes'>
        {gnbRootList.map((route: ROUTE) => (
          <GnbItem
            key={route.key}
            route={route}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
