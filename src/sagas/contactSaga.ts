import { call, put, takeEvery } from 'redux-saga/effects'
import userAPI, { IUserAPIContactItem } from '../api/UserAPI'
import {
  contactAddItemAction,
  contactResetItemsAction,
  IContactFetchItemsAction,
} from '../store/contact/actions'
import avatarImageSource from '../assets/images/avatar.png'

function* fetchItemsAsync(action: IContactFetchItemsAction) {
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
          isOnline: true,
          dialogId: contact.dialogId,
        }),
      )
    }
  }
}

function* contactSaga() {
  yield takeEvery('CONTACT_FETCH_ITEMS', fetchItemsAsync)
}

export default contactSaga
