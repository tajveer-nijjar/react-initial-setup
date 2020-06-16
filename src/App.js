import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

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
    </React.Fragment>
  );
}

export default App;
