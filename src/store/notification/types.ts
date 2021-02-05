export enum ENotificationActionTypes {
  ADD_ITEM = 'notification/ADD_ITEM',
  REMOVE_ITEM = 'notification/REMOVE_ITEM',
  RESET_ITEMS = 'notification/RESET_ITEMS',
}

export interface INotificationItem {
  id: number
  status: 'info' | 'success' | 'error'
  message: string
}
export interface INotificationState {
  items: INotificationItem[]
}

export interface INotificationAddItemAction {
  type: ENotificationActionTypes.ADD_ITEM
  payload: INotificationItem
}
export interface INotificationRemoveItemAction {
  type: ENotificationActionTypes.REMOVE_ITEM
  payload: number
}
export interface INotificationResetItemsAction {
  type: ENotificationActionTypes.RESET_ITEMS
}

export type TNotificationAction =
  | INotificationAddItemAction
  | INotificationRemoveItemAction
  | INotificationResetItemsAction
