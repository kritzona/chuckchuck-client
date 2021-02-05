import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import contactSaga from './contactSaga'

export default function* rootSaga() {
  yield all([userSaga(), contactSaga()])
}
