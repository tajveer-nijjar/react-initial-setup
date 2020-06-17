import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import HomePage from './containers/HomePage';
import { useAuth0 } from './react-auth0-spa';
import NavBar from './containers/Navbar';

const useStyles = makeStyles((theme) => ({
  heading: {
    background: theme.palette.subTitle.main
  }
}));

function App() {
  const classes = useStyles();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="App">
        <header>
          <NavBar />
        </header>
      </div>

      <Switch>
        <PrivateRoute path="/home" component={HomePage} />

        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
