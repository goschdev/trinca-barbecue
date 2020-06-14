import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { BarbercuesList } from 'pages/BarbercuesList';

export function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN} exact>
        <BarbercuesList />
      </Route>
    </Switch>
  );
}

export default Routes;
