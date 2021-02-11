import config from '../config'
import { io } from 'socket.io-client'

const openWebsocket = () => {
  const backendUrl = `${config.backend.host}${
    config.backend.port ? `:${config.backend.port}` : ''
  }`

  return io(backendUrl)
}
const websocket = openWebsocket()

export default websocket
