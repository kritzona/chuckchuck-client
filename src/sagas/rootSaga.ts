import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import contactSaga from './contactSaga'
import messengerSaga from './messengerSaga'
import foundContactSaga from './foundContactSaga'

export default function* rootSaga() {
  yield all([userSaga(), contactSaga(), messengerSaga(), foundContactSaga()])
}
