import React, { FC, useState } from 'react';
import logo from "../logo.svg";
import {
  Paper,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Face, Fingerprint } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import { login, isAuthenticated } from '../utils/auth';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
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
  padding: {
    padding: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
  },
  marginTop: {
    marginTop: 10,
  },
}));

export const Login: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      const data = await login(username, password);

      if (data) {
        history.push('/admin');
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend
        setError(err);
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/admin" />
  ) : (
    <header className={classes.header}>
    <Paper className={classes.padding}>
      <div className={classes.margin}>
        <Grid container spacing={8} justify="center" alignItems="center">
          <Grid item justify="center" md={true} sm={true} xs={true}>
            <Grid container justify="center">
              <img src={logo} alt="XXXX Logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Face />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Username"
              type="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.currentTarget.value)
              }
              fullWidth
              autoFocus
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Fingerprint />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <br />
        <Grid container alignItems="center">
          {error && (
            <Grid item>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.marginTop}>
          {' '}
          &nbsp;
          <Button
            variant="outlined"
            color="primary"
            id="login-button"
            className={classes.button}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
    </header>
  );
};
