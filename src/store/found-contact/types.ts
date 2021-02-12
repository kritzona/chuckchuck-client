import { IContactItem } from '../contact/types'

export enum EFoundContactActionTypes {
  ADD_ITEM = 'found-contact/ADD_ITEM',
  ADD_ITEMS = 'found-contact/ADD_ITEMS',
  REMOVE_ITEM = 'found-contact/REMOVE_ITEM',
  RESET_ITEMS = 'found-contact/RESET_ITEMS',
  SEARCH = 'found-contact/SEARCH',
}

export interface IFoundContactItem extends IContactItem {}
export interface IFoundContactState {
  items: IFoundContactItem[]
}

export interface IFoundContactAddItemAction {
  type: EFoundContactActionTypes.ADD_ITEM
  payload: {
    item: IFoundContactItem
  }
}
export interface IFoundContactAddItemsAction {
  type: EFoundContactActionTypes.ADD_ITEMS
  payload: {
    items: IFoundContactItem[]
  }
}
export interface IFoundContactRemoveItemAction {
  type: EFoundContactActionTypes.REMOVE_ITEM
  payload: {
    id: string | number
  }
}
export interface IFoundContactResetItemsAction {
  type: EFoundContactActionTypes.RESET_ITEMS
}
export interface IFoundContactSearchAction {
  type: EFoundContactActionTypes.SEARCH
}

export type TFoundContactAction =
  | IFoundContactAddItemAction
  | IFoundContactAddItemsAction
  | IFoundContactRemoveItemAction
  | IFoundContactResetItemsAction
  | IFoundContactSearchAction
