import { ERootActionTypes, IRootState, TRootAction } from './types'

const initialState: IRootState = {
  theme: localStorage.getItem('chuckchuck:root:theme') || 'light',
  preloader: {
    enabled: false,
  },
  dateNow: new Date(),
}
const rootReducer = (state = initialState, action: TRootAction) => {
  switch (action.type) {
    case ERootActionTypes.TOGGLE_THEME:
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }

      localStorage.setItem('chuckchuck:root:theme', state.theme)
      return state
    case ERootActionTypes.ENABLE_PRELOADER:
      state.preloader.enabled = true
      return state
    case ERootActionTypes.DISABLE_PRELOADER:
      state.preloader.enabled = false
      return state
    case ERootActionTypes.SET_DATE_NOW:
      state.dateNow = new Date()
      return state
    default:
      return state
  }
}

export default rootReducer
