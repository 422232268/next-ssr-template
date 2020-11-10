const moment = require('moment')

export const formatYYYYMMDD = (param: any) => {
  if (moment.isMoment(param)) return param.format('YYYY-MM-DD')
  if (typeof param === 'string') return moment(param).format('YYYY-MM-DD')
  throw new Error('formatYYYYMMDD function , input is invalid')
}
