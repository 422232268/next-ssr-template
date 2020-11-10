import { parseUrl } from '../../../utils/common/url-parse'

describe('parseUrl Function Test', () => {
  it('parse userName=xixi&password=haah correctly', () => {
    expect(parseUrl('?userName=xixi&password=haah')).toEqual({
      userName: 'xixi',
      password: 'haah',
    })
  })
})
