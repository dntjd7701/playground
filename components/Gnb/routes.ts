'use client';

/** components */
import Accordian from '@/Accordian/Accordian';
import ImageViewer from "@/ImageViewer/ImageViewer";

export const routePaths = ['/', '/blog', '/playground', '/playground/Accordian', '/playground/ImageViewer'] as const;

//routePaths의 요소에 해당 '/', '/blog', '/playground'...
export type ROUTE_PATH = (typeof routePaths)[number];

export type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};

export type ROUTE = ParentRoute | ChildRoute;

// @ts-ignore
// @ts-ignore
export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'home',
    children: ['/blog', '/playground'],
  },
  '/blog': {
    key: '/blog',
    link: '/blog',
    name: '블로그',
    children: null,
  },
  '/playground': {
    key: '/playground',
    link: '/playground',
    name: '놀이터',
    children: ['/playground/Accordian', '/playground/ImageViewer'],
  },
  '/playground/Accordian': {
    key: '/playground/Accordian',
    link: '/playground/Accordian',
    name: '아코디언',
    children: null,
  },
  '/playground/ImageViewer': {
    key: '/playground/ImageViewer',
    link: '/playground/ImageViewer',
    name: 'ImageViewer',
    children: null,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map((r) => routes[r]);
