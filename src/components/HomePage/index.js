// HomePage/index.js
import React from 'react';
// import PropTypes from 'prop-types';
import { useAuth0 } from '../../react-auth0-spa';

function HomePage(props) {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  // describe the component's prop types here
};

HomePage.defaultProps = {
  // assign default props to the component here
};

export default HomePage;
