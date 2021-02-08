import { call, put, takeLatest } from 'redux-saga/effects'
import dialogAPI from '../api/DialogAPI'
import {
  IMessageItem,
  IMessengerFetchMessagesAction,
  IMessengerSendMessageAction,
} from '../store/messenger/types'
import { messageAddItemAction } from '../store/messenger/actions'

function* fetchMessagesAsync(action: IMessengerFetchMessagesAction) {
  try {
    const messages: IMessageItem[] = yield call(
      dialogAPI.fetchMessages,
      action.payload.dialogId,
      action.payload.contactId,
      action.payload.accessToken,
    )

    if (messages) {
      for (let message of messages) {
        yield put(messageAddItemAction(message))
      }
    }
  } catch (error) {
    console.log(error)
  }
}
function* sendMessageAsync(action: IMessengerSendMessageAction) {
  try {
    const sendedMessage = yield call(
      dialogAPI.sendMessage,
      action.payload.dialogId,
      action.payload.content,
      action.payload.userId,
      action.payload.accessToken,
    )

    if (sendedMessage) {
      yield put(messageAddItemAction(sendedMessage))
    }
  } catch (error) {
    console.log(error)
  }
}

function* messengerSaga() {
  yield takeLatest('messenger/FETCH_MESSAGES', fetchMessagesAsync)
  yield takeLatest('messenger/SEND_MESSAGE', sendMessageAsync)
}

export default messengerSaga
