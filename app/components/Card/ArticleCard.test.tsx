import { mountWithTheme } from '../../setupTests'
import ArticleCard from './ArticleCard'

let ArticleCardProps

describe('components/Card/ArticleCard', () => {
    beforeAll(() => {
        ArticleCardProps = {
            id: '1234567890',
            version: 123,
            title: 'Article',
            author: {
                avatar:
                    'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU',
                id: '1234567890',
                name: 'test name',
                username: 'test username',
            },
            attributes: {
                background:
                    'https://img.volcanodiscovery.com/uploads/pics/krakatau_k18278.jpg',
            },
            datePublished: '1994-06-13T00:05:32.000Z',
            comments: {
                totalElements: 1,
                content: [
                    {
                        posted: '1994-06-13T00:05:32.000Z',
                        author: {
                            id: '1234567890',
                            name: 'test name',
                            username: 'test username',
                            avatar:
                                'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU',
                        },
                        body: 'test comment',
                    },
                ],
            },
            description: 'test description',
            href: {
                as: 'h6',
                href: 'https://kauri.io',
            },
            isLoggedIn: true,
        }
    })

    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a title', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)

        const dataTestId = `ArticleCard-${ArticleCardProps.id}-title`
        const title = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(title).toBeTruthy()
    })

    it('should have a description', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)

        const dataTestId = `ArticleCard-${ArticleCardProps.id}-description`
        const description = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(description).toBeTruthy()
    })

    it('should have an image based on the background attribute', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)

        const dataTestId = `ArticleCard-${ArticleCardProps.id}-image`
        const image = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(image).toBeTruthy()
    })

    it('should have a default image if there is no background attribute', () => {
        // expect(wrapper).toMatchSnapshot()
        let ArticleCardPropsWithoutBackgroundAttribute = {
            ...ArticleCardProps,
            attributes: {},
        }
        const wrapper = mountWithTheme(
            <ArticleCard {...ArticleCardPropsWithoutBackgroundAttribute} />
        )
        const dataTestId = `ArticleCard-${ArticleCardProps.id}-image`
        const { image } = wrapper
            .find(`[data-testid="${dataTestId}"]`)
            .first()
            .props()
        expect(image).toEqual('default image prop')
    })

    it('should show the author name', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)

        const dataTestId = `ArticleCard-${ArticleCardProps.id}-author`
        const author = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(author.text()).toBe(ArticleCardProps.author.name)
    })

    it('should show the date published', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        const dataTestId = `ArticleCard-${ArticleCardProps.id}-date`
        const date = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(date.text()).toBe('25 years ago')
    })

    it('should show the comment count and icon', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        const commentIconDataTestId = `ArticleCard-${ArticleCardProps.id}-commentIcon`
        const commentIcon = wrapper.exists(
            `[data-testid="${commentIconDataTestId}"]`
        )
        const commentCountDataTestId = `ArticleCard-${ArticleCardProps.id}-commentCount`
        const commentCount = wrapper.find(
            `[data-testid="${commentCountDataTestId}"]`
        ).first()

        expect(commentIcon).toBeTruthy()
        expect(commentCount.text()).toBe("1")
    })

    it('should show the upvote count', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        // expect(wrapper).toMatchSnapshot()
    })

    it('should show the more options menu', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        // expect(wrapper).toMatchSnapshot()
    })

    it('should open more options when the menu is clicked', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        // expect(wrapper).toMatchSnapshot()
    })

    it('should show even more options when the menu is clicked AND the user is logged in', () => {
        const wrapper = mountWithTheme(<ArticleCard {...ArticleCardProps} />)
        // expect(wrapper).toMatchSnapshot()
    })
})
