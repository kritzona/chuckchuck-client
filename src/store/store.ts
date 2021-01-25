import { combineReducers, createStore } from 'redux'
import rootReducer from './root/reducer'
import userReducer from './user/reducer'

const reducers = combineReducers({
  root: rootReducer,
  user: userReducer,
})
export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>
