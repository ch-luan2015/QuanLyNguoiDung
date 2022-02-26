import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import usersSaga from 'features/users/usersSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('Root saga');
  yield all([counterSaga(), authSaga(), usersSaga()]);
}
