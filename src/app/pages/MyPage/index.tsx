import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { useSelector, useDispatch } from 'react-redux';
import { useUserSlice } from 'store/user';
import { isLogined, getUser } from 'store/user/selectors';

export function MyPage() {

  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <>
      <Helmet>
        <title>My Page</title>
        <meta name="description" content="Find THE FOOD!" />
      </Helmet>
      <div>
      
      </div>
    </>
  );
}
