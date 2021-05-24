import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
const TableIndex = lazy(() => import('../pages/table/Index'));

export const routes = [
  { path: '/', component: () => <Redirect to="/table" /> },
  { path: '/table', component: TableIndex },
  { path: '/404', component: 'NotFound' },

  { component: () => <Redirect to="/404" /> },
];
