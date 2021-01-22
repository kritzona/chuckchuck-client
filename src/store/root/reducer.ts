import { IRootAction } from './actions'

export interface IRootState {
  theme: 'light' | 'dark'
}

const initialState: IRootState = {
  theme: 'light',
}
const rootReducer = (state: IRootState = initialState, action: IRootAction) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
      return state
    default:
      return state
  }
}

export default rootReducer
