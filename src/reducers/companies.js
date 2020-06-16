import { handleActions } from 'redux-actions';

import { types } from '../constants';

const INITIAL_STATE = {};

// function openActionType(state) {
//   return { ...state };
// }

//Handles the incoming actions.
export default handleActions(
  {
    // [types.ACTION_TYPE]: openActionType
  },
  INITIAL_STATE
);
