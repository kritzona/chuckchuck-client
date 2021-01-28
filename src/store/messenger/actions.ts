import { IDialogItem, IMessageItem } from './reducer'

interface IDialogAddItemAction {
  type: 'DIALOG_ADD_ITEM'
  payload: IDialogItem
}
interface IDialogRemoveItemAction {
  type: 'DIALOG_REMOVE_ITEM'
  payload: number
}
type TDialogAction = IDialogAddItemAction | IDialogRemoveItemAction

export const dialogAddItemAction = (
  item: IDialogItem,
): IDialogAddItemAction => {
  return {
    type: 'DIALOG_ADD_ITEM',
    payload: item,
  }
}
export const dialogRemoveItemAction = (id: number): IDialogRemoveItemAction => {
  return {
    type: 'DIALOG_REMOVE_ITEM',
    payload: id,
  }
}

interface IMessageAddItem {
  type: 'MESSAGE_ADD_ITEM'
  payload: {
    dialogId: number
    item: IMessageItem
  }
}
interface IMessageRemoveItem {
  type: 'MESSAGE_REMOVE_ITEM'
  payload: {
    dialogId: number
    itemId: number
  }
}
type TMessageAction = IMessageAddItem | IMessageRemoveItem

export const messageAddItemAction = (
  dialogId: number,
  item: IMessageItem,
): IMessageAddItem => {
  return {
    type: 'MESSAGE_ADD_ITEM',
    payload: {
      dialogId,
      item,
    },
  }
}
export const messageRemoveItemAction = (
  dialogId: number,
  itemId: number,
): IMessageRemoveItem => {
  return {
    type: 'MESSAGE_REMOVE_ITEM',
    payload: {
      dialogId,
      itemId,
    },
  }
}

export type TMessengerAction = TDialogAction | TMessageAction
