import axios, { AxiosError, Cancel, CancelTokenSource } from 'axios'
import { Modal } from 'antd'
import getRequestUrl from './helper'
import mapping from './mapping'
export default class Axios {
  static ajax(options: any) {
    const source: CancelTokenSource = axios.CancelToken.source()
    let loading: any
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    const baseApi = '/api'
    return {
      promise: new Promise((resolve, reject) => {
        axios({
          url: getRequestUrl(mapping, options.url),
          method: 'get' || options.method,
          baseURL: baseApi,
          timeout: 5000,
          params: (options.data && options.data.params) || '',
          cancelToken: source.token,
        })
          .then((response: any) => {
            if (options.data && options.data.isShowLoading !== false) {
              loading = document.getElementById('ajaxLoading')
              loading.style.display = 'none'
            }
            if (response.status === 200) {
              const res = response.data
              if (res.success) {
                resolve(res)
              } else {
                Modal.info({
                  title: '提示',
                  content: res.msg,
                })
              }
            } else {
              reject(response.data)
            }
          })
          .catch((thrown: AxiosError | Cancel) => {
            if (axios.isCancel(thrown)) {
              const cancel: Cancel = thrown
              console.log(cancel.message)
            }
          })
        // source.cancel('Operation has been canceled.')
      }),
      source,
    }
  }
}
