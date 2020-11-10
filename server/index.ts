import Koa from 'koa'
import next from 'next'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'
import applyLog from './middleware/logger'
import auth from './middleware/auth'
import sessionMiddle from './middleware/session'
import download from './middleware/download'
import configInit from './config'
import ResultBase, { ResultCode } from './interface/ResultBase'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

configInit((config: any) => {
  ;(global as any).config = config
  const port = parseInt(config.port) || 3000
  app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // audit log middile
    const logger = applyLog(server)
    // session config information
    sessionMiddle(server, config)
    server.use(bodyParser())
    // auth middle , handle the request must after login
    server.use(auth)

    router.get('/api/user', (ctx) => {
      ctx.body = new ResultBase(ResultCode.SUCCESS, { value: 'Marvin' })
    })

    router.get('/proxy/xx/userServer', (ctx) => {
      ctx.body = new ResultBase(ResultCode.SUCCESS, { value: 'Monkey' })
    })

    // download middleware
    download(server, config)

    router.all('*', async (ctx) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
      logger.debug(`> Ready on http://localhost:${port}`)
    })
  })
})
