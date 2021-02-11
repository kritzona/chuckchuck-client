import React from 'react'
import websocket from '../utils/websocket'

const SocketContext = React.createContext(websocket)

export default SocketContext
