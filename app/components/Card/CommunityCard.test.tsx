import { mountWithRedux } from '../../setupTests'
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
                    'https://dev.kauri.io/static/images/DefaultCommunity.png',
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
        const wrapper = mountWithRedux(
            <CommunityCard {...CommunityCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
