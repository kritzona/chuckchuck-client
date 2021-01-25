import { combineReducers, createStore } from 'redux'
import rootReducer from './root/reducer'
import userReducer from './user/reducer'
import contactReducer from './contact/reducer'

const reducers = combineReducers({
  root: rootReducer,
  user: userReducer,
  contact: contactReducer,
})
export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>
