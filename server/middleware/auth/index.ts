import Koa from 'koa'
import ResultBase, { ResultCode } from '../../interface/ResultBase'

const auth = async (ctx: Koa.Context, next: Koa.Next) => {
  if (!ctx.url.startsWith('/permission')) {
    await next()
  } else {
    ctx.body = new ResultBase(ResultCode.PERMISSION_ERROR, {
      code: 301,
      msg: 'No Permission',
    })
  }
}

export default auth
