import {
  EMessengerActionTypes,
  IMessageAddItemAction,
  IMessageAddItemsAction,
  IMessageItem,
  IMessageRemoveItemAction,
  IMessageResetItemsAction,
  IMessengerFetchMessagesAction,
  IMessengerInitAction,
  IMessengerSendMessageAction,
} from './types'

export const messengerInitAction = (
  dialogId: string | number,
  contactId: string | number,
): IMessengerInitAction => {
  return {
    type: EMessengerActionTypes.INIT,
    payload: {
      dialogId,
      contactId,
    },
  }
}
export const messageAddItemAction = (
  item: IMessageItem,
): IMessageAddItemAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_ADD_ITEM,
    payload: {
      item,
    },
  }
}
export const messageRemoveItemAction = (
  itemId: string | number,
): IMessageRemoveItemAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}
export const messageAddItemsAction = (
  items: IMessageItem[],
): IMessageAddItemsAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_ADD_ITEMS,
    payload: {
      items,
    },
  }
}
export const messageResetItemsAction = (): IMessageResetItemsAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_RESET_ITEMS,
  }
}
export const messengerFetchMessagesAction = (
  dialogId: string | number,
  contactId: string | number,
  accessToken: string,
): IMessengerFetchMessagesAction => {
  return {
    type: EMessengerActionTypes.FETCH_MESSAGES,
    payload: {
      dialogId,
      contactId,
      accessToken,
    },
  }
}
export const messengerSendMessageAction = (
  dialogId: string | number,
  content: string,
  userId: string | number,
  accessToken: string,
): IMessengerSendMessageAction => {
  return {
    type: EMessengerActionTypes.SEND_MESSAGE,
    payload: {
      dialogId,
      content,
      userId,
      accessToken,
    },
  }
}
