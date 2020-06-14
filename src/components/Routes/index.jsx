import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { BarbercuesList } from 'pages/BarbercuesList';
import { Auth } from 'pages/Auth';

export function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN} exact>
        <BarbercuesList />
      </Route>
      <Route path={ROUTES.AUTH} exact>
        <Auth />
      </Route>
    </Switch>
  );
}

export default Routes;
