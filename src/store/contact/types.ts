import { IMessageItem } from '../messenger/types'

export enum EContactActionTypes {
  ADD_ITEM = 'contact/ADD_ITEM',
  RESET_ITEMS = 'contact/RESET_ITEMS',
  FETCH_ITEMS = 'contact/FETCH_ITEMS',
  UPDATE_LAST_VISITED_AT = 'contact/UPDATE_LAST_VISITED_AT',
}

export interface IContactItem {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  lastVisitedAt: Date
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
export interface IContactUpdateLastVisitedAtAction {
  type: EContactActionTypes.UPDATE_LAST_VISITED_AT
  payload: {
    id: string | number
    lastVisitedAt: Date
  }
}
export interface IContactFetchItemsAction {
  type: EContactActionTypes.FETCH_ITEMS
  payload: { userId: string | number; userAccessToken: string }
}

export type TContactAction =
  | IContactAddItemAction
  | IContactFetchItemsAction
  | IContactResetItemsAction
  | IContactUpdateLastVisitedAtAction
