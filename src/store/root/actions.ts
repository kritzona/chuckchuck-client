import {
  ERootActionTypes,
  INotificationAddItemAction,
  INotificationItem,
  INotificationRemoveItemAction,
  IRootToggleThemeAction,
} from './types'

export const rootToggleThemeAction = (): IRootToggleThemeAction => ({
  type: ERootActionTypes.TOGGLE_THEME,
})
export const notificationAddItemAction = (
  item: INotificationItem,
): INotificationAddItemAction => ({
  type: ERootActionTypes.NOTIFICATION_ADD_ITEM,
  payload: item,
})
export const notificationRemoveItemAction = (
  id: number,
): INotificationRemoveItemAction => ({
  type: ERootActionTypes.NOTIFICATION_REMOVE_ITEM,
  payload: id,
})
