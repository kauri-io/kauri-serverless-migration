// import config from '../../config'
// import fetch from 'isomorphic-unfetch'
import testEpic from '../test-epic'
import routeChangeEpic, { routeChangeAction } from './RouteChangeEpic'
jest.mock('next/router', () => {
    return {
      push: () => {},
      router: {
        push: () => {}
      },
      _router: {
        default: { push: () => {} }
      },
      default: { push: () => {} }
    };
});

describe('routeChangeEpic', () => {
  it(
    'take a router and perform the side effect to change route',
    async () => {
      const sourceAction = routeChangeAction('/test123')
      const expectedActions = undefined

      const resultingActions = await testEpic(routeChangeEpic, sourceAction)

      expect(resultingActions).toEqual(expectedActions)
    }
  )
})