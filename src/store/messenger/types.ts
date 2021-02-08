export enum EMessengerActionTypes {
  INIT = 'messenger/INIT',
  MESSAGE_ADD_ITEM = 'messenger/MESSAGE_ADD_ITEM',
  MESSAGE_ADD_ITEMS = 'messenger/MESSAGE_ADD_ITEMS',
  MESSAGE_RESET_ITEMS = 'messenger/MESSAGE_RESET_ITEMS',
  MESSAGE_REMOVE_ITEM = 'messenger/MESSAGE_REMOVE_ITEM',
  FETCH_MESSAGES = 'messenger/FETCH_MESSAGES',
  SEND_MESSAGE = 'messenger/SEND_MESSAGE',
}

export interface IMessageItem {
  id: string | number
  senderId: string | number
  recipientId: string | number
  content: string
  departureDate: Date
}
export interface IMessengerState {
  dialogId: string | number
  contactId: string | number
  message: {
    items: IMessageItem[]
  }
}

export interface IMessengerInitAction {
  type: EMessengerActionTypes.INIT
  payload: {
    dialogId: string | number
    contactId: string | number
  }
}
export interface IMessageAddItemAction {
  type: EMessengerActionTypes.MESSAGE_ADD_ITEM
  payload: {
    item: IMessageItem
  }
}
export interface IMessageRemoveItemAction {
  type: EMessengerActionTypes.MESSAGE_REMOVE_ITEM
  payload: {
    itemId: string | number
  }
}
export interface IMessageAddItemsAction {
  type: EMessengerActionTypes.MESSAGE_ADD_ITEMS
  payload: {
    items: IMessageItem[]
  }
}
export interface IMessageResetItemsAction {
  type: EMessengerActionTypes.MESSAGE_RESET_ITEMS
}
export interface IMessengerFetchMessagesAction {
  type: EMessengerActionTypes.FETCH_MESSAGES
  payload: {
    dialogId: string | number
    contactId: string | number
    accessToken: string
  }
}
export interface IMessengerSendMessageAction {
  type: EMessengerActionTypes.SEND_MESSAGE
  payload: {
    dialogId: string | number
    content: string
    userId: string | number
    accessToken: string
  }
}

export type TMessengerAction =
  | IMessageAddItemAction
  | IMessageRemoveItemAction
  | IMessageAddItemsAction
  | IMessageResetItemsAction
  | IMessengerInitAction
  | IMessengerFetchMessagesAction
  | IMessengerSendMessageAction
