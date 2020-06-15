import React, { useEffect, useContext, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { AuthContext } from 'contexts/AuthContext';
import { BarbecuesList } from 'pages/BarbecuesList';
import { Auth } from 'pages/Auth';
import { BarbecueDetail } from 'pages/BarbecueDetail';

export function Routes() {
  const { authenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [redirectToAuth, setRedirectToAuth] = useState(false);
  const [redirectToMain, setRedirectToMain] = useState(false);

  useEffect(() => {
    if (!authenticated && pathname !== ROUTES.AUTH) {
      setRedirectToAuth(true);
      setRedirectToMain(false);
    }
    if (authenticated && pathname === ROUTES.AUTH) {
      setRedirectToMain(true);
      setRedirectToAuth(false);
    }
  }, [authenticated, pathname]);

  return (
    <>
      {/* Auth Redirects */}
      {redirectToAuth && <Redirect to={ROUTES.AUTH} />}
      {redirectToMain && <Redirect to={ROUTES.MAIN} />}

      <Switch>
        <Route path={ROUTES.AUTH} exact>
          <Auth />
        </Route>
        <Route path={ROUTES.MAIN} exact>
          <BarbecuesList />
        </Route>
        <Route path={ROUTES.BARBECUE_DETAIL} exact>
          <BarbecueDetail />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
