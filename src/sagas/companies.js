import { call, fork, put } from 'redux-saga/effects';
import history from '../history';

function* watchLoadCompaniesList({}) {
  try {
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
