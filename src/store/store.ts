import { applyMiddleware, combineReducers, createStore } from 'redux'
import rootReducer from './root/reducer'
import userReducer from './user/reducer'
import contactReducer from './contact/reducer'
import messengerReducer from './messenger/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const reducers = combineReducers({
  root: rootReducer,
  user: userReducer,
  contact: contactReducer,
  messenger: messengerReducer,
})
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof reducers>
