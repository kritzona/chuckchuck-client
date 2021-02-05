import {
  EContactActionTypes,
  IContactAddItemAction,
  IContactFetchItemsAction,
  IContactItem,
  IContactResetItemsAction,
} from './types'

export const contactAddItemAction = (
  contactItem: IContactItem,
): IContactAddItemAction => {
  return {
    type: EContactActionTypes.ADD_ITEM,
    payload: contactItem,
  }
}
export const contactResetItemsAction = (): IContactResetItemsAction => {
  return {
    type: EContactActionTypes.RESET_ITEMS,
  }
}
export const contactFetchItemsAction = (
  userId: string,
  userAccessToken: string,
): IContactFetchItemsAction => {
  return {
    type: EContactActionTypes.FETCH_ITEMS,
    payload: { userId, userAccessToken },
  }
}
