import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#09A34A'
    },
    secondary: {
      main: '#19857b'
    },
    highlight: {
      light: '#efa449',
      main: '#f19322',
      dark: '#f08708',
      contrastText: '#fff',
      highlight: '#FF9933'
    },
    subTitle: {
      main: '#666666'
    },
    error: {
      main: red.A400
    },
    separator: '#D8D8D8'
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30
      }
    }
  }
});

export default theme;
