// HomePage/index.js
import React from 'react';
// import PropTypes from 'prop-types';

function HomePage(props) {
  const { companyId, handleCompanyIdChangeClick } = props;
  return (
    <React.Fragment>
      <p>Welcome to company: {companyId} </p>
      <button onClick={handleCompanyIdChangeClick}>
        Click here to change CompanyId
      </button>
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
