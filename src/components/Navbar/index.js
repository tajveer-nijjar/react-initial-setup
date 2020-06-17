// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { useAuth0 } from '../../react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: 'flex'
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  leftControls: {
    flexGrow: 1,
    display: 'flex'
  },
  title: {},
  navigationLinks: {
    marginTop: 8,
    marginLeft: 40
  },
  homeButton: {
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.02857em',
    color: 'rgba(255,255,255,0.87)',
    textTransform: 'uppercase'
  },
  rightControls: {
    display: 'flex'
  },
  userName: {
    marginTop: 6,
    marginRight: 30,
    fontSize: 16
  },
  loginLogoutButtons: {},
  appbar: {
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(58,6,71,1) 100%) !important'
  }
}));

const NavBar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    loading,
    user
  } = useAuth0();
  const classes = useStyles();

  if (loading || !user) {
    return <div>Login</div>;
  }

  return (
    <div className={classes.navbarContainer}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <div className={classes.leftControls}>
            <Typography variant="h6" className={classes.title}>
              Haztrak
            </Typography>

            {isAuthenticated && (
              <div className={classes.navigationLinks}>
                <Link to="/home" className={classes.homeButton}>
                  Home
                </Link>
              </div>
            )}
          </div>

          <div className={classes.rightControls}>
            <div className={classes.userName}>{user.name}</div>

            <div className={classes.loginLogoutButtons}>
              {!isAuthenticated && (
                <Button color="inherit" onClick={() => loginWithRedirect({})}>
                  Log in
                </Button>
              )}

              {isAuthenticated && (
                <Button color="inherit" onClick={() => logout()}>
                  Log out
                </Button>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
