export enum EMessengerActionTypes {
  INIT = 'messenger/INIT',
  MESSAGE_ADD_ITEM = 'messenger/MESSAGE_ADD_ITEM',
  MESSAGE_REMOVE_ITEM = 'messenger/MESSAGE_REMOVE_ITEM',
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
    dialogId: string | number
    item: IMessageItem
  }
}
export interface IMessageRemoveItemAction {
  type: EMessengerActionTypes.MESSAGE_REMOVE_ITEM
  payload: {
    dialogId: string | number
    itemId: string | number
  }
}

export type TMessengerAction =
  | IMessageAddItemAction
  | IMessageRemoveItemAction
  | IMessengerInitAction
