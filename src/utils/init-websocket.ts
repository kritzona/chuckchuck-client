import config from '../config'
import { io } from 'socket.io-client'

const initWebsocket = () => {
  const backendUrl = `${config.backend.host}${
    config.backend.port ? `:${config.backend.port}` : ''
  }`

  return io(backendUrl)
}

export default initWebsocket
