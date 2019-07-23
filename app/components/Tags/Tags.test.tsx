import Tag from './Tag'
import TagSelector from './TagSelector'
import TagName from './TagName'
import TagList from './TagList'
import TagInput from './TagInput'
import Plus from './Plus'
import Close from './Close'
import { mountWithTheme } from '../../setupTests'

describe('components/Tags/Tag', () => {
    it('snapshot should match', () => {
        const props = {
            tag: 'test',
            removeTag: jest.fn(),
            color: 'bgPrimary',
        }
        const wrapper = mountWithTheme(<Tag {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/TagSelector', () => {
    it('snapshot should match', () => {
        const props = {
            maxTags: 5,
            availableTags: [
                {
                    tag: 'test3',
                },
            ],
            tags: ['test', 'test2'],
            onChange: jest.fn(),
            fetchMatches: jest.fn(),
        }
        const wrapper = mountWithTheme(<TagSelector {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/TagName', () => {
    it('snapshot should match', () => {
        const props = {
            color: 'bgPrimary',
        }
        const wrapper = mountWithTheme(<TagName {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/TagList', () => {
    it('snapshot should match', () => {
        const props = {
            tags: ['test'],
            maxTags: 4,
            color: 'bgPrimary',
        }
        const wrapper = mountWithTheme(<TagList {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/TagInput', () => {
    it('snapshot should match', () => {
        const props = {
            handleEnterKey: jest.fn(),
            removeLastTag: jest.fn(),
        }
        const wrapper = mountWithTheme(<TagInput {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/Plus', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithTheme(<Plus {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Tags/Close', () => {
    it('snapshot should match', () => {
        const props = {
            onClick: jest.fn,
        }
        const wrapper = mountWithTheme(<Close {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
