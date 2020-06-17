import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import configureStore from './store';
import rootSaga from './sagas';
import history from './utils/history';
import theme from './utils/theme';
import config from './constants/auth_config.json';
import { Auth0Provider } from './react-auth0-spa';

const store = configureStore();
store.runSaga(rootSaga);

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
          >
            <App />
          </Auth0Provider>
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
