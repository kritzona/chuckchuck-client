import { INotificationItem } from './reducer'

interface IRootToggleThemeAction {
  type: 'TOGGLE_THEME'
}
interface INotificationAddItemAction {
  type: 'NOTIFICATION_ADD_ITEM'
  payload: INotificationItem
}
interface INotificationRemoveItemAction {
  type: 'NOTIFICATION_REMOVE_ITEM'
  payload: number
}

export const rootToggleThemeAction = (): IRootToggleThemeAction => ({
  type: 'TOGGLE_THEME',
})
export const notificationAddItemAction = (
  item: INotificationItem,
): INotificationAddItemAction => ({
  type: 'NOTIFICATION_ADD_ITEM',
  payload: item,
})
export const notificationRemoveItemAction = (
  id: number,
): INotificationRemoveItemAction => ({
  type: 'NOTIFICATION_REMOVE_ITEM',
  payload: id,
})

export type IRootAction =
  | IRootToggleThemeAction
  | INotificationAddItemAction
  | INotificationRemoveItemAction
