import authSaga from 'features/auth/authSaga';
import usersSaga from 'features/users/usersSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), usersSaga()]);
}
