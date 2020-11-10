const sessions: any = {}

// TODO 集成redis
class SessionStore {
  constructor(config: any) {
    console.log(config.redis)
  }

  async get(key: string) {
    return sessions[key]
  }

  async set(key: string, value: string) {
    sessions[key] = value
  }

  async destroy(key: string) {
    sessions[key] = undefined
  }
}

export default SessionStore
