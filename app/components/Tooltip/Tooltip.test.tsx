import ShareArticle from './ShareArticle'
import { ShareButtons } from './ShareButtons'
import Tooltip from './Tooltip'
import { mountWithTheme } from '../../setupTests'

describe('components/Tooltip/ShareArticle', () => {
    it('snapshot should match', () => {
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
    it('snapshot should match', () => {
        let props = {
            url: 'test',
            title: 'test',
        }
        const wrapper = mountWithTheme(<ShareButtons {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tooltip/Tooltip', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(
            <Tooltip>
                <div>Test</div>
            </Tooltip>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
