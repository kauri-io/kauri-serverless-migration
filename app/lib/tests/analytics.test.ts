import analytics from '../analytics'

jest.unmock('react-ga')
jest.unmock('mixpanel-browser')
import ga from 'react-ga'

import mixpanel from 'mixpanel-browser'

describe('lib/analytics', () => {
    beforeAll(() => {
        ga.initialize = jest.fn()
        ga.set = jest.fn()
        ga.pageview = jest.fn()
        ga.event = jest.fn()
        mixpanel.init = jest.fn()
        mixpanel.register = jest.fn()
    })
    it('should initialize GA and mixpanel', () => {
        analytics.init()
        expect(ga.initialize).toHaveBeenCalled()
        expect(mixpanel.init).toHaveBeenCalled()
    })

    it('should set the we3 status', () => {
        analytics.setWeb3Status(false)
        expect(ga.set).toHaveBeenCalledWith({ dimension1: 'false' })
    })

    it('should track an event', () => {
        analytics.track('test event', { category: 'test' })
        expect(ga.event).toHaveBeenCalledWith({
            action: 'test event',
            category: 'test',
        })
    })

    it('should track a pageview', () => {
        analytics.page({ asPath: 'test path' })
        expect(ga.pageview).toHaveBeenCalledWith('test path')
    })

    afterAll(() => {
        jest.clearAllMocks()
    })
})
