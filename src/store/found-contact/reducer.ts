import {
  EFoundContactActionTypes,
  IFoundContactState,
  TFoundContactAction,
} from './types'

const initialState: IFoundContactState = {
  items: [],
}

const foundContactReducer = (
  state = initialState,
  action: TFoundContactAction,
) => {
  switch (action.type) {
    case EFoundContactActionTypes.ADD_ITEM:
      state.items = [...state.items, action.payload.item]
      return state
    case EFoundContactActionTypes.ADD_ITEMS:
      state.items = [...action.payload.items]
      return state
    case EFoundContactActionTypes.REMOVE_ITEM:
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      return state
    case EFoundContactActionTypes.RESET_ITEMS:
      state.items = initialState.items
      return state
    default:
      return state
  }
}

export default foundContactReducer
