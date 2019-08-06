import { mountWithTheme } from '../../setupTests'
import CommunityCard from './CommunityCard'

let CommunityCardProps
let consoleWarn = console.warn

describe('components/Card/CommunityCard', () => {
    beforeAll(() => {
        global.console.warn = jest.fn()
        CommunityCardProps = {
            id: '1234567890',
            version: 123,
            name: 'Community',
            owner: {
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
            voteResult: {
                sum: 2,
            },
            members: [
                {
                    id: '12345678',
                    name: 'Alice',
                    username: 'Alice',
                },
                {
                    id: '12345690',
                    name: 'Bob',
                    username: 'Bob',
                },
                {
                    id: '1234590',
                    name: 'Charlie',
                    username: 'Charlie',
                },
                {
                    id: '1237890',
                    name: 'Justin',
                    username: 'Justin',
                },
            ],
            dateUpdated: '1994-06-13T00:05:32.000Z',
            approvedId: [
                {
                    type: 'ARTICLE',
                },
                {
                    type: 'COLLECTION',
                },
                {
                    type: 'COLLECTION',
                },
                { type: 'ARTICLE' },
            ],
            description: 'test description',
            href: {
                as: 'h6',
                href: 'https://kauri.io',
            },
            isLoggedIn: true,
        }
    })
    afterAll(() => {
        global.console.warn = consoleWarn
    })

    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a name', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )

        const dataTestId = `CommunityCard-${CommunityCardProps.id}-name`
        const name = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(name).toBeTruthy()
    })

    it('should have a description', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )

        const dataTestId = `CommunityCard-${CommunityCardProps.id}-description`
        const description = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(description).toBeTruthy()
    })

    it('should have an image based on the background attribute', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )

        const dataTestId = `CommunityCard-${CommunityCardProps.id}-image`
        const image = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(image).toBeTruthy()
    })

    it('should have a default image if there is no background attribute', () => {
        // expect(wrapper).toMatchSnapshot()
        let CommunityCardPropsWithoutBackgroundAttribute = {
            ...CommunityCardProps,
            attributes: {},
        }
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardPropsWithoutBackgroundAttribute} />
        )
        const dataTestId = `CommunityCard-${CommunityCardProps.id}-image`
        const { image } = wrapper
            .find(`[data-testid="${dataTestId}"]`)
            .first()
            .props()
        expect(image).toEqual(CommunityCardProps.owner.avatar)
    })

    it('should show the member avatars with a maximum of 3 but show the moreMembers if over', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )

        const membersDataTestId = `CommunityCard-${CommunityCardProps.id}-members`
        const moreMembersDataTestId = `CommunityCard-${CommunityCardProps.id}-moreMembers`
        const membersContainerLength = wrapper
            .find(`[data-testid="${membersDataTestId}"]`)
            .children().length
        expect(membersContainerLength).toBeLessThan(4)
        const moreMembers = wrapper
            .find(`[data-testid="${moreMembersDataTestId}"]`)
            .first()
        expect(moreMembers.text()).toBe('+1')
    })

    it('should show the article count and icon', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )
        const articleIconDataTestId = `CommunityCard-${CommunityCardProps.id}-articleIcon`
        const articleIcon = wrapper.exists(
            `[data-testid="${articleIconDataTestId}"]`
        )
        const articleCountDataTestId = `CommunityCard-${CommunityCardProps.id}-articleCount`
        const articleCount = wrapper
            .find(`[data-testid="${articleCountDataTestId}"]`)
            .first()

        expect(articleIcon).toBeTruthy()
        expect(articleCount.text()).toBe('2')
    })

    it('should show the collection count and icon', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )
        const collectionIconDataTestId = `CommunityCard-${CommunityCardProps.id}-collectionIcon`
        const collectionIcon = wrapper.exists(
            `[data-testid="${collectionIconDataTestId}"]`
        )
        const collectionCountDataTestId = `CommunityCard-${CommunityCardProps.id}-collectionCount`
        const collectionCount = wrapper
            .find(`[data-testid="${collectionCountDataTestId}"]`)
            .first()

        expect(collectionIcon).toBeTruthy()
        expect(collectionCount.text()).toBe('2')
    })

    it('should show the share icon', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )
        const dataTestId = `CommunityCard-${CommunityCardProps.id}-shareIcon`
        const shareIcon = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(shareIcon).toBeTruthy()
    })

    it('should trigger the share dialog when the icon is clicked', () => {
        const wrapper = mountWithTheme(
            <CommunityCard {...CommunityCardProps} />
        )
        const shareIconDataTestId = `CommunityCard-${CommunityCardProps.id}-shareIcon`
        const shareDialogDataTestId = `CommunityCard-${CommunityCardProps.id}-shareDialog`
        const twitterShareButtonDataTestId = `CommunityCard-${CommunityCardProps.id}-twitterShareButton`

        wrapper
            .find(`[data-testid="${shareIconDataTestId}"]`)
            .first()
            .simulate('click')
        const { open } = wrapper
            .find(`[data-testid="${shareDialogDataTestId}"]`)
            .first()
            .props()
        const twitterShareButton = wrapper.exists(
            `[data-testid="${twitterShareButtonDataTestId}"]`
        )

        expect(twitterShareButton).toBeTruthy()
        expect(open).toBeTruthy()
    })
})
