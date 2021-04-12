import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Login } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

export const Routes: FC = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin"><Admin /></Route>
      <div>
        <header>
          <Route path="/login" component={Admin} />
          <Route
            path="/logout"
            render={() => {
              logout();
              history.push('/');
              return null;
            }}
          />
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </header>
      </div>
    </Switch>
  );
};
