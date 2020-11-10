import axios, { Method } from 'axios'
import Koa from 'koa'

const api = (config: any) => async (ctx: Koa.Context) => {
  const body = ctx.request.body
  const url = handleServerUrl(ctx.request.url, config)
  const contentType = ctx.request.header['content-type'] || 'application/json'
  const requestBody = {
    method: (ctx.request.method as Method) || 'GET',
    headers: {
      'content-type': contentType,
    },
    data: body,
  }
  const res = await axios(url, requestBody)
  ctx.body = res.data
}

function handleServerUrl(url: string, config: any) {
  const matcher = url.match(/^\/api\/([A-Za-z]+)/)
  if (matcher) {
    const [prefix, system] = matcher
    return `${config.protocol}${config.api[system]}${url.replace(prefix, '')}`
  }
  return url
}

module.exports = api
