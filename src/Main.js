import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { useCookie } from 'react-use';
import { appStore, onAppMount } from './state/app';
import RenderRoutes from './components/RenderRoutes';
import routes from './routes';
import getConfig from './config';

const { ACCOUNT_COOKIE, APP_URL } = getConfig();

function Main() {
  const { dispatch } = useContext(appStore);
  const [value] = useCookie(ACCOUNT_COOKIE);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  useLayoutEffect(() => {
    // Redirect to app if logged in
    if (value) {
      window.location.href = APP_URL;
    }
  }, [value]);

  return (
    <div>
      <RenderRoutes routes={routes} />
    </div>
  );
}

export default Main;
