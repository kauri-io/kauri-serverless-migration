import { mountWithRedux } from '../../setupTests'
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
        const wrapper = mountWithRedux(
            <CollectionCard {...CollectionCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
