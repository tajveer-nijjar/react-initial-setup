// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '../../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

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
