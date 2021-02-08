import { IMessageItem } from '../messenger/types'

export enum EContactActionTypes {
  ADD_ITEM = 'contact/ADD_ITEM',
  RESET_ITEMS = 'contact/RESET_ITEMS',
  FETCH_ITEMS = 'contact/FETCH_ITEMS',
}

export interface IContactItem {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  dialogId: string | number
}
export interface IContactItemWithLastMessage extends IContactItem {
  lastMessage: IMessageItem | null
}
export interface IContactState {
  items: IContactItem[]
}

export interface IContactAddItemAction {
  type: EContactActionTypes.ADD_ITEM
  payload: IContactItem
}
export interface IContactResetItemsAction {
  type: EContactActionTypes.RESET_ITEMS
}
export interface IContactFetchItemsAction {
  type: EContactActionTypes.FETCH_ITEMS
  payload: { userId: string; userAccessToken: string }
}

export type TContactAction =
  | IContactAddItemAction
  | IContactFetchItemsAction
  | IContactResetItemsAction
