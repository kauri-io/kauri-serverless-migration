import withPagination from '../with-pagination'
import Loading from '../../components/Loading'
import { shallow } from 'enzyme'

const Comp = () => <div>Test</div>
const Test = withPagination(Comp, 'searchArticles', '')

let wrapper: any

const map = {}
window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb
})
window.removeEventListener = jest.fn((event, cb) => {
    map[event] = cb
})

describe('lib/with-pagination', () => {
    it('should wrap the component in a pagination wrapper', async () => {
        wrapper = shallow(<Test />)
        const component = wrapper.find(Comp)
        expect(component).toHaveLength(1)
        expect(Loading).toHaveLength(0)
        expect(component.prop('setRef')).toBeInstanceOf(Function)
    })

    it('should set event listeners when the component mounts', async () => {
        expect(window.addEventListener).toHaveBeenNthCalledWith(
            1,
            'touchstart',
            expect.any(Function)
        )
        expect(window.addEventListener).toHaveBeenNthCalledWith(
            2,
            'scroll',
            expect.any(Function)
        )
    })

    it('should handle touch start correctly', async () => {
        wrapper.instance().triggerTouchStartEvent()()
        expect(window.addEventListener).toHaveBeenNthCalledWith(
            3,
            'touchend',
            expect.any(Function),
            false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
            1,
            'touchstart',
            expect.any(Function)
        )
    })

    it('should handle scroll correctly', async () => {
        wrapper.instance().triggerScrollEvent()()
        expect(window.addEventListener).toHaveBeenNthCalledWith(
            4,
            'scroll',
            expect.any(Function),
            false
        )
        expect(window.removeEventListener).toHaveBeenNthCalledWith(
            2,
            'scroll',
            expect.any(Function)
        )
    })
})
