/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ChatPage = lazyLoad(
  () => import('./index'),
  module => module.ChatPage,
);
