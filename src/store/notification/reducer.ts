import {
  ENotificationActionTypes,
  INotificationState,
  TNotificationAction,
} from './types'

const initialState: INotificationState = {
  items: [],
}

const notificationReducer = (
  state = initialState,
  action: TNotificationAction,
) => {
  switch (action.type) {
    case ENotificationActionTypes.ADD_ITEM:
      state.items = [...state.items, action.payload]
      return state
    case ENotificationActionTypes.REMOVE_ITEM:
      state.items = state.items.filter((item) => item.id !== action.payload)
      return state
    default:
      return state
  }
}

export default notificationReducer
