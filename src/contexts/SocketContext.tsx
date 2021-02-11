import React from 'react'

const SocketContext = React.createContext({
  off(...args: any) {},
  on(...args: any) {},
})

export default SocketContext
