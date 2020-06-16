import { handleActions } from 'redux-actions';

import { types } from '../constants';

const INITIAL_STATE = {
  companyId: 1
};

const changeCompanyId = (state) => {
  return {
    ...state,
    companyId: 2
  };
};

//Handles the incoming actions.
export default handleActions(
  {
    [types.CHANGE_COMPANY_ID]: changeCompanyId
  },
  INITIAL_STATE
);
