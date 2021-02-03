import { IRootAction } from './actions'

export interface INotificationItem {
  id: number
  status: 'info' | 'success' | 'error'
  message: string
}
export interface IRootState {
  theme: string
  notification: {
    items: INotificationItem[]
  }
}

const initialState: IRootState = {
  theme: localStorage.getItem('chuckchuck:root:theme') || 'light',
  notification: {
    items: [],
  },
}
const rootReducer = (state: IRootState = initialState, action: IRootAction) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }

      localStorage.setItem('chuckchuck:root:theme', state.theme)
      return state
    case 'NOTIFICATION_ADD_ITEM':
      state.notification.items = [...state.notification.items, action.payload]
      return state
    case 'NOTIFICATION_REMOVE_ITEM':
      state.notification.items = state.notification.items.filter(
        (item) => item.id !== action.payload,
      )
      return state
    default:
      return state
  }
}

export default rootReducer
