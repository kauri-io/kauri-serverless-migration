import ShareArticle from './ShareArticle'
import { ShareButtons } from './ShareButtons'
import Tooltip from './Tooltip'
import { mountWithTheme } from '../../setupTests'

describe('components/Tooltip/ShareArticle', () => {
    it('should match snapshot', () => {
        let props = {
            url: 'test',
            title: 'test',
            color: 'black',
        }
        const wrapper = mountWithTheme(<ShareArticle {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tooltip/ShareButtons', () => {
    it('should match snapshot', () => {
        let props = {
            url: 'test',
            title: 'test',
        }
        const wrapper = mountWithTheme(<ShareButtons {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tooltip/Tooltip', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <Tooltip>
                <div>Test</div>
            </Tooltip>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
