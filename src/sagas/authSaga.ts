import { call, takeEvery, put } from 'redux-saga/effects'
import {
  IUserFetchSelfAction,
  userAuthAction,
  userLogoutAction,
} from '../store/user/actions'
import userAPI from '../api/UserAPI'

function* authAsync(action: IUserFetchSelfAction) {
  try {
    const item = yield call(
      userAPI.fetchSelfItem,
      action.payload.userId,
      action.payload.userAccessToken,
    )

    if (item) {
      yield put(userAuthAction(item))
    }
  } catch (error) {
    yield put(userLogoutAction())
  }
}

export default function* authSaga() {
  yield takeEvery('FETCH_SELF', authAsync)
}
