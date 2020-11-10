import { IncomingMessage } from 'http'
import AxiosClient from './AxiosClient'
import AxiosServer from './AxiosServer'

export const userInfo = () => {
  return AxiosClient.ajax({ url: 'user' })
}

export const userInfoServer = (req: IncomingMessage) => {
  return AxiosServer.ajax(req, { url: 'userServer' })
}
