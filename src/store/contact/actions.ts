import { IContactItem } from './reducer'

interface IContactAddItemAction {
  type: 'CONTACT_ADD_ITEM'
  payload: IContactItem
}
interface IContactSetDialogIdAction {
  type: 'SET_DIALOG_ID'
  payload: {
    contactId: string | number
    dialogId: string | number
  }
}
interface IContactResetItemsAction {
  type: 'CONTACT_RESET_ITEMS'
}
export interface IContactFetchItemsAction {
  type: 'CONTACT_FETCH_ITEMS'
  payload: { userId: string; userAccessToken: string }
}

export const contactAddItemAction = (
  contactItem: IContactItem,
): IContactAddItemAction => {
  return {
    type: 'CONTACT_ADD_ITEM',
    payload: contactItem,
  }
}
export const contactSetDialogIdAction = (
  contactId: string | number,
  dialogId: string | number,
): IContactSetDialogIdAction => {
  return {
    type: 'SET_DIALOG_ID',
    payload: { contactId, dialogId },
  }
}
export const contactResetItemsAction = (): IContactResetItemsAction => {
  return {
    type: 'CONTACT_RESET_ITEMS',
  }
}
export const contactFetchItemsAction = (
  userId: string,
  userAccessToken: string,
): IContactFetchItemsAction => {
  return {
    type: 'CONTACT_FETCH_ITEMS',
    payload: { userId, userAccessToken },
  }
}

export type TContactAction =
  | IContactAddItemAction
  | IContactSetDialogIdAction
  | IContactFetchItemsAction
  | IContactResetItemsAction
