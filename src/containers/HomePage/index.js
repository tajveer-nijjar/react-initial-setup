import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomePage from '../../components/HomePage';
import { changeCompanyId } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    companyId: state.companies.companyId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleCompanyIdChangeClick: () => {
      dispatch(changeCompanyId());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
