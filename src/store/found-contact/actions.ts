import {
  EFoundContactActionTypes,
  IFoundContactAddItemAction,
  IFoundContactAddItemsAction,
  IFoundContactItem,
  IFoundContactRemoveItemAction,
  IFoundContactResetItemsAction,
  IFoundContactSearchAction,
} from './types'

export const foundContactAddItemAction = (
  item: IFoundContactItem,
): IFoundContactAddItemAction => ({
  type: EFoundContactActionTypes.ADD_ITEM,
  payload: {
    item,
  },
})
export const foundContactAddItemsAction = (
  items: IFoundContactItem[],
): IFoundContactAddItemsAction => ({
  type: EFoundContactActionTypes.ADD_ITEMS,
  payload: {
    items,
  },
})
export const foundContactRemoveItemAction = (
  id: string | number,
): IFoundContactRemoveItemAction => ({
  type: EFoundContactActionTypes.REMOVE_ITEM,
  payload: {
    id,
  },
})
export const foundContactResetItemsAction = (): IFoundContactResetItemsAction => ({
  type: EFoundContactActionTypes.RESET_ITEMS,
})
export const foundContactSearchAction = (): IFoundContactSearchAction => ({
  type: EFoundContactActionTypes.SEARCH,
})
