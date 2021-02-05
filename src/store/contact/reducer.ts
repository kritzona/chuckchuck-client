import { TContactAction } from './actions'
import { IMessageItem } from '../messenger/reducer'

export interface IContactItem {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  dialogId: string | number
}
export interface IContactItemWithLastMessage extends IContactItem {
  lastMessage: IMessageItem | null
}
export interface IContactState {
  items: IContactItem[]
}

const initialState: IContactState = {
  items: [],
}
const contactReducer = (
  state: IContactState = initialState,
  action: TContactAction,
) => {
  switch (action.type) {
    case 'CONTACT_ADD_ITEM':
      state.items = [...state.items, action.payload]
      return state
    case 'CONTACT_RESET_ITEMS':
      state.items = []
      return state
    default:
      return state
  }
}

export default contactReducer
