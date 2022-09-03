import actions from '@/store/user/actions'
import $api from '~/http'

jest.mock('~/http', () => jest.fn().mockResolvedValue({
  data: { url: 'test' },
}));

const apiMock = $api

describe('User', () => {
  it('registration', async () => {
    const commit = jest.fn()
    const name = 'test'
    const password = 'password'

    await actions.registration({commit}, {name, password})

    expect(body).toEqual({ username, password })
  })
})

