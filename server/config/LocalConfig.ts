import InitConfig from './InitConfig'

class LocalConfig implements InitConfig {
  async init(): Promise<Object> {
    return Promise.resolve({
      port: 4000,
      redis: {},
    })
  }
}

export default LocalConfig
