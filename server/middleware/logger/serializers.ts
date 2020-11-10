import { stdSerializers } from 'bunyan'

/**
 * Subsequent it may be abandoned because we cannot customize format
 * JSON format can't be collected by kibana
 */ 
stdSerializers.req = (req) => {
  if (!req || !req.connection) return req
  return {
    method: req.method,
    url: req.originalUrl || req.url,
    headers: req.headers,
    remoteAddress: req.connection.remoteAddress,
    remotePort: req.connection.remotePort,
  }
}

stdSerializers.res = (res) => {
  if (!res || !res.statusCode) return res
  return {
    statusCode: res.statusCode,
    header: res._header,
  }
}

export default stdSerializers
