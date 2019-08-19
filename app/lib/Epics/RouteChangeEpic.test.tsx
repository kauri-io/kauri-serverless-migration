import testEpic from '../test-epic'
import routeChangeEpic, { routeChangeAction } from './RouteChangeEpic'

jest.unmock('next/router')

import Router from 'next/router'

describe('routeChangeEpic', () => {
    it('take a router and perform the side effect to change route', async () => {
        Router.push = jest.fn()
        const sourceAction = routeChangeAction('/test123')
        const expectedActions = []

        const resultingActions = await testEpic(routeChangeEpic, sourceAction)

        expect(resultingActions).toEqual(expectedActions)
        expect(Router.push).toHaveBeenCalledWith('/test123')
    })
})
