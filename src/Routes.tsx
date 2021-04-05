import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Login, PrivateRoute } from './views';
import { AddObjective, Admin } from './admin';
import { logout } from './utils/auth';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Switch>
      <div className={classes.app}>
        <header className={classes.header}>
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            render={() => {
              logout();
              history.push('/');
              return null;
            }}
          />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/objetive" component={AddObjective} />
          <Route exact path="/" component={Login} />
        </header>
      </div>
    </Switch>
  );
};