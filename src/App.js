import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';

const useStyles = makeStyles((theme) => ({
  heading: {
    background: theme.palette.subTitle.main
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <p className={classes.heading}>Welcome to Haztrak.</p>
      <Switch>
        <Route path="/home" component={HomePage} />

        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
