export enum ERootActionTypes {
  TOGGLE_THEME = 'root/TOGGLE_THEME',
  NOTIFICATION_ADD_ITEM = 'root/NOTIFICATION_ADD_ITEM',
  NOTIFICATION_REMOVE_ITEM = 'root/NOTIFICATION_REMOVE_ITEM',
}

export interface INotificationItem {
  id: number
  status: 'info' | 'success' | 'error'
  message: string
}
export interface IRootState {
  theme: string
  notification: {
    items: INotificationItem[]
  }
}

export interface IRootToggleThemeAction {
  type: ERootActionTypes.TOGGLE_THEME
}
export interface INotificationAddItemAction {
  type: ERootActionTypes.NOTIFICATION_ADD_ITEM
  payload: INotificationItem
}
export interface INotificationRemoveItemAction {
  type: ERootActionTypes.NOTIFICATION_REMOVE_ITEM
  payload: number
}

export type IRootAction =
  | IRootToggleThemeAction
  | INotificationAddItemAction
  | INotificationRemoveItemAction
