import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from '../../components/HomePage';
import { changeCompanyId } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
