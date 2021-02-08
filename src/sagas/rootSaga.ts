import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import contactSaga from './contactSaga'
import messengerSaga from './messengerSaga'

export default function* rootSaga() {
  yield all([userSaga(), contactSaga(), messengerSaga()])
}
