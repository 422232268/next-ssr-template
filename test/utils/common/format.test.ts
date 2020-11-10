import { formatYYYYMMDD } from '../../../utils/common/format'
import moment from 'moment'

describe('formatYYYYMMDD Function Test', () => {
  it('formatYYYYMMDD, input is date string formatted YYYY-MM-DD, output is date string formatted YYYY-MM-DD too', () => {
    expect(formatYYYYMMDD('2020-12-13')).toBe('2020-12-13')
  })
  it('formatYYYYMMDD, input is moment object, output is date string formatted YYYY-MM-DD too', () => {
    expect(formatYYYYMMDD(moment('2020-12-13'))).toBe('2020-12-13')
  })
  it('formatYYYYMMDD, input is invalid, output should be an error', () => {
    expect(() => formatYYYYMMDD(undefined)).toThrow(
      'formatYYYYMMDD function , input is invalid'
    )
    expect(() => formatYYYYMMDD(null)).toThrow(
      'formatYYYYMMDD function , input is invalid'
    )
  })
})
