import NewsletterBanner from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/NewsletterBanner', () => {
    it('should match snapshot', () => {
        const NewsletterBannerProps = {
            handleSubmit: jest.fn(),
            handleError: jest.fn(),
        }

        const wrapper = mountWithRedux(
            <NewsletterBanner {...NewsletterBannerProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
