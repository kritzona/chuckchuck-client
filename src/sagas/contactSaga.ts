import { call, put, takeEvery } from 'redux-saga/effects'
import userAPI, { IUserAPIContactItem } from '../api/UserAPI'
import {
  contactAddItemAction,
  contactResetItemsAction,
} from '../store/contact/actions'
import avatarImageSource from '../assets/images/avatar.png'
import {
  EContactActionTypes,
  IContactFetchItemsAction,
} from '../store/contact/types'
import {
  rootDisablePreloaderAction,
  rootEnablePreloaderAction,
} from '../store/root/actions'
import { userLogoutAction } from '../store/user/actions'

function* fetchItemsAsync(action: IContactFetchItemsAction) {
  yield put(rootEnablePreloaderAction())

  try {
    const contacts: IUserAPIContactItem[] = yield call(
      userAPI.fetchContacts,
      action.payload.userId,
      action.payload.userAccessToken,
    )

    if (contacts) {
      yield put(contactResetItemsAction())
      for (let contact of contacts) {
        yield put(
          contactAddItemAction({
            id: contact.id,
            login: contact.login,
            firstName: contact.firstName,
            lastName: contact.lastName,
            avatar: avatarImageSource,
            lastVisitedAt: new Date(contact.lastVisitedAt),
            isOnline: true,
            dialogId: contact.dialogId,
          }),
        )
      }
    }
  } catch (error) {
    console.log(error)
  }

  yield put(rootDisablePreloaderAction())
}

function* contactSaga() {
  yield takeEvery(EContactActionTypes.FETCH_ITEMS, fetchItemsAsync)
}

export default contactSaga
