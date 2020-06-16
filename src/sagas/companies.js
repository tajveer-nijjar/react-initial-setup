import { call, fork, put } from 'redux-saga/effects';

import history from '../history';
import { types } from '../constants';
import * as companiesApi from '../api/companies';

function* watchLoadCompaniesList({}) {
  try {
    const { jsonData } = yield call(companiesApi.getAllCompanies);
    yield put({ type: types.SAMPLE, company: jsonData });
  } catch (e) {}
}
export default function* companiesWatcher() {
  const options = {
    matchAll: true
  };
  yield fork(
    history,
    {
      '/companies': watchLoadCompaniesList
    },
    options
  );
}
