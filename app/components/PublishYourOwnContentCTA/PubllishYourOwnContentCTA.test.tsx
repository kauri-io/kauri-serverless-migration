import PublishYourOwnContentCTA from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/PublishYourOwnContentCTA', () => {
    it('should match snapshot', () => {
        const PublishYourOwnContentCTAProps = {
            content: [],
            linkComponent: jest.fn(),
            isLoggedIn: true,
        }

        const wrapper = mountWithRedux(
            <PublishYourOwnContentCTA {...PublishYourOwnContentCTAProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
