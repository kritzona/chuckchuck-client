import { IContactItem } from './reducer'

interface IContactAddItemAction {
  type: 'ADD_ITEM'
  payload: IContactItem
}

export const contactAddItemAction = (
  contactItem: IContactItem,
): IContactAddItemAction => {
  return {
    type: 'ADD_ITEM',
    payload: contactItem,
  }
}

export type TContactAction = IContactAddItemAction
