import { mountWithTheme } from '../../setupTests'
import CollectionCard from './CollectionCard'

let CollectionCardProps
let consoleWarn = console.warn

describe('components/Card/CollectionCard', () => {
    beforeAll(() => {
        global.console.warn = jest.fn()
        CollectionCardProps = {
            id: '1234567890',
            version: 123,
            name: 'Collection',
            owner: {
                avatar:
                    'https://dev.kauri.io/static/images/DefaultCollection.png',
                id: '1234567890',
                name: 'test name',
                username: 'test-username',
            },
            attributes: {
                background:
                    'https://img.volcanodiscovery.com/uploads/pics/krakatau_k18278.jpg',
            },
            voteResult: {
                sum: 2,
            },
            dateUpdated: '1994-06-13T00:05:32.000Z',
            sections: [
                {
                    resourcesId: [
                        {
                            type: 'ARTICLE',
                        },
                    ],
                },
                {
                    resourcesId: [
                        {
                            type: 'ARTICLE',
                        },
                    ],
                },
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
            <CollectionCard {...CollectionCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a name', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-name`
        const name = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(name).toBeTruthy()
    })

    it('should have a description', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-description`
        const description = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(description).toBeTruthy()
    })

    it('should have an image based on the background attribute', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-image`
        const image = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(image).toBeTruthy()
    })

    it('should have a default image if there is no background attribute', () => {
        // expect(wrapper).toMatchSnapshot()
        let CollectionCardPropsWithoutBackgroundAttribute = {
            ...CollectionCardProps,
            attributes: {},
        }
        const wrapper = mountWithTheme(
            <CollectionCard
                {...CollectionCardPropsWithoutBackgroundAttribute}
            />
        )
        const dataTestId = `CollectionCard-${CollectionCardProps.id}-image`
        const { src } = wrapper
            .find(`[data-testid="${dataTestId}"]`)
            .first()
            .props()
        expect(src).toEqual('/static/images/DefaultCollection.svg')
    })

    it('should show the owner name by default', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-avatar`
        const owner = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(owner.text()).toBe(CollectionCardProps.owner.name)
    })

    it('should show the owner username if they have no name', () => {
        const wrapper = mountWithTheme(
            <CollectionCard
                {...CollectionCardProps}
                owner={{ ...CollectionCardProps.owner, name: null }}
            />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-avatar`
        const owner = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(owner.text()).toBe(CollectionCardProps.owner.username)
    })

    it('should fallback to show the owner id', () => {
        const wrapper = mountWithTheme(
            <CollectionCard
                {...CollectionCardProps}
                owner={{
                    ...CollectionCardProps.owner,
                    name: null,
                    username: null,
                }}
            />
        )

        const dataTestId = `CollectionCard-${CollectionCardProps.id}-avatar`
        const owner = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(owner.text()).toBe(
            `0x${CollectionCardProps.owner.id.substring(0, 4)}...`
        )
    })

    it('should show the date published', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )
        const dataTestId = `CollectionCard-${CollectionCardProps.id}-date`
        const date = wrapper.find(`[data-testid="${dataTestId}"]`).first()
        expect(date.text()).toBe('Jun 13')
    })

    it('should show the article count and icon', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )
        const articleIconDataTestId = `CollectionCard-${CollectionCardProps.id}-articleIcon`
        const articleIcon = wrapper.exists(
            `[data-testid="${articleIconDataTestId}"]`
        )
        const articleCountDataTestId = `CollectionCard-${CollectionCardProps.id}-articleCount`
        const articleCount = wrapper
            .find(`[data-testid="${articleCountDataTestId}"]`)
            .first()

        expect(articleIcon).toBeTruthy()
        expect(articleCount.text()).toBe('2')
    })

    it('should show the share icon', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )
        const dataTestId = `CollectionCard-${CollectionCardProps.id}-shareIcon`
        const shareIcon = wrapper.exists(`[data-testid="${dataTestId}"]`)
        expect(shareIcon).toBeTruthy()
    })

    it('should trigger the share dialog when the icon is clicked', () => {
        const wrapper = mountWithTheme(
            <CollectionCard {...CollectionCardProps} />
        )
        const shareIconDataTestId = `CollectionCard-${CollectionCardProps.id}-shareIcon`
        const shareDialogDataTestId = `Card-${CollectionCardProps.id}-shareDialog`

        wrapper
            .find(`[data-testid="${shareIconDataTestId}"]`)
            .first()
            .simulate('click')

        const { open } = wrapper
            .find(`[data-testid="${shareDialogDataTestId}"]`)
            .first()
            .props()

        expect(open).toBeTruthy()
    })
})
