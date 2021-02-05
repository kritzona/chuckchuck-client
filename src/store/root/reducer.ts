import { ERootActionTypes, IRootAction, IRootState } from './types'

const initialState: IRootState = {
  theme: localStorage.getItem('chuckchuck:root:theme') || 'light',
}
const rootReducer = (state = initialState, action: IRootAction) => {
  switch (action.type) {
    case ERootActionTypes.TOGGLE_THEME:
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }

      localStorage.setItem('chuckchuck:root:theme', state.theme)
      return state
    default:
      return state
  }
}

export default rootReducer
