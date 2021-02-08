import {
  EMessengerActionTypes,
  IMessageAddItemAction,
  IMessageItem,
  IMessageRemoveItemAction,
  IMessengerInitAction,
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
  dialogId: string | number,
  item: IMessageItem,
): IMessageAddItemAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_ADD_ITEM,
    payload: {
      dialogId,
      item,
    },
  }
}
export const messageRemoveItemAction = (
  dialogId: string | number,
  itemId: string | number,
): IMessageRemoveItemAction => {
  return {
    type: EMessengerActionTypes.MESSAGE_REMOVE_ITEM,
    payload: {
      dialogId,
      itemId,
    },
  }
}
