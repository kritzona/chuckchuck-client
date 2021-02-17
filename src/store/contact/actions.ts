import { IMessageItem } from '../messenger/types'
import {
  EContactActionTypes,
  IContactAddItemAction,
  IContactFetchItemsAction,
  IContactItem,
  IContactResetItemsAction,
  IContactUpdateLastMessageAction,
  IContactUpdateLastVisitedAtAction,
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
  userId: string | number,
  userAccessToken: string,
): IContactFetchItemsAction => {
  return {
    type: EContactActionTypes.FETCH_ITEMS,
    payload: { userId, userAccessToken },
  }
}
export const contactUpdateLastVisitedAtAction = (
  id: string | number,
  lastVisitedAt: Date,
): IContactUpdateLastVisitedAtAction => {
  return {
    type: EContactActionTypes.UPDATE_LAST_VISITED_AT,
    payload: {
      id,
      lastVisitedAt,
    },
  }
}
export const contactUpdateLastMessageAction = (
  id: string | number,
  lastMessage: IMessageItem,
): IContactUpdateLastMessageAction => {
  return {
    type: EContactActionTypes.UPDATE_LAST_MESSAGE,
    payload: {
      id,
      lastMessage,
    },
  }
}
