/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const MyPage = lazyLoad(
  () => import('./index'),
  module => module.MyPage,
);
