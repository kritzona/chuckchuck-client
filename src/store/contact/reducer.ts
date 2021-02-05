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
    default:
      return state
  }
}

export default contactReducer
