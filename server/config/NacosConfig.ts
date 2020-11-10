import InitConfig from './InitConfig'

class NacosConfig implements InitConfig {
  async init(): Promise<Object> {
    throw new Error('Method not implemented.')
  }
}

export default NacosConfig
