import View from './View'
import { shallow } from 'enzyme'
import { searchCollections } from '../../mocks/searchCollections'

describe('containers/ChooseCollectionCard', () => {
    it('should match the snapshot', () => {
        const props = {
            searchPersonalPublishedCollections: {
                loading: false,
                searchCollections: searchCollections.data.searchCollections,
            },
            searchPublishedCollections: {
                loading: false,
                searchCollections: searchCollections.data.searchCollections,
            },
            passChangeTabFunction: jest.fn(),
        }
        const wrapper = shallow(<View {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
