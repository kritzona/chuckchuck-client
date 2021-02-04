import { IContactItem } from './reducer'

interface IContactAddItemAction {
  type: 'ADD_ITEM'
  payload: IContactItem
}
interface IContactSetDialogIdAction {
  type: 'SET_DIALOG_ID'
  payload: {
    contactId: string | number
    dialogId: string | number
  }
}

export const contactAddItemAction = (
  contactItem: IContactItem,
): IContactAddItemAction => {
  return {
    type: 'ADD_ITEM',
    payload: contactItem,
  }
}
export const contactSetDialogIdAction = (
  contactId: string | number,
  dialogId: string | number,
): IContactSetDialogIdAction => {
  return {
    type: 'SET_DIALOG_ID',
    payload: {
      contactId,
      dialogId,
    },
  }
}

export type TContactAction = IContactAddItemAction | IContactSetDialogIdAction
