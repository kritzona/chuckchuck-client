import { call, put, takeLatest, delay } from 'redux-saga/effects'
import userAPI, { IUserAPIFoundContactItem } from '../api/UserAPI'
import {
  foundContactAddItemsAction,
  foundContactResetItemsAction,
} from '../store/found-contact/actions'
import {
  EFoundContactActionTypes,
  IFoundContactBindAction,
  IFoundContactItem,
  IFoundContactSearchAction,
} from '../store/found-contact/types'
import {
  rootDisablePreloaderAction,
  rootEnablePreloaderAction,
} from '../store/root/actions'
import {
  notificationAddItemAction,
  notificationRemoveItemAction,
} from '../store/notification/actions'
import { contactFetchItemsAction } from '../store/contact/actions'

function* searchAsync(action: IFoundContactSearchAction) {
  try {
    yield put(foundContactResetItemsAction())

    const _foundContactItems: IUserAPIFoundContactItem[] = yield call(
      userAPI.search,
      action.payload.searchText,
      action.payload.userId,
      action.payload.userAccessToken,
    )

    if (_foundContactItems) {
      const foundContactItems: IFoundContactItem[] = _foundContactItems.map(
        (_foundContactItem) => {
          return {
            id: _foundContactItem.id,
            login: _foundContactItem.login,
            firstName: _foundContactItem.firstName,
            lastName: _foundContactItem.lastName,
            avatar: _foundContactItem.avatar,
            isOnline: true,
            lastVisitedAt: new Date(_foundContactItem.lastVisitedAt),
          }
        },
      )

      yield put(foundContactAddItemsAction(foundContactItems))
    }
  } catch (error) {
    console.log(error)
  }
}

function* bindAsync(action: IFoundContactBindAction) {
  try {
    yield put(rootEnablePreloaderAction())

    const bindedContact = yield call(
      userAPI.bindContact,
      action.payload.contactId,
      action.payload.userId,
      action.payload.userAccessToken,
    )
    if (bindedContact) {
      yield delay(1000)
      yield put(
        contactFetchItemsAction(
          action.payload.userId,
          action.payload.userAccessToken,
        ),
      )
      yield put(rootDisablePreloaderAction())

      yield put(
        notificationAddItemAction({
          status: 'success',
          message: 'Контакт добавлен',
        }),
      )
    }

    yield put(rootDisablePreloaderAction())
  } catch (error) {
    console.log(error)
  }
}

function* foundContactSaga() {
  yield takeLatest(EFoundContactActionTypes.SEARCH, searchAsync)
  yield takeLatest(EFoundContactActionTypes.BIND, bindAsync)
}

export default foundContactSaga
