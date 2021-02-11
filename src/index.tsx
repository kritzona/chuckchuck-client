import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import SocketContext from './contexts/SocketContext'
import initWebsocket from './utils/init-websocket'

const socket = initWebsocket()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <Router>
          <App />
        </Router>
      </SocketContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
