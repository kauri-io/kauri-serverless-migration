import { mountWithTheme } from '../../setupTests'
import ArticleCard from './ArticleCard'

describe('components/Card/ArticleCard', () => {
    it('should match snapshot', () => {
        const ArticleCardProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a title', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a description', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should have an image', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show the owner username', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show the date updated', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show the comment count', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show the upvote count', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show the more options menu', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should open more options when the menu is clicked', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show even more options when the menu is clicked AND the user is logged in', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<ArticleCard {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })
})
