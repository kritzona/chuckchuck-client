import { EContactActionTypes, IContactState, TContactAction } from './types'

const initialState: IContactState = {
  items: [],
}
const contactReducer = (
  state: IContactState = initialState,
  action: TContactAction,
) => {
  switch (action.type) {
    case EContactActionTypes.ADD_ITEM:
      state.items = [...state.items, action.payload]
      return state
    case EContactActionTypes.RESET_ITEMS:
      state.items = []
      return state
    case EContactActionTypes.UPDATE_LAST_VISITED_AT:
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.lastVisitedAt = new Date(action.payload.lastVisitedAt)
        }
        return item
      })
      return state
    default:
      return state
  }
}

export default contactReducer
