import axios from 'axios'
import getRequestUrl from './helper'
import mapping from './mapping'

export default class Axios {
  static ajax(req: any, options: any) {
    const baseApi = '/proxy'
    return new Promise((resolve, reject) => {
      let url = `http://localhost:${
        (global as any).config.port
      }${baseApi}${getRequestUrl(mapping, options.url)}`
      axios({
        url,
        method: 'get' || options.method,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
        headers: {
          cookie: req.headers.cookie || '',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        withCredentials: true,
      }).then((response: any) => {
        if (response.status === 200) {
          const res = response.data
          if (res.success) {
            resolve(res)
          } else {
            // TODO
          }
        } else {
          reject(response.data)
        }
      })
    })
  }
}
