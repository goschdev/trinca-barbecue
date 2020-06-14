import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { BarbecuesList } from 'pages/BarbecuesList';
import { Auth } from 'pages/Auth';
import { BarbecueDetail } from 'pages/BarbecueDetail';

export function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN} exact>
        <BarbecuesList />
      </Route>
      <Route path={ROUTES.AUTH} exact>
        <Auth />
      </Route>
      <Route path={ROUTES.BARBECUE_DETAIL} exact>
        <BarbecueDetail />
      </Route>
    </Switch>
  );
}

export default Routes;
