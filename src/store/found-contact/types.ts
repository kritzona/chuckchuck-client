export enum EFoundContactActionTypes {
  ADD_ITEM = 'found-contact/ADD_ITEM',
  ADD_ITEMS = 'found-contact/ADD_ITEMS',
  REMOVE_ITEM = 'found-contact/REMOVE_ITEM',
  RESET_ITEMS = 'found-contact/RESET_ITEMS',
  SEARCH = 'found-contact/SEARCH',
  BIND = 'found-contact/BIND',
}

export interface IFoundContactItem {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  lastVisitedAt: Date
}
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
  payload: {
    searchText: string
    userId: string | number
    userAccessToken: string
  }
}
export interface IFoundContactBindAction {
  type: EFoundContactActionTypes.BIND
  payload: {
    contactId: string | number
    userId: string | number
    userAccessToken: string
  }
}

export type TFoundContactAction =
  | IFoundContactAddItemAction
  | IFoundContactAddItemsAction
  | IFoundContactRemoveItemAction
  | IFoundContactResetItemsAction
  | IFoundContactSearchAction
  | IFoundContactBindAction
