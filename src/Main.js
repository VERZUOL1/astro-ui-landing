import React, { useEffect, useContext, useState } from 'react';
import { useCookie } from 'react-use';
import { appStore, onAppMount } from './state/app';
import RenderRoutes from './components/RenderRoutes';
import routes from './routes';
import getConfig from './config';

const { ACCOUNT_COOKIE, APP_URL } = getConfig();

function Main() {
  const { dispatch } = useContext(appStore);
  const [value] = useCookie(ACCOUNT_COOKIE);
  const [initialized, setInitialized] = useState(false);

  const onMount = () => {
    dispatch(onAppMount());

    // Redirect to app if logged in
    if (value) {
      window.location.href = APP_URL;
    } else {
      setInitialized(true);
    }
  };

  useEffect(onMount, [value]);

  if (!initialized) {
    return null;
  }

  return (
    <div>
      <RenderRoutes routes={routes} />
    </div>
  );
}

export default Main;
