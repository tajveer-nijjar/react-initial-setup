// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuth0 } from '../../react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          {!isAuthenticated && (
            <Button color="inherit" onClick={() => loginWithRedirect({})}>
              Log in
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/home">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
