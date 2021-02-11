import { call, takeLatest, put, delay } from 'redux-saga/effects'
import {
  userAuthAction,
  userFetchAccountAction,
  userLogoutAction,
} from '../store/user/actions'
import userAPI from '../api/UserAPI'
import {
  notificationAddItemAction,
  notificationRemoveItemAction,
} from '../store/notification/actions'
import {
  EUserActionTypes,
  IUserFetchAccountAction,
  IUserLoginAction,
} from '../store/user/types'
import {
  rootDisablePreloaderAction,
  rootEnablePreloaderAction,
} from '../store/root/actions'
import { cleanUserStorage } from '../utils/user-storage'

function* loginAsync(action: IUserLoginAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const authData = yield call(
      userAPI.login,
      action.payload.login,
      action.payload.password,
      action.payload.remember,
    )

    if (authData) {
      yield put(userFetchAccountAction(authData.id, authData.accessToken))
    } else {
      yield put(rootDisablePreloaderAction())

      const dateNow = Date.now()
      yield put(
        notificationAddItemAction({
          id: dateNow,
          status: 'error',
          message: 'Неверный логин / пароль',
        }),
      )
      yield delay(2500)
      yield put(notificationRemoveItemAction(dateNow))
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    console.log(error)
    yield logout()
  }
}
function* fetchAccountAsync(action: IUserFetchAccountAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const item = yield call(
      userAPI.fetchAccount,
      action.payload.id,
      action.payload.accessToken,
    )

    if (item) {
      yield put(userAuthAction(item))
    } else {
      yield logout()

      const dateNow = Date.now()
      yield put(
        notificationAddItemAction({
          id: dateNow,
          status: 'error',
          message: 'Недействительный токен',
        }),
      )
      yield delay(2500)
      yield put(notificationRemoveItemAction(dateNow))
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    yield logout()
  }
}

function logout() {
  cleanUserStorage()
  put(userLogoutAction())
}

function* userSaga() {
  yield takeLatest(EUserActionTypes.LOGIN, loginAsync)
  yield takeLatest(EUserActionTypes.FETCH_ACCOUNT, fetchAccountAsync)
}

export default userSaga
