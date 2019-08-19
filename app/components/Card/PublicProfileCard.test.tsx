import { mountWithTheme } from '../../setupTests'
import PublicProfileCard from './PublicProfileCard'

let PublicProfileCardProps
let consoleWarn = console.warn

describe('components/Card/PublicProfileCard', () => {
    beforeAll(() => {
        global.console.warn = jest.fn()
        PublicProfileCardProps = {
            id: '1234567890',
            version: 123,
            articleCount: 123,
            collectionCount: 123,
            name: 'PublicProfile',
            avatar:
                'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU',
            username: 'test username',
        }
    })
    afterAll(() => {
        global.console.warn = consoleWarn
    })

    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a avatar', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )

        const dataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-avatar`
        const avatar = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(avatar).toBeTruthy()
    })

    it('should have a name', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )

        const dataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-name`
        const name = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(name).toBeTruthy()
    })

    it('should have a title', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )

        const dataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-title`
        const title = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(title).toBeTruthy()
    })

    it('should show the article count and icon', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )
        const articleIconDataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-articleIcon`
        const articleIcon = wrapper.exists(
            `[data-testid="${articleIconDataTestId}"]`
        )
        const articleCountDataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-articleCount`
        const articleCount = wrapper
            .find(`[data-testid="${articleCountDataTestId}"]`)
            .first()

        expect(articleIcon).toBeTruthy()
        expect(articleCount.text()).toBe(
            String(PublicProfileCardProps.articleCount)
        )
    })

    it('should show the collection count and icon', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )
        const collectionIconDataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-collectionIcon`
        const collectionIcon = wrapper.exists(
            `[data-testid="${collectionIconDataTestId}"]`
        )
        const collectionCountDataTestId = `PublicProfileCard-${PublicProfileCardProps.id}-collectionCount`
        const collectionCount = wrapper
            .find(`[data-testid="${collectionCountDataTestId}"]`)
            .first()

        expect(collectionIcon).toBeTruthy()
        expect(collectionCount.text()).toBe(
            String(PublicProfileCardProps.collectionCount)
        )
    })
})
