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
      const date = new Date()
      state.items = [
        ...state.items,
        { id: date.getTime(), ...action.payload, createdAt: date },
      ]
      return state
    case ENotificationActionTypes.REMOVE_ITEM:
      state.items = state.items.filter((item) => item.id !== action.payload)
      return state
    case ENotificationActionTypes.RESET_ITEMS:
      state.items = []
      return state
    default:
      return state
  }
}

export default notificationReducer
