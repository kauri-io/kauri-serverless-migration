import ResourceCategory from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/ResourceCategory', () => {
    it('should match snapshot', () => {
        const ResourceCategoryProps = {
            active: true,
            category: 'test',
            amount: 4,
            onClick: jest.fn(),
        }

        const wrapper = mountWithRedux(
            <ResourceCategory {...ResourceCategoryProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
