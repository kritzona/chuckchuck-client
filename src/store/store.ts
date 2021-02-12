import { applyMiddleware, combineReducers, createStore } from 'redux'
import rootReducer from './root/reducer'
import userReducer from './user/reducer'
import contactReducer from './contact/reducer'
import foundContactReducer from './found-contact/reducer'
import messengerReducer from './messenger/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import notificationReducer from './notification/reducer'

const reducers = combineReducers({
  root: rootReducer,
  user: userReducer,
  contact: contactReducer,
  foundContact: foundContactReducer,
  messenger: messengerReducer,
  notification: notificationReducer,
})
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof reducers>
