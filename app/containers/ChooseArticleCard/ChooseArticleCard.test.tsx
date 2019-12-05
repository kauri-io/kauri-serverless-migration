import ChooseArticleCard from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'

describe('containers/ChooseArticleCard', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ChooseArticleCard {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
