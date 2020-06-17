import { call, put, takeLatest } from 'redux-saga/effects';

import { types } from '../constants';
import * as companiesApi from '../api/companies';

function* watchLoadCompaniesList() {
  try {
    const { jsonData } = yield call(companiesApi.getAllCompanies);
    yield put({ type: types.SAMPLE, company: jsonData });
  } catch (e) {
    yield put({ type: types.SAMPLE });
  }
}
export default function* companiesWatcher() {
  yield takeLatest(types.SAMPLE, watchLoadCompaniesList);
}
