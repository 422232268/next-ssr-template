class LocalConfig {
  async init(): Promise<Record<string, any>> {
    return Promise.resolve({
      port: 4000,
      redis: {},
    })
  }
}

export default LocalConfig
