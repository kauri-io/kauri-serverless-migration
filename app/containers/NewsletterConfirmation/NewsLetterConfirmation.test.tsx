import NewsLetterConfirmation from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))
const analytics = require('../../lib/analytics')
describe('containers/NewsLetterConfirmation', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <NewsLetterConfirmation {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('should track the confirmation pageview', () => {
        expect(analytics.track).toHaveBeenCalled()
    })
})
