import LocalConfig from './LocalConfig'
import InitConfig from './InitConfig'

const configInit = async (callback: Function) => {
  const initObject: InitConfig = new LocalConfig()
  let config = await initObject.init()
  callback(config)
}

export default configInit
