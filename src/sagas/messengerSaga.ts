import { call, put, takeLatest } from 'redux-saga/effects'

function* fetchMessagesAsync() {}

function* messengerSaga() {
  yield takeLatest('messenger/FETCH_MESSAGES', fetchMessagesAsync)
}

export default messengerSaga
