import { shallow } from 'enzyme'
import CollectionCreated from './View'
import { Collection } from '../../mocks'
import { getCollection_getCollection } from '../../queries/__generated__/getCollection'

describe('containers/CollectionCreated/View', () => {
    it('should match the snapshot', () => {
        const props = {
            data: {
                getCollection: Collection.data
                    .getCollection as getCollection_getCollection,
            },
            routeChangeAction: jest.fn(),
            type: 'test',
        }
        const wrapper = shallow(<CollectionCreated {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
