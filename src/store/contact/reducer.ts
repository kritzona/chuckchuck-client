import { TContactAction } from './actions'

export interface IContactItem {
  id: number
  login: string
  firstName: string
  lastName: string
  avatar: string | null
  isOnline: boolean
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
    case 'ADD_ITEM':
      state.items = [...state.items, action.payload]
      return state
    default:
      return state
  }
}

export default contactReducer
