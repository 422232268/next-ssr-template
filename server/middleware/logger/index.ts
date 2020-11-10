import bunyan from 'bunyan'
import Application from 'koa'
import koaBunyanLogger from 'koa-bunyan-logger'
import ZStdSerializers from './serializers'

// TODO 切换log4js
const applyLog = (server: Application) => {
  const logger = bunyan.createLogger({
    name: 'next-app',
    level: 'debug',
    streams: [
      {
        path: './log',
        // `type: 'file'` is implied
      },
    ],
    serializers: ZStdSerializers,
  })
  server.use(koaBunyanLogger(logger))
  server.use(koaBunyanLogger.requestLogger({}))
  return logger
}

export default applyLog
