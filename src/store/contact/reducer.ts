import { TContactAction } from './actions'
import avatarImageSource from '../../assets/images/avatar.png'
import { IMessageItem } from '../messenger/reducer'

export interface IContactItem {
  id: string | number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  dialogId: string | number | null
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
    case 'SET_DIALOG_ID':
      state.items.map((item: IContactItem) => {
        if (item.id === action.payload.contactId) {
          item.dialogId = action.payload.dialogId
        }

        return null
      })

      return state
    default:
      return state
  }
}

export default contactReducer
