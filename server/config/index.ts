import LocalConfig from './LocalConfig'

const configInit = async (callback: Function) => {
  const initObject: LocalConfig = new LocalConfig()
  const config = await initObject.init()
  callback(config)
}

export default configInit
