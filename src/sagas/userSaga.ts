import { call, takeEvery, put } from 'redux-saga/effects'
import {
  IUserFetchAccountAction,
  IUserLoginAction,
  userAuthAction,
  userFetchAccountAction,
  userLogoutAction,
} from '../store/user/actions'
import userAPI from '../api/UserAPI'

function* loginAsync(action: IUserLoginAction) {
  try {
    const authData = yield call(
      userAPI.login,
      action.payload.login,
      action.payload.password,
      action.payload.remember,
    )

    if (authData) {
      yield put(userFetchAccountAction(authData.id, authData.accessToken))
    } else {
      alert('Неверный логин / пароль')
    }
  } catch (error) {
    yield put(userLogoutAction())
  }
}
function* fetchAccountAsync(action: IUserFetchAccountAction) {
  try {
    const item = yield call(
      userAPI.fetchAccount,
      action.payload.id,
      action.payload.accessToken,
    )

    if (item) {
      yield put(userAuthAction(item))
    } else {
      alert('Недействительный токен')
    }
  } catch (error) {
    yield put(userLogoutAction())
  }
}

export default function* userSaga() {
  yield takeEvery('LOGIN', loginAsync)
  yield takeEvery('FETCH_ACCOUNT', fetchAccountAsync)
}
