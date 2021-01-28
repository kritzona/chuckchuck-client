import { TContactAction } from './actions'

export interface IContactItem {
  id: number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
  dialogId: number | null
}
export interface IContactState {
  items: IContactItem[]
}

const initialState: IContactState = {
  items: [
    {
      id: 1,
      login: 'contact1',
      firstName: 'Первый',
      lastName: 'Контакт',
      avatar: null,
      isOnline: true,
      dialogId: null,
    },
    {
      id: 2,
      login: 'contact2',
      firstName: 'Второй',
      lastName: 'Контакт',
      avatar: null,
      isOnline: true,
      dialogId: null,
    },
    {
      id: 3,
      login: 'contact3',
      firstName: 'Третий',
      lastName: 'Контакт',
      avatar: null,
      isOnline: false,
      dialogId: null,
    },
    {
      id: 4,
      login: 'contact4',
      firstName: 'Четвертый',
      lastName: 'Контакт',
      avatar: null,
      isOnline: true,
      dialogId: null,
    },
    {
      id: 5,
      login: 'contact5',
      firstName: 'Пятый',
      lastName: 'Контакт',
      avatar: null,
      isOnline: true,
      dialogId: null,
    },
  ],
}
const contactReducer = (
  state: IContactState = initialState,
  action: TContactAction,
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items = [...state.items, action.payload]
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
