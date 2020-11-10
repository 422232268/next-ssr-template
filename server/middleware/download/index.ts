import { createProxyMiddleware } from 'http-proxy-middleware'
import Application from 'koa'
import k2c from 'koa2-connect'

const download = (server: Application, config: any) => {
  const proxy = createProxyMiddleware('/download', {
    target: 'dynamic host',
    changeOrigin: true,
    pathRewrite: (path: any) => {
      const apiName = path.split('/')[2]
      return path.replace(`/download/${apiName}`, '')
    },
    router: (req: any) => {
      const apiName = req.url.split('/')[2]
      return config.protocol + config.api[apiName]
    },
  })
  server.use(k2c(proxy))
}
export default download
