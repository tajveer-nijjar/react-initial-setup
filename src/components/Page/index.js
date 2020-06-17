import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Page = ({ children, className }) => (
  <div className={['page', className].join('')}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
