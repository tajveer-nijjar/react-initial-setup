import { all } from 'redux-saga/effects';

import companies from './companies';

export default function* rootSaga() {
  yield all([...companies()]);
}
