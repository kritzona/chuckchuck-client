import {
  ENotificationActionTypes,
  INotificationAddItemAction,
  INotificationItem,
  INotificationRemoveItemAction,
  INotificationResetItemsAction,
} from './types'

export const notificationAddItemAction = (
  item: INotificationItem,
): INotificationAddItemAction => ({
  type: ENotificationActionTypes.ADD_ITEM,
  payload: item,
})
export const notificationRemoveItemAction = (
  id: number,
): INotificationRemoveItemAction => ({
  type: ENotificationActionTypes.REMOVE_ITEM,
  payload: id,
})
export const notificationResetItemsAction = (): INotificationResetItemsAction => {
  return {
    type: ENotificationActionTypes.RESET_ITEMS,
  }
}
