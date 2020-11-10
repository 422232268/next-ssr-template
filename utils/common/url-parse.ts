const queryString = require('query-string')
export const parseUrl = (url: string) => {
  return queryString.parse(url)
}
