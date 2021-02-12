import { call, put, takeLatest } from 'redux-saga/effects'
import {
  EFoundContactActionTypes,
  IFoundContactSearchAction,
} from '../store/found-contact/types'

function* searchAsync(action: IFoundContactSearchAction) {}

function* foundContactSaga() {
  yield takeLatest(EFoundContactActionTypes.SEARCH, searchAsync)
}

export default foundContactSaga
