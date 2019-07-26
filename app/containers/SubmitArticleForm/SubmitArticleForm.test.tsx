import View from './View'
import { shallow } from 'enzyme'

describe('containers/SubmitArticleForm/View', () => {
    it('should match the snapshot', () => {
        const props = {}
        const wrapper = shallow(<View {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
