import { call, put, takeLatest } from 'redux-saga/effects'
import userAPI, { IUserAPIFoundContactItem } from '../api/UserAPI'
import {
  foundContactAddItemsAction,
  foundContactResetItemsAction,
} from '../store/found-contact/actions'
import {
  EFoundContactActionTypes,
  IFoundContactItem,
  IFoundContactSearchAction,
} from '../store/found-contact/types'

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

function* foundContactSaga() {
  yield takeLatest(EFoundContactActionTypes.SEARCH, searchAsync)
}

export default foundContactSaga
