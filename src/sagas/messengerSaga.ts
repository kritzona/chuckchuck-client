import { call, put, takeLatest } from 'redux-saga/effects'
import dialogAPI, { IDialogAPIMessageItem } from '../api/DialogAPI'
import {
  EMessengerActionTypes,
  IMessageItem,
  IMessengerFetchMessagesAction,
  IMessengerSendMessageAction,
} from '../store/messenger/types'
import {
  messageAddItemAction,
  messageAddItemsAction,
} from '../store/messenger/actions'
import {
  rootDisablePreloaderAction,
  rootEnablePreloaderAction,
} from '../store/root/actions'

function* fetchMessagesAsync(action: IMessengerFetchMessagesAction) {
  yield put(rootEnablePreloaderAction())

  try {
    const messages: IDialogAPIMessageItem[] = yield call(
      dialogAPI.fetchMessages,
      action.payload.dialogId,
      action.payload.contactId,
      action.payload.accessToken,
    )

    if (messages) {
      yield put(
        messageAddItemsAction(
          messages.map((message) => ({
            id: message.id,
            senderId: message.senderId,
            recipientId: message.recipientId,
            content: message.content,
            departureDate: new Date(message.createdAt),
          })),
        ),
      )
    }
  } catch (error) {
    console.log(error)
  }

  yield put(rootDisablePreloaderAction())
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
      yield put(
        messageAddItemAction({
          id: sendedMessage.id,
          senderId: sendedMessage.senderId,
          recipientId: sendedMessage.recipientId,
          content: sendedMessage.content,
          departureDate: new Date(sendedMessage.createdAt),
        }),
      )
    }
  } catch (error) {
    console.log(error)
  }
}

function* messengerSaga() {
  yield takeLatest(EMessengerActionTypes.FETCH_MESSAGES, fetchMessagesAsync)
  yield takeLatest(EMessengerActionTypes.SEND_MESSAGE, sendMessageAsync)
}

export default messengerSaga
