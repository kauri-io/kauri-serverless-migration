import ScrollIndicator from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/ScrollIndicator', () => {
    it('should match snapshot', () => {
        const ScrollIndicatorProps = {}

        const wrapper = mountWithRedux(
            <ScrollIndicator {...ScrollIndicatorProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
